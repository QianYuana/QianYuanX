---
toc: content
order: 3
group:
  title: 组件
nav:
  title: 组件
  path: /components
---

# TimeSelect 日期组件

## 介绍

日期组件,该组件是基于工作中需要的，而且 antd 中没有，需要我们自己进行封装，在使用过程中，注意 TimeSelect 是受控组件

## 代码演示

### 基础用法

```jsx
import { TimeSelect } from 'qianyuanx';
import { Form } from 'antd';
import React, { useState } from 'react';

export default () => {
  return (
    <Form>
      <Form.Item label={'分开的开始结束日期'} name={'time'}>
        <TimeSelect />
      </Form.Item>
    </Form>
  );
};
```

## API

| 参数 | 说明                   | 类型     | 默认值 |
| ---- | ---------------------- | -------- | ------ |
| time | 控件中的 name 属性接收 | String[] | -      |

## 注意事项

- 受控组件，请在表单中进行使用，组件内部使用的**props.onchange** 进行回调传递直接传递到**From**表单中，不需要进行操作。
- **Form**表单中使用**name**属性，**time**属性接收，**time**属性接收的格式为**['开始时间', '结束时间']**，**开始时间**和**结束时间**为**HH:mm:ss**格式。
- 组件内部使用**moment**进行日期处理，所以需要引入**moment**，**moment**的使用方式请查看**moment**官网。
- 想要继续开发可以点击右上角**GitHub**进行查看修改。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
