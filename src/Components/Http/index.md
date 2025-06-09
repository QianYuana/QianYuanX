---
toc: content
order: 18
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# Http 数据请求

## 介绍

每个项目在搭建时都需要封装该项目的`http请求`,这里封装了一下大部分场景的`原生Ajax`,目前封装了`get`,`post`,还有`ajax(通用)`,在使用的时候可以直接在源码中进行修改，封装符合项目的`http`

## 代码演示

### get 请求用法

```tsx
import React, { useState, useEffect } from 'react';
import { Http } from 'qianyuanx';

const App: React.FC = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    Http.get('http://47.97.251.117:3000/h_patient', {
      data: {
        doctor: '贾梦源',
        val1: '请选择',
        val2: '请选择',
        val3: '请选择',
        val4: '请选择',
        page: 1,
        size: 1,
      },
    })
      .then((res) => {
        console.log(res, 'GET请求');
        setText(JSON.stringify(res.response));
      })
      .catch((err) => {
        console.log(err, 'GET请求错误');
        setText('GET请求错误');
      });
  }, []);
  return (
    <div className="down" style={{ alignItems: 'center' }}>
      <p>GET请求:</p>
      <p>结果：{text}</p>
    </div>
  );
};
export default App;
```

### post 请求用法

```tsx
import React, { useState, useEffect } from 'react';
import { Http } from 'qianyuanx';

const App: React.FC = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    Http.post('http://47.97.251.117:8100/add', {
      data: {
        doctor: '贾梦源',
        val1: '请选择',
        val2: '请选择',
        val3: '请选择',
        val4: '请选择',
        page: 1,
        size: 1,
      },
    })
      .then((res) => {
        console.log(res, 'POST请求');
        setText(JSON.stringify(res.response));
      })
      .catch((err) => {
        console.log(err, 'POST请求错误');
        setText('POST请求错误');
      });
  }, []);
  return (
    <div className="down" style={{ alignItems: 'center' }}>
      <p>POST请求:</p>

      <p>结果：{text}</p>
    </div>
  );
};
export default App;
```

### ajax 请求用法

```tsx
import React, { useState, useEffect } from 'react';
import { Http } from 'qianyuanx';

const App: React.FC = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    Http.ajax('http://47.97.251.117:3000/h_patient', {
      method: 'GET',
      data: {
        doctor: '贾梦源',
        val1: '请选择',
        val2: '请选择',
        val3: '请选择',
        val4: '请选择',
        page: 1,
        size: 1,
      },
    })
      .then((res) => {
        console.log(res, 'ajax请求');
        setText(JSON.stringify(res.response));
      })
      .catch((err) => {
        console.log(err, 'ajax请求错误');
        setText('ajax请求错误');
      });
  }, []);
  return (
    <div className="down" style={{ alignItems: 'center' }}>
      <p> ajax请求：</p>
      <p>结果：{text}</p>
    </div>
  );
};
export default App;
```

## API

| 参数    | 说明     | 类型                                                                                               | 默认值 |
| :------ | :------- | :------------------------------------------------------------------------------------------------- | :----- |
| method  | 请求方式 | 'GET' \| 'POST' \|                                                                                 |
| data    | 请求参数 | object \| string \| number \| boolean \| Array \| null \| undefined \| File \| Blob \| FormData \| |
| headers | 请求头   | object \| string \|                                                                                |

## 注意事项

- 目前`Http`封装了`get`,`post`,`ajax`请求，如果需要其他请求方式，可以自己封装。
- 封装时留了`token位置`，如果需要`自定义token`，请在源码中进行修改.
- 在封装时针对`get做了转化表单格式`处理,如要求不用表单格式可自行更改。
- 由于工作中全部都是表单格式作为请求载荷请求数据，所以在此`get，post`请求都封装了`表单格式`，如果需要其他格式请求，可以自己封装，或者在源码中进行修改，。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
