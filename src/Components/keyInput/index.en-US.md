---
toc: content
order: 17
group:
  title: Components

nav:
  title: Components
  path: /components
---

# KeyInput

## Introduction

In many work scenarios, input fields often require confirmation using the keyboard, while also supporting scenarios such as barcode scanner input for business use. Therefore, this component, KeyInput, has been encapsulated to facilitate the use of keyboard confirmation operations. Additionally, keyboard hooks have been encapsulated for easier usage.

## Code Demonstration

### Basic Usage

```tsx
import * as React from 'react';
import { KeyInput } from 'qianyuanx';

const App: React.FC = () => {
  const options = [
    { value: '1', label: 'Building 1' },
    { value: '2', label: 'Building 2' },
    { value: '3', label: 'Building 3' },
    { value: '4', label: 'Building 4' },
  ];
  return (
    <KeyInput
      options={options}
      onAdd={(val) => {
        console.log(val);
      }}
    />
  );
};
export default App;
```

## API

| Parameter |                        Description                        |                Type                | Default Value |
| :-------: | :-------------------------------------------------------: | :--------------------------------: | :-----------: |
|  options  | Data source for the dropdown, must be an array of objects | {label: string; value: string; }[] |       -       |
|   onAdd   |        Callback function triggered on confirmation        |              Function              |       -       |

## Precautions

- This component can be used directly and can be modified as needed.

## Conclusion

If you find this component useful, please feel free to click the **Star** button in the top right corner to show your support. Thank you!
