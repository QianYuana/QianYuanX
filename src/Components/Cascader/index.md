---
toc: content
order: 21
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# Cascader 地区级联选择器

## 介绍

项目中经常会遇到，但是地区行政代码，有些人不知道在哪获取，所以这里提供了一个组件，可以方便的获取地区行政代码。数据依赖于[国家民政部](https://www.mca.gov.cn/n156/n186/index.html/)

## 代码演示

### 基本用法

```tsx
import React, { useEffect, useState } from 'react';
import { Cascader } from 'qianyuanx';
export default function Main() {
  return (
    <Cascader style={{ width: '300px' }} onChange={(e) => console.log(e)} />
  );
}
```

## API

| 参数   | 说明                  | 类型                             | 默认值                  |
| :----- | :-------------------- | :------------------------------- | :---------------------- |
| props  | 兼容 antd 的 Cascader | -                                | -                       |
| option | 数据源                | {label: string, value: string}[] | RegionalDictionaryTable |

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
