---
id: docusaurus-docs-feed-plugin
title: Docusaurus Docs Feed Plugin
description: 使用 docusaurus-docs-feed-plugin 生成文件的 Feeds，讓使用者可以看到最新的文章內容
tags: [docusaurus,plugin,feed,docs]
keywords: [docusaurus,plugin,feed,docs]
image: ./img/docusaurus-docs-feed-plugin.png
created: '2025-02-23'
modified: '2025-02-23'
---

# Docusaurus Docs Feed Plugin

由於目前 Docusaurus 生態系中尚未有專門生成 docs feed 的 plugin，因此我開發了一個自定義的 plugin 來滿足這個需求。

## 環境配置與前置作業

首先，我們需要安裝以下相依套件：

- yaml-front-matter：用於解析 markdown 檔案的 front matter
- husky：用於設定 git hooks

```bash
npm install yaml-front-matter husky --save-dev
```

接著，我們需要建立一個自定義的 plugins 資料夾來存放我們的 plugin

```bash
## 在根目錄建立 plugins 資料夾
mkdir plugins

## 在 plugins 資料夾建立 docs-feed.js，此處檔案名稱可以自定，後續會用於 docusaurus.config.js 的 plugins 設定
touch plugins/docs-feed.js
```

在 docusaurus.config.js 中加入 plugins 設定，將自定義的 plugin 加入設定檔中

```js
plugins: [
  // 這裡的路徑要與事前準備的 docs-feed.js 路徑相對應
  "./plugins/docs-feed.js",
],
```

## Plugin 實作說明

在完成基本設定後，我們可以開始實作 plugin 的核心功能。這個 plugin 主要負責:

1. 遍歷 docs 目錄結構
2. 解析 markdown 檔案的 front matter
3. 生成結構化的 feed 資料
4. 輸出為 JSON 格式

以下將詳細說明實作的程式碼及其功能。

```js
const fs = require("fs");
const path = require("path");
const yamlFront = require("yaml-front-matter");
const crypto = require("crypto");

const processMarkdownFile = (filePath, parentPath) => {
  const content = fs.readFileSync(filePath, "utf8");
  const frontMatter = yamlFront.loadFront(content);
  const fileName = path.basename(filePath, ".md");
  const notePath = parentPath ? `${parentPath}/${fileName}` : fileName;

  delete frontMatter.__content;

  return {
    ...frontMatter,
    path: notePath,
    title: frontMatter.title ?? "",
    description: frontMatter.description ?? "",
    created:
      frontMatter.created && frontMatter.created !== ""
        ? new Date(frontMatter.created).toDateString()
        : new Date().toDateString(),
    draft: frontMatter.draft ?? false,
  };
};

const traverseDirectory = (dirPath, files = {}, parentPath = "") => {
  const entries = fs.readdirSync(dirPath);

  entries.forEach((entry) => {
    const entryPath = path.join(dirPath, entry);
    const stats = fs.statSync(entryPath);

    if (stats.isDirectory()) {
      const newParentPath = parentPath ? `${parentPath}/${entry}` : entry;
      Object.assign(files, traverseDirectory(entryPath, files, newParentPath));
    } else if (entry.endsWith(".md")) {
      const hash = crypto.createHash("sha256").update(entryPath).digest("hex");
      files[hash] = {
        ...processMarkdownFile(entryPath, parentPath),
        fileName: entry,
      };
    }
  });

  return files;
};

module.exports = function (context) {
  return {
    name: "docusaurus-docs-feed-plugin",
    async contentLoaded() {
      // 這裡的 docs 路徑由實際上要產生的 docs 路徑決定
      const docsDir = path.resolve(context.siteDir, "./docs");
      const docs = traverseDirectory(docsDir);
      const outputPath = path.resolve(context.siteDir, "./docs/feed.json");

      fs.writeFileSync(outputPath, JSON.stringify(docs, null, 2));
    },
  };
};
```

由於 files 的 key 是根據內容產生的 hash 值，每次內容變更都會產生新的 hash。為了避免 hash 值變更卻未被加入 git 追蹤的情況，我們使用 husky 在 commit 前自動執行 build 並將產出加入 git stage 中。這樣可以確保 feed.json 的內容與實際文件保持同步。

```bash
npx husky init
```

```bash title=".husky/pre-commit"
npm run build && git add .
```

