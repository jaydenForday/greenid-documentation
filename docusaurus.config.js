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
            to: 'docs/greenid-overview/o
      items: [
        {
          to: 'docs/greenid-overview/overview-and-options-comparison/what-is-greenid',
          label: 'GreenID Overview'  // No comma here since it's the last property in the object
        },
        {
          to: 'docs/developer-guides/quickstart/integration-method-admin-panel',
          label: 'Developer Guides'  // No comma here
        },
        {
          to: 'docs/integration-methods/overview',
          label: 'GreenID Integration Methods'  // No comma here
        },
        {
          to: 'docs/api-reference/core-api-details-examples',
          label: 'API Reference'  // No comma here
        },
        {
          to: 'docs/updates-and-releases/changelog',
          label: 'Updates and Releases'  // No comma here
        },
        {
          to: 'docs/customer-support-faqs/faqs/api',
          label: 'Customer Support / FAQs'  // No comma here
        },
        {
          href: 'https://github.com/your-org-name/greenid-docs',
          label: 'GitHub',
          position: 'right'  // No comma here
        }
      ]verview-an// d-options-comparis// on',
        //     label: 'GreenID Overview',
            position: 'left',
 /what-is-greenid/what-is-gre// enid           sidebarId: 'gr,enIDSideba// r'
          },
    ,
        //     sidebarId: 'greenIDSidebar'integratio// n-method-admin// -panel',
    //         label: 'Developer Guides',
            position: 'left',
            sidebar// Id: 'developerGuidesSidebar'
,         }// ,
          {
      ,
        //     sidebarId: 'developerGuidesSidebar'         l// abel: 'GreenID//  Integration // Methods',
            position: 'left',
            si// debarId: 'integrationMethodsSidebar'
   ,      },
 //          {
            to: 'doc// s/api-reference/core-api-details-examples',
        //     label: 'AP// I Reference',// 
            position: 'left',
            sidebarId: 'apiReferen// ceSidebar'
          },
  ,       {
 //            to: 'docs/updates-an// d-releases/changelog',
            label: 'Upd// ates and Relea// ses',
       //      position: 'left',
            sidebarId: 'updatesAn// dReleasesSidebar'
          },
  ,       {
 //            to: 'docs/customer-s// upport-faqs/faqs/api',
            label: 'Customer // Support / FAQs// ',
          //   position: 'left',
            sidebarId: 'customerSupp// ortFaqsSidebar'
          },
       ,  {
      //       href: 'https://github.com// /your-org-name/greenid-docs',
            label: 'Git// Hub',
        //     position://  'right',
          },
        ],
      },
      footer: {
        s// tyle: 'dark',
        links: [// 
          {
            title: // 'Docs',
      //       items: [
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
