import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "L1nSn0w",
  description: "L1nSn0w的成长之路",
  base: '/',
  lang: 'zh-CN',
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
          { text: 'CSS', link: '/frontend/css' },
          { text: 'JavaScript', link: '/frontend/javascript' },
        ]
      },
      { text: '后端', 
        items: [
          { text: 'GoLang', link: '/backend/golang' },
          { text: 'Java', link: '/backend/java' },
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
    ],

    sidebar: [
      {
        text: '前端',
        collapsed: true,
        items: [
          { text: 'CSS', link: '/frontend/css' },
          { text: 'JavaScript',
            collapsed: true,
            items: [
              { text: 'JavaScript基础' , link: '/frontend/javascript' },
              { text: 'JavaScript对象' , link: '/frontend/javascript/object' },
              { text: 'JavaScript数据类型', link: '/frontend/javascript/datatype' },
              { text: 'JavaScript高级', link: '/frontend/javascript/advance' },
              { text: 'JavaScript文档', link: '/frontend/javascript/document' },
            ]
          },
        ]
      },
      {
        text: '后端',
        collapsed: true,
        items: [
          { text: 'GoLang', link: '/backend/golang' },
          { text: 'Java', link: '/backend/java' },
        ]
      },
      {
        text: '数据库',
        collapsed: true,
        items: [
          { text: 'MySQL', link: '/database/mysql' },
          { text: 'Redis', link: '/database/redis' },
        ]
      },
      {
        text: '常用工具',
        collapsed: true,
        items: [
          { 
            text: 'Git',
            collapsed: true, 
            items: [
              { text: 'Git常用命令', link: '/basic/git' },
              { text: 'Git代理配置', link: '/basic/git/git-proxy' },
            ]
           },
          { 
            text: 'Docker',
            collapsed: true, 
            items: [
              { text: 'Docker常用命令', link: '/basic/docker' },
            ]
           },
        ]
      },
      {
        text: '其他',
        collapsed: true,
        items: [
          { 
            text: 'C++',
            collapsed: true, 
            items: [
              { text: 'C++', link: '/others/cpp' },
            ]
          },
          { 
            text: 'Python',
            collapsed: true, 
            items: [
              { text: 'Python', link: '/others/python' },
            ]
          }
        ]
      }
    ],

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
