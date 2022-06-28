module.exports = {
  head: [['link', { rel: 'icon', href: 'rocket.png' }]],
  title: 'Redrum\'s Blog',
  description: 'Knowledge Repo',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '前端',
        items: [
          { text: 'vue', link: '/web/vue/' },
          { text: 'react', link: '/react/' },
          { text: 'flutter', link: '/mobile/flutter/'},
          { text: 'html', link: '/web/html/' },
          { text: 'css', link: '/web/css/' },
          { text: 'javascript', link: '/web/javascript/' },
          { text: 'typescript', link: '/web/typescript/' },
          { text: 'uniapp', link: '/mobile/uniapp/' },
          { text: '微信小程序', link: '/mobile/wechat/' },
          { text: 'node', link: '/node/' },
        ],
      },
      { text: '面试题', link: '/interview/' },
      { text: '搭建教程', link: 'https://juejin.cn/post/6844904185838698509' }
    ],
    sidebar: {
      '/web/html/': [
        {
          title: 'HTML', // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/web/html/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            {
              title: 'kkFileView的部署问题',
              path: '/web/html/kk_file_view'
            }
          ],
        },
      ],
      '/web/css/': [
        {
          title: 'css', // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/web/css/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [],
        },
      ],
      '/web/javascript/': [
        {
          title: 'javascript', // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/web/javascript/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            {
              title: 'JavaScript隐式转换的问题',
              path: 'https://chinese.freecodecamp.org/news/javascript-implicit-type-conversion/'
            }
          ],
        },
      ],
      '/web/typescript/': [
        {
          title: 'typescript', // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/web/typescript/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [],
        },
      ],
      '/web/vue/': [
        {
          title: 'vue', // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/web/vue/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            {
              title: '基于Vue2 + Webpack的优化',
              path: '/web/vue/vue2_optimize',
            },
            {
              title: 'Vue2 迁移 Vue3',
              path: '/web/vue/vue2_to_vue3',
            },
            {
              title: 'Vue CLI 迁移 Vite',
              path: '/web/vue/vue_cli_to_vite',
            },
          ],
        },
      ],
      '/react/': [
        {
          title: 'react', // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/react/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            {
              title: 'React Native开发环境的搭建',
              path: '/react/rn_dev_environment',
            },
          ],
        },
      ],
      '/node/': [
        {
          title: 'node.javascript', // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/node/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [],
        },
      ],
      '/interview/': [
        {
          title: '面试题', // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/interview/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            {
              title: 'Vue_美腾面试题',
              path: '/interview/mt_interview',
            },
            {
              title: 'Vue_基础知识30问',
              path: 'https://juejin.cn/post/6930897845369356295',
            },
          ],
        },
      ],
      '/mobile/uniapp/': [
        {
          title: 'uniapp', // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/mobile/uniapp/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            {
              title: 'uniapp 微信小程序登录授权',
              path: '/mobile/uniapp/uniapp_login',
            },
          ],
        },
      ],
      '/mobile/wechat/': [
        {
          title: '微信小程序', // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/mobile/wechat/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [],
        },
      ],
      '/mobile/flutter/': [
        {
          title: 'Flutter', // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/mobile/flutter/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [],
        },
      ],
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    '@vuepress/nprogress',
    '@vuepress/medium-zoom'
  ],
}
