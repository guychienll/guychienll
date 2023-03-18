// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Guy 手札',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    url: 'https://github.com',
    baseUrl: '/',
    organizationName: 'guychienll',
    projectName: 'guychienll',
    deploymentBranch: 'gh-pages',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    themes: ['@docusaurus/theme-mermaid'],
    markdown: {
        mermaid: true
    },
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            // image: '',
            navbar: {
                title: '',
                logo: {
                    alt: 'site logo',
                    src: 'img/guy.png'
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: '手札'
                    }
                ]
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: '手札',
                                to: '/docs/intro'
                            }
                        ]
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                href: 'https://github.com/guychienll',
                                label: 'GitHub'
                            },
                            {
                                href: 'https://www.linkedin.com/in/guy-chien-0566b61b9/',
                                label: 'LinkedIn'
                            }
                        ]
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Instagram',
                                href: 'https://www.instagram.com/_chienli_'
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} guychienll. Built with Docusaurus.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
};

module.exports = config;
