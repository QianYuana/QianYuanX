---
toc: content
order: 3
group:
  title: Components

nav:
  title: Components
  path: /components
---

# TimeSelect

## Introduction

The date component is based on work requirements and is not available in antd, so we need to encapsulate it ourselves. When using, note that TimeSelect is a controlled component.

## Code Demo

### Basic Usage

```jsx
import { TimeSelect } from 'qianyuanx';
import { Form } from 'antd';
import React, { useState } from 'react';

export default () => {
  return (
    <Form>
      <Form.Item label={'Separate start and end dates'} name={'time'}>
        <TimeSelect />
      </Form.Item>
    </Form>
  );
};
```

## API

| Parameter | Description                                   | Type     | Default Value |
| --------- | --------------------------------------------- | -------- | ------------- |
| time      | Received by the name attribute in the control | String[] | -             |

## Notes

- Controlled component. Please use it in the form. The component internally uses **props.onchange** for callback, which is directly passed to the **Form** form. No additional operations are required.
- Use the **name** attribute in the **Form** form, and the **time** attribute receives it. The format of the **time** attribute is **['startTime', 'endTime']**. The **startTime** and **endTime** are in the format of **HH:mm:ss**.
- The component uses **moment** internally for date processing, so you need to import **moment**. Please refer to the **moment** official website for how to use **moment**.
- To continue development, you can click on the top right corner **GitHub** to view and modify.

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
