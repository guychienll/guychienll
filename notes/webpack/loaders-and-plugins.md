---
id: loaders-and-plugins
title: Loaders & Plugins
description: Webpack 常用 loaders 與 plugins 使用方式介紹，及其適用場景與注意細節。
keywords: [
    'webpack',
    'javascript', 
    'loader',
    'css-loader',
    'style-loader',
    'postcss-loader',
    'mini-css-extract-plugin',
    'babel'
]
tags: [
    'webpack',
    'javascript',
    'loader', 
    'css-loader',
    'style-loader',
    'postcss-loader',
    'mini-css-extract-plugin',
    'babel'
]
created: '2023-12-10'
modified: '2023-12-10'
---


:::info
本文將會介紹 webpack 中的 loaders 與 plugins  
可以預先 clone 本文範例 playground [webpack-lab](https://github.com/guychienll/webpack-lab)  
:::

## Loaders

### css-loader

由於 webpack 只能處理 javascript 與 json 檔案  
如果需要讓 webpack 處理其他類型的檔案  
就需要使用與那類型檔案相對應的 loader 來處理  
例如 css 檔案就需要使用 css-loader 來處理  
這樣 webpack 才能正確的將 css 檔案打包進 bundle 中

需要先於 webpack.config.js 設置 css-loader

```js title="webpack.config.js" showLineNumbers
{
    test: /\.css$/,
    use: ['css-loader'],
},
```

然後在 js 中引入 css 檔案才能順利被 webpack 處理並且打包

```js title="main.js" showLineNumbers
import './style.css';
```

如果沒有設置 css-loader  
則會出現類似以下錯誤  
意思是 webpack 在告訴我們他看不懂 css 檔案

```js title="error" showLineNumbers
ERROR in ./src/base.css 1:0
Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> .header {
|     background-color: #000;
|     color: #fff;
@ ./src/index.js 3:0-20

webpack 5.89.0 compiled with 1 error in 395 ms
```

#### module

欲開啟 css module 功能
可以在 css-loader options 中設置 modules 為 true

```js {5} title="webpack.config.js" showLineNumbers
{
    test: /\.css$/,
    use: ['css-loader'],
    options: {
        modules: true,
    },
},
```

並且記得將 css 檔案改為慣例的後綴 `*.module.css`

:::info
這裡會說是慣例的原因  
是因為 css-loader 並不會強制開起 css module 功能後  
只能使用 .module.css 作為 css 檔案的後綴  
但大多數專案會以 .module 來識別 css module 的檔案
:::

```css title="base.module.css" showLineNumbers
.header {
    background-color: #000;
    color: #fff;
    padding: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    user-select: none;
}
```

這樣就可以在 js 中使用 css module 的方式引入 css 檔案

```js {1,6} title="main.js" showLineNumbers
import styles from './base.module.css';

const root = document.createElement('div');

const header = document.createElement('div');
header.className = styles.header;
header.innerHTML = 'this is a header';

root.appendChild(header);
document.body.appendChild(root);
```

也請記得因為副檔名的改變  
所以在 webpack.config.js 中的 test 也要做相對應的修改  
更改結束後重新執行 webpack 並且重新整理網頁

```js {2} title="webpack.config.js" showLineNumbers
{
    test: /\.module.css$/,
    use: ['css-loader'],
    options: {
        modules: true,
    },
},
```

就可以看見 css module 的效果  
會為你的 css class 建立出 unique 的名稱  
避免 css pollution 的問題

![css-module](./img/css-module.png)

###### localIdentName

如果是認為 css module 產生出來的名稱在開發時不易閱讀  
可以在 css-loader options 中設置 localIdentName 來自訂名稱  
但通常建議只使用於開發時  
於 production 時還是可以使用預設的名稱或是不帶有意義的名稱

```js {6} title="webpack.config.js" showLineNumbers
{
    test: /\.module.css$/,
    use: ['css-loader'],
    options: {
        modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
        },
    },
},
```

### style-loader

css-loader 只是將 css 檔案打包進 bundle 中  
但是並不會將 css 內容真正的載入到網頁中  
所以還需要使用 style-loader 來將 css 檔案載入到網頁中

更具體一點來說明  
通常我們會將 css 檔案寫在一個獨立的 css 檔案中  
然後在 js 中引入 css 檔案

```css title="base.css" showLineNumbers
.header {
    background-color: #000;
    color: #fff;
    padding: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    user-select: none;
}
```

```js title='main.js' showLineNumbers
import './base.css';

const root = document.createElement('div');

const header = document.createElement('div');
header.className = 'header';
header.innerHTML = 'this is a header';

root.appendChild(header);
document.body.appendChild(root);
```

並且會有一份 html 檔案
用來呈現最終網頁渲染出來的結果

```html title="index.html" showLineNumbers
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Webpack App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="main.js"></script>
    </head>
    <body></body>
</html>
```

到此我們會認為我們於 base.css 所撰寫的樣式  
應該會正常的顯示在 header 元素上  
但是實際上並不會如此

![before-add-style-loader](./img/before-add-style-loader.png)

這是因為 css-loader 只是將 css 檔案打包進 bundle 中  
但是並不會將 css 內容真正的載入到網頁中  
所以還需要使用 style-loader 來將 css 檔案載入到網頁中  
它實際上作為是將我們所撰寫的 css 放入 style tag 當中  
並且將 style tag 放入 head tag 中

```js title="webpack.config.js" showLineNumbers
{
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
},
```

:::caution
請注意順序性  
webpack loader 將會依照由後往前的順序執行  
必須先將 css 打包進 js 檔案中  
才能進一步使用 style-loader 將 css 載入到網頁中  
:::

此時重新執行 webpack 並且重新整理網頁  
將會看到我們所撰寫的 css 樣式如實的顯示在 header 元素上  
並且能於 devtool 中看到 style tag 已經被放入 head tag 中

![after-add-style-loader](./img/after-add-style-loader.png)

### mini-css-extract-plugin

而更多時候我們會希望將 css 檔案獨立出來  
而不是將 css 打包進 js 檔案中  
這時候就需要使用 mini-css-extract-plugin 來將 css 檔案獨立出來

```js title="webpack.config.js" showLineNumbers
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
};
```

其功能與 style-loader 類似  
因此請勿同時使用 style-loader 與 mini-css-extract-plugin  
差異在於 style-loader 會將 css 放入 style tag 中  
而 mini-css-extract-plugin 則是將 css 放入獨立的 css 檔案中  
並且透過 link tag 將 css 檔案載入到網頁中

```html {8} title="index.html" showLineNumbers
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Webpack App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="main.js"></script>
        <link href="main.css" rel="stylesheet" />
    </head>
    <body></body>
</html>
```

可以看見 css 檔案已經被獨立出來  
devtool network 當中也能看見 main.css 單獨被載入

![after-mini-css-extract-plugin](./img/after-mini-css-extract-plugin.png)

### postcss-loader

針對 css 檔案進行處理  
擴充或是向前兼容 css 語法  
以便於在不同瀏覽器上都能正常顯示

#### postcss-preset-env

##### browsers

可以於 options 設定 browsers 其設定值將會完全覆蓋 `.browserslistrc` 的設定值  
而如果沒有特別設定 browsers 則會使用 `.browserslistrc` 的設定值

```js {9} showLineNumbers
{
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        [
          'postcss-preset-env',
          {
            browsers: 'last 2 versions',
          },
        ],
      ],
    },
  },
},
```

#### autoprefixer

目的用於自動加入 css 前綴  
用以兼容於不同瀏覽器  
而上述提到的 postcss-preset-env  
其實就是一個整合了 autoprefixer 的 postcss plugin  
所以如果有使用了 postcss-preset-env  
就不需要再額外安裝 autoprefixer  
其中差異在於  
postcss-preset-env 還會包含將 css 新語法轉換成舊語法的功能  
而 autoprefixer 僅僅只是加入 css 前綴的功能

### svgr-loader

SVGReact Component Loader
針對 svg 檔案轉換成 React Component

```js {9} showLineNumbers
{
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
    },
  ],
},
```

加入 loader 後即可以在 js 中引入 svg 檔案  
並且直接當作 React Component 使用  

```js {12} title="main.js" showLineNumbers
import * as React from "react";
import ReactDOM from "react-dom/client";
import ReactIcon from "./assets/react-logo.svg";

const root = document.createElement("div");
document.body.appendChild(root);

function App() {
    return (
        <div>
            <h1>SVGR Loader Playground</h1>
            <ReactIcon width={100} height={100} />
        </div>
    );
}

ReactDOM.createRoot(root).render(<App />);
```

如果有 clone playground 可以嘗試切換分支到 [playground/svgr-loader](https://github.com/guychienll/webpack-lab/tree/playground/svgr-loader)