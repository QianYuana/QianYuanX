---
toc: content
order: 7
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# TableTel 表格模版

## 介绍

表格模版的初衷是因为在开发中，我们必然会使用表格加分页，但是在 antd 中 table 自带的分页在处理数据中并不是很好用，项目中正常的场景是，在切换分页时，需要传递给后端的分页配置，请求接口过来，列表的数据也就是跟着渲染的，所以更多的操作是在分页上面，目前组件支持**Table**以及**Pagination**所有属性。

## 代码演示

### 基础用法

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
      width: 200,
      align: 'center',
      render: (text, record) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <a href="javaScript:;" style={{ color: 'red' }}>
              删除
            </a>
            <a href="javaScript:;" style={{ color: 'green' }}>
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

### 控制分页

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
      width: 200,
      align: 'center',
      render: (text, record) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <a href="javaScript:;" style={{ color: 'red' }}>
              删除
            </a>
            <a href="javaScript:;" style={{ color: 'green' }}>
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

| 参数              | 说明                       | 类型                                     | 默认值                      |
| ----------------- | -------------------------- | ---------------------------------------- | --------------------------- |
| columns           | 表格列的配置项             | ColumnsType                              | -                           |
| dataSource        | 表格数据                   | Array<'DataType'>                        | -                           |
| rowKey            | 行的 key 值                | (record: 'DataType') => string           | -                           |
| bordered          | 是否显示边框               | boolean                                  | false                       |
| pagination        | 是否显示分页               | boolean                                  | true                        |
| total             | 数据总条数                 | number                                   | -                           |
| onChange          | 分页、排序、筛选变化时触发 | (page: number, pageSize: number) => void | -                           |
| pageSizeOptions   | 分页选项                   | Array<number>                            | ["50", "100", "200", "500"] |
| defaultPageSize   | 默认分页大小               | number                                   | 50                          |
| defaultCurrent    | 默认当前页                 | number                                   | 1                           |
| showSizeChanger   | 是否显示页码选择器         | boolean                                  | true                        |
| showQuickJumper   | 是否显示快速跳转           | boolean                                  | true                        |
| showTotal         | 是否显示总条数             | (total: number) => string                |
| scroll            | 表格内容区域的滚动属性     | object                                   | -                           |
| size              | 表格大小                   | 'default' \|'middle' \|'small'           | 'default'                   |
| title             | 表格标题                   | React.ReactNode                          | -                           |
| footer            | 表格尾部                   | React.ReactNode                          | -                           |
| loading           | 是否显示加载中             | boolean                                  | false                       |
| locale            | 国际化配置                 | object                                   | -                           |
| localeCode        | 语言代码                   | string                                   | zh_CN                       |
| getPopupContainer | 弹出框的父元素             | () => HTMLElement                        | () => document.body         |
| prefixCls         | 样式前缀                   | string                                   | antd-table                  |

## 注意事项

- 组件是依靠**Table 表格**进行二次开发的，源码的用法与 antd 一致，详细请查看[ant.design](https://ant.design/components/table-cn/)。
- 组件中**Pagination 分页** 也是基于 antd 进行二次开发的，详细请查看[ant.design](https://ant.design/components/pagination-cn/)。
- 组件的样式是基于 antd 的，如果需要修改样式，请查看[ant.design](https://ant.design/components/table-cn/)。
- 想要继续开发可以点击右上角**GitHub**进行查看修改。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
