import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://olis.tech',
	integrations: [
		starlight({
			title: 'Olis.tech',
			social: {
				github: 'https://github.com/Defkil',
				linkedin: 'https://www.linkedin.com/in/oliver-gr%C3%BCttner/'
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
