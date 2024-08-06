// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GreenID Docs',
  tagline: 'Your tagline here',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-org-name', // Usually your GitHub org/user name.
  projectName: 'greenid-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          editUrl: 'https://github.com/your-org-name/greenid-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/your-org-name/greenid-docs/tree/main/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'GreenID Logo',
          src: 'img/green-ID-GBG.svg',
          srcDark: 'img/green-ID-GBG-reversed.svg',
        },
        items: [
          {
            to: 'docs/greenid-overview/overview-and-options-comparison',
            label: 'GreenID Overview',
            position: 'left',
            sidebarId: 'greenIDSidebar'
          },
          {
            to: 'docs/developer-guides/quickstart/integration-method-admin-panel',
            label: 'Developer Guides',
            position: 'left',
            sidebarId: 'developerGuidesSidebar'
          },
          {
            to: 'docs/integration-methods/overview',
            label: 'GreenID Integration Methods',
            position: 'left',
            sidebarId: 'integrationMethodsSidebar'
          },
          {
            to: 'docs/api-reference/core-api-details-examples',
            label: 'API Reference',
            position: 'left',
            sidebarId: 'apiReferenceSidebar'
          },
          {
            to: 'docs/updates-and-releases/changelog',
            label: 'Updates and Releases',
            position: 'left',
            sidebarId: 'updatesAndReleasesSidebar'
          },
          {
            to: 'docs/customer-support-faqs/faqs/api',
            label: 'Customer Support / FAQs',
            position: 'left',
            sidebarId: 'customerSupportFaqsSidebar'
          },
          {
            href: 'https://github.com/your-org-name/greenid-docs',
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
                label: 'GreenID Overview',
                to: 'docs/greenid-overview/overview-and-options-comparison',
              },
              {
                label: 'Developer Guides',
                to: 'docs/developer-guides/quickstart/integration-method-admin-panel',
              },
              {
                label: 'GreenID Integration Methods',
                to: 'docs/integration-methods/overview',
              },
              {
                label: 'API Reference',
                to: 'docs/api-reference/core-api-details-examples',
              },
              {
                label: 'Updates and Releases',
                to: 'docs/updates-and-releases/changelog',
              },
              {
                label: 'Customer Support / FAQs',
                to: 'docs/customer-support-faqs/faqs/api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/your-org-name/greenid-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Your Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
