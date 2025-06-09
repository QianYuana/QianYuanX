---
toc: content
order: 1
nav:
  title: Hooks
  path: /hooks
  order: 4
---

# useFocus 焦点

## 介绍

`useFocus` 是一个用于判断当前点击位置是否在指定区域内的`Hooks`，可以用于判断点击位置是否在指定区域，从而实现一些功能。
在工作中，我们经常会遇到焦点事件，又因为他处理起来比较麻烦，所以把它封装起来，欢迎大家使用`useFocus`来处理焦点事件。

## 代码演示

### 基础用法

```tsx
import React, { useEffect, useState, useRef } from 'react';
import { useFocus } from 'qianyuanx';

const App: React.FunctionComponent = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<boolean>(false);
  let Bool = useFocus(divRef);
  return (
    <div
      onClick={() => {
        setStatus(Bool);
      }}
    >
      <div
        ref={divRef}
        style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
      >
        div1区域
      </div>
      <p style={{ marginTop: '20px' }}>
        当前点击位置是否在div1区域：{status.toString()}
      </p>
    </div>
  );
};

export default App;
```

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
