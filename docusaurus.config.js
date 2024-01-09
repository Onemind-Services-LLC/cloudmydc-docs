// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cloudmydc Docs",
  tagline:
    "Easy, accessible, affordable cloud for all Hyperconverged, production- ready OpenStack for service providers, enabling lower cost IaaS, PaaS and XaaS for businesses everywhere",
  favicon: "img/favicon.ico",

  url: "https://docs.cloudmydc.com/",
  baseUrl: "/",

  organizationName: "Onemind Services LLC",
  projectName: "cloudmydc-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          remarkPlugins: [require("remark-slug")],
          routeBasePath: "/",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // customCss: [require.resolve('./src/css/custom-dark-theme.css')],
      image: "img/docusaurus-social-card.jpg",
      algolia: {
        apiKey: "c2220d2a3515d7d4629b7e8ef22bb78c",
        indexName: "vishal_sir_onemindservices",
        contextualSearch: true,
        placeholder: "Search",
        appId: "HU6H0HSM3W",
      },
      navbar: {
        title: "CloudMyDC",
        logo: {
          alt: "My Site Logo",
          src: "img/ThumbnailSquare.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
            to: "/",
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
                    <a target="_blank" rel="noopener noreferrer" href="https://cloudmydc.com/">
                      <img
                        alt="Powered by Vercel"
                        style="margin-top: 8px"
                        width="250px"
                        src='/img/footer/cmdc.png'
                      />
                    </a>
                  </div>
                  <div class="social_media_icons_container">
                    <div class="social_media_icons_box">
                      <a href="https://www.linkedin.com/company/cloudmydc/about/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 24 24"
                        xmlSpace="preserve"
                          width="15px"
                        height="15px"
                      >
                        <g>
                          <path
                            id="Path_2525"
                            d="M23.002,21.584h0.227l-0.435-0.658l0,0c0.266,0,0.407-0.169,0.409-0.376c0-0.008,0-0.017-0.001-0.025   c0-0.282-0.17-0.417-0.519-0.417h-0.564v1.476h0.212v-0.643h0.261L23.002,21.584z M22.577,20.774h-0.246v-0.499h0.312   c0.161,0,0.345,0.026,0.345,0.237c0,0.242-0.186,0.262-0.412,0.262"
                            fill="var(--ifm-footer-link-color)"
                          />
                          <path
                            id="Path_2520"
                            d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463"
                            fill="var(--ifm-footer-link-color)"
                          />
                          <path
                            id="Path_2526"
                            d="M22.603,19.451c-0.764,0.007-1.378,0.633-1.37,1.397c0.007,0.764,0.633,1.378,1.397,1.37   c0.764-0.007,1.378-0.633,1.37-1.397c-0.007-0.754-0.617-1.363-1.37-1.37H22.603 M22.635,22.059   c-0.67,0.011-1.254-0.522-1.265-1.192c-0.011-0.67,0.523-1.222,1.193-1.233c0.67-0.011,1.222,0.523,1.233,1.193   c0,0.007,0,0.013,0,0.02C23.81,21.502,23.29,22.045,22.635,22.059h-0.031"
                            fill="var(--ifm-footer-link-color)"
                          />
                        </g>
                      </svg>
                      </a>
                    </div>
                  </div>
                  `,
              },
            ],
          },
          {
            title: "Features",
            items: [
              {
                label: "Platform as a Service",
                to: "https://cloudmydc.com/paas",
                // href: 'link'
              },
              {
                label: "Infrastructure as a Service",
                to: "https://cloudmydc.com/iaas",
              },
              {
                label: "Data Centers",
                to: "https://cloudmydc.com/data-center",
              },
              {
                label: "Advanced Network",
                to: "https://cloudmydc.com/advance-network",
              },
              {
                label: 'Blog',
                to: 'https://cloudmydc.com/blog',
              },
            ],
          },
          {
            title: "Support",
            items: [
              {
                label: "Home",
                to: "https://cloudmydc.com/",
              },
              {
                label: "About us",
                to: "https://cloudmydc.com/about-us",
              },
              {
                label: "Contact us",
                to: "https://cloudmydc.com/contact-us",
              },
              {
                label: "Partners",
                to: "https://cloudmydc.com/partners",
              },
              {
                label: "Terms Of Services",
                to: "https://cloudmydc.com/tos",
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                label: "sales@cloudmydc.com",
                to: "mailto:sales@cloudmydc.com",
                className: "footer_icon_svg_1",
              },
              {
                label: "support@cloudmydc.com",
                to: "mailto:support@cloudmydc.com",
                className: "footer_icon_svg_2",
              },
              {
                label: "1-866-666-5679",
                to: "tel:1-866-666-5679",
                className: "footer_icon_svg_3",
              },
              {
                label: "11501 Dublin Bvld, Suite#200 Dublin CA 94568",
                to: "https://maps.google.com?q=11501 Dublin Bvld, Suite#200 Dublin CA 94568",
                className: "footer_icon_svg_4",
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
