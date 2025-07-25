---
id: react-hook-form
title: 'React Hook Form'
description: React Hook Form 開發筆記，重點整理
tags: [react,form,library]
keywords: [react,form,library]
created: '2025-07-25'
---


# React Hook Form

react hook form 是一個在 react 當中處理表單狀態的函式庫，宗旨在於使用 UnControlled Form 改善在處理表單上的效能，可以由[官方問答](https://react-hook-form.com/faqs)中得知這件事情。

> Performance is one of the primary reasons why this library was created. React Hook Form relies on an uncontrolled form, which is the reason why the register function captures ref and the controlled component has its re-rendering scope with Controller or useController. This approach reduces the amount of re-rendering that occurs due to a user typing in an input or other form values changing at the root of your form or applications. Components mount to the page faster than controlled components because they have less overhead. As a reference, there is a quick comparison test that you can refer to at this repo [link](https://github.com/react-hook-form/performance-compare).


因此在使用上盡可能優先使用 uncontroled 寫法取代 controlled 寫法

## 寫法整理

- register field

```typescript showLineNumbers
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

function App() {
  const form = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">firstName</label>
          <input id="firstName" type="text" {...form.register("firstName")} />
        </div>
        <div>
          <label htmlFor="lastName">lastName</label>
          <input id="lastName" type="text" {...form.register("lastName")} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
```

- Controller Wrapper

```typescript
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

function App() {
  const form = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={form.control}
          render={({ field }) => {
            return (
              <div>
                <label htmlFor="firstName">firstName</label>
                <input id="firstName" type="text" {...field} />
              </div>
            );
          }}
        />
        <Controller
          name="lastName"
          control={form.control}
          render={({ field }) => {
            return (
              <div>
                <label htmlFor="lastName">lastName</label>
                <input id="lastName" type="text" {...field} />
              </div>
            );
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

```

緊接著來觀察這兩種些法 controlled form / uncontrolled form 的差異性
觀察到在 uncontrolled form 更動表單欄位內容時，並不會造成任何渲染而 controlled form 在更動欄位內容時，每一次改動都會造成該欄位重新渲染，如下圖示意

:::info
你可以透過 React Developer Tools，進入 Components 分頁，點選右上角的齒輪（View settings），在 General 頁籤中勾選「Highlight updates when components render」來觀察元件重新渲染的情況。
:::


![uncontrolled form 範例：register 一個欄位](./img/register.gif)
<div style={{ textAlign: 'center', fontSize: '0.95em', color: '#666' }}>
  圖：uncontrolled form 範例，使用 register 註冊欄位
</div>


![controlled form 範例：Controller 控制欄位](./img/controlled.gif)
<div style={{ textAlign: 'center', fontSize: '0.95em', color: '#666' }}>
  圖：controlled form 範例，使用 Controller 控制欄位
</div>


在有需求時，可以監聽某一欄位值變動時使用 watch / useWatch 函式
並且若是不想高頻渲染，可藉由針對父層級元件做 watch / useWatch return 值做 debouncing 配合 React memo 子元件達到 debounced render 的效果，如下圖示意

```typescript
import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

function App() {
  const form = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  const [firstName, lastName] = useWatch({
    control: form.control,
    name: ["firstName", "lastName"],
  });

  const debouncedFullName = useDebounceValue(`${firstName}${lastName}`, 1000);

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">firstName</label>
          <input id="firstName" type="text" {...form.register("firstName")} />
        </div>
        <div>
          <label htmlFor="lastName">lastName</label>
          <input id="lastName" type="text" {...form.register("lastName")} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <FullName fullName={debouncedFullName} />
    </div>
  );
}

type FullNameProps = {
  fullName: string;
};

const FullName = React.memo(function FullName({ fullName }: FullNameProps) {
  return (
    <div className="derived-section">
      <div>FullName</div>
      <div>{fullName}</div>
    </div>
  );
});

function useDebounceValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, debouncedValue]);

  return debouncedValue;
}

export default App;
```

![debouncing form](./img/debouncing-form.gif)
<div style={{ textAlign: 'center', fontSize: '0.95em', color: '#666' }}>
  圖：uncontrolled form 範例，使用 <code>register</code> 註冊欄位，並結合 debounce 處理 derived state（如 FullName）顯示
</div>

