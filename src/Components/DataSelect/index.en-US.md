---
toc: content
order: 14
group:
  title: Components

nav:
  title: Components
  path: /components
---

# DataSelect

## Introduction

In work, many dropdown boxes are not fixed in value but are provided by a certain data source, so we need to process the data into a dropdown box data source. Therefore, DataSelect is a component developed to solve this problem.

## Code Demonstration

### Basic Usage

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

### Usage in Forms

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

### API

| Parameter | Explanation                              | Type     | Default Value |
| :-------- | :--------------------------------------- | :------- | :------------ |
| option    | Dropdown box data source                 | Array    | -             |
| onChange  | Callback function when the value changes | Function | -             |

## Precautions

- When using this component, the page needs to first request data to prevent users from making choices and resulting in no data.

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
