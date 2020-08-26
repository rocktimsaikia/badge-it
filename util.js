'use strict';

const _getBadgeLinks = (badges, {owner, repo}, style = '') => {
	const badgeArray = badges.split(',');
	const newBadges = [];

	const setStyle = content => {
		return `<img alt="GitHub" src="https://img.shields.io${content}"/>`;
	};

	for (let badge of badgeArray) {
		badge = badge.toLowerCase().trim();
		const addStyle = style !== '' && `?style=${style}`;
		let badgeLink;
		switch (badge) {
			case 'license':
				badgeLink = setStyle(`/github/license/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'version':
				badgeLink = setStyle(`/github/package-json/v/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'github_stars':
				badgeLink = setStyle(`/github/stars/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'github_forks':
				badgeLink = setStyle(`/github/forks/${owner}/${repo}?label=Fork${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'github_followers':
				badgeLink = setStyle(`/github/Followers/${owner}?label=Follow${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'github_open_issues':
				badgeLink = setStyle(`/github/issues-raw/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'github_closed_issues':
				badgeLink = setStyle(`/github/issues-closed-raw/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'github_pull_requests':
				badgeLink = setStyle(`/github/issues-pr/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'travis/com':
				badgeLink = setStyle(`/travis/com/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'travis/org':
				badgeLink = setStyle(`/travis/org/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'dependencies':
				badgeLink = setStyle(`/david/${owner}/${repo}${addStyle}`);
				newBadges.push(badgeLink);
				break;

			default:
				break;
		}
	}

	return newBadges.join(',').replace(/,/gm, ' ');
};

module.exports = {
	_getBadgeLinks
};

