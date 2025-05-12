---
id: jetbrains
title: JetBrains 配置推薦
description: 介紹 JetBrains IDE 的配置推薦，包含 Vim 配置、Easymotion 配置、Refactor 配置
tags: [jetbrains, vim, ide, idea, webstorm, pycharm, rubymine, phpstorm, appcode, clion, datagrip, goland, rider, androidstudio]
keywords: [jetbrains, vim, ide, idea, webstorm, pycharm, rubymine, phpstorm, appcode, clion, datagrip, goland, rider, androidstudio]
created: '2024-04-09'
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
set ideajoin


map RR :action Refactorings.QuickListPopupAction<CR>
map RN :action RenameElement<CR>
map RI :action Inline<CR>
map RV :action IntroduceVariable<CR>
map RP :action IntroduceParameter<CR>
map RM :action ExtractMethod<CR>
map RC :action ChangeSignature<CR>
map zn :action GotoNextError<CR>
map zp :action GotoPreviousError<CR>
map EC :action ReactExtractComponentAction<CR>


plug 'easymotion/vim-easymotion'
Plug 'machakann/vim-highlightedyank'
```
