---
toc: content
order: 7
group:
  title: Components

nav:
  title: Components
  path: /components
---

# TableTel

## Introduction

The original intention of the table template is that in development, we will inevitably use tables with pagination. However, the built-in pagination of the antd table is not very convenient when dealing with data. In normal scenarios in the project, when switching the pagination, it is necessary to pass the pagination configuration to the back-end, request the interface, and the list data is also rendered accordingly. Therefore, more operations are on the pagination. Currently, the component supports all attributes of "Table" and "Pagination".

## Code Demo

### Basic Usage

```tsx
import * as React from 'react';
import { useState } from 'react';
import { TableTel } from 'qianyuanx';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const App: React.FC = () => {
  const [data, setdata] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      fen: [
        {
          item: '0',
          value: [],
        },
        {
          item: '1',
          value: [{ attrCode: '1', attrName: '库位参数', ext: 'sec' }],
        },
        {
          item: '2',
          value: [{ attrCode: '1', attrName: '库位参数', ext: 'sec' }],
        },
      ],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]);
  const columns: ColumnsType<DataType> = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: '类型',
      dataIndex: 'age',
      key: 'age',
      align: 'center',
    },
    {
      title: '上架',
      dataIndex: 'address',
      key: 'address',
      align: 'center',
    },
    {
      title: '操作',
      dataIndex: 'name',
      key: 'name',
      width: 60,
      align: 'center',
      render: (text, record) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column',
            }}
          >
            <a href="javaScript:;" style={{ color: 'red' }}>
              删除
            </a>
            <a href="javaScript:;" style={{ color: 'green', margin: '10px 0' }}>
              启用
            </a>
            <a href="javaScript:;" style={{ color: 'red' }}>
              停用
            </a>
          </div>
        );
      },
    },
  ];
  return (
    <TableTel
      columns={columns}
      bordered
      dataSource={data}
      total={data.length}
      rowKey={(record) => {
        return record.key;
      }}
      onchange={(page: number, pageSize: number) => {
        console.log(page, pageSize);
      }}
    />
  );
};
export default App;
```

### Control pagination

```tsx
import * as React from 'react';
import { useState } from 'react';
import { TableTel } from 'qianyuanx';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const App: React.FC = () => {
  const [data, setdata] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      fen: [
        {
          item: '0',
          value: [],
        },
        {
          item: '1',
          value: [{ attrCode: '1', attrName: '库位参数', ext: 'sec' }],
        },
        {
          item: '2',
          value: [{ attrCode: '1', attrName: '库位参数', ext: 'sec' }],
        },
      ],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]);
  const columns: ColumnsType<DataType> = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: '类型',
      dataIndex: 'age',
      key: 'age',
      align: 'center',
    },
    {
      title: '上架',
      dataIndex: 'address',
      key: 'address',
      align: 'center',
    },
    {
      title: '操作',
      dataIndex: 'name',
      key: 'name',
      width: 60,
      align: 'center',
      render: (text, record) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column',
            }}
          >
            <a href="javaScript:;" style={{ color: 'red' }}>
              删除
            </a>
            <a href="javaScript:;" style={{ color: 'green', margin: '10px 0' }}>
              启用
            </a>
            <a href="javaScript:;" style={{ color: 'red' }}>
              停用
            </a>
          </div>
        );
      },
    },
  ];
  return (
    <TableTel
      columns={columns}
      bordered
      dataSource={data}
      total={data.length}
      rowKey={(record) => {
        return record.key;
      }}
      pageSizeOptions={[10, 20, 30]}
      defaultPageSize={20}
      defaultCurrent={1}
      onchange={(page: number, pageSize: number) => {
        console.log(page, pageSize);
      }}
    />
  );
};
export default App;
```

## API

| Parameter         | Explanation                                              | Type                                     | Default                     |
| ----------------- | -------------------------------------------------------- | ---------------------------------------- | --------------------------- |
| columns           | Configuration of table columns                           | ColumnsType                              | -                           |
| dataSource        | Table data                                               | Array<'DataType'>                        | -                           |
| rowKey            | Key value of rows                                        | (record: 'DataType') => string           | -                           |
| bordered          | Whether to show borders                                  | boolean                                  | false                       |
| pagination        | Whether to show pagination                               | boolean                                  | true                        |
| total             | Total number of data records                             | number                                   | -                           |
| onChange          | Triggered when pagination, sorting, or filtering changes | (page: number, pageSize: number) => void | -                           |
| pageSizeOptions   | Pagination options                                       | Array<number>                            | ["50", "100", "200", "500"] |
| defaultPageSize   | Default page size                                        | number                                   | 50                          |
| defaultCurrent    | Default current page                                     | number                                   | 1                           |
| showSizeChanger   | Whether to show the page size selector                   | boolean                                  | true                        |
| showQuickJumper   | Whether to show quick jump links                         | boolean                                  | true                        |
| showTotal         | Whether to display the total number of records           | (total: number) => string                |
| scroll            | Scroll properties for the table content area             | object                                   | -                           |
| size              | Table size                                               | 'default' \|'middle' \|'small'           | 'default'                   |
| title             | Table title                                              | React.ReactNode                          | -                           |
| footer            | Table footer                                             | React.ReactNode                          | -                           |
| loading           | Whether to display a loading indicator                   | boolean                                  | false                       |
| locale            | Internationalization configuration                       | object                                   | -                           |
| localeCode        | Language code                                            | string                                   | zh_CN                       |
| getPopupContainer | Parent element for pop-up boxes                          | () => HTMLElement                        | () => document.body         |
| prefixCls         | Style prefix                                             | string                                   | antd-table                  |

## Precautions

- The component is based on the "Table" for secondary development. The usage of source code is consistent with antd. Please refer to [ant.design](https://ant.design/components/table-cn/) for details.
- The "Pagination" in the component is also based on antd for secondary development. Please refer to [ant.design](https://ant.design/components/pagination-cn/) for details.
- The style of the component is based on antd. If you need to modify the style, please refer to [ant.design](https://ant.design/components/table-cn/).
- If you want to continue development, you can click on the "GitHub" button in the upper right corner to view and modify it.

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
