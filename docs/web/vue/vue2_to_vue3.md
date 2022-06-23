# Vue2迁移到Vue3

## 参考资料

<https://lsnsh.site/2021/10/use-gogocode-upgrade-vue2-project-to-vue3/>

<https://juejin.cn/post/7012494586664714248>

<https://gogocode.io/zh/docs/vue/vue2-to-vue3>

<https://element-plus.org/zh-CN/guide/migration.html>

## 问题

1.  文件转换异常，规则：filters，文件：D:\project\company\manwei\web-agility-operation\src\views\customer-service\components\message.vue

2.  ValidationError: Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.（暂时注释掉了vue.config.js 中得 devServer）

3.  Codegen node is missing for element/if/for node. Apply appropriate transforms first （这个问题是因为template具名插槽，嵌套使用导致）

4.  将vue-i18n版本升级为9.1.10（当前最新版本），然后修改i18n的导入写法。

5.  svg-icon 显示空白。(需要修改src/icon/index.js下的注册写法，以及在main.js中的引入方式，好像是因为这得先将svg-icon挂载到全局变量，然后再执行webpack获取svg的方法才能正常使用).

6.  因为引入的iconfont很多类名是用el-icon-\*来命名，所以gogocode在转化element ui代码时，把这些都转化成了\<el-icon>所以导致了许多图标不能使用，并且导致运行警告。（这个没办法，只能一个一个文件找，然后手动改回i class这种写法）。

7.  ::v-deep 这种写法被弃用，需要改为:deep()这种写法。

8.  因为element ui升级成了element-plus，虽然说组件是用方法上变化不大，但是部分组件的内部实现上发生了改变，所以导致了一些时候，我们写代码时直接修改组件的类样式，原来好使，现在不好使了。（el-input）

9.  vue3.0 scss :export不能导出的问题，原因是因为文件名，你得把scss文件的名字。由如（variables.scss → variables.module.scss），即可，参考<https://cli.vuejs.org/guide/css.html#css-modules>。
