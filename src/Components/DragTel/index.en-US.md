---
toc: content
order: 13
group:
  title: Components

nav:
  title: Components
  path: /components
---

# DragTel

## Introduction

The DragTel component is developed using `dnd-kit`. After reviewing its official documentation, we have implemented the "sortable drag and drop" functionality, which is frequently used in practical scenarios. For more advanced or specialized drag and drop use cases, please refer to the official [dnd-kit documentation](https://docs.dndkit.com/). If you prefer to use `react-dnd`, you can refer to Ant Design's detailed documentation on drag and drop features.

## Code Demonstration

### Basic Usage

```tsx
import React, { useState } from 'react';
import { DragTel, TagTel } from 'qianyuanx';

const App: React.FC = () => {
  const [list, setlist] = useState<{ id: string; value: string }[]>([
    { id: '123121231', value: 'Jack' },
    { id: '345345', value: 'Join' },
    { id: '2312', value: 'xiaohong' },
    { id: '7867', value: 'ming' },
  ]);
  return (
    <div className="down" style={{ display: 'flex', alignItems: 'center' }}>
      <DragTel
        list={list}
        onChange={(items) => {
          console.log(items, 'dnd');
          setlist(items);
        }}
      />
    </div>
  );
};
export default App;
```

## API

| Param    | Description                         | Type                                                  | Default Value |
| :------- | :---------------------------------- | :---------------------------------------------------- | :------------ |
| list     | Array to be dragged                 | Array<{ id: string; value: string }>                  | []            |
| onChange | Callback after dragging is complete | (items: Array<{ id: string; value: string }>) => void | -             |

## Precautions

- The component internally uses `TagTel`. When developing your own component, replace the internal components in the source code with the components you need to drag, such as `TagTel`.
- The callback after dragging completion will return the array after dragging is complete. Remember to update the `list` array.
- If you need to customize the component, replace the internal components in the source code with the components you need to drag, such as `TagTel`.
- The most important point is that your data must contain the `id` field because the internal logic uses `id` to determine whether it is the same element.

## Conclusion

If you find this component useful, please feel free to click the **Star** button in the top right corner to show your support. Thank you!
