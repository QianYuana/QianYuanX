---
toc: content
order: 17
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# KeyInput 键盘事件输入

## 介绍

在工作中很多输入框一般都需要使用键盘来进行确定，同时也支持业务中的扫码枪输入的场景，所以这里封装了一个键盘事件输入的组件，可以方便的使用键盘进行确认操作。  
后面封装了`键盘Hooks`,方面大家使用

## 代码演示

### 基础用法

```tsx
import * as React from 'react';
import { KeyInput } from 'qianyuanx';

const App: React.FC = () => {
  const options = [
    { value: '1', label: '1号楼' },
    { value: '2', label: '2号楼' },
    { value: '3', label: '3号楼' },
    { value: '4', label: '4号楼' },
  ];
  return (
    <KeyInput
      options={options}
      onAdd={(val) => {
        console.log(val);
      }}
    />
  );
};
export default App;
```

## API

| 参数    | 说明                                                         | 类型                               | 默认值 |
| :------ | :----------------------------------------------------------- | :--------------------------------- | :----- |
| options | 下拉框的数据源，必须是数组类型，且数组的每一项必须是一个对象 | {label: string; value: string; }[] | -      |
| onAdd   | 触发确认的回调函数                                           | Function                           | -      |

## 注意事项

- 该组件使用时直接使用，可以自行修改

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
