---
toc: content
order: 15
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# DebounceSelect 下拉模糊查询

## 介绍

现在项目中有很多需要下拉查询的场景，比如搜索框，下拉选择框等，这些场景是用户在搜索数据的时候，不知道系统有哪些数据，所以需要做一个下拉模糊查询组件，当用户输入字符和列表中的字符不匹配时，下面就会提示暂无数据，如果匹配的话就会出现模糊查询的数据。`接入了接口报错发送到企微群中，请及时处理`

## 代码演示

### 基础用法

```tsx
import React, { useState } from 'react';
import { DebounceSelect } from 'qianyuanx';

const App: React.FC = () => {
  const [list, setlist] = useState<{ id: string; value: string }[]>([
    { id: '123121231', value: 'Jack' },
    { id: '345345', value: 'Join' },
    { id: '2312', value: 'xiaohong' },
    { id: '7867', value: 'ming' },
  ]);
  return (
    <div className="down" style={{ display: 'flex', alignItems: 'center' }}>
      <DebounceSelect style={{ width: 200 }} />
    </div>
  );
};
export default App;
```

## API

| 参数     | 说明             | 类型                                                  | 默认值 |
| :------- | :--------------- | :---------------------------------------------------- | :----- |
| list     | 需要拖拽的数组   | Array<{ id: string; value: string }>                  | []     |
| onChange | 拖拽完成后的回调 | (items: Array<{ id: string; value: string }>) => void | -      |

## 注意事项

- 组件内部使用了 `TagTel`，当自己开发的时候需要把源码内部的组件换成需要拖拽的组件，例如 `TagTel`。
- 拖拽完成后的回调会返回拖拽完成后的数组，记得更新一下`list`数组.
- 如果需要自定义组件，请把源码内部的组件换成需要拖拽的组件，例如 `TagTel`。
- 最重要的一点你的数据中必须包含 `id` 这个字段，因为内部使用了 `id` 来判断是否是同一个元素。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
