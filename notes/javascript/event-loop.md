---
id: event-loop
title: "Event Loop"
description: 介紹 JavaScript 的 Event Loop，以及其運作原理，並且介紹其運作順序，以及經典面試題
tags: [node,npm,javascript,event-loop]
keywords: [node,npm,javascript,event-loop]
created: '2023-12-01'
---

## 單線程 | Single Thread

JavaScript 是一個 Single Thread 的語言  
也就意味著 JavaScript 只能同時做一件事情  
如果有多件事情需要做，就必須等待前一件事情做完才能做下一件事情

## 任務 | Task aka. `MicroTask 宏任務` 

- main thread
- setTimeout
- setInterval
- I/O
- UI rendering
- postMessage
- MessageChannel
- setImmediate (Node.js)
- requestAnimationFrame (UI)


## 微任務 Micro Task

- await
- Promise
- Object.observe
- MutationObserver
- process.nextTick (Node.js)


## 執行順序

1. 執行目前在 Macro Task queue 當中的 task ，同時也會有任務被安排進 Macro / Micro Task queue
2. 當首輪 Macro Tasks 執行完畢後，會檢查 Micro Task queue 當中是否有任務，如果有的話，會執行 Micro Task queue 當中的任務
3. 當 Micro Task queue 當中的任務執行完畢後，會檢查 Macro Task queue 當中是否有任務，如果有的話，會執行 Macro Task queue 當中的任務
4. 重複 1 ~ 3 的步驟

![eventloop](./img/event-loop.gif)
*圖片取自於 [Priya Bagde](https://www.linkedin.com/posts/priya-bagde_frontend-javascript-react-activity-7109106985639251969-5GuJ/) 的文章，已獲得授權使用*

## 經典面試題

> 以下程式碼的輸出順序為何？ 並解釋原因 ?  
> 依照上述執行順序一步一步執行  
> 
> - 首先 define `async1` 跟 `async2` function 但都還沒有執行
> - 接著執行 `console.log('script start')` 
> - 接著 `setTimeout`  執行並且放置 `console.log('setTimeOut')` 到 Macro Task queue 當中  
> - 接著執行 `async1` 
> - 接著執行 `console.log('async1 start')` 並且 `async2` 被執行
> - 接著執行 `console.log('async2')`  
> - 放置 `console.log('async1 end')` 到 Micro Task queue 當中  
> - 回到主線程執行 new Promise `console.log('promise1')`  
> - 並且放置 `console.log('promise2')` 到 Micro Task queue 當中  
> - 接著執行 `console.log('script end')`  
> - 接著檢查 Micro Task queue 當中是否有任務，如果有的話，會執行 Micro Task queue 當中的任務  
> - 依 queue FIFO 序執行 `console.log('async1 end')` `console.log('promise2')`  
> - 接著檢查 Macro Task queue 當中是否有任務，如果有的話，會執行 Macro Task queue 當中的任務  
> - 依序執行 `console.log('setTimeout')`  
> ```js showLineNumbers 
> async function async1() {
>     console.log('async1 start');
>     await async2();
>     console.log('async1 end');
> }
> 
> async function async2() {
>     console.log('async2');
> }
> 
> console.log('script start');
> 
> setTimeout(function() {
>     console.log('setTimeout');
> }, 0)
> 
> async1();
> 
> new Promise(function(resolve) {
>     console.log('promise1');
>     resolve();
> }).then(function() {
>     console.log('promise2');
> });
> console.log('script end');
> ```
> ```text title="output"
> script start
> async1 start
> async2
> promise1
> script end
> async1 end
> promise2
> setTimeout
> ```