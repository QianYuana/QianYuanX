---
toc: content
order: 2
nav:
  title: Hooks
  path: /hooks
  order: 4
---

# useKey

## Introduction

`useKey` is a `Hook` used to determine the currently pressed key, which can be used to trigger other events through keyboard operations, thus achieving some functions. In our work, we often encounter keyboard events, so it is packaged for easy use. You are welcome to use `useKey` to handle keyboard events.

## Code Demo

### Basic Usage

```tsx
import React, { useState } from 'react';
import { useKey } from 'qianyuanx';

const App: React.FunctionComponent = () => {
  const [num, setNum] = useState(0);
  const onSearch = () => {
    setNum(num + 1);
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

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
