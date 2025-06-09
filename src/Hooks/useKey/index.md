---
toc: content
order: 2
nav:
  title: Hooks
  path: /hooks
  order: 4
---

# useKey 键盘

## 介绍

`useKey` 是一个用于判断当前点击的按键的`Hooks`，可以用于判断键盘来进行触发其他事件，从而实现一些功能。
在工作中，我们经常会遇到案件事件，所以把它封装起来，欢迎大家使用`useKey`来处理焦点事件。

## 代码演示

### 基础用法

```tsx
import React, { useState } from 'react';
import { useKey } from 'qianyuanx';

const App: React.FunctionComponent = () => {
  const [num, setNum] = useState<number>(0);
  const onSearch = () => {
    setNum((num) => num + 1);
    console.log('您按下了回车键盘！');
  };
  useKey('Enter', onSearch);
  return (
    <>
      <p>请按回车</p>
      <p>计数：{num}</p>
    </>
  );
};

export default App;
```

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
