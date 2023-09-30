// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloudmydc Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'cloudmydc-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      // Replace with your project's social card
      // customCss: [require.resolve('./src/css/custom-dark-theme.css')],
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CloudMyDC',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ThumbnailSquare.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            items: [
              {
                html: `
                  <div>
                    <a target="_blank" rel="noopener noreferrer" href="https://vercel.com?utm_source=authjs&utm_campaign=oss">
                      <img
                        alt="Powered by Vercel"
                        style="margin-top: 8px"
                        width="250px"
                        src='/img/footer/cmdc.png'
                      />
                    </a>
                  </div>
                  <div>
                    social media icons
                  </div>
                  `,
              },
            ],
          },
          {
            title: 'Features',
            items: [
              {
                label: 'Platform as a Service',
                to: 'https://cloudmydc.com/paas',
                // href: 'link'
              },
              {
                label: 'Infrastructure as a Service',
                to: 'https://cloudmydc.com/iaas',
              },
              {
                label: 'Data Centers',
                to: 'https://cloudmydc.com/data-center',
              },
              {
                label: 'Advanced Network',
                to: 'https://cloudmydc.com/advance-network',
              },
              {
                label: 'Advanced Network',
                to: 'https://cloudmydc.com/advance-network',
              },
              {
                label: 'Blog',
                to: 'https://cloudmydc.com/blog',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Home',
                to: 'https://cloudmydc.com/',
                // to: '/docs/intro',
              },
              {
                label: 'About us',
                to: 'https://cloudmydc.com/about-us',
              },
              {
                label: 'Contact us',
                to: 'https://cloudmydc.com/contact-us',
              },
              {
                label: 'Partners',
                to: 'https://cloudmydc.com/partners',
              },
              {
                label: 'Terms Of Services',
                to: 'https://cloudmydc.com/tos',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'sales@cloudmydc.com',
                to: 'mailto:sales@cloudmydc.com',
                className: 'footer_icon_svg_1',
              },
              {
                label: 'support@cloudmydc.com',
                to: 'mailto:support@cloudmydc.com',
                className: 'footer_icon_svg_2',
              },
              {
                label: '1-866-666-5679',
                to: 'tel:1-866-666-5679',
                className: 'footer_icon_svg_3',
              },
              {
                label: '11501 Dublin Bvld, Suite#200 Dublin CA 94568',
                to: 'https://maps.google.com?q=11501 Dublin Bvld, Suite#200 Dublin CA 94568',
                className: 'footer_icon_svg_4',
              },
            ],
          },
        ],
        copyright: `
          <div class="copyright_container">
            <div>
            Copyright © ${new Date().getFullYear()} <a href="https://cloudmydc.com">cloudmydc.com</a> | All rights reserved.
            </div>
            <div>
              <a href="https://cloudmydc.com/privacy-policies">Privacy Policies</a>
              <a href="https://cloudmydc.com/cookie-policies">Cookie Policies</a>
            </div>
          </div>
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
