---
sidebar_position: 1
---

# 測試文章

```javascript showLineNumbers

 // highlight-next-line
console.log('test docs with highlight')

console.log('test docs')

```

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

```mermaid
sequenceDiagram
    
    Local-->>CI: deploy
    note right of Client: Client version is ver. A
    CI-->>Client: generate panel version.txt ( ver. B )
    loop Every 5 minutes
        Client->> CDN: call request version.txt and detect new version
    end
    CI-->>CDN: deployed ( version.txt ver. B )
    CDN -->> Client: response version.txt ( ver. B )
    Client -->> Client: detected new version and show reload popup
```
