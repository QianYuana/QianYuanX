---
toc: content
order: 18
group:
  title: Components

nav:
  title: Components
  path: /components
---

# Http

## Introduction

Every project needs to encapsulate the project's `HTTP requests` during its setup. Here, a majority of scenarios for `native Ajax` have been encapsulated, including `get`, `post`, and a general-purpose `ajax`. You can directly modify the source code when using it to encapsulate the `HTTP` requests that fit your project.

## Code Demo

### Usage of GET Requests

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
        console.log(res, 'GET request');
        setText(JSON.stringify(res.response));
      })
      .catch((err) => {
        console.error(err, 'GET request error');
        setText('GET request error');
      });
  }, []);
  return (
    <div className="down" style={{ alignItems: 'center' }}>
      <p>GET request:</p>
      <p>Result: {text}</p>
    </div>
  );
};
export default App;
```

### Post request usage

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
        console.log(res, 'POST request');
        setText(JSON.stringify(res.response));
      })
      .catch((err) => {
        console.error(err, 'POST request error');
        setText('POST request error');
      });
  }, []);
  return (
    <div className="down" style={{ alignItems: 'center' }}>
      <p>POST request:</p>
      <p>Result: {text}</p>
    </div>
  );
};
export default App;
```

### Ajax Request Usage

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
        console.log(res, 'ajax request');
        setText(JSON.stringify(res.response));
      })
      .catch((err) => {
        console.error(err, 'ajax request error');
        setText('ajax request error');
      });
  }, []);
  return (
    <div className="down" style={{ alignItems: 'center' }}>
      <p>ajax request:</p>
      <p>Result: {text}</p>
    </div>
  );
};
export default App;
```

## API

| Parameter | Description     | Type                                                                                            | Default |
| --------- | --------------- | ----------------------------------------------------------------------------------------------- | ------- |
| method    | Request method  | 'GET' \| 'POST' \| string                                                                       |
| data      | Request data    | object \| string \| number \| boolean \| Array \| null \| undefined \| File \| Blob \| FormData |
| headers   | Request headers | object \| string                                                                                |

## Note

- Currently, `Http` encapsulates `get`, `post`, and `ajax` requests. If other request methods are needed, you can encapsulate them yourself.
- A `token position` is reserved during encapsulation. If a `custom token` is required, please modify it in the source code.
- When encapsulating, a transformation is made for `get` to convert the form format, if you need a different format request, you can encapsulate it yourself, or modify it in the source code.
- Since all requests for payload request data are in form format in the work, `get` and `post` requests have been encapsulated in `form format`. If you need other format requests, you can encapsulate them yourself, or modify them in the source code.

## Finally

If you find it helpful, you can click **Star** in the upper right corner to support it. Thank you.
