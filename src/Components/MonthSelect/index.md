---
toc: content
order: 2
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# MonthSelect 自定义月份

## 介绍

自定义月份组件,在使用过程中，注意 MonthSelect 是受控组件

## 代码演示

### 基础用法

```jsx
import { MonthSelect } from 'qianyuanx';
import { Form } from 'antd';
import React, { useState } from 'react';

export default () => {
  return (
    <Form>
      <Form.Item label={'自定义月份组件'} name={'time'}>
        <MonthSelect />
      </Form.Item>
    </Form>
  );
};
```

### changTime 取值

```jsx
import { MonthSelect } from 'qianyuanx';
import { Form } from 'antd';
import React, { useState } from 'react';

export default () => {
  return (
    <Form>
      <Form.Item label={'自定义月份组件'} name={'time'}>
        <MonthSelect
          changTime={(time) => {
            console.log(time);
          }}
        />
      </Form.Item>
    </Form>
  );
};
```

## API

| 参数      | 说明                   | 类型        | 默认值 |
| --------- | ---------------------- | ----------- | ------ |
| changTime | 改变后回调             | function(e) | -      |
| time      | 回调的参数 ,返回的月份 | Number      | -      |

## 注意事项

- 受控组件，请在表单中进行使用，组件内部使用的**props.onchange** 进行回调传递直接传递到**From**表单中，不需要进行操作。
- 需要进行取值操作的，可以使用**changTime**，进行回调拿值。
- 想要继续开发可以点击右上角**GitHub**进行查看修改。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
