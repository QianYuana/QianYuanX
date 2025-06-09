---
toc: content
order: 4
group:
  title: Components
nav:
  title: Components
  path: /components
---

# ReleaseSelect

## Introduction

Allows selection of a specific date or a number of days in the future. This component is based on work requirements and is not available in antd, so we need to encapsulate it ourselves. When using, note that ReleaseSelect is not a controlled component.

## Code Demonstration

### Basic Usage

```jsx
import { ReleaseSelect } from 'qianyuanx';
import { Form } from 'antd';
import React, { useState } from 'react';

export default () => {
  return (
    <Form>
      <Form.Item
        label={'You can choose a few days later or a specific date'}
        name={'time'}
      >
        <ReleaseSelect />
      </Form.Item>
    </Form>
  );
};
```

### Non Control Usage

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

| Parameter | Description                                   | Type        | Default Value |
| --------- | --------------------------------------------- | ----------- | ------------- |
| time      | Received by the name attribute in the control | String[]    | -             |
| onChange  | Callback function                             | Function(e) | -             |

## Notes

- Uncontrolled component. The component internally uses **props.onchange** for callback, which is directly passed to the **From** form. Custom operations can also be performed using **onchange**.
- The component uses **moment** internally for date processing, so you need to import **moment**. Please refer to the **moment** official website for how to use **moment**.
- To continue development, you can click on the top right corner **GitHub** to view and modify.

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
