// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DevDoc',
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			defaultLocale: 'ja',
			locales: {
				root: {
					label: '日本語',
					lang: 'ja',
				},
			},
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				// {
				{
					label: 'プロジェクト管理',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Visual Studio Code',
					autogenerate: { directory: 'vscode' },
				},
				{
					label: 'Node.jsチュートリアル',
					autogenerate: { directory: 'nodejs-tutorial' },
				},
				{
					label: 'Node.js',
					autogenerate: { directory: 'nodejs' },
				},
				{
					label: 'Sass / SCSS',
					autogenerate: { directory: 'sass' },
				},
				{
					label: 'TypeScript',
					autogenerate: { directory: 'typescript' },
				},
				{
					label: 'Astro',
					autogenerate: { directory: 'astro' },
				},
			],
			lastUpdated: true,
		}),
	],
	site: 'https://KouWeb.github.io',
	base: '/devdoc',
});
