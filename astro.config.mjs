// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import llmsTxt from './src/integrations/llms-txt.ts';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Spatial Shanghai 2026',
			logo: {
				src: './src/assets/logo.png',
			},
			favicon: '/favicon.png',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com' },
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				zh: {
					label: '中文',
					lang: 'zh-CN',
				},
			},
			sidebar: [
				{
					label: 'Event Info',
					translations: { 'zh-CN': '活动信息' },
					items: [
						{
							label: 'About the Hackathon',
							translations: { 'zh-CN': '关于黑客松' },
							slug: 'about',
						},
					],
				},
				{
					label: 'AI Coding Tools',
					translations: { 'zh-CN': 'AI 编程工具' },
					items: [
						{ label: 'GitHub Copilot', slug: 'guides/github-copilot' },
						{
							label: 'v0 by Vercel',
							translations: { 'zh-CN': 'v0 (Vercel)' },
							slug: 'guides/v0',
						},
						{ label: 'Claude Code + Z.ai', slug: 'guides/claude-code' },
						{
							label: 'JetBrains AI',
							translations: { 'zh-CN': 'JetBrains AI 助手' },
							slug: 'guides/jetbrains-ai',
						},
					],
				},
				{
					label: '3D & Spatial',
					translations: { 'zh-CN': '3D 与空间计算' },
					items: [
						{ label: 'Three.js', slug: 'guides/threejs' },
						{ label: 'Tripo3D', slug: 'guides/tripo3d' },
					],
				},
			],
		}),
		llmsTxt(),
	],
});
