module.exports = {
  head: [['link', { rel: 'icon', href: 'rocket.png' }]],
  title: '树荫下的老躺椅',
  description: '前端知识仓库',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '前端',
        items: [
          { text: 'html', link: '/web/html/' },
          { text: 'css', link: '/web/css/' },
          { text: 'javascript', link: '/web/javascript/' },
          { text: 'typescript', link: '/web/typescript/' },
        ],
      },
      { text: 'vue', link: '/web/vue/' },
      { text: 'react', link: '/react/' },
      {
        text: '移动端',
        items: [
          { text: 'uniapp', link: '/mobile/uniapp/' },
          { text: '微信小程序', link: '/mobile/wechat/' },
        ],
      },
      { text: 'node', link: '/node/' },
      { text: '面试题', link: '/interview/' },
    ],
    sidebar: {
      '/web/html/': [
        {
          title: 'HTML', // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/web/html/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [],
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
          children: [],
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
          children: [],
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
          children: [],
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
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    '@vuepress/nprogress',
    '@vuepress/medium-zoom',
  ],
}
