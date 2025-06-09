---
toc: content
order: 16
group:
  title: Components

nav:
  title: Components
  path: /components
---

# SelectInput

## Introduction

SelectInput is an extended component of **WasInput**.

**Scenario:** Now, we need to set up range rules that allow users to edit in the text box, where each line represents a piece of data. However, there are also users who are unfamiliar with the business and need to see the data in a selectable range. This scenario is frequently encountered in our work. It utilizes the **TableTel** component, which inherits all attributes of **TablTel** and can thus be directly used.

## Code Demo

### Basic Usage

```tsx
import * as React from 'react';
import { useState } from 'react';
import { SelectInput } from 'qianyuanx';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false); //弹窗数据加载
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
    <SelectInput
      size="large"
      maxRows={10}
      loading={loading}
      columns={columns}
      dataSource={data}
      rowKey={(record: any) => {
        return `${record.key} + ${record.name} + ${record.age}`;
      }}
      total={data.length}
      children={<p>自定义模块，一般放搜索模块</p>}
      onChange={(page: number, pageSize: number) => {
        console.log(page, pageSize, '外层分页');
      }}
      onvalue={(value) => {
        console.log(value);
      }}
    />
  );
};
export default App;
```

### 控制 Value 的值（新增）

```tsx
import * as React from 'react';
import { useState } from 'react';
import { SelectInput } from 'qianyuanx';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false); //弹窗数据加载
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
    <SelectInput
      size="large"
      maxRows={10}
      loading={loading}
      columns={columns}
      dataSource={data}
      rowKey={(record: any) => {
        return `${record.key} + ${record.name} + ${record.age}`;
      }}
      total={data.length}
      children={<p>自定义模块，一般放搜索模块</p>}
      onChange={(page: number, pageSize: number) => {
        console.log(page, pageSize, '外层分页');
      }}
      value={{ ids: ['1'], value: [{ label: 'Jim Brown (32)', value: '1' }] }}
      onvalue={(value) => {
        console.log(value);
      }}
    />
  );
};
export default App;
```

## API

| Parameter         | Description                                          | Type                                     | Default Value               |
| ----------------- | ---------------------------------------------------- | ---------------------------------------- | --------------------------- |
| size              | Input box size                                       | 'large' \| 'default' \|'small'           | 'default'                   |
| maxRows           | Maximum number of rows                               | number                                   | 10                          |
| loading           | Whether to show loading                              | boolean                                  | false                       |
| children          | Custom module                                        | React.ReactNode                          | -                           |
| className         | Custom class name                                    | string                                   | -                           |
| columns           | Configuration of table columns                       | ColumnsType                              | -                           |
| dataSource        | Table data                                           | Array<'DataType'>                        | -                           |
| rowKey            | Key value of rows                                    | (record: 'DataType') => string           | -                           |
| bordered          | Whether to show border                               | boolean                                  | false                       |
| pagination        | Whether to show pagination                           | boolean                                  | true                        |
| total             | Total number of data items                           | number                                   | -                           |
| onChange          | Triggered when paging, sorting, and filtering change | (page: number, pageSize: number) => void | -                           |
| pageSizeOptions   | Pagination options                                   | Array<number>                            | ["50", "100", "200", "500"] |
| defaultPageSize   | Default page size                                    | number                                   | 50                          |
| defaultCurrent    | Default current page                                 | number                                   | 1                           |
| showSizeChanger   | Whether to show page size selector                   | boolean                                  | true                        |
| showQuickJumper   | Whether to show quick jump                           | boolean                                  | true                        |
| showTotal         | Whether to show total number                         | (total: number) => string                |
| scroll            | Scroll properties of table content area              | object                                   | -                           |
| size              | Table size                                           | 'default' \|'middle' \|'small'           | 'default'                   |
| title             | Table title                                          | React.ReactNode                          | -                           |
| footer            | Table footer                                         | React.ReactNode                          | -                           |
| loading           | Whether to show loading                              | boolean                                  | false                       |
| locale            | Internationalization configuration                   | object                                   | -                           |
| localeCode        | Language code                                        | string                                   | zh_CN                       |
| getPopupContainer | Parent element of popup box                          | () => HTMLElement                        | () => document.body         |
| prefixCls         | Style prefix                                         | string                                   | antd-table                  |

## Precautions

- The component involves some antd components, and the data of the table needs to be passed by yourself.
- Loading is controlled by yourself, which controls the loading state of the Modal pop-up. You only need to control the loading you pass.
- The style of the component is based on antd. If you want to modify the style, please check [ant.design](https://ant.design/components/table-cn/).
- If you want to continue development, you can click on the "GitHub" button in the upper right corner to view and modify it.

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
