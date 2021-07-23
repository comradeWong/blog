module.exports = {
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
    // sidebar: [
    //   {
    //     title: 'HTML',   // 必要的
    //     path: '/public/web/html/uniapp_login',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       ['/public/web/html/uniapp_login', 'uniapp 微信小程序登录授权']
    //     ]
    //   }
    // ]
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
};
