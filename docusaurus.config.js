// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '河北单招对口计算机备考',
  tagline: '考点精讲、在线刷题题库、真题、配套视频',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://buhaoqi.github.io', // Your website URL
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
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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
            'https://buhaoqi.github.io',
          
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
            'https://buhaoqi.github.io',
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
      
      navbar: {
        title: '不好奇课堂',  // 建议使用你的站点名称
        logo: {
          alt: '不好奇课堂',
          src: 'img/logo.svg',  // 确保图片路径正确
        },
        
        items: [
          {
            href: 'https://tiku.buhaoqi.com',
            position: 'left',
            label: '题库',
          },
          // 7. 网址导航 (doc类型) - 靠左
          {
            href: 'https://space.bilibili.com/374231022',
            position: 'left',
            label: 'B站视频教程',
          },
          // 0. 对口教程（一级菜单，下拉包含五个二级菜单）
          {
          type: 'dropdown',
          label: '对口升学考点',
          position: 'left',
          items: [
          {
          type: 'docSidebar',
          sidebarId: 'csharpSidebar',
          label: '算法与程序设计',
          docId: 'csharp/index',
                      },
                      {
          type: 'docSidebar',
          sidebarId: 'mysqlSidebar',
          label: '数据库原理MySQL',
          docId: 'mysql/index',
                      },
            {
          type: 'docSidebar',
          sidebarId: 'netWorkBasicSidebar',
          label: '计算机网络基础',
          docId: 'network-basics/index',
          },
                      {
          type: 'docSidebar',
          sidebarId: 'computerBasicSidebar',
          label: '计算机基础及应用',
          docId: 'computer-basics/index',
                      },
                      {
          type: 'docSidebar',
          sidebarId: 'officeSidebar',
          label: '中文版OFFICE实用教程',
          docId: 'office/index',
                      },
                    ],
                    },
          // 6. 九类单招 - 靠左
                    {
          type: 'docSidebar',
          sidebarId: 'itSidebar',
          position: 'left',
          label: '九类十类职测',
          docId: 'it/index',
                    },
          // 8. Blog (无type，内部页面) - 靠左
          {
          to: '/blog',
          label: 'Blog',
          position: 'left',
          // 可选：Blog相关页面都高亮
          activeBaseRegex: '^/blog',
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
            title: '考试管理部门',
            items: [
              {
                label: '河北省教育考试院',
                href: 'https://www.hebeea.edu.cn/',
              },
              {
                label: '河北省高职单招综合管理平台',
                href: 'https://gzdz.hebeea.edu.cn',
              },
              {
                label: '河北科技师范学院本科招生网',
                href: 'http://zhaosheng.hevttc.edu.cn',
              },
              {
                label: '河北省教育厅(对口考试大纲)',
                href: 'http://jyt.hebei.gov.cn',
              },
            ],
          },
          {
            title: '考试大纲',
            items: [
              {
                label: '2027年河北省高职单招考试说明',
                href: 'https://www.hebeea.edu.cn/c/2025-11-27/489497.html',
              },
              {
                label: '2026年河北省高职单招考试说明',
                href: 'https://www.hebeea.edu.cn/c/2025-09-12/489051.html',
              },
              {
                label: '河北省普通高等学校对口招生考试大纲(2026版)',
                href: 'http://jyt.hebei.gov.cn/col/1410097726928/2023/12/05/1701746999744.html',
              },
              {
                label: '河北省普通高等学校对口招生考试大纲(2028版)',
                href: 'http://jyt.hebei.gov.cn/col/1410097726928/2026/01/05/1767602747215.html',
              },
              
            ],
          },
          {
            title: '报考相关',
            items: [
              {
                label: '2026年河北省中等职业学校对口升学专业考试考前提示',
                href: 'https://www.hebeea.edu.cn/c/2026-03-05/492016.html',
              },
              {
                label: '2026年河北省高职单招报考须知',
                href: 'https://www.hebeea.edu.cn/c/2026-01-07/490681.html',
              },
              {
                label: '2026年河北省中等职业学校对口升学专业考试考前提示',
                href: 'https://www.hebeea.edu.cn/c/2026-03-05/492016.html',
              },
              {
                label: '2026年普通高考及对口升学咨询电话',
                href: 'https://www.hebeea.edu.cn/c/2026-06-01/492714.html',
              },
              {
                label: '2026河北对口升学专业考试考生常见问题解答',
                href: 'https://zhaosheng.hevttc.edu.cn/info/1072/2671.htm',
              },
              {
                label: '2026年计算机类对口专业考试安排',
                href: 'https://zhaosheng.hevttc.edu.cn/info/1072/2681.htm',
              },
              {
                label: '2026年计算机类对口专业技能考试系统下载地址',
                href: 'https://zhaosheng.hevttc.edu.cn/info/1072/2660.htm',
              },
              {
                label: '2026年河北省对口升学专业考试计算机类应试须知',
                href: 'https://zhaosheng.hevttc.edu.cn/info/1072/2693.htm',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 不好奇课堂 本站仅为学习交流，非官方平台<br/><a href="https://beian.mps.gov.cn/" target="_blank">冀公网安备13040202001048号</a>  <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">冀ICP备2025101972号-1</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp'],
      },
    }),
};

export default config;
