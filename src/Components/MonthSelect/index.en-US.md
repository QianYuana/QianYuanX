---
toc: content
order: 2
group:
  title: Components

nav:
  title: Components
  path: /components
---

# MonthSelect

## Introduction

Custom month component. Note that MonthSelect is a controlled component when using it.

## Code Demo

### Basic Usage

```jsx
import { MonthSelect } from 'qianyuanx';
import { Form } from 'antd';
import React, { useState } from 'react';

export default () => {
  return (
    <Form>
      <Form.Item label={'Custom month component'} name={'time'}>
        <MonthSelect />
      </Form.Item>
    </Form>
  );
};
```

### ChangTime value

```jsx
import { MonthSelect } from 'qianyuanx';
import { Form } from 'antd';
import React, { useState } from 'react';

export default () => {
  return (
    <Form>
      <Form.Item label={'Custom month component'} name={'time'}>
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

| Parameter |            Description             |    Type     | Default |
| :-------: | :--------------------------------: | :---------: | :-----: |
| changTime |       Callback after change        | function(e) |    -    |
|   time    | Callback parameter, returned month |   Number    |    -    |

## Notes

- This is a controlled component, please use it in the form. The component uses the **props.onchange** to pass the callback directly to the **Form**. No need to operate.
- If you need to get the value, you can use the **changTime** to get the value through the callback.
- If you want to continue development, you can click on the top right corner of GitHub to review and modify.

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
