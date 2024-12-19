import { defineConfig } from 'vitepress'
import mdItAttrs from 'markdown-it-attrs'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "L1nSn0w の 第二大脑🧠",
  description: "L1nSn0w的成长之路",
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', color: '#42b983', href: '/safari-pinned-tab.svg' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'android-chrome', sizes: '192x192', href: '/android-chrome-192x192.png' }],
    ['link', { rel: 'android-chrome', sizes: '512x512', href: '/android-chrome-512x512.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#2d89ef' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'description', content: 'L1nSn0w的成长之路' }],
    ['meta', { name: 'author', content: 'L1nSn0w' }],
    ['meta', { name: 'keywords', content: 'L1nSn0w, L1nSn0w的成长之路, L1nSn0w的博客, L1nSn0w的技术博客, L1nSn0w的个人博客, L1nSn0w的学习之路, L1nSn0w的前端之路, L1nSn0w的后端之路, L1nSn0w的数据库之路, L1nSn0w的常用工具之路' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', 
        items: [
          { text: 'HTML', link: '/frontend/html' },
          { text: 'CSS', link: '/frontend/css' },
          { text: 'JavaScript', link: '/frontend/javascript' },
          { text: 'TypeScript', link: '/frontend/typescript' },
          { text: 'Vue', link: '/frontend/vue' },
          { text: 'React', link: '/frontend/react' },
        ]
      },
      { text: '后端', 
        items: [
          { text: 'GoLang', link: '/backend/golang' },
          { text: 'Java', 
            items: [
              { text: 'JavaSE', link: '/backend/java' },
              { text: 'JavaWeb', link: '/backend/javaweb' },
            ]
           },
        ]
       },
      { text: '数据库', 
        items: [
          { text: 'SQL', link: '/database/sql'},
          { text: 'MySQL', link: '/database/mysql' },
          { text: 'Redis', link: '/database/redis' },
        ]
       },
      { text: '常用工具', 
        items: [
          { text: 'Git', link: '/basic/git' },
          { text: 'Docker', link: '/basic/docker' },
        ]
       },
      { text: '其他',
        items: [
          { text: 'C++', link: '/others/cpp' },
          { text: 'Python', link: '/others/python' },
        ]
       },
       { text: '笔记',
        items: [
          {
            items: [
              { text: '一些笔记', link: '/notes/' },
            ]
          },
          { 
            text: '踩坑笔记', 
            items: [
              { text: 'CSS踩坑笔记', link: '/notes/pitfalls/css' },
            ]
           },
        ]
       }
    ],

    sidebar: {
      // 前端侧边栏配置
      '/frontend/': [
        { text: 'HTML', 
          collapsed: false,
          items: [
            { text: 'HTML基础', link: '/frontend/html' },
          ]
         },
        { text: 'CSS',
          collapsed: false,
          items: [
            { text: 'CSS基础', link: '/frontend/css' },
          ]
         },
        { text: 'JavaScript',
          collapsed: false,
          items: [
            { text: 'JavaScript基础' , link: '/frontend/javascript' },
            { text: 'JavaScript对象' , link: '/frontend/javascript/object' },
            { text: 'JavaScript数据类型', link: '/frontend/javascript/datatype' },
            { text: 'JavaScript高级', link: '/frontend/javascript/advance' },
            { text: 'JavaScript文档和其他', link: '/frontend/javascript/document' },
          ]
        },
        {
          text: 'TypeScript',
          collapsed: false,
          items: [
            { text: 'TypeScript基础', link: '/frontend/typescript' },
            { text: 'TypeScript项目', link: '/frontend/typescript/tsproject' },
            { text: 'TypeScript类型系统', link: '/frontend/typescript/type-system' },
          ]
        },
        {
          text: 'Vue',
          collapsed: false,
          items: [
            { text: 'Vue基础', link: '/frontend/vue' },
          ]
        },
        {
          text: 'React',
          collapsed: false,
          items: [
            { text: 'React基础', link: '/frontend/react' },
          ]
        }
      ],

      // 后端侧边栏配置
      '/backend/': [
        { text: 'GoLang', 
          collapsed: false,
          items: [
            { text: 'GoLang基础', link: '/backend/golang' },
          ]
         },
        { text: 'Java', 
          collapsed: false,
          items: [
            { text: 'Java开发环境', link: '/backend/java/java-env' },
            { text: 'JavaSE', link: '/backend/java' },
            { text: 'Jave数据结构', link: '/backend/java/data-structure' },
            { text: 'JavaSE 高级', link: '/backend/java/java-advance' },
          ]
         },
         {
          text: 'JavaWeb',
          collapsed: false,
          items: [
            { text: 'JavaWeb基础', link: '/backend/javaweb' },
          ]
         }
      ],

      // 数据库侧边栏配置
      '/database/': [
        { text: 'SQL', link: '/database/sql'},
        { text: 'MySQL', link: '/database/mysql' },
        { text: 'Redis', link: '/database/redis' },
      ],

      // 常用工具侧边栏配置
      '/basic/': [
        { 
          text: 'Git',
          collapsed: false, 
          items: [
            { text: 'Git常用命令', link: '/basic/git' },
            { text: 'Git相关技巧', link: '/basic/git/git-tricks' },
          ]
         },
        { 
          text: 'Docker',
          collapsed: false, 
          items: [
            { text: 'Docker常用命令', link: '/basic/docker' },
          ]
         },
      ],

      // 其他侧边栏配置
      '/others/': [
        { 
          text: 'C++',
          collapsed: false, 
          items: [
            { text: 'C++相关', link: '/others/cpp' },
            { text: 'C++开发环境', link: '/others/cpp/make-env' },
          ]
        },
        { 
          text: 'Python',
          collapsed: false, 
          items: [
            { text: 'Python', link: '/others/python' },
          ]
        }
      ],

      // 笔记侧边栏配置
      '/notes/': [
        { text: '笔记', 
          collapsed: false,
          items: [
            { text: 'JS的Node包管理的区别', link: '/notes/npm-difference' },
            { text: '如何理解npm产生的文件', link: '/notes/npm-files' },
          ]
         },
        {
          text: '踩坑笔记',
          collapsed: false,
          items: [
            { text: 'CSS踩坑笔记', link: '/notes/pitfalls/css' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lin-snow/' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present L1nSn0w.'
    }
  },

  // 自定义
  srcDir: './src',

  markdown: {
    config: (md) => {
      md.use(mdItAttrs);

      // 自定义 Markdown-it 图片渲染规则
      const defaultRender = md.renderer.rules.image || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };

      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        token.attrs = token.attrs || [];
        // 添加 data-fancybox 属性
        token.attrs.push(['data-fancybox', 'gallery']);
        // 添加懒加载支持
        token.attrs.push(['loading', 'lazy']);
        return defaultRender(tokens, idx, options, env, self);
      };
    }
  },

  sitemap: {
    hostname: 'https://brain.linsnow.cn'
  },

  lastUpdated: true,
})
