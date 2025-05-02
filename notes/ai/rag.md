---
id: rag
title: "使用 EmbedJS 實作 RAG AI 機器人"
description: RAG 介紹及使用 EmbedJS 實作 RAG AI 機器人，精準答覆問題。
tags: [ai,embedjs,node,javascript]
keywords: [ai,embedjs,node,javascript]
created: '2025-05-02'
---


# 使用 EmbedJS 實作 RAG AI 機器人

![rag.png](./img/rag.png)

## 什麼是 RAG ?

RAG（ Retrieval Augmented Generation，擷取增強生成 ）是一種結合資訊檢索與生成式 AI 的技術架構，即使在 AI 技術日新月異的今日，它仍然佔有重要的一席之地。在當前 AI 應用領域中，我們經常使用 OpenAI、Claude、Grok 或 Gemini 等大型語言模型（LLM），但這些模型往往面臨兩個主要挑戰：一是產生「幻覺」（hallucination），即生成不實或無根據的內容；二是知識截止日期的限制，導致模型無法獲取最新資訊。

雖然近期 LLM 有顯著改進，例如增加了即時網路搜尋功能以獲取最新資訊，但這些改進仍有其侷限性。例如，它們無法檢索到：

1. 未被搜尋引擎索引的專有資料
2. 企業內部文件或知識庫
3. 需要特殊授權才能存取的資訊
4. 剛剛產生且尚未被索引的新資料
5. 特定領域的專業知識或非公開資料

這就是 RAG 技術的價值所在。通過將自定義知識庫與 LLM 結合，RAG 能夠：

- 大幅減少 AI 產生的幻覺
- 使 AI 能夠回答基於最新或專有資料的問題
- 提供更精確、更相關且更可靠的回應
- 讓 AI 能夠處理特定領域或組織的專業知識

RAG 的工作原理是先從知識庫中檢索相關資訊，然後將這些資訊作為上下文提供給 LLM，使其生成的回應能夠基於這些可靠的資訊，而非僅依賴模型訓練時學到的知識。這種方法不僅提高了回應的準確性，還能讓 AI 系統更好地適應特定使用場景和需求。

## EmbedJS 的 RAG 實用案例

EmbedJS 在 RAG 技術上提供精準回覆與搜尋，主要應用於：

### 1. 智能聊天機器人
- 檢索企業知識庫的客服機器人
- 提供產品文件的技術支援助手
- 回答公司政策的內部員工助理
- 醫療資訊查詢
- 金融數據分析

### 2. 語義化搜尋
- 文件管理系統的智能檢索
- 企業內部知識庫查詢
- 專業領域資料庫搜尋


## 如何使用 EmbedJS 實作自己的 RAG AI 機器人？


### 1. 預先安裝項目

在開始實作之前，請確保您已經設置好適合撰寫 TypeScript 的 Node.js 開發環境。我們需要安裝 EmbedJS 相關套件及其依賴項，這些套件將幫助我們構建 RAG 系統的各個組件。

首先，讓我們安裝必要的核心套件：
1. `@llm-tools/embedjs` - EmbedJS 的核心，提供 RAG 應用程式的基礎架構
2. `@llm-tools/embedjs-hnswlib` - 提供高效能的向量資料庫實現
3. `@llm-tools/embedjs-openai` - OpenAI 的整合模組，用於連接 OpenAI 的 LLM 和嵌入模型

