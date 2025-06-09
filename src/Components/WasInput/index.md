---
toc: content
order: 8
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# WasInput 输入加选择输入框

## 介绍

WasInput 输入加选择输入框最大的功能就是可以使用多行文本进行输入换行分割，同时还可以对对应的数据进行选择。  
**场景：**现在需要设置范围规则，可以支持用户在文本框编辑，换行就是一条数据，但也有不熟悉业务的，需要看着数据勾选范围。在工作中会经常用到。里面用到了**TableTel**组件，该组件也继承了**TablTel**的所有属性，所以可以直接使用。

## 代码演示

### 基础用法

```tsx
import * as React from 'react';
import { useState } from 'react';
import { WasInput } from 'qianyuanx';
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
    <WasInput
      size="large"
      maxRows={10}
      loading={loading}
      columns={columns}
      dataSource={data}
      rowKey={(record: any) => {
        return record.key;
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
import { WasInput } from 'qianyuanx';
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
    <WasInput
      size="large"
      maxRows={10}
      loading={loading}
      columns={columns}
      dataSource={data}
      rowKey={(record: any) => {
        return record.key;
      }}
      total={data.length}
      children={<p>自定义模块，一般放搜索模块</p>}
      onChange={(page: number, pageSize: number) => {
        console.log(page, pageSize, '外层分页');
      }}
      value={'123456'}
      onvalue={(value) => {
        console.log(value);
      }}
    />
  );
};
export default App;
```

## API

| 参数              | 说明                       | 类型                                     | 默认值                      |
| ----------------- | -------------------------- | ---------------------------------------- | --------------------------- |
| size              | 输入框尺寸                 | 'large' \| 'default' \|'small'           | 'default'                   |
| maxRows           | 最大行数                   | number                                   | 10                          |
| loading           | 是否显示加载中             | boolean                                  | false                       |
| children          | 自定义模块                 | React.ReactNode                          | -                           |
| className         | 自定义类名                 | string                                   | -                           |
| columns           | 表格列的配置项             | ColumnsType                              | -                           |
| dataSource        | 表格数据                   | Array<'DataType'>                        | -                           |
| rowSelection      | 行选择配置                 | TableRowSelection                        | -                           |
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

- 组件涉及到了一些 antd 的组件，其中表格的数据是需要自己传递的。
- loading 是用自己控制的，他控制的是 Modal 弹窗的加载状态，你只需要控制你传递的 loading 就行。
- 组件的样式是基于 antd 的，如果需要修改样式，请查看[ant.design](https://ant.design/components/table-cn/)。
- 想要继续开发可以点击右上角**GitHub**进行查看修改。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
