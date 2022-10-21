// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SkyfallMC Documentation',
  tagline: 'Documentation for everything SkyfallMC.',
  url: 'https://docs.skyfallmc.ga',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

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
            'https://github.com/merge1973/skyfallmc-docs/tree/main/',
        },
        blog: false//{
          //showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/merge1973/skyfallmc-docs/tree/main/',
        //},
        //theme: {
          //customCss: require.resolve('./src/css/custom.css'),
        //},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          src: 'img/logo.svg',
          srcDark: 'img/logodark.svg',
          alt: 'SkyfallMC Docs',
        },
        items: [ 
          {
            type: 'doc',
            docId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://discord.gg/hWzRrDz9kR',
            className: 'header-icon-link header-discord-link',
            position: 'right',
          },
          {
            href: 'https://github.com/merge1973/skyfallmc-docs',
            className: 'header-icon-link header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          href: '/',
          src: 'img/logo.svg',
          srcDark: 'img/logodark.svg',
          alt: 'SkyfallMC Docs',
          height: '36px',
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs',
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
