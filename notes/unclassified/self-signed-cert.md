---
id: self-signed-cert
title: Self Signed Certificate
description: Self Signed Certificate
sidebar_position: 2
created: "2025-09-21"
tags: [web, certificate, security, browser]
keywords: [web, certificate, security, browser]
---

## 安裝

先行安裝 `mkcert` / `nss`
macOS :
`brew install mkcert nss`

## 本地建立 CA

`mkcert -install`

## 簽署憑證

針對要開放的 domain 簽憑證
舉例來說要簽署 localhost
`mkcert localhost`
如果要在本地簽署自訂義 domain
記得簽完憑證後
要到 /etc/hosts 去將該 domain 指向 127.0.0.1 (本機)

## 如何檢視該憑證有效期限

可以透過 openssl 指令去查詢
`openssl x509 -in your-certification.pem -noout -text`
意指查詢 X.509 格式之憑證 (最常見使用憑證格式)，並且輸入 (-in) 該憑證，並且不要輸出 (-noout) base64 相關內容，輸出(-text) 可讀的純文字。
