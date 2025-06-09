---
toc: content
order: 12
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# RuleSelect 添加删除模块

## 介绍

`RuleSelect` 组件用于实现基于多种规则添加删除。在工作中，需要添加一个条件，同时可以新增元素和删除元素，其实处理起来会很麻烦，这里把基本的都给大家封装了一下，遇到类似的场景可以直接修改源码。

## 代码演示

### 基础用法

```tsx
import * as React from 'react';
import { RuleSelect } from 'qianyuanx';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Select } from 'antd';

const App: React.FC = () => {
  const dragoption = [
    {
      value: 1,
      label: '当前库位：查找商品正在使用的库位，根据排序规则依次匹配',
    },
    {
      value: 2,
      label: '历史库位：查找商品之前使用过的库位，根据排序规则依次匹配',
    },
    {
      value: 3,
      label:
        '同架库位：查找商品当前库位所在货架的其他库位，根据排序规则依次匹配',
    },
    {
      value: 4,
      label:
        '同款库位：查找商品的同色同款商品当前存放的库位，根据排序规则依次匹配',
    },
    {
      value: 5,
      label:
        '同品库位：查找商品的同一品牌商品当前存放的库位，根据排序规则依次匹配',
    },
    {
      value: 6,
      label:
        '同类库位：查找商品的同一类目商品当前存放的库位，根据排序规则依次匹配',
    },
    {
      value: 7,
      label: '随机库位：查找商品可以存放的库位，根据排序规则依次匹配',
    },
  ];
  const modalSelect = [
    { label: '库位编码', value: '0' },
    { label: '库位序号', value: '1' },
    { label: '楼', value: '2' },
    { label: '道', value: '3' },
    { label: '排', value: '4' },
    { label: '面', value: '5' },
    { label: '层', value: '6' },
    { label: '列', value: '7' },
    { label: '格', value: '8' },
    { label: '库位库存', value: '9' },
  ];
  const modalop = {
    title: '新增排序字段',
    layout: 'horizontal',
    width: 520,
    listData: [
      {
        label: '排序字段',
        name: 'sortField',
        rules: [
          {
            required: true,
            message: '字段不能为空',
          },
        ],
        render: (
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="请选择"
            defaultValue={[]}
            options={modalSelect}
          />
        ),
      },
    ],
  };
  return (
    <RuleSelect
      options={dragoption}
      modalop={modalop}
      modalSelect={modalSelect}
    ></RuleSelect>
  );
};
export default App;
```

## API

| 参数        | 说明     | 类型   | 默认值 |
| :---------- | :------- | :----- | :----- |
| options     | 选项列表 | Array  | []     |
| modalop     | 弹窗配置 | Object | {}     |
| modalSelect | 选择列表 | Array  | []     |

## 注意事项

- `modalop` 配置项，用于配置弹窗的配置
- `modalSelect` 配置项，用于配置弹窗的配置
- `modalop` 配置项，`listData` 配置项，`render` 配置项，用于配置弹窗的配置
- 具体场景需要看业务需要，大概是这样，使用具体在源码进行更改。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
