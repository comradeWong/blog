## 资料

[一个真实的Vue CLI项目迁移到vite](https://juejin.cn/post/7012494586664714248) （博哥分享的）

[如何从Vue Cli 迁移到 Vite](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/) (我是根据这个教程的步骤做的)

[一次大型项目从vue-cli4成功升级到vite的经历](http://www.landejin.cn/#/pages/web/article/detail?id=62627c07c016f4000183a16a)

## 问题

### Preprocessor dependency "sass" not found. Did you install it?

需要在vite.config.js中写入一下代码

```javascript
css: {
  loaderOptions: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
        引入var.scss全局预定义变量，
        如果引入多个文件，
        可以使用
        '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
        这种格式
        */
        additionalData: `@import "~@/styles/var.scss";`,
      }
    }
  }
  }
```



### vite The JSX syntax extension is not currently enabled

因为你的代码中存在jsx语法，解决这个问题的方法有这几种。

*   vite配置文件加上该plugin(对我无用)

vite.config.js => plugins**:** \[createVuePlugin({ jsx**:** **true** })]

*   如果是在js文件中带有jsx语法, 则将改为.jsx扩展名文件

.js(has jsx) => .jsx

*   如果是在.vue文件中带有jsx语法, 则在script标签下增加该标识

.vue(has jsx) => **<**script lang**=**"jsx"**>**

以上几种解决办法对我来说都有用, **但是我有成百上千个文件呢...**, 总不能可能一个一个改吧. 我个人去搜索了网上是有开发好的插件, 但是在我的项目都不适用. 为此我自己写了个脚本, 实际的去帮我给这些带有jsx语法的 .vue文件, 自动加上标签.**npm搜索:** [vite-vue2-script-jsx](https://link.zhihu.com/?target=https%3A//www.npmjs.com/package/vite-vue2-script-jsx)

可以使用 @vitejs/plugin-vue-jsx 这个组件来解决。

### SVG Icon 的改写

主要是因为不能使用webpack的require功能了

这个文章给出了解决方法<https://segmentfault.com/a/1190000039255368>



### 记得安装Sass

### 兼容 commonJs写法

原因是 代码中大量使用了 module.exports = lodash 这么写是有问题滴。

这里和 webpack 不一样，webpack 把文件送到浏览器之前是会进行预打包的，这时候已经将 require 转换成 浏览器能兼容的方法了。(这个出现的原因可能是依赖中通过import导入一个ES6模块，但是这个ES6模块中使用了require，当Vite去构建的时候，发现是采用import导入的就不会预编译，从而报错)

项目中有用到commonjs规范的依赖，比如let md5 = require('js-md5').create()，webpack是基于node开发的，支持require语法，在打包的时候webpack也会正确处理这部分代码，但在vite中不会，所以需要将这部分代码改成import md5 from 'js-md5'

项目开发环境下，一些node\_modules中的包也会存在commonjs的代码，我们可以通过vite的插件 [vite-plugin-commonjs](https://www.npmjs.com/package/@originjs/vite-plugin-commonjs) 来实现这部分代码的转化，保证开发环境的正常运行。

pnpm add @originjs/vite-plugin-commonjs --dev

```javascript
// vite.config.js  忽略其他代码
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

export default ({ mode }) => {
    return defineConfig({
        plugins: [
            // ...
            viteCommonjs() // 兼容vite中的cjs导入语法
        ]
    })
})
```

### vue3 在vite.config中无法使用import.meta.env.\*的解决办法

<https://www.jianshu.com/p/4973bd983e96>

### Error: Module "path" has been externalized for browser compatibility and cannot be accessed in client code

原因是 vite 源码中设定了不允许在客户端代码中访问内置模块代码（参考 [issue](https://github.com/remarkjs/react-markdown/issues/632) )

解决方法：使用 path-browserify 代替 path 模块，详细内容参考 NPM解释（[path-browserify](https://www.npmjs.com/package/path-browserify)）

### Cannot read properties of undefined (reading 'config')

我也不知道为什么，找到了报错的地方的代码如下：

```javascript
Lbe() && window.$vueApp && (window.$vueApp.config.errorHandler = function (e, t, n, r) {
  st(() => {
    pn.dispatch("errorLog/addErrorLog", {
      err: e,
      vm: t,
      info: n,
      url: window.location.href
    }), console.error(e, n)
  })
});
```

然后我在项目里全局搜索了这个东西，找到了一个errorLog.js文件，然后把它全部注释掉了，然后再试了一下就行了。

### require is not defined

项目里不能有require('')这种写法。

所以如果是引入第三方模块，请改为

import \* as \_ from 'lodash'

如果是引入图片请改为

```javascript
const getImageUrl = url => {
  return new URL(url, import.meta.url).href;
}

<img
  class="pic-404__parent"
  :src="getImageUrl('../../assets/404_images/404.png')"
  alt="404"
/>
```
