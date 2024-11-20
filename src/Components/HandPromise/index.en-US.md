---
toc: content
order: 23
group:
  title: Components

nav:
  title: Components
  path: /components
---

## HandStore

## Introduction

During interviews, you might be asked about these concepts, and you may even be asked to handwrite a store implementation.

## Code Demonstration

### Basic Usage (Redux-Style Writing)

```tsx
import React, { useEffect, useState } from 'react';
import { Store } from 'qianyuanx';
export default function Main() {
  const store = new Store({ count: 0 });
  const [data, setData] = useState(store.getState());
  const unsubscribe = store.subscribe((newState) => {
    setData(newState);
    // Here you can use refresh methods such as:
    // root.render() - HostRootFiber
    // this.setState() - ClassComponent
    // this.forceUpdate() - ClassComponent
    // useState dispatcher - FunctionComponent
    // useReducer dispatcher - FunctionComponent
  });

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <button
        onClick={() => {
          store.setState({ count: data.count + 1 });
        }}
      >
        Modify Store State
      </button>
      <p>Store State: {data.count}</p>
    </>
  );
}
```

### Listening for State Changes (Upgraded HOC - MobX-Style Writing)

```tsx
import React, { useEffect } from 'react';
import { Store, observe } from 'qianyuanx';
const store = new Store({ count: 0 });
const Main = (props) => {
  return (
    <>
      <button
        onClick={() => {
          store.setState({ count: store.state.count + 1 });
        }}
      >
        Modify Store State
      </button>
      <p>Store State: {store.state.count}</p>
    </>
  );
};
export default observe(Main, store);
```

## API

### Store

| Parameter | Description           | Type          | Default |
| :-------- | :-------------------- | :------------ | :------ |
| getState  | Get the store's value | object        | -       |
| setState  | Set the store's value | object        | -       |
| subscribe | Listen for updates    | ((e) => void) | -       |

### observe (HOC)

| Parameter | Description                 | Type            | Default |
| :-------- | :-------------------------- | :-------------- | :------ |
| Component | The component to observe    | React.Component | -       |
| store     | The store object to observe | Store           | -       |

## Conclusion

If you find it helpful, please click the **Star** button in the top right corner to show your support. Thank you!
