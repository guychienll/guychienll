---
id: web-security
title: Web Security
description: web security notes
sidebar_position: 1
draft: true
created: '2025-07-16'
tags: [javascript,web,security,html,css]
keywords: [javascript,web,security,html,css]
---

# Web Security


## XSS ( Cross Site Scripting )

## CSRF ( Cross Site Request Forgery )

CSRF 是利用使用者 session (存於 cookies 當中) 尚未過期的機會達到攻擊的目的。

情境舉例：

- 受害者： 小明 
- 加害者： 小華
- 正當經營拍賣網: `www.shop.com`
- 做壞事高流網站: `www.hack.com`

小明剛逛完購物網站 `www.shop.com`，但並未登出帳號。

這時，小華為了獲得他心心念念的手機殼，便在自己經營的高流量公開網站 `www.hack.com` 中，偷偷嵌入了一段與 `www.shop.com` 有關的惡意程式碼。

這段程式碼的設計是：若小明剛從 `www.shop.com` 來，且尚未登出帳號，接著又造訪 `www.hack.com`，那麼程式碼就會在背景中偽裝成小明，利用瀏覽器自動附帶的登入憑證（如 Cookie），向 `www.shop.com` 發出下單的 API 請求。

若 `www.shop.com` 缺乏 CSRF 防護（例如 `CSRF token (註1)` 、`SameSite cookie (註2)` 或 `Referer 驗證 (註3)`），而相關 API 又未加以限制，那麼這筆請求就會被視為小明本人所發出。最終，手機殼將會以小明的帳號付款下單，寄送地址卻是小華指定的，小華就這樣輕鬆取得了他夢寐以求的商品。

### CSRF token (註1)

### SameSite Cookie (註2)

### Referer 驗證 (註3)

## CSP

## SRI


## References