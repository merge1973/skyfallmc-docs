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
      announcementBar: {
        id: 'welcome',
        content:
          'Welcome to SkyfallMC\'s new documentation! Keep in mind that the website is still a WORK IN PROGRESS, report any bugs you find.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        title: 'SkyfallMC Docs',
        logo: {
          src: 'img/logo.svg',
          srcDark: 'img/logodark.svg',
          alt: 'SkyfallMC Logo',
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
            className: 'header-icon-link header-github-link',
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
