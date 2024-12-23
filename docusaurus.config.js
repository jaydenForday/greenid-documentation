// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {
  themes as prismThemes
} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'greenID Documentation',
  tagline: 'For users and developers',
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
    [
      'redocusaurus',
      {
        specs: [
          {
            id: "api-core_v5",
            spec: 'static/core_v5.yaml',
            route: 'docs/api-reference/core_v5',
          },
          {
            id: "api-hosted_web",
            spec: 'static/hosted_web.yaml',
            route: 'docs/api-reference/hosted_web',
          },
          {
            id: "api-documents_images",
            spec: 'static/documents_images.yaml',
            route: 'docs/api-reference/documents_images',
          },
          {
            id: "api-watchlist_results",
            spec: 'static/watchlist_results.yaml',
            route: 'docs/api-reference/watchlist_results',
          },
          {
            id: "api-get_results",
            spec: 'static/get_results.yaml',
            route: 'docs/api-reference/get_results',
          }
        ],
        theme: {
          options: {
            hideDownloadButton: true,
            hideLogo: true,
            disableSearch: true,
            hideLoading: false,
            hideSingleRequestSampleTab: false,
            layout: 'side-by-side',
          },
        },
      },
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
        items: [{
            to: 'docs/greenid-overview/overview/what-is-greenid',
            label: 'Overview',
            activeBaseRegex: `/greenid-overview/`  
          },
          {
            to: 'docs/developer-guides/overview',
            label: 'Developer Guides',
            activeBaseRegex: `/developer-guides/`  
          },
          {
            to: 'docs/integration-methods/overview',
            label: 'Integration Methods',
            activeBaseRegex: `/integration-methods/` 
          },
          {
            label: 'API Reference',
            activeBaseRegex: `/api-reference/`,
            items: [
              {
                label: "Core V5",
                to:  "docs/api-reference/core_v5"
              },
              {
                label: "Hosted Web",
                to:  "docs/api-reference/hosted_web"
              },
              {
                label: "Documents & Images",
                to:  "docs/api-reference/documents_images"
              },
              {
                label: "Watchlist Results (Comprehensive Watchlist)",
                to:  "docs/api-reference/watchlist_results"
              },
              {
                label: "Verification Result",
                to:  "docs/api-reference/get_results"
              },
            ]
          },
          {
            to: 'docs/updates-and-releases/latest-news-and-updates',
            label: 'Updates and Releases',
            activeBaseRegex: `/updates-and-releases/`
          },
          {
            to: 'docs/customer-support-faqs/contact-details',
            label: 'Customer Support / FAQs',
            activeBaseRegex: `/customer-support-faqs/`
          },
          {
            href: 'https://github.com/your-org-name/greenid-docs',
            label: 'GitHub',
            position: 'right' 
          }
        ]
      },
      footer: {
        style: 'dark',
        logo: {
          src: 'img/GBG_logo_white_RGB.svg',
          //srcDark: '/static/img/GBG_logo__RGB.svg',
          alt: 'GreenID Documentation | GreenID Docs',
          height: '36px',
        },
        links: [{
            title: 'Quick Links',
            items: [{
                label: 'greenID Website',
                href: 'https://gbg-greenid.com/',
              },
              {
                label: 'GBG',
                href: 'https://www.gbgplc.com/apac/',
              },
              {
                label: 'Request a Demo',
                href: 'https://gbg-greenid.com/request-a-demo/',
              },
              {
                label: 'Privacy Policy',
                href: 'https://www.gbgplc.com/apac/legal-and-regulatory/privacy-policy-anz/',
              }
            ],
          },
          {
            title: 'Solutions',
            items: [{
                label: 'Identity Verification',
                href: 'https://gbg-greenid.com/solutions/identity-verification/',
              },
              {
                label: 'Document Verification',
                href: 'https://gbg-greenid.com/solutions/document-verification/',
              },
              {
                label: 'Global Watchlist Screening',
                href: 'https://gbg-greenid.com/solutions/global-watchlist-screening/',
              },
              {
                label: 'Business Verification',
                href: 'https://gbg-greenid.com/solutions/business-verification/',
              },
              {
                label: 'GBG Trust Alert',
                href: 'https://gbg-greenid.com/solutions/gbg-trust-alert/',
              }
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Contact Us',
                to: '/docs/customer-support-faqs/contact-details',
              },
              {
                label: 'Support',
                href: 'https://gbgplc.atlassian.net/servicedesk/customer/portals',
              },
              {
                label: 'FAQs',
                to: '/docs/customer-support-faqs/faqs/admin-panel',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GB Group plc ('GBG'). Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

export default config;


