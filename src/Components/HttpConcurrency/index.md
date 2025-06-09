---
toc: content
order: 19
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# HttpConcurrency 数据并发请求

## 介绍

基于封装的`Http`请求，做出并发请求的封装可以自行控制并发的数量

## 代码演示

### get 请求用法

```tsx
import React, { useState, useEffect } from 'react';
import { HttpConcurrency } from 'qianyuanx';

const App: React.FC = () => {
  const [httpList, setHttpList] = useState(
    Array(10).fill('http://47.97.251.117:3000/h_patient'),
  );
  const [text, setText] = useState([]);
  const fetchData = async () => {
    httpList.forEach(async (item, index) => {
      await HttpConcurrency(item, 2)
        .then((res) => {
          // console.log(`当前请求：${index} 成功`);
          // arr.push(`当前请求：${index} 成功`);
          setText((text) => [...text, `当前请求：${index} 成功`]);
        })
        .catch((err) => {
          // console.log(err, `当前请求：${index} 失败`);
          // arr.push(`当前请求：${index} 失败`);
          setText((text) => [...text, `当前请求：${index} 失败`]);
        });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="down" style={{ alignItems: 'center' }}>
      <p>并发请求:</p>
      {text && text.map((item) => <p key={item}>{item}</p>)}
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
