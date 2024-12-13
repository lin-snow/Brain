import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "L1nSn0w",
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
            ]
           },
        ]
       },
      { text: '数据库', 
        items: [
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
          collapsed: true,
          items: [
            { text: 'HTML基础', link: '/frontend/html' },
          ]
         },
        { text: 'CSS',
          collapsed: true,
          items: [
            { text: 'CSS基础', link: '/frontend/css' },
          ]
         },
        { text: 'JavaScript',
          collapsed: true,
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
          collapsed: true,
          items: [
            { text: 'TypeScript基础', link: '/frontend/typescript' },
            { text: 'TypeScript项目', link: '/frontend/typescript/tsproject' },
            { text: 'TypeScript类型系统', link: '/frontend/typescript/type-system' },
          ]
        },
        {
          text: 'Vue',
          collapsed: true,
          items: [
            { text: 'Vue基础', link: '/frontend/vue' },
          ]
        },
        {
          text: 'React',
          collapsed: true,
          items: [
            { text: 'React基础', link: '/frontend/react' },
          ]
        }
      ],

      // 后端侧边栏配置
      '/backend/': [
        { text: 'GoLang', 
          collapsed: true,
          items: [
            { text: 'GoLang基础', link: '/backend/golang' },
          ]
         },
        { text: 'Java', 
          collapsed: true,
          items: [
            { text: 'JavaSE', link: '/backend/java' },
          ]
         },
      ],

      // 数据库侧边栏配置
      '/database/': [
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
          collapsed: true, 
          items: [
            { text: 'C++相关', link: '/others/cpp' },
            { text: 'C++开发环境', link: '/others/cpp/make-env' },
          ]
        },
        { 
          text: 'Python',
          collapsed: true, 
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
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    }
  },

  sitemap: {
    hostname: 'https://brain.linsnow.cn'
  },

  lastUpdated: true
})
