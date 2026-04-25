// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import llmsTxt from "./src/integrations/llms-txt.ts";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Spatial Shanghai 2026",
      logo: {
        src: "./src/assets/logo.png",
      },
      favicon: "/favicon.png",
      components: {
        Head: "./src/components/Head.astro",
      },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com" }],
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        zh: {
          label: "中文",
          lang: "zh-CN",
        },
      },
      sidebar: [
        {
          label: "Event Info",
          translations: { "zh-CN": "活动信息" },
          items: [
            {
              label: "About the Hackathon",
              translations: { "zh-CN": "关于黑客松" },
              slug: "about",
            },
            {
              label: "Event Schedule",
              translations: { "zh-CN": "赛程安排" },
              slug: "schedule",
            },
          ],
        },
        {
          label: "AI Coding Tools",
          translations: { "zh-CN": "AI 编程工具" },
          items: [
            { label: "GitHub Copilot", slug: "guides/github-copilot" },
            {
              label: "v0 by Vercel",
              translations: { "zh-CN": "v0 (Vercel)" },
              slug: "guides/v0",
            },
            {
              label: "JetBrains PyCharm (Recommended Setup)",
              translations: { "zh-CN": "JetBrains PyCharm（推荐设置）" },
              slug: "guides/jetbrains-ai",
            },
            { label: "Claude Code + Z.ai", slug: "guides/claude-code" },
          ],
        },
        {
          label: "3D & Spatial",
          translations: { "zh-CN": "3D 与空间计算" },
          items: [
            { label: "Three.js", slug: "guides/threejs" },
            {
              label: "Three.js AI Skills",
              translations: { "zh-CN": "Three.js AI 技能" },
              slug: "guides/threejs-skills",
            },
            { label: "Tripo3D", slug: "guides/tripo3d" },
          ],
        },
      ],
    }),
    llmsTxt(),
  ],
});
