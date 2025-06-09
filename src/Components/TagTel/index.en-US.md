---
toc: content
order: 11
group:
  title: Components

nav:
  title: Components
  path: /components
---

# TagTel

## Introduction

In work, it may be necessary to traverse many tags, and a component needs to be sealed to directly pass data, which is convenient to use.

## Code Demonstration

### Basic Usage

```tsx
import * as React from 'react';
import { TagTel } from 'qianyuanx';
import { ArrowUpOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  return (
    <TagTel
      title="库存调成"
      icon={<ArrowUpOutlined style={{ color: 'rgba(112, 182, 3, 1)' }} />}
      onremove={(e) => {
        console.log(e);
      }}
    ></TagTel>
  );
};
export default App;
```

### Change icon

```tsx
import React, { useState } from 'react';
import { TagTel } from 'qianyuanx';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  const [Lifting, setLifting] = useState('asc');
  return (
    <TagTel
      title="库存调成"
      onremove={(e) => {
        console.log(e);
      }}
      icon={
        Lifting == 'asc' ? (
          <ArrowUpOutlined
            style={{
              color: 'rgba(112, 182, 3, 1)',
              fontWeight: '700',
              fontSize: 14,
            }}
          />
        ) : (
          <ArrowDownOutlined
            style={{
              color: 'rgba(2, 167, 240, 1)',
              fontWeight: '700',
              fontSize: 14,
            }}
          />
        )
      }
      onSwitch={() => {
        let arr = Lifting == 'asc' ? 'desc' : 'asc';
        setLifting(arr);
      }}
    ></TagTel>
  );
};
export default App;
```

### API

| Parameter | Description              | Type                    | Default Value |
| --------- | ------------------------ | ----------------------- | ------------- |
| title     | Title                    | string                  | -             |
| icon      | Icon                     | ReactNode               | -             |
| onRemove  | Click to delete callback | (e: MouseEvent) => void | -             |
| onSwitch  | Switch button callback   | () => void              | -             |

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
