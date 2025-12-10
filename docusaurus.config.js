/**
 * @type {import('@docusaurus/types').Config}
 */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Mastering the Integration of Perception, Cognition, and Action in Embodied Intelligence Systems',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://anum-2017.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, this is usually '/<project-name>/'
  baseUrl: '/Physical-AI-Humanoid-Robotics-Textbook/',

  // GitHub pages deployment config.
  organizationName: 'Anum-2017', // Usually your GitHub org/user name.
  projectName: 'Physical-AI-Humanoid-Robotics-Textbook', // Usually your repo name.

  onBrokenLinks: 'throw',
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
          editUrl:
            'https://github.com/Anum-2017/physical-ai-humanoid-robotics/edit/main/docs/',
          // Keep docs at /docs route
          routeBasePath: 'docs',
        },
        blog: false,
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
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Physical AI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/', 
            label: 'Home', 
            position: 'left'
          },
          {
            to: '/docs/intro',
            label: 'Overview',
            position: 'left'
          },
          {
            to: '/docs/module-1-robotic-nervous-system-ros2/01-understanding-ros2-as-the-robot-nervous-system', 
            label: 'Modules', 
            position: 'left'
          },
          {
            href: 'https://github.com/Anum-2017/Physical-AI-Humanoid-Robotics-Textbook',
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
                label: 'Getting Started',
                to: '/docs/readme',
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
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Anum-2017/Physical-AI-Humanoid-Robotics-Textbook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;


