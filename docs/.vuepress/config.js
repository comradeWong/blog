module.exports = {
  head: [
    [
      'link',
      {rel: 'icon', href: 'rocket.png'}
    ]
  ],
  title: "向西引北风的博客",
  description: "向西引北风的博客，随便写点心得，收集优质文章",
  themeConfig: {
    nav: [
      {text: "主页", link: "/"},
      {
        text: "前端",
        items: [
          {text: "html", link: "/web/html/"},
          {text: "css", link: "/web/css/"},
        ],
      },
      {text: "面试问题", link: "/interview/"},
    ],
    sidebar: {
      '/web/html/': [
        {
          title: 'HTML',   // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
          path: '/web/html/',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            {
              title: 'uniapp 微信小程序登录授权',
              path: '/web/html/uniapp_login'
            }
          ]
        }
      ],
    }
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/active-header-links']
};
