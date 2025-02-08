---
sidebar_position: 2
---

# VSCode 配置推薦

## Preparation

| Name                                                                                                                             | Role           | Note                          |
| :------------------------------------------------------------------------------------------------------------------------------- | -------------- | :---------------------------- |
| [vscode](https://code.visualstudio.com/)                                                                                         | editor         | required                      |
| [vscodevim.vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)                                               | vscode plugin  | required                      |
| [extr0py.vscode-relative-line-numbers](https://marketplace.visualstudio.com/items?itemName=extr0py.vscode-relative-line-numbers) | vscode plugin  | optional                      |
| [sburg.vscode-javascirpt-booster](https://marketplace.visualstudio.com/items?itemName=sburg.vscode-javascript-booster)           | vscode plugin  | optional [suggested:frontend] |
| [p42ai.refactor](https://marketplace.visualstudio.com/items?itemName=p42ai.refactor&ssr=false#overview)                          | vscode plugin  | optional [suggested:frontend] |
| [wix.glean](https://marketplace.visualstudio.com/items?itemName=wix.glean)                                                       | vscode plugin  | optional [suggested:frontend] |
| [vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)                                      | browser plugin | optional [suggested:all]      |
| [hackmd](https://hackmd.io)                                                                                                      | online notes   | optional [suggested:all]      |

## Suggested VSCode Vim Configuration

```json title="settings.json"
{
    "vim.useSystemClipboard": true,
    "vim.surround": true,
    "vim.foldfix": true,
    "vim.easymotion": true,
    "vim.leader": ";",
    "vim.easymotionMarkerBackgroundColor": "#FBD87F",
    "vim.easymotionMarkerFontWeight": "bold",
    "vim.easymotionMarkerForegroundColorOneChar": "#DE0079",
    "vim.easymotionKeys": "hklyuiopnmqwertzxcvbasdgjf",
    "vim.searchHighlightColor": "#DE0079",
    "vim.searchHighlightTextColor": "#fefefe",
    "vim.hlsearch": true,
    "extensions.experimental.affinity": {
        "vscodevim.vim": 1
    }
}
```

### Navigation Configuration

```json title="settings.json"
{
    "vim.normalModeKeyBindingsNonRecursive": [
        {
            "before": ["z", "n"],
            "commands": ["editor.action.marker.next"]
        },
        {
            "before": ["z", "p"],
            "commands": ["editor.action.marker.prev"]
        }
    ]
}
```

### Refactor Configuration ( p42 refactor tool installed )

```json title="settings.json"
{
    "vim.normalModeKeyBindingsNonRecursive": [
        {
            "before": ["R", "R"],
            "commands": ["p42.touchBar.refactor"]
        }
    ],
    "vim.visualModeKeyBindingsNonRecursive": [
        {
            "before": ["R", "R"],
            "commands": ["p42.touchBar.refactor"]
        }
    ]
}
```
