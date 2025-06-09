---
toc: content
order: 4
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# ReleaseSelect 下拉日期组件

## 介绍

可选择几天后或具体日期,该组件是基于工作中需要的，而且 antd 中没有，需要我们自己进行封装，在使用过程中，注意 ReleaseSelect 不是受控组件

## 代码演示

### 基础用法

```jsx
import { ReleaseSelect } from 'qianyuanx';
import { Form } from 'antd';
import React, { useState } from 'react';

export default () => {
  return (
    <Form>
      <Form.Item label={'可选择几天后或具体日期'} name={'time'}>
        <ReleaseSelect />
      </Form.Item>
    </Form>
  );
};
```

### 非控件使用

```jsx
import { ReleaseSelect } from 'qianyuanx';
import React, { useState } from 'react';

export default () => {
  return (
    <ReleaseSelect
      onChange={(value) => {
        console.log(value);
      }}
    />
  );
};
```

## API

| 参数     | 说明                   | 类型        | 默认值 |
| -------- | ---------------------- | ----------- | ------ |
| time     | 控件中的 name 属性接收 | String[]    | -      |
| onChange | 回调函数               | Function(e) | -      |

## 注意事项

- 非受控组件，组件内部使用的**props.onchange** 进行回调传递直接传递到**From**表单中，也可以**onchange**进行自定义操作。
- 组件内部使用**moment**进行日期处理，所以需要引入**moment**，**moment**的使用方式请查看**moment**官网。
- 想要继续开发可以点击右上角**GitHub**进行查看修改。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
