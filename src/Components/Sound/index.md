---
toc: content
order: 5
group:
  title: 组件
nav:
  title: 组件
  path: /components
---

# Sound 声音

## 介绍

在工作中，我们会做一些提示音之类的，我们需要对音频进行监听控制样式等等，需要进行选中样式的处理，我里面已经处理好了，可以直接使用。

## 代码演示

### 基础用法

```jsx
import { Sound } from 'qianyuanx';
import { Form } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [List, setList] = useState([
    {
      name: '林俊杰',
      status: 0,
      audio: 'https://www.shiyinren.com/server/1/442549.mp3',
    },
  ]);
  return (
    <ul>
      {List &&
        List.map((item, index) => (
          <Sound
            // className={newKey == index ? "sound-recative" : ""}
            key={index}
            // errKey={newKey}   //
            item={item}
            onClick={() => {
              console.log('点击'); // 点击事件
            }}
          ></Sound>
        ))}
    </ul>
  );
};
```

```css
.base {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  height: 30px;
  width: 150px;
  background-color: #f2f2f2;
  border-radius: 4px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid #e8e8e8;
  span {
    font-size: 13px;
  }
  .icon {
    display: flex;
    align-items: center;
  }
}
.sound-recative {
  background-color: rgba(2, 167, 240, 1);
  border: none;
  span {
    color: #fff;
  }
}
```

## API

| 参数      | 说明                 | 类型     | 默认值 |
| --------- | -------------------- | -------- | ------ |
| item      | 传入的数据           | object   | -      |
| onClick   | 点击事件             | function | -      |
| className | 自定义样式           | string   | -      |
| key       | 当前音频的 key       | string   | -      |
| errKey    | 当前播放的音频的 key | string   | -      |
| onEnd     | 结束事件             | string   | -      |
| onPlay    | 播放事件             | function | -      |
| onPause   | 暂停事件             | function | -      |

## 注意事项

- **errKey**是与 className 配合使用，当**errKey**与 className 同时存在时，会显示选中样式，当**errKey**不存在时，会显示默认样式。
- 其他参数与 audio 参数一致。
- 想要继续开发可以点击右上角**GitHub**进行查看修改。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