雖然本文中我們選擇使用 OpenAI 作為我們的大語言模型提供者，但值得注意的是，EmbedJS 提供了豐富的模型整合選項。您可以根據專案需求、預算考量或特定功能需求選擇其他模型，如 Claude、Gemini 等。若想了解 EmbedJS 支援的完整模型列表及其特性比較，請參考[官方文檔](https://llm-tools.mintlify.app/components/llms/overview)。

執行以下命令安裝所需套件：

```sh
npm install --save @llm-tools/embedjs @llm-tools/embedjs-hnswlib @llm-tools/embedjs-openai
```

### 2. 建立 RAG Application Instance

在建立 RAG Application Instance 時，我們可以利用 EmbedJS API 來設定各個關鍵組件。這種方法讓我們能夠以清晰且直觀的方式依序配置：

1. **大語言模型（LLM Model）**：選擇適合您應用需求的語言模型，如 GPT-4、Claude 或 Gemini 等
2. **嵌入模型（Embedding Model）**：負責將文本轉換為向量表示的模型
3. **向量資料庫（Vector Database）**：用於儲存和檢索向量化後的文檔資料

```typescript
import { RAGApplicationBuilder, SIMPLE_MODELS, TextLoader } from '@llm-tools/embedjs';
import { HNSWDb } from '@llm-tools/embedjs-hnswlib';
import { OpenAiEmbeddings } from '@llm-tools/embedjs-openai';

// 記得提供使用 LLM 服務的 API KEY
process.env.OPENAI_API_KEY = 'sk-xxx';

async function main() {
  const app = await new RAGApplicationBuilder()
    .setModel(SIMPLE_MODELS.OPENAI_GPT4_O)
    .setEmbeddingModel(new OpenAiEmbeddings())
    .setVectorDatabase(new HNSWDb())
    .build();
}

main();
```


### 3. 透過 addLoader 餵資料給資料庫

EmbedJS 提供了多種 loader 類型，用於處理不同格式的資料來源。最基本且常用的是純文字（TextLoader）和網頁內容（WebLoader），但系統的靈活性遠不止於此。

根據您的應用場景需求，您可以選擇使用以下幾種常見的 loader：

1. **TextLoader** - 處理純文字內容，適合簡單的文檔或手動輸入的資訊
2. **WebLoader** - 抓取並處理網頁內容，自動處理 HTML 標記
3. **PDFLoader** - 解析 PDF 文件中的文字內容
4. **CSVLoader** - 處理結構化的表格數據
5. **JSONLoader** - 處理 JSON 格式的資料
6. **MarkdownLoader** - 專門處理 Markdown 格式文件

如果您需要處理更特殊的資料格式或想了解完整的 loader 支援列表，請參考 EmbedJS 官方文檔中的[資料來源概述](https://llm-tools.mintlify.app/components/data-sources/overview)。您也可以根據需求自定義 loader，以處理特定格式的專有資料。

```typescript
import { RAGApplicationBuilder, SIMPLE_MODELS, TextLoader } from '@llm-tools/embedjs';
import { HNSWDb } from '@llm-tools/embedjs-hnswlib';
import { OpenAiEmbeddings } from '@llm-tools/embedjs-openai';

process.env.OPENAI_API_KEY = 'sk-xxx';

async function main() {
  const app = await new RAGApplicationBuilder()
    .setModel(SIMPLE_MODELS.OPENAI_GPT4_O)
    .setEmbeddingModel(new OpenAiEmbeddings())
    .setVectorDatabase(new HNSWDb())
    .build();

  await app.addLoader(new TextLoader({ text: "相關內部資訊，可以添加多個 loader 給予資料庫，讓 LLM 能有更多的相關知識理解內部資訊。" }));
}

main();
```

### 4. 最終使用 query 進行自然語言查詢

完成資料載入後，我們可以使用 RAG 應用程式的 `query` 方法來進行自然語言查詢。

```typescript
import { RAGApplicationBuilder, SIMPLE_MODELS, TextLoader } from '@llm-tools/embedjs';
import { HNSWDb } from '@llm-tools/embedjs-hnswlib';
import { OpenAiEmbeddings } from '@llm-tools/embedjs-openai';

process.env.OPENAI_API_KEY = 'sk-xxx';

async function main() {
  const app = await new RAGApplicationBuilder()
    .setModel(SIMPLE_MODELS.OPENAI_GPT4_O)
    .setEmbeddingModel(new OpenAiEmbeddings())
    .setVectorDatabase(new HNSWDb())
    .build();

  await app.addLoader(new TextLoader({ text: "相關內部資訊，可以添加多個 loader 給予資料庫，讓 LLM 能有更多的相關知識理解內部資訊。" }));

  const result = await app.query('ex. 我想知道在我們公司請假需要幾天前告知主管？');

  console.log(result);
}

main();
```