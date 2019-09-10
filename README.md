# Counselor Recruitment System

### 项目目录

```
counselor-recruitment-sys
├── dist
├── node_modules
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── api
│   ├── assets
│   ├── components
│   |    └── xxx.vue
│   ├── router
│   |    └── index.js
│   ├── store
│   |    ├── modules
│   |    └── index.js
│   ├── utils
│   ├── views
│   ├── App.vue
│   └── main.js
├── CHANGELOG.md
├── README.md
└── package.json
```

### 使用技术

- Vue
- ElementUI

### Project setup

```bash
# Install dependencies
yarn run serve

# Compiles and hot-reloads for development
yarn run serve

# Compiles and minifies for production
yarn run build

# Run your tests
yarn run test

# Lints and fixes files
yarn run lint
```

### 部分语法解释

#### 自定义路径

你会在大部分文件中遇到这样的路径：

```js
import '@/assets/iconfont/iconfont.css';
```

路径中的 `@` 表示自定义路径，这是webpack中的解析（resolve）功能，在 vue-cli3 之前，你可以在 `/build/webpack.base.conf.js` 内的 `resolve.alias` 内直接修改，但是 vue-cli3 内不在有该文件夹。

现在你可以在 `vue.config.js` 中添加 webpack 的相关配置。

另外，在vue-cli 的自定义路径中，`@` 默认配置为 `/src`，配置文件位于 `/node_modules/@vue/cli-service/lib/config/base.js`
