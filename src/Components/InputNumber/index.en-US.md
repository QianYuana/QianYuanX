---
toc: content
order: 10
group:
  title: Components

nav:
  title: Components
  path: /components
---

# InputNumber

## Introduction

The type of component for digital input boxes is the most common one used in work. However, controlling and limiting the input is often the most troublesome. This has been packaged for you already. You only need to pass an `onChanges` event, and then control it inside.

The previously used `onChange` event now needs to support real-time retrieval of input box values in the form state. The `onChange` event is modified to only trigger `form` events, and control needs to be done in the `onChanges` event.

## Code Demonstration

### Basic Usage

```tsx
import * as React from 'react';
import { InputNumber } from 'qianyuanx';
import { message } from 'antd';

const App: React.FC = () => {
  return (
    <InputNumber
      style={{ width: '180px' }}
      onChange={(e: any) => {
        if (e > 100) {
          message.destroy();
          message.error('超出最大数量100');
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

### Usage in Forms

```tsx
import * as React from 'react';
import { InputNumber } from 'qianyuanx';
import { message, Form } from 'antd';

const App: React.FC = () => {
  return (
    <Form>
      <Form.Item label="排序号" name="sort">
        <InputNumber
          placeholder="请输入排序号"
          style={{ width: '180px' }}
          onChanges={(val) => {
            if (val < 0) {
              message.destroy();
              message.error('排序号必须大于0');
              return Promise.reject();
            }
            return Promise.resolve(val);
          }}
        />
      </Form.Item>
    </Form>
  );
};
export default App;
```

### API

| Parameter    | Explanation                                                              | Type                    | Default Value |
| :----------- | :----------------------------------------------------------------------- | :---------------------- | :------------ |
| value        | The value of the input box.                                              | number                  | ''            |
| defaultValue | The default value of the input box.                                      | number                  | ''            |
| onChange     | The callback function triggered when the value of the Form box changes.  | (value: number) => void | -             |
| onChanges    | The callback function triggered when the value of the input box changes. | (value: number) => void | -             |
| placeholder  | The placeholder of the input box.                                        | string                  | ''            |
| disabled     | Whether to disable the input box.                                        | boolean                 | false         |

## Precautions

- This component is based on the `Input` component of `antd`, so all the properties of `Input` can be used directly.

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
