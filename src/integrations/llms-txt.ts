import type { AstroIntegration } from 'astro';
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const SITE_TITLE = 'Spatial Shanghai 2026';
const SITE_DESCRIPTION =
	'24-Hour Agentic Engineering Hackathon in AR/VR at NYU Shanghai. April 25-26, 2026.';

const EXTRA_RESOURCES = [
	'Three.js Skills & Patterns: https://github.com/cloudai-x/threejs-skills',
	'Three.js Documentation: https://threejs.org/docs',
	'React Three Fiber: https://r3f.docs.pmnd.rs',
	'Tripo3D: https://www.tripo3d.ai',
	'GitHub Copilot: https://github.com/features/copilot',
	'v0: https://v0.dev',
	'Claude Code: https://claude.ai/code',
	'Z.ai: https://z.ai',
];

interface DocEntry {
	slug: string;
	title: string;
	description: string;
	content: string;
}

function stripFrontmatter(raw: string): { title: string; description: string; content: string } {
	let title = '';
	let description = '';
	let content = raw;

	if (raw.startsWith('---')) {
		// Find the closing --- (must be on its own line)
		const closingIndex = raw.indexOf('\n---', 3);
		if (closingIndex !== -1) {
			const fm = raw.substring(3, closingIndex);
			const titleMatch = fm.match(/title:\s*"?([^"\n]+)"?/);
			const descMatch = fm.match(/description:\s*"?([^"\n]+)"?/);
			if (titleMatch) title = titleMatch[1].trim().replace(/^"|"$/g, '');
			if (descMatch) description = descMatch[1].trim().replace(/^"|"$/g, '');
			content = raw.substring(closingIndex + 4).trim();
		}
	}

	return { title, description, content };
}

async function collectDocs(docsDir: string): Promise<DocEntry[]> {
	const entries: DocEntry[] = [];

	async function walk(dir: string, prefix: string) {
		const items = await readdir(dir, { withFileTypes: true });
		for (const item of items) {
			const fullPath = join(dir, item.name);
			if (item.isDirectory()) {
				// Skip zh directory — llms.txt is English only
				if (item.name === 'zh') continue;
				await walk(fullPath, prefix ? `${prefix}/${item.name}` : item.name);
			} else if (item.name.endsWith('.md') || item.name.endsWith('.mdx')) {
				const raw = await readFile(fullPath, 'utf-8');
				const { title, description, content } = stripFrontmatter(raw);
				const slug =
					item.name === 'index.mdx' || item.name === 'index.md'
						? prefix || ''
						: prefix
							? `${prefix}/${item.name.replace(/\.mdx?$/, '')}`
							: item.name.replace(/\.mdx?$/, '');
				entries.push({ slug, title, description, content });
			}
		}
	}

	await walk(docsDir, '');

	// Sort: index first, then about, then guides
	entries.sort((a, b) => {
		if (a.slug === '') return -1;
		if (b.slug === '') return 1;
		if (a.slug === 'about') return -1;
		if (b.slug === 'about') return 1;
		return a.slug.localeCompare(b.slug);
	});

	return entries;
}

export default function llmsTxt(): AstroIntegration {
	return {
		name: 'llms-txt',
		hooks: {
			'astro:build:done': async ({ dir }) => {
				const docsDir = join(process.cwd(), 'src', 'content', 'docs');
				const docs = await collectDocs(docsDir);

				// Generate llms.txt (summary)
				let llmsTxt = `# ${SITE_TITLE}\n\n> ${SITE_DESCRIPTION}\n\n`;
				llmsTxt += `## Docs\n\n`;
				for (const doc of docs) {
					if (!doc.title) continue;
					const path = doc.slug ? `/${doc.slug}` : '/';
					const desc = doc.description ? `: ${doc.description}` : '';
					llmsTxt += `- [${doc.title}](${path})${desc}\n`;
				}
				llmsTxt += `\n## Resources\n\n`;
				for (const r of EXTRA_RESOURCES) {
					llmsTxt += `- ${r}\n`;
				}
				llmsTxt += `\n## Optional\n\n- [Full documentation for LLMs](/llms-full.txt): Complete text of all guides\n`;

				// Generate llms-full.txt (all content)
				let llmsFull = `# ${SITE_TITLE} — Full Documentation\n\n> ${SITE_DESCRIPTION}\n\n---\n`;
				for (const doc of docs) {
					if (!doc.title) continue;
					// Strip MDX imports and JSX components for plain text
					const cleaned = doc.content
						.replace(/^import\s+.*$/gm, '')
						.replace(/<[A-Z][^>]*>/g, '')
						.replace(/<\/[A-Z][^>]*>/g, '')
						.trim();
					if (!cleaned) continue;
					llmsFull += `\n\n---\n\n# ${doc.title}\n\n${cleaned}\n`;
				}

				const outDir = dir.pathname;
				await writeFile(join(outDir, 'llms.txt'), llmsTxt);
				await writeFile(join(outDir, 'llms-full.txt'), llmsFull);

				console.log('[llms-txt] Generated llms.txt and llms-full.txt');
			},
		},
	};
}
