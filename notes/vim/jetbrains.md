---
sidebar_position: 3
---

# JetBrains 配置推薦

## Preparation

| Name                                                                                 | Role             | Note                        |
| :----------------------------------------------------------------------------------- | ---------------- | :-------------------------- |
| [ideavim](https://plugins.jetbrains.com/plugin/164-ideavim)                          | jetbrains plugin | required                    |
| [acejump](https://plugins.jetbrains.com/plugin/7086-acejump)                         | jetbrains plugin | optional ( easymotion need) |
| [ideavim-easymotion)](https://plugins.jetbrains.com/plugin/13360-ideavim-easymotion) | jetbrains plugin | optional ( easymotion need) |

## Suggestion Configuration

> 透過 key mapping 映射 action 即可快速完成許多快捷  
> 如需要知道有哪些 action 可以 trigger  
> 可以於 vim command mode 輸入 `actionlist`  
> 即可以拿到整份 action 列表  

```text title="~/.ideavimrc"
let mapleader=';'
plug 'easymotion/vim-easymotion'

set number
set clipboard+=unnamed
set hlsearch
set incsearch
set ignorecase
set smartcase
set showmode
set scrolloff=5
set surround
set easymotion


map rr :action refactorings.quicklistpopupaction<cr>
map rn :action renameelement<cr>
map ri :action inline<cr>
map rv :action introducevariable<cr>
map rp :action introduceparameter<cr>
map rm :action extractmethod<cr>
map rc :action changesignature<cr>
map zn :action gotonexterror<cr>
map zp :action gotopreviouserror<cr>
map ec :action reactextractcomponentaction<cr>
```