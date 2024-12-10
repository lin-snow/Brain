import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "L1nSn0w",
  description: "L1nSn0w的成长之路",
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
    ],

    sidebar: [
      {
        text: '前端',
        items: [
          { text: 'CSS', link: '/frontend/css' },
          { text: 'JavaScript', link: '/frontend/javascript' },
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'GoLang', link: '/backend/golang' },
          { text: 'Java', link: '/backend/java' },
        ]
      },
      {
        text: '数据库',
        items: [
          { text: 'MySQL', link: '/database/mysql' },
          { text: 'Redis', link: '/database/redis' },
        ]
      },
      {
        text: '常用工具',
        items: [
          { text: 'Git', link: '/basic/git' },
          { text: 'Docker', link: '/basic/docker' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lin-snow/' }
    ],

    search: {
      provider: 'local'
    },
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
