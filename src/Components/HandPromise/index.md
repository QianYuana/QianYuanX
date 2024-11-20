---
toc: content
order: 23
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# HandPromise 手写 Promise

## 介绍

面试的时候会问到这些，可能还会让你手写 Promise，手写 Promise 也是面试必考题之一。

## 代码演示

### 基本用法

```tsx
import React, { useEffect, useState } from 'react';
import { HandPromise } from 'qianyuanx';
import { Button, Space } from 'antd';
export default function Main() {
  const [state, setState] = useState('');
  const cliCK = (num) => {
    new HandPromise((resolve, reject) => {
      if (num === 1) {
        resolve('success');
      } else {
        reject('error');
      }
    })
      .then((res) => {
        console.log(res);
        setState(res);
      })
      .catch((err) => {
        console.log(err);
        setState(err);
      });
  };
  return (
    <Space size={8}>
      <Button
        onClick={() => {
          cliCK(1);
        }}
      >
        resolve
      </Button>
      <Button
        onClick={() => {
          cliCK(2);
        }}
      >
        reject
      </Button>
      <p>{state}</p>
    </Space>
  );
}
```

## API

### Store

| 参数  | 说明             | 类型               | 默认值 |
| :---- | :--------------- | :----------------- | :----- |
| then  | then 方法的回调  | (res: any) => void | -      |
| catch | catch 方法的回调 | (err: any) => void | -      |

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
