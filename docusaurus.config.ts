import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Godot Leren — GDScript Game Development — Coderius',
  tagline: 'De eerste stappen in Godot',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://godot.coderius.nl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Coderius-Education', // Usually your GitHub org/user name.
  projectName: 'Godot-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Leer professionele 2D games maken met de Godot engine. Begin direct in je browser — geen download nodig.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'godot leren, gdscript tutorial, godot beginners, game maken godot, godot tutorial nederlands',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Coderius-Education/Godot-docs/tree/main/',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '1e 2D game',
        },
        {
          to: '/cheatsheet',
          label: 'Cheatsheet',
          position: 'left',
        },
        {
          to: '/gdscript-tips',
          label: 'GDScript Tips',
          position: 'left',
        },
        {
          to: '/er-gaat-iets-mis',
          label: 'Er gaat iets mis!',
          position: 'left',
        },
        {
          href: 'https://github.com/Coderius-Education/Godot',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Meer van Coderius',
          items: [
            { label: 'Begin met Python games', href: 'https://play.coderius.nl' },
            { label: 'Leer eerst Python', href: 'https://python.coderius.nl' },
          ],
        },
      ],
      copyright: `Licensed under Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
