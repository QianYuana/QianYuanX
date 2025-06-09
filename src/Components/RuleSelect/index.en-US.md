---
toc: content
order: 12
group:
  title: Components

nav:
  title: Components
  path: /components
---

# RuleSelect

## Introduction

The `RuleSelect` component is used to implement addition and deletion based on multiple rules. In the work, it is necessary to add a condition, and at the same time, it can add and delete elements. Actually, it is troublesome to deal with it. Here, the basic ones are packaged for everyone. If you encounter similar scenarios, you can directly modify the source code.

## Code Demonstration

### Basic Usage

```jsx
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

| Parameter   | Description                              | Type   | Default Value |
| ----------- | ---------------------------------------- | ------ | ------------- |
| options     | The data source of the component         | Array  | []            |
| modalop     | The modal configuration of the component | Object | {}            |
| modalSelect | The data source of the modal component   | Array  | []            |

## Precautions

- 'modalop' configuration item, used to configure the pop-up window configuration
- 'modalSelect' configuration item, used to configure the pop-up window configuration
- The 'modalop' configuration item, the 'listData' configuration item, and the 'render' configuration item are used to configure the pop-up window configuration
- The specific scenario depends on business needs. It is roughly like this, and the specific changes are made in the source code.

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
