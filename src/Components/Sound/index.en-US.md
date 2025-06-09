---
toc: content
order: 5
group:
  title: Components

nav:
  title: Components
  path: /components
---

# Sound

## Introduction

In our work, we will make some prompt sounds, and we need to monitor and control the style of the audio. We need to select the style, which I have already processed and can be used directly.

## Code Demonstration

### Basic Usage

```jsx
import { Sound } from 'qianyuanx';
import { Form } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [List, setList] = useState([
    {
      name: 'LinJunJie',
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
              console.log('Click'); // 点击事件
            }}
          ></Sound>
        ))}
    </ul>
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

| Parameter | Description                            | Type     | Default Value |
| --------- | -------------------------------------- | -------- | ------------- |
| item      | The incoming data                      | object   | -             |
| onClick   | Click event                            | function | -             |
| className | Custom styles                          | string   | -             |
| key       | The key of the current audio           | string   | -             |
| errKey    | The key of the currently playing audio | string   | -             |
| onEnd     | End event                              | string   | -             |
| onPlay    | Play event                             | function | -             |
| onPause   | Pause event                            | function | -             |

## Precautions

- The **errKey** parameter is used in conjunction with the **className** parameter. When both **errKey** and **className** exist, the selected style will be displayed. When **errKey** does not exist, the default style will be displayed.
- Other parameters are consistent with audio in antd.
- To continue development, you can click on the top right corner "GitHub" to view and modify.

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
