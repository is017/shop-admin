# shop-admin
=======
# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


windicss 警告问题 解决出现Unknown at rule @applyscss(unknownAtRules)等警告
安装 Stylelint
npm install --save-dev stylelint stylelint-config-standard
将stylelint.config.js文件放入项目的根文件夹中。
为 Visual Studio Code 安装两个扩展：Stylelint，WindiCSS IntelliSense
调整 Visual Studio Code 设置：
将这三行代码放入settings.json文件您的 Visual Studio Code 中。它们禁用所有内置 CSS 验证。这些现在由 Stylelint 处理。
"css.validate": false,
"less.validate": false,
"scss.validate": false
@apply下面的警告消失