import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Work less Learn more",
  description: "A site recording problems meet on work",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '侧边栏',
        items: [
          { text: 'LLM', link: '/AI' },
          { text: '工作日志', link: '/work_log' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guoxiaoshe' }
    ]
  },
  vite: {
    assetsInclude: ['**/*.awebp'] // 添加 .awebp 文件为静态资源
  },
  cleanUrls: true,
  base: '/learn_vite_press/'
})
