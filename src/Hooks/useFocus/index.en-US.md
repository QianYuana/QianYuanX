---
toc: content
order: 1
nav:
  title: Hooks
  path: /hooks
  order: 4
---

# useFocus

## Introduction

`UseFocus` is a `Hooks` used to determine whether the current click position is within a specified area, which can be used to determine whether the click position is within a specified area, thereby achieving some functions.
In our work, we often encounter focal events, and because they are difficult to handle, we encapsulate them. We welcome everyone to use `useFocus` to handle focal events.

## Code Demo

### Basic Usage

```tsx
import React, { useEffect, useState, useRef } from 'react';
import useFocus from './index.tsx';

const App: React.FunctionComponent = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState(false);
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

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
