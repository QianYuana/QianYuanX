---
toc: content
order: 1
group:
  title: 组件
---

# ModalList 对话框表单

## 介绍

modal 注入 form 组件，在使用过程中，注意 render 的组件是受控组件，如果需要默认值，请在 initialValues 中设置

## 代码演示

### 基础用法

```jsx
import { ModalList } from 'qianyuanx';
import { Collapse, Form, Button, message, Input } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);
  const onFinish = (values) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setopen(false);
    }, 1000);
  };
  const modalCols = (modalKey) => {
    return [
      {
        title: '自定义标题',
        layout: 'horizontal',
        initialValues: { licenseCode: '设置默认值' },
        listData: [
          {
            label: '自定义名称',
            name: 'licenseCode',
            render: <Input placeholder="插入需要放的组件（受控组件）" />,
          },
          {
            label: '自定义名称',
            name: 'time',
            render: <Input placeholder="插入需要放的组件（受控组件）" />,
          },
        ],
      },
    ][modalKey];
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => setopen(true)}
        style={{ marginBottom: '20px' }}
      >
        打开对话框
      </Button>
      <ModalList
        open={open}
        data={modalCols(0)}
        onFinish={onFinish}
        loading={loading}
        onCancel={() => setopen(false)}
      />
    </>
  );
};
```

### 规则校验

```jsx
import { ModalList } from 'qianyuanx';
import { Button, Input } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);
  const onFinish = (values) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setopen(false);
    }, 1000);
  };
  const modalCols = (modalKey) => {
    return [
      {
        title: '自定义标题',
        layout: 'horizontal',
        initialValues: { licenseCode: '设置默认值' },
        listData: [
          {
            label: '自定义名称',
            name: 'licenseCode',
            rules: [
              {
                required: true,
                message: '不能为空',
              },
            ],
            render: <Input placeholder="插入需要放的组件（受控组件）" />,
          },
          {
            label: '自定义名称',
            name: 'time',
            rules: [
              {
                required: true,
                message: '不能为空',
              },
            ],
            render: <Input placeholder="插入需要放的组件（受控组件）" />,
          },
        ],
      },
    ][modalKey];
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => setopen(true)}
        style={{ marginBottom: '20px' }}
      >
        打开对话框
      </Button>
      <ModalList
        open={open}
        data={modalCols(0)}
        onFinish={onFinish}
        loading={loading}
        onCancel={() => setopen(false)}
      />
    </>
  );
};
```

### 多行文本

```jsx
import { ModalList } from 'qianyuanx';
import { Button, Input } from 'antd';
import React, { useState } from 'react';
const { TextArea } = Input;

const TextAreas = (props) => {
  return (
    <>
      <p style={{ marginBottom: 10 }}>输入箱码，多个时支持换行、逗号分割</p>
      <TextArea
        style={{
          resize: 'none',
        }}
        autoSize={{
          minRows: 4,
        }}
        rows={4}
        placeholder="请输入箱码"
        onChange={(values) => props.onChange(values)}
      />
    </>
  );
};
const App = () => {
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);
  const onFinish = (values) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setopen(false);
    }, 1000);
  };
  const modalCols = (modalKey) => {
    return [
      {
        title: '多行文本',
        layout: 'horizontal',
        width: 245,
        listData: [
          {
            label: null,
            name: 'licenseCodes',
            rules: [
              {
                required: true,
                message: '箱码不能为空',
              },
            ],
            render: <TextAreas></TextAreas>,
          },
        ],
      },
    ][modalKey];
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => setopen(true)}
        style={{ marginBottom: '20px' }}
      >
        打开对话框
      </Button>
      <ModalList
        open={open}
        data={modalCols(0)}
        onFinish={onFinish}
        loading={loading}
        onCancel={() => setopen(false)}
      />
    </>
  );
};
export default App;
```

## API

| 参数      | 说明                 | 类型        | 默认值 |
| --------- | -------------------- | ----------- | ------ |
| open      | 对话框是否可见       | boolean     | -      |
| data      | 表单数据             | Object      | -      |
| onFinish  | 点击确定回调         | function(e) | -      |
| onCancel  | 点击取消回调         | function(e) | -      |
| loading   | 加载状态             | boolean     | false  |
| isloading | 弹窗是否显示加载状态 | boolean     | false  |
| style     | 对话框样式           | Object      | -      |
| width     | 宽度                 | number      | 520    |

### data

| 参数            | 说明                                                                 | 类型      | 默认值     |
| --------------- | -------------------------------------------------------------------- | --------- | ---------- |
| title           | 标题                                                                 | string    | -          |
| layout          | 布局方式，horizontal：水平布局，vertical：垂直布局，inline：行内布局 | string    | horizontal |
| initialValues   | 表单初始值                                                           | Object    | -          |
| listData        | 表单数据                                                             | Array     | -          |
| listData.label  | 表单标题                                                             | string    | -          |
| listData.name   | 表单名称                                                             | string    | -          |
| listData.render | 表单组件                                                             | ReactNode | -          |
| listData.rules  | 表单校验规则                                                         | Array     | -          |

## 注意事项

- 受控组件，如果需要默认值，请在 initialValues 中设置
- 详细参数请参考 [antd 表单组件](https://4x-ant-design.antgroup.com/components/form-cn/#API)

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
