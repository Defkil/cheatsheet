import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

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
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				de: {
					label: 'Deutsch',
				},
			},
			sidebar: [
				{
					label: 'Agile',
					translations: {
						de: 'Agil',
					},
					autogenerate: {
						directory: 'agile'
					},
				},
				{
					label: 'Project Management',
					translations: {
						de: 'Projekt Management',
					},
					autogenerate: {
						directory: 'pm'
					},
				},
				{
					label: 'UML Diagrams',
					translations: {
						de: 'UML Diagramme',
					},
					autogenerate: {
						directory: 'uml'
					},
				},
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
			customCss: [
				'@fontsource-variable/roboto-flex/index.css',
				'./src/styles/fonts.css',
			],
		}),
	],
});
