'use strict';

const _getBadgeLinks = (badges, {owner, repo}, style = '') => {
	const badgeArray = badges.split(',');
	const newBadges = [];

	const setStyle = content => {
		return `<img alt="GitHub" src="https://img.shields.io${content}">`;
	};
	/** Todo: Fun badges
		![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)

		![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)

		![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)

		![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)

		![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)

		![forthebadge](https://forthebadge.com/images/badges/built-by-codebabes.svg)

		![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)

		![forthebadge](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)

		![forthebadge](https://forthebadge.com/images/badges/kinda-sfw.svg)

		![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)

		![forthebadge](https://forthebadge.com/images/badges/contains-cat-gifs.svg)
	 */

	for (let badge of badgeArray) {
		badge = badge.toLowerCase().trim();
		const addStyle = style !== '' && `?style=${style}`;
		let badgeLink;
		switch (badge) {
			case 'gh_license':
				badgeLink = setStyle(`/github/license/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'gh_version':
				badgeLink = setStyle(`/github/package-json/v/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'gh_stars':
				badgeLink = setStyle(`/github/stars/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'gh_forks':
				badgeLink = setStyle(`/github/forks/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'gh_followers':
				badgeLink = setStyle(`/github/Followers/${owner}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'gh_open_issues':
				badgeLink = setStyle(`/github/issues-raw/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'gh_closed_issues':
				badgeLink = setStyle(`/github/issues-closed-raw/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'gh_open_pr':
				badgeLink = setStyle(`/github/issues-pr/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'gh_dependencies':
				badgeLink = setStyle(`/david/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'travis_com':
				badgeLink = setStyle(`/travis/com/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'travis_org':
				badgeLink = setStyle(`/travis/org/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'gh_code_size':
				badgeLink = setStyle(`/github/languages/code-size/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'gh_repo_size':
				badgeLink = setStyle(`/github/repo-size/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			default:
				break;
		}
	}

	return newBadges.join(',');
};

module.exports = {
	_getBadgeLinks
};

