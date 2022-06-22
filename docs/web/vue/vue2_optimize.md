# 基于Vue2 + Vue Cli 3 + Webpack的优化记录

> 在公司里，接手了一个很老的一个Vue项目，各方面可能都需要优化一下来对它进行续命，所以这里记录一下。

## 优化点记录

*   使用this.\$api挂载axios方法，当一个方法需要请求的方法多了之后，容易形成"回调地狱"，多利用promise和async await 方法进行处理可能能让代码更加清晰易读可维护。

*   vue2.0之后，就不再对vue-resource更新，而是推荐使用axios。基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 Node.js 中使用。项目中封装的请求方法貌似是基于vue-resource的，拓展性不如axios更好。

*   Home.vue中书写了太多的代码，可以拆分成不同的layouts，将不同部分代码组件化。

*   Vuex模块化，根据项目的需求量不断增加，建议将store模块化，便于管理。

*   打包时可以使用gzip压缩包大小，性能优化，加快访问速度。（需要同时配置nginx）

*   可以根据模块，拆分路由。

*   可以使用`vue-lazyload` 进行图片懒加载，element-ui 的el-image中也有类似懒加载方法。

*   使用`image-webpack-loader`，解决请求大的静态资源文件时，加载慢的问题。

*   使用`@babel/plugin-transform-runtime`,减少es6转es5的冗余代码。(未成功，使用报错，不知道是webpack版本问题还是Babel版本问题)

*   `webpack-bundle-analyzer`，用于输出webpack打包后资源的图形化结果。

*   使用 `HappyPack` 来加速代码构建：由于运行在 Node.js 之上的 Webpack 是单线程模型的，所以 Webpack 需要处理的事情只能一件一件地做，不能多件事一起做。而 HappyPack 的处理思路是：将原有的 webpack 对 loader 的执行过程，从单一进程的形式扩展多进程模式，从而加速代码构建。

*   `progress-bar-webpack-plugin` 用来显示构建进度和构建耗时。

*   `uglifyjs-webpack-plugin` 可以进一步对js进行压缩，但是记得区分生产环境和开发环境。

*   可以使用Vue的异步组件，让一些不需要在进入页面时就加载的组件，在需要的时候再加载。

## 解决方案记录

[vue打包时gzip压缩的两种方案\_一只前端小菜鸟-CSDN博客](https://blog.csdn.net/qq_43363884/article/details/108195408)

[vue-cli3 项目从搭建优化到docker部署](https://juejin.cn/post/6844903768362860557)

[Vue项目Webpack优化实践，构建效率提高50%](https://juejin.cn/post/6844903745810104328)

[构建大型 Vue.js 项目的10条建议](https://juejin.cn/post/6844903993768935431)

[Vue 项目性能优化方案\_开发猫-CSDN博客\_vue项目优化](https://blog.csdn.net/qq_37939251/article/details/100031285?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162555125916780274135471%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D\&request_id=162555125916780274135471\&biz_id=0\&utm_medium=distribute.pc_search_result.none-task-blog-2\~all\~sobaiduend\~default-4-100031285.pc_search_result_before_js\&utm_term=vue+%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96)

[vue webpack打包优化](https://blog.csdn.net/song_de/article/details/81511284)

[我们为什么要做前端性能优化？](https://juejin.cn/post/6983911257329893413#heading-0)

