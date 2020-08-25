'use strict';

const _getBadgeLinks = (badges, {owner, repo}, style) => {
	const badgeArray = badges.split(',');
	const newBadges = [];

	const setStyle = content => {
		return `<img alt="GitHub" src="https://img.shields.io${content}"/>`;
	};

	for (let badge of badgeArray) {
		badge = badge.toLowerCase().trim();
		let badgeLink;
		let updatedStyle = style;
		switch (badge) {
			case 'license':
				updatedStyle = 'flat';
				badgeLink = setStyle(`/github/license/${owner}/${repo}?style=${updatedStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'version':
				updatedStyle = 'flat';
				badgeLink = setStyle(`/github/manifest-json/v/${owner}/${repo}?style=${updatedStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'github_stars':
				updatedStyle = 'social';
				badgeLink = setStyle(`/github/stars/${owner}/${repo}?style=${updatedStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'github_forks':
				updatedStyle = 'social';
				badgeLink = setStyle(`/github/forks/${owner}/${repo}?label=Fork?style=${updatedStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'github_followers':
				updatedStyle = 'social';
				badgeLink = setStyle(`/github/Followers/${owner}?label=Follow?style=${updatedStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'github_open_issues':
				updatedStyle = 'social';
				badgeLink = setStyle(`/github/issues-raw/${owner}/${repo}?style=${updatedStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'github_closed_issues':
				updatedStyle = 'social';
				badgeLink = setStyle(`/github/issues-closed-raw/${owner}/${repo}?style=${updatedStyle}`);
				newBadges.push(badgeLink);
				break;

			case 'github_pull_requests':
				updatedStyle = 'social';
				badgeLink = setStyle(`/github/issues-pr/${owner}/${repo}?style=${updatedStyle}`);
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

