---
toc: content
order: 19
group:
  title: Components

nav:
  title: Components
  path: /components
---

# HttpConcurrency

## Introduction

Based on the encapsulated `Http` request, an encapsulation for concurrent requests is created to allow for self-controlled concurrency limits.

## Code Demonstration

### Usage of GET Requests

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
          // console.log(`Request ${index} succeeded`);
          setText((text) => [...text, `Request ${index} succeeded`]);
        })
        .catch((err) => {
          // console.log(err, `Request ${index} failed`);
          setText((text) => [...text, `Request ${index} failed`]);
        });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="down" style={{ alignItems: 'center' }}>
      <p>Concurrent Requests:</p>
      {text && text.map((item) => <p key={item}>{item}</p>)}
    </div>
  );
};
export default App;
```

## API

| Parameter | Description     | Type                                                                                                   | Default |
| :-------- | :-------------- | :----------------------------------------------------------------------------------------------------- | :------ |
| method    | Request Type    | 'GET' \| 'POST' \| ... (other methods can be added as needed)                                          |
| data      | Request Body    | object \| string \| number \| boolean \| Array \| null \| undefined \| File \| Blob \| FormData \| ... |
| headers   | Request Headers | object \| string \| ... (additional types can be supported)                                            |

## Notes

- Currently, the `Http` module encapsulates `get`, `post`, and `ajax` requests. If other request types are needed, they can be encapsulated separately.
- A placeholder for `token` is included in the encapsulation. If custom tokens are required, please modify the source code.
- When encapsulating, a transformation for `get` requests into form-data format is included. If form-data format is not required, modifications can be made.
- Since all requests in our workflow use form-data as the payload, both `get` and `post` requests are encapsulated with form-data format. If other formats are needed, they can be encapsulated separately or modifications can be made to the source code.

## Conclusion

If you find it helpful, please click the **Star** button in the top right corner to show your support. Thank you!
