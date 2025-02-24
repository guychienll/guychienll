import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Guy Chien",
  tagline: "Guy Chien's Tech Notes",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.guychienll.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "guychienll", // Usually your GitHub org/user name.
  projectName: "guychienll", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          path: "notes",
          routeBasePath: "notes",
          breadcrumbs: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        gtag: {
          trackingID: "G-9EW89P0PM2",
          anonymizeIP: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**", "/notes/tags/**", "/notes/category/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  scripts: [
    {
      src: "https://kit.fontawesome.com/badc861d67.js",
      crossorigin: "anonymous",
      async: false,
    },
  ],

  themeConfig: {
    image: "img/media/social-card.png",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    /**
     * original docusaurus provided navbar & footer configuration
     */
    navbar: {
      title: "guychienll",
      logo: {
        alt: "logo",
        src: "img/notes.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Notes",
        },
      ],
    }, // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "Notes",
    //       items: [
    //         {
    //           label: "Notes",
    //           to: "/notes/vim",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Community",
    //       items: [
    //         {
    //           label: "LinkedIn",
    //           href: "https://www.linkedin.com/in/guy-chien-0566b61b9/",
    //         },
    //       ],
    //     },
    //     {
    //       title: "More",
    //       items: [
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/guychienll",
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.gruvboxMaterialDark,
      darkTheme: prismThemes.gruvboxMaterialDark,
    },
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    "./plugins/postcss.js",
    "./plugins/notes-feed.js",
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/notes/webpack/tree-shaking",
            from: "/docs/web/webpack/tree-shaking",
          },
          {
            to: "/notes/webpack/loaders-and-plugins",
            from: ["/notes/webpack/loaders", "/docs/web/webpack/loaders"],
          },
          {
            to: "/notes/vim/vim-basics",
            from: ["/notes/vim", "/docs/vim/vim"],
          },
          {
            to: "/notes/vim/jetbrains",
            from: "/docs/vim/vim-jetbrains",
          },
          {
            to: "/notes/vim/vscode",
            from: "/docs/vim/vim-vscode",
          },
          {
            to: "/notes/react/reconciliation",
            from: "/docs/web/react/reconciliation",
          },
          {
            to: "/notes/javascript/event-loop",
            from: "/docs/web/javascript/event-loop",
          },
        ],
      },
    ],
    "@docusaurus/theme-live-codeblock",
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "portfolio",
        path: "./portfolio",
        routeBasePath: "portfolio",
        onUntruncatedBlogPosts: "ignore",
      },
    ],
  ],
};

export default config;
