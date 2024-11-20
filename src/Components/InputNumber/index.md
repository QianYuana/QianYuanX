---
toc: content
order: 10
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# InputNumber 数字输入框

## 介绍

数字输入框类型组件，在工作中使用该组件是最常见的。但是在控制限制输入时往往是最麻烦的，这边已经给你封装好了，只需要传入一个`onChanges`事件，然后在里面进行控制即可。

之前使用的`onChange`事件，现在需要支持在表单状态下，`Form`能实时获取输入框的值，修改为`onChange`事件只触发表单事件，控制需要在`onChanges`事件中进行控制即可。

## 代码演示

### 基础用法

```tsx
import * as React from 'react';
import { InputNumber } from 'qianyuanx';
import { message } from 'antd';

const App: React.FC = () => {
  return (
    <InputNumber
      style={{ width: '180px' }}
      onChanges={(e: any) => {
        if (e > 100 || e < 0) {
          message.destroy();
          message.error('超出最大数量100或最小数量 0');
          return Promise.reject();
        }
        return Promise.resolve(e);
      }}
      value={''}
    />
  );
};
export default App;
```

### Decimal 控制为整数或者支持小数

```tsx
import * as React from 'react';
import { InputNumber } from 'qianyuanx';
import { message, Form } from 'antd';

const App: React.FC = () => {
  return (
    <Form>
      <Form.Item label="排序号" name="sort">
        <InputNumber.Decimal
          placeholder="请输入排序号"
          style={{ width: '180px' }}
          errMsg={'排序号为整数'}
        />
      </Form.Item>
    </Form>
  );
};
export default App;
```

## API

| 参数         | 说明                                 | 类型                    | 默认值 |
| :----------- | :----------------------------------- | :---------------------- | :----- |
| value        | 输入框的值                           | number                  | ''     |
| defaultValue | 输入框的默认值                       | number                  | ''     |
| onChange     | 输入框的值变化时触发的(表单)回调函数 | (value: number) => void | -      |
| onChanges    | 输入框的值变化时触发的回调函数       | (value: number) => void | -      |
| placeholder  | 输入框的占位符                       | string                  | ''     |
| disabled     | 禁用                                 | boolean                 | false  |

### InputNumber.Decimal API

| 参数        | 说明                                 | 类型                    | 默认值 |
| :---------- | :----------------------------------- | :---------------------- | :----- |
| errMsg      | 输入框的值变化时触发的回调函数       | string                  | -      |
| style       | 输入框的样式                         | CSSStyle                | -      |
| value       | 输入框的值                           | number                  | ''     |
| onChange    | 输入框的值变化时触发的(表单)回调函数 | (value: number) => void | -      |
| placeholder | 输入框的占位符                       | string                  | ''     |
| disabled    | 禁用                                 | boolean                 | false  |
| isParent    | 控制是否支持小数                     | boolean                 | false  |

## 注意事项

- 该组件是基于`antd`的`Input`组件封装的，所以`Input`的所有属性都可以直接使用。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
