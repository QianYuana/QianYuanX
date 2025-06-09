---
toc: content
order: 3
nav:
  title: Hooks
  path: /hooks
  order: 4
---

# useStateHand 状态钩子函数

## 介绍

`useStateHand`是我模拟 react 中 `useState` 函数，。

## 代码演示

### 基础用法

```tsx
import React, { useEffect, useState, useRef } from 'react';
import { useStateHand } from 'qianyuanx';

const App: React.FunctionComponent = () => {
  const [status, setStatus] = useStateHand<boolean>(1);
  return (
    <div>
      <div
        style={{
          width: 100,
          height: 100,
        }}
        onClick={() => {
          console.log(status);
          setStatus(status + 1);
        }}
      >
        点击我
      </div>
      {status}
    </div>
  );
};

export default App;
```

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
