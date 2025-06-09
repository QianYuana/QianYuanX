---
toc: content
order: 14
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# DataSelect 数据下拉框

## 介绍

在工作中很多下拉框不是固定取值的是由某一数据提供的，所以我们需要把数据处理成下拉框的数据源，所以 DataSelect 就是为了解决这个问题而开发的组件。

## 代码演示

### 基础用法

```tsx
import * as React from 'react';
import { DataSelect } from 'qianyuanx';

const App: React.FC = () => {
  const options = [
    { code: '1', name: '1号楼' },
    { code: '2', name: '2号楼' },
    { code: '3', name: '3号楼' },
    { code: '4', name: '4号楼' },
  ];
  return (
    <DataSelect
      option={options}
      onChange={(val) => {
        console.log(val);
      }}
    />
  );
};
export default App;
```

### 在表单中的用法

```tsx
import * as React from 'react';
import { DataSelect } from 'qianyuanx';
import { Form } from 'antd';

const App: React.FC = () => {
  const options = [
    { code: '1', name: '1号楼' },
    { code: '2', name: '2号楼' },
    { code: '3', name: '3号楼' },
    { code: '4', name: '4号楼' },
  ];

  return (
    <Form>
      <Form.Item label="楼号" name="sort">
        <DataSelect option={options} />
      </Form.Item>
    </Form>
  );
};
export default App;
```

## API

| 参数     | 说明                                                         | 类型                       | 默认值 |
| :------- | :----------------------------------------------------------- | :------------------------- | :----- |
| option   | 下拉框的数据源，必须是数组类型，且数组的每一项必须是一个对象 | Array<Record<string, any>> | -      |
| onChange | 下拉框选中项变化时的回调函数，返回选中项的值                 | Function                   | -      |

## 注意事项

- 该组件在使用时页面需要先请求数据，防止用户进来就进行选择导致没有数据。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
