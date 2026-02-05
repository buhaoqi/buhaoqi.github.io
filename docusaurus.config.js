// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '河北对口高考计算机专业',
  tagline: '知识点总结、练习题强化训练',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://buhaoqi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'buhaoqi', // Usually your GitHub org/user name.
  projectName: 'buhaoqi.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  //trailingSlash: false, // 显式设置尾部斜杠规则

  onBrokenLinks: 'throw',

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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo-orange-social.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      // navbar: {
      //   title: 'My Site',
      //   logo: {
      //     alt: 'My Site Logo',
      //     src: 'img/logo.svg',
      //   },
      //   items: [
      //     {
      //       type: 'docSidebar',
      //       sidebarId: 'tutorialSidebar',
      //       position: 'left',
      //       label: 'Tutorial',
      //     },
      //     {to: '/blog', label: 'Blog', position: 'left'},
      //     {
      //       href: 'https://github.com/facebook/docusaurus',
      //       label: 'GitHub',
      //       position: 'right',
      //     },
      //   ],
      // },
      navbar: {
        title: '',  // 建议使用你的站点名称
        logo: {
          alt: '不好奇 Logo',
          src: 'img/logo.png',  // 确保图片路径正确
        },
        
        items: [
           // 1. C#教程 (docSidebar类型) - 靠左
          {
            type: 'docSidebar',
            sidebarId: 'csharpSidebar',  // 需要在sidebars.js中定义
            position: 'left',
            label: '算法与程序设计',
            // 可选：设置默认打开的文档
            docId: 'csharp/intro',
          },
          // // 2.1 普通单链接（跳转到文档页面）
          // {
          //   type: 'doc', // 链接类型：文档页面
          //   docId: 'csharp/ch01/index', // 文档 ID（对应 docs/ 下的文件名，无 .md）
          //   position: 'left', // 位置：left/right
          //   label: '项目一算法与程序基础', // 导航栏显示的文字
          // },
          // {
          //   type: 'doc', // 链接类型：文档页面
          //   docId: 'csharp/ch02/index', // 文档 ID（对应 docs/ 下的文件名，无 .md）
          //   position: 'left', // 位置：left/right
          //   label: '项目二算法与程序基础', // 导航栏显示的文字
          // },
          // {
          //   type: 'doc', // 链接类型：文档页面
          //   docId: 'csharp/ch03/index', // 文档 ID（对应 docs/ 下的文件名，无 .md）
          //   position: 'left', // 位置：left/right
          //   label: '项目三算法与程序基础', // 导航栏显示的文字
          // },
          
          // 2.2 下拉菜单（分组链接）
          // {
          //   type: 'dropdown', // 链接类型：下拉菜单
          //   label: '资源导航', // 菜单标题
          //   position: 'left',
          //   items: [
          //     // 下拉菜单项 - 文档链接
          //     {
          //       type: 'doc',
          //       docId: 'bookmarks',
          //       label: '书签收藏',
          //     },
          //     {
          //       type: 'doc',
          //       docId: '实用网址导航',
          //       label: '实用网址',
          //     },
          //     // 下拉菜单项 - 外部链接
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com',
          //       // 可选：新标签页打开
          //       target: '_blank',
          //       rel: 'noopener noreferrer',
          //     },
          //   ]
          // },
         
          // 2. MySQL教程 (docSidebar类型) - 靠左
          {
            type: 'docSidebar',
            sidebarId: 'mysqlSidebar',  // 需要在sidebars.js中定义
            position: 'left',
            label: 'MySQL教程',
            // 可选：设置默认打开的文档
            docId: 'mysql/intro',
          },
          
          // 3. 网址导航 (doc类型) - 靠左
          {
            type: 'doc',
            docId: 'bookmarks/intro',  // 对应 docs/website-guide/intro.md
            position: 'left',
            label: '网址导航',
            // 可选：自定义激活状态
            // activeBaseRegex: '/docs/website-guide',
          },
          // 4. 教育知识与能力
          {
            type: 'docSidebar',
            sidebarId: 'teacherSidebar',  // 需要在sidebars.js中定义
            position: 'left',
            label: '教育知识与能力',
            // 可选：设置默认打开的文档
            docId: 'teacher/intro',
          },
          // 5. 综合素质
          {
            type: 'docSidebar',
            sidebarId: 'teacher2Sidebar',  // 需要在sidebars.js中定义
            position: 'left',
            label: '综合素质',
            // 可选：设置默认打开的文档
            docId: 'teacher2/intro',
          },
          
          // 6. Blog (无type，内部页面) - 靠左
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
            // 可选：Blog相关页面都高亮
            activeBaseRegex: '^/blog',
          },
          
          // 5. 不好奇课堂 (外部链接) - 靠右
          {
            href: 'https://buhaoqi.com',
            label: '不好奇课堂',
            position: 'right',
            // 推荐添加的属性
            target: '_blank',  // 新窗口打开
            rel: 'noopener noreferrer',  // 安全属性
            className: 'navbar-external-link',  // 可自定义样式
          },
          
          // 6. 搜索框 (可选，如果需要) - 靠右
          // {
          //   type: 'search',
          //   position: 'right',
          // },
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
                label: 'X',
                href: 'https://x.com/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp'],
      },
    }),
};

export default config;
