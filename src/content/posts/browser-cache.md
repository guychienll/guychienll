---
title: 'Browser Cache'
author: Guy Chien
date: '2025-01-09'
image:
    url: '/browser.webp'
    alt: 'Browser Cache Notes'
---

> ## [Targets of caching operations](https://udn.realityripple.com/docs/Web/HTTP/Caching#Targets_of_caching_operations)
>
> HTTP caching is optional, but reusing a cached resource is usually desirable. However, common HTTP caches are typically limited to caching responses to GET and may decline other methods. The primary cache key consists of the request method and target URI (oftentimes only the URI is used as only GET requests are caching targets). Common forms of caching entries are:
>
> Successful results of a retrieval request: a 200 (OK) response to a GET request containing a resource like HTML documents, images or files.
> Permanent redirects: a 301 (Moved Permanently) response.
> Error responses: a 404 (Not Found) result page.
> Incomplete results: a 206 (Partial Content) response.
> Responses other than GET if something suitable for use as a cache key is defined.
> A cache entry might also consist of multiple stored responses differentiated by a secondary key, if the request is target of content negotiation. For more details see the information about the Vary header below.

## Pros

-   增快網頁載入速度
-   減少 Server 負擔

## Cons

-   有機會拿到 Outdated Data

## Cache Header

<div class="table-container">

| Respond Header | Pragma | Cache-Control          | Expires  | E Tag    | Last-Modified |
| -------------- | ------ | ---------------------- | -------- | -------- | ------------- |
| 快取過期       |        | 相對時間 （ 單位：秒） | 絕對時間 | Key      | 絕對時間      |
| 優先級         | 最高   | 高                     | 中高     | 中低     | 最低          |
| 快取類型       | 強快取 | 強快取                 | 強快取   | 協商快取 | 協商快取      |
| 排他性         |        | X                      | X        | X        | X             |

</div>

### Pragma

- no-cache

### Cache-Control

-   public: 所有網路設備都可以 cache
-   private: 只有瀏覽器可以 cache
-   no-cache: 瀏覽器可以 cache，但是要先驗證
-   no-store: 不可以 cache

### Expires

-   Client 跟 Server 時間不一定一致，有可能有 exception 假使使用者將 client time 改到未來，那就永遠都會重新拿

### E Tag

-   在接收到第一次 server response 後，後續 request header 都會帶上 If-None-Match 也就是上次回覆的 E Tag

### Last-Modified

-   在接收到第一次 server response 後，後續 request header 都會帶上 If-Modified-Since 也就是上次回覆的 Last-Modified
