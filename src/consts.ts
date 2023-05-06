export const SITE = {
	title: 'Olis Cheatsheet',
	description: 'Olis CheatSheet ist ein öffentliches Github-Repo mit deutschsprachigen Cheat Sheets zu Programmierthemen. Es bietet Entwicklern eine schnelle Referenz zu häufig verwendeten Befehlen, Konzepten und Technologien.',
	defaultLanguage: 'de',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://cs.1og.de/logo.svg',
		alt: 'Olis Cheasheet'
	},
	twitter: 'OliverGruettner',
};

export const KNOWN_LANGUAGES = {
	German: 'de',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	de: {
		'Section Header': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Page 2', link: 'en/page-2' },
			{ text: 'Page 3', link: 'en/page-3' },
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
	}
};
