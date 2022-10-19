// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SkyfallMC Documentation',
  tagline: 'Documentation for everything SkyfallMC.',
  url: 'https://docs.skyfallmc.ga',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'merge1973', // Usually your GitHub org/user name.
  projectName: 'skyfallmc-docs', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SkyfallMC Docs',
        logo: {
          src: 'img/logo.svg',
          srcDark: 'img/logodark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/merge1973/skyfallmc-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Main Page',
                href: 'https://play.skyfallmc.ga/',
              },              
              {
                label: 'Discord',
                href: 'https://discord.gg/hWzRrDz9kR',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/merge1973/skyfallmc-docs',
              },
            ],
          },          
          {
            title: 'Other Pages',
            items: [
              {
                label: 'Files Website',
                href: 'https://files.skyfallmc.ga/',
              },
              {
                label: 'Server Maps',
                href: 'https://map.skyfallmc.ga/',
              },
              {
                label: 'Server Statistics',
                href: 'https://stats.skyfallmc.ga/',
              },
              {
                label: 'Server Status',
                href: 'https://status.skyfallmc.ga/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SkyfallMC. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
