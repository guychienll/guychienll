---
id: pencil
title: 在 AI 時代如何使用 Pencil 進行協作
description: 探索 Pencil Design-as-Code 如何透過 AI 協作實現設計與開發的無縫整合，從讀取設計系統、快速生成 UI 到 Git 版本控制的完整工作流程
sidebar_position: 3
created: "2026-03-03"
tags: [pencil, design-as-code, ai, design-system, collaboration, git]
keywords: [pencil, design-as-code, ai, design-system, collaboration, git]
---

# 在 AI 時代如何使用 Pencil 進行協作

## 1. 讀取與同步設計系統

### 1.1 讀取前端設計系統
可直接讀取前端既有的設計系統，使設計與實作保持一致：

- 若前端使用 **Tailwind CSS v3**  
  - 可讀取 `tailwind.config.js`  
  - AI Agent 可依程式碼生成設計系統並轉換為 Pencil Variables 記錄於 .pen 當中

- 若前端使用 **Tailwind CSS v4**  
  - 可讀取 `globals.css` 或包含 `@import "tailwindcss"` 的 CSS root 檔  
  - AI Agent 可依程式碼生成設計系統並轉換為 Pencil Variables 記錄於 .pen 當中

- **由程式碼直接生成並寫入 `pen.variables`**
  - 解析既有前端樣式設定（例如 Design Tokens、Theme、CSS Variables）
  - 將其結構化後自動寫入 `pen.variables`
  - 使 Pencil Variables 與實際程式碼完全對齊  
  - 精準度高

此方式可避免人工同步錯誤，確保設計與實作共用同一套 Token Source。

---

### 1.2 讀取既有設計稿或設計系統

- **Figma → Pencil 遷移**
  - 可直接複製 Figma Frame 貼至 Pencil
  - 透過 AI 解析該 Frame（Pen）
  - 自動建立對應的 Pen Variables

- **透過 MCP 協作**
  - 同時使用 Figma MCP 與 Pencil MCP
  - 指定需讀取的 Figma Frame
  - AI 可將其遷移至 Pencil 固定 Pen 並同步 Variables

此流程可降低設計工具切換成本。

---

## 2. 以 Prompt 快速生成設計稿

設計師可透過文字描述產品流程快速生成設計：

- 使用 **Plan Mode** / SDD 工具搭配既有設計系統  
- 利用 Skill 自動產生符合規範的畫面  
- 可快速建立初版 UI 並持續迭代  

---

## 3. 設計稿協作與討論

Pencil 採用 **Design as Code** 概念：

- 設計稿可透過 Commit 紀錄
- Comment 可與設計版本一併保存  
- 團隊可進行審核、討論與歷史追蹤  

設計協作模式更接近軟體開發流程。

---

## 4. Prototype 與測試

目前 Pencil 尚未完整支援 Prototype：

- 尚未提供完整互動原型能力  

現階段仍需搭配其他 Prototype 工具或實際開發環境驗證互動。

---

## 5. AI 設計產物交付前端

這是 Pencil 在設計工程整合上的核心價值。

### 5.1 設計與程式碼作為 Single Source of Truth（SSOT）

- `.pen` 檔案本質為 JSON like 格式  
- 可直接 Commit 至 Git Repository  
- 設計版本可與程式碼同步管理  

---

### 5.2 因 Design as Code（DaS）帶來的 Git 優勢

- 版本控制（Version Control）
- 併行開發（Branching）
- 審核流程（Pull Request）

設計因此具備工程級協作能力。

---

### 5.3 前端整合方式

在設計作為 SSOT 的前提下：

- 前端可使用 LLM 或解析工具直接讀取 `.pen`  
- 從設計系統建立基礎元件（Design Tokens → Components）  
- 再組裝為完整頁面  

此流程可降低設計與實作之間的落差。



# Figma VS. Penpot VS. Pencil 

| 面向                                  | Figma               | Penpot（原生 .penpot）          | Penpot（匯出 SVG / JSON / CSS 等） | Pencil（設計即程式碼）                        |
| ------------------------------------- | ------------------- | ------------------------------- | ---------------------------------- | --------------------------------------------- |
| 核心定位                              | SaaS 圖形化設計工具 | 開源圖形化設計工具（GUI-first） | 開源圖形化設計工具（GUI-first）    | Design-as-Code 平台                           |
| 設計來源                              | 雲端資料庫          | 雲端 / 自架伺服器資料庫         | GUI 匯出結果（非設計來源）         | Git Repo 中的 `.pen`                          |
| 原生設計檔格式                        | 專有雲端文件格式    | `.penpot` 二進位封裝檔          | SVG / CSS / JSON Token 等文字格式  | `.pen` 開放 JSON-like 規格                    |
| 是否可直接作為 Git 檔案做比較         | 否                  | 不建議（二進位無法有效 diff）   | 可，但需手動匯出管理               | 是                                            |
| Git 差異比較可讀性                    | 幾乎沒有            | 幾乎沒有                        | 中（文字差異，但非語意層）         | 高（文字 + 結構語意潛力）                     |
| 是否具備語意差異（Semantic Diff）能力 | 否                  | 否                              | 幾乎沒有                           | 可（需搭配 parser / schema）                  |
| 是否具備 DSL（領域專用語言）概念      | 無                  | 無                              | 無                                 | 有                                            |
| 是否可進行 Schema 驗證                | 否                  | 否                              | 否                                 | 可                                            |
| 是否支援 SVG 匯出                     | 可                  | 可                              | 即匯出結果                         | 通常由 DSL 渲染產生                           |
| 匯出流程是否需手動                    | 是                  | 是                              | 是                                 | 不一定（可自動化 pipeline）                   |
| GitHub 是否可直接圖像化顯示差異       | 不可                | 不可                            | 可                                 | 文字 diff（需額外工具強化才能夠比較圖像差異） |
| 是否達成 Design-as-Code               | 否                  | 否                              | 是                                 | 是                                            |
| 生態成熟度                            | 非常成熟            | 成熟                            | 成熟                               | 早期階段                                      |