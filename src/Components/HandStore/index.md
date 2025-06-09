---
toc: content
order: 20
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# HandStore 手写仓库

## 介绍

面试的时候会问到这些，可能还会让你手写仓库

## 代码演示

### 基本用法(redux 写法)

```tsx
import React, { useEffect, useState } from 'react';
import { Store } from 'qianyuanx';
export default function Main() {
  const store = new Store({ count: 0 });
  const [data, setData] = useState(store.getState());
  const unsubscribe = store.subscribe((newState) => {
    setData(newState);
    // 此处可以使用刷新方法：
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
        修改Store状态
      </button>
      <p>store状态：{data.count}</p>
    </>
  );
}
```

### 监听更改状态（升级版 HOC--mobx 写法）

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
        修改Store状态
      </button>
      <p>store状态：{store.state.count}</p>
    </>
  );
};
export default observe(Main, store);
```

## API

### Store

| 参数      | 说明            | 类型          | 默认值 |
| :-------- | :-------------- | :------------ | :----- |
| getState  | 获取 store 的值 | object        | -      |
| setState  | 设置 store 的值 | object        | -      |
| subscribe | 监听            | ((e) => void) | -      |

### observe (HOC)

| 参数      | 说明              | 类型            | 默认值 |
| :-------- | :---------------- | :-------------- | :----- |
| Component | 监听的组件        | React.Component | -      |
| store     | 监听的 store 对象 | Store           | -      |

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
