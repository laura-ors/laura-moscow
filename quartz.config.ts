import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Laura",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: { provider: 'google', tagId: 'G-4B571V91Q2',
     },
    locale: "ru-RU",
    baseUrl: "laura.moscow",
    ignorePatterns: ["private", "templates", "Drafts",".obsidian", "Шаблоны", "Черновики"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        title: {
          name: "KJV1611",       // Must match @font-face name
          fallback: "mono",
          fontOrigin: "local",    // Load from /static/fonts/
          fontDisplay: "swap",    // Optional but recommended
        },
        header: {
          name: "EB Garamond",       // Must match @font-face name
          fallback: "mono",
          fontOrigin: "local",    // Load from /static/fonts/
          fontDisplay: "swap",    // Optional but recommended
        },
        body: {
          name: "EB Garamond",       // Must match @font-face name
          fallback: "mono",
          fontOrigin: "local",    // Load from /static/fonts/
          fontDisplay: "swap",    // Optional but recommended
        },
        code: {
          name: "Courier Prime",       // Must match @font-face name
          fallback: "mono",
          fontOrigin: "local",    // Load from /static/fonts/
          fontDisplay: "swap",    // Optional but recommended
        },
      },
      colors: {
        lightMode: {
          light: "rgb(248, 243, 242)",
          lightgray: "#D3d0bf",
          gray: "#A0CDB8",
          darkgray: "#414929",
          dark: "#54160e",
          secondary: "#54160e",
          tertiary: "#e0be55",
          highlight: "#a9e4e1",
          textHighlight: "#e0be55",
        },
        darkMode: {
          light: "#000000",
          lightgray: "rgba(0, 255, 170, 0.15)",
          gray: "#bfb2bb",
          darkgray: "#ffffff",
          dark: "#ffffff",
          secondary: "#ffffff",
          tertiary: "rgb(160, 219, 192)",
          highlight: "rgba(0, 255, 170, 0.15)",
          textHighlight: "#000000",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true , mermaid: true, callouts: true, parseTags:true, comments:true, highlight:true,}),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
