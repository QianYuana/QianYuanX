---
toc: content
order: 3
nav:
  title: Hooks
  path: /hooks
  order: 4
---

# useStateHand

## Introduction

`useStateHand` is a `Hook` used to determine whether the current click position is within a specified area. It can be used to determine whether the click position is within the specified area, thereby implementing certain functions.

In our work, we often encounter focus events. Since they are relatively cumbersome to handle, we have encapsulated them. We welcome everyone to use `useStateHand` to handle focus events.

## Code Demonstration

### Basic Usage

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
        Click me
      </div>
      {status}
    </div>
  );
};

export default App;
```
