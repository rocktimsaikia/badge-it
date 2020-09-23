const core = require('@actions/core');
const github = require('@actions/github');
const showdown = require('showdown');
const jsDom = require('jsdom');
const {
	JSDOM
} = jsDom;
const {
	encode,
	decode
} = require('node-encoder');
const util = require('./util');

/**
 * Generates no config badges automatically.
 */
class GenerateBadges {
	constructor() {
		this.token = core.getInput('GITHUB_TOKEN');
		this.inputBadges = core.getInput('badges');
		this.badgeStyle = core.getInput('badge-style');

		this.octokit = github.getOctokit(this.token);
		this.repoInfo = github.context.repo;
		this.currentBranch = github.context.ref.slice(11);
		this.repoSha = github.context.sha;
		this.action = github.context.payload.action;
		this.mdParser = new showdown.Converter();
	}

	_addBadges(content) {
		const badges = util._getBadgeLinks(
			this.inputBadges,
			this.repoInfo,
			this.badgeStyle
		);

		// If the readme header is in html then don't markdown it.
		if (content.includes('<h1>')) {
			const {
				window: {
					document
				}
			} = new JSDOM(content);
			const header = document.querySelector('h1:nth-child(1)');

			const newHeader = `<h1>${header.textContent} ${badges}</h1>`;
			const updatedReadme = htmlContent.replace(header.outerHTML, newHeader);

			console.log('HTML README running');
			return updatedReadme;
		}

		// If header is in markfdown then make it html
		const htmlContent = this.mdParser.makeHtml(content);
		const {
			window: {
				document
			}
		} = new JSDOM(htmlContent);

		const header = document.querySelector('h1:nth-child(1)');
		const headerMd = this.mdParser.makeMarkdown(header.outerHTML, document);

		const newHeader = `<h1>${header.textContent} ${badges}</h1>`;
		const newHeaderMd = this.mdParser
			.makeMarkdown(newHeader, document)
			.replace(/,/gm, ' ');

		const updatedReadme = content.replace(headerMd, newHeaderMd);

		console.log('MARKDOWN README running');

		const regex = new RegExp(headerMd, 'gi');
		console.log(String(content).includes(headerMd));
		console.log(String(content).indexOf(regex));

		console.log(`header: ${headerMd}`);
		console.log(`updatedReadme T: ${content}`);

		return updatedReadme;
	}

	_getReadmeEndpoint() {
		return `/repos/${this.repoInfo.owner}/${this.repoInfo.repo}/readme`;
	}

	_getUpdateEndpint() {
		return `/repos/${this.repoInfo.owner}/${this.repoInfo.repo}/contents/README.md`;
	}

	async init() {
		try {
			if (this.action && this.action !== 'closed') {
				return;
			}

			const {
				data: {
					sha,
					content: preContent
				}
			} = await this.octokit.request(`GET ${this._getReadmeEndpoint()}`, {
				headers: {
					authorization: `token ${this.token}`
				},
				ref: this.currentBranch
			});

			const readmeContent = decode(preContent);
			const updatedContent = this._addBadges(readmeContent);
			const encoded64Content = encode(updatedContent);
			const blob = await this.octokit.git.createBlob({
				...this.repoInfo,
				content: encoded64Content,
				encoding: 'base64'
			});

			if (sha !== blob.data.sha) {
				await this.octokit.request(`PUT ${this._getUpdateEndpint()}`, {
					headers: {
						authorization: `token ${this.token}`
					},
					message: 'chore: add badges :unicorn:',
					content: encoded64Content,
					branch: this.currentBranch,
					sha
				});
			}
		} catch (error) {
			core.setFailed(error);
		}
	}
}

const genBadges = new GenerateBadges();
(async () => {
	await genBadges.init();
})();
