---
id: jotai
title: Jotai
description: Jotai Notes
sidebar_position: 1
draft: true
created: '2025-02-23'
tags: [jotai,state-management,react,javascript]
keywords: [jotai,state-management,react,javascript]
---


# Jotai

> 本文將介紹 Jotai 的基礎用法
> 使用 jotai 版本為 2.11.3

## 安裝

```bash
npm install jotai
```

## atom 種類

atom 是一個多載的 function，擁有多種介面，依據傳入不同的參數，會回傳不同種類的 atom，將逐步介紹每種介面所會回傳的 atom 種類，及其功用。

1. 接受一個初始值，回傳一個 `primitiveAtom`，初始值型即為傳入初始值的型別，除了 function 外 [ 詳見 3 ]，其他型別皆可

```ts
export declare function atom<Value>(initialValue: Value): PrimitiveAtom<Value> & WithInitialValue<Value>;
```

```ts example
const countAtom = atom(0);
```

2. 不接受任何參數，及接收參數初始值為 undefined，回傳一個 `primitiveAtom`，初始值型即為 undefined，除了 function 外 [ 詳見 3 ]，其他型別皆可

```ts
export declare function atom<Value>(): PrimitiveAtom<Value | undefined> & WithInitialValue<Value | undefined>;
```

```ts example
const countAtom = atom();
```

3. 僅接受一個 function，回傳一個 `readonlyAtom`，初始值型別為 function 回傳值型別，並且該 atom 為 `readonly` 不可被修改

```ts
export declare function atom<Value>(read: Read<Value>): Atom<Value>;
```

```ts example
// 回傳一常數
const readonlyAtom = atom((get) => {
    return 1
});

// 回傳一個經過其他 atom 計算的值
const countAtom = atom(0);
const readonlyDerivedAtom = atom((get) => {
    return get(countAtom) + 1
});

// 回傳一個非同步的值
const asyncReadonlyAtom = atom(async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    })
});

// 回傳一個非同步並且與其他 atom 計算的值
const asyncReadonlyDerivedAtom = atom(async (get) => {
    const count = get(countAtom);
    const asyncValue = await get(asyncReadonlyAtom);
    return (count + asyncValue) * 2; 
});


// setCount 雖會回傳一項 write function 但是因為沒有提供 atom 第二參數當作 write function，所以在執行時會 throw exception `not writable atom`
// 在 typescript 中上述介面回傳 tuple[1] 將會是 never，並且會在 call 時報錯
const [count, setCount] = useAtom(readonlyAtom);
```





