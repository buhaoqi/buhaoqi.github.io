import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/buhaoqi/__docusaurus/debug',
    component: ComponentCreator('/buhaoqi/__docusaurus/debug', '114'),
    exact: true
  },
  {
    path: '/buhaoqi/__docusaurus/debug/config',
    component: ComponentCreator('/buhaoqi/__docusaurus/debug/config', 'ccd'),
    exact: true
  },
  {
    path: '/buhaoqi/__docusaurus/debug/content',
    component: ComponentCreator('/buhaoqi/__docusaurus/debug/content', '9bb'),
    exact: true
  },
  {
    path: '/buhaoqi/__docusaurus/debug/globalData',
    component: ComponentCreator('/buhaoqi/__docusaurus/debug/globalData', '77e'),
    exact: true
  },
  {
    path: '/buhaoqi/__docusaurus/debug/metadata',
    component: ComponentCreator('/buhaoqi/__docusaurus/debug/metadata', '24c'),
    exact: true
  },
  {
    path: '/buhaoqi/__docusaurus/debug/registry',
    component: ComponentCreator('/buhaoqi/__docusaurus/debug/registry', '19a'),
    exact: true
  },
  {
    path: '/buhaoqi/__docusaurus/debug/routes',
    component: ComponentCreator('/buhaoqi/__docusaurus/debug/routes', '87a'),
    exact: true
  },
  {
    path: '/buhaoqi/blog',
    component: ComponentCreator('/buhaoqi/blog', '698'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/archive',
    component: ComponentCreator('/buhaoqi/blog/archive', 'ee6'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/authors',
    component: ComponentCreator('/buhaoqi/blog/authors', 'dcd'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/buhaoqi/blog/authors/all-sebastien-lorber-articles', '2ff'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/authors/yangshun',
    component: ComponentCreator('/buhaoqi/blog/authors/yangshun', '8ac'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/first-blog-post',
    component: ComponentCreator('/buhaoqi/blog/first-blog-post', 'ad7'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/long-blog-post',
    component: ComponentCreator('/buhaoqi/blog/long-blog-post', '7dd'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/mdx-blog-post',
    component: ComponentCreator('/buhaoqi/blog/mdx-blog-post', '96b'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/tags',
    component: ComponentCreator('/buhaoqi/blog/tags', '93d'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/tags/docusaurus',
    component: ComponentCreator('/buhaoqi/blog/tags/docusaurus', '784'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/tags/facebook',
    component: ComponentCreator('/buhaoqi/blog/tags/facebook', 'd2b'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/tags/hello',
    component: ComponentCreator('/buhaoqi/blog/tags/hello', 'efb'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/tags/hola',
    component: ComponentCreator('/buhaoqi/blog/tags/hola', 'c25'),
    exact: true
  },
  {
    path: '/buhaoqi/blog/welcome',
    component: ComponentCreator('/buhaoqi/blog/welcome', '3fd'),
    exact: true
  },
  {
    path: '/buhaoqi/markdown-page',
    component: ComponentCreator('/buhaoqi/markdown-page', 'b72'),
    exact: true
  },
  {
    path: '/buhaoqi/docs',
    component: ComponentCreator('/buhaoqi/docs', '77b'),
    routes: [
      {
        path: '/buhaoqi/docs',
        component: ComponentCreator('/buhaoqi/docs', 'ec4'),
        routes: [
          {
            path: '/buhaoqi/docs',
            component: ComponentCreator('/buhaoqi/docs', '03b'),
            routes: [
              {
                path: '/buhaoqi/docs/bookmarks',
                component: ComponentCreator('/buhaoqi/docs/bookmarks', '010'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/bookmarks/intro',
                component: ComponentCreator('/buhaoqi/docs/bookmarks/intro', 'eab'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/csharp/ch01/overview',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch01/overview', '044'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch01/task1',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch01/task1', '43a'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch01/task2',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch01/task2', '11b'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch01/task3',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch01/task3', '08b'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch01/task4',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch01/task4', '8ee'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch01/task5',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch01/task5', '97d'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch02/overview',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch02/overview', '398'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch02/task1',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch02/task1', '180'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch02/task2',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch02/task2', '74e'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch02/task3',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch02/task3', 'ab8'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/exercise',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/exercise', 'edf'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/overview',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/overview', '9b3'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/brace',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/brace', '425'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/convert',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/convert', '539'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/implicit-convention',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/implicit-convention', '489'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/overview',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/overview', '9cd'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/parse',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/parse', 'e8e'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/type-alias',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/type-alias', '220'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/type-bool',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/type-bool', '5db'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/type-char',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/type-char', 'ebb'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/type-decimal',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/type-decimal', '641'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/type-enum',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/type-enum', '23e'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/type-int',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/type-int', 'bd2'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/type-object',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/type-object', '36a'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/type-string',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/type-string', '827'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task1/type-struct',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task1/type-struct', 'a7d'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task2/constant',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task2/constant', '04b'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task2/variable',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task2/variable', 'e66'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task3/arithmetic-operators',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task3/arithmetic-operators', '997'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task3/assignment-operators',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task3/assignment-operators', 'd42'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task3/comparison-operators',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task3/comparison-operators', 'bb2'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task3/conditional-operators',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task3/conditional-operators', 'ea2'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task3/increment-decrement-operators',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task3/increment-decrement-operators', '3c6'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task3/logical-operators',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task3/logical-operators', '7f4'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task3/overview',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task3/overview', 'f9b'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch03/task3/precedence-and-associativity',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch03/task3/precedence-and-associativity', '8a6'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/exercise',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/exercise', '679'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/overview',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/overview', '037'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/task1/console-read',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/task1/console-read', 'e9f'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/task1/console-readkey',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/task1/console-readkey', '640'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/task1/console-readline',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/task1/console-readline', 'e3c'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/task1/console-write',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/task1/console-write', 'c6f'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/task1/console-writeline',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/task1/console-writeline', '366'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/task2/if-statement',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/task2/if-statement', 'd5c'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/task2/switch-statement',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/task2/switch-statement', 'cd1'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/task3/loop-for',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/task3/loop-for', '944'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/task3/loop-while',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/task3/loop-while', '474'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/task4/break-statement',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/task4/break-statement', '3a6'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch04/task4/continue-statement',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch04/task4/continue-statement', 'f78'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch05/overview',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch05/overview', '458'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch05/task1',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch05/task1', 'd83'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch05/task2',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch05/task2', 'f31'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch05/task3',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch05/task3', 'ad6'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch05/task4',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch05/task4', 'b4c'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch06/overview',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch06/overview', '14b'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch06/task1',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch06/task1', '8f0'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch06/task2',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch06/task2', '921'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch06/task3',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch06/task3', '348'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch06/task4',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch06/task4', '628'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/ch06/task5',
                component: ComponentCreator('/buhaoqi/docs/csharp/ch06/task5', 'f1e'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/csharp/intro',
                component: ComponentCreator('/buhaoqi/docs/csharp/intro', 'f99'),
                exact: true,
                sidebar: "csharpSidebar"
              },
              {
                path: '/buhaoqi/docs/intro',
                component: ComponentCreator('/buhaoqi/docs/intro', 'a9d'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/mysql/intro',
                component: ComponentCreator('/buhaoqi/docs/mysql/intro', '05a'),
                exact: true,
                sidebar: "mysqlSidebar"
              },
              {
                path: '/buhaoqi/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/buhaoqi/docs/tutorial-basics/congratulations', 'e73'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/buhaoqi/docs/tutorial-basics/create-a-blog-post', '1ae'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/buhaoqi/docs/tutorial-basics/create-a-document', 'd45'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/buhaoqi/docs/tutorial-basics/create-a-page', '71c'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/buhaoqi/docs/tutorial-basics/deploy-your-site', 'c09'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/buhaoqi/docs/tutorial-basics/markdown-features', 'a45'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/buhaoqi/docs/tutorial-extras/manage-docs-versions', 'c67'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/buhaoqi/docs/tutorial-extras/translate-your-site', 'a74'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/tutorials/ch02/',
                component: ComponentCreator('/buhaoqi/docs/tutorials/ch02/', 'b4a'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/tutorials/cha01/',
                component: ComponentCreator('/buhaoqi/docs/tutorials/cha01/', '765'),
                exact: true
              },
              {
                path: '/buhaoqi/docs/tutorials/tutorials',
                component: ComponentCreator('/buhaoqi/docs/tutorials/tutorials', 'b48'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/buhaoqi/',
    component: ComponentCreator('/buhaoqi/', '40b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
