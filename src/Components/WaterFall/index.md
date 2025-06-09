---
toc: content
order: 17
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# WaterFall 瀑布流布局

## 介绍

现在很多业务展示需要使用`瀑布流布局`，有很多小伙伴不懂瀑布流到底是如何实现的？所以我根据瀑布流实现的原理，封装了`WaterFall`组件，只需传入`数据`与想要的`列数`就可以，大家在使用的时候可以直接拿源码使用！

## 代码演示

### 基础用法

```tsx
import * as React from 'react';
import { useState } from 'react';
import { WaterFall } from 'qianyuanx';

const App: React.FC = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      thumbnailUrl:
        'https://img0.baidu.com/it/u=285986972,3020515808&fm=253&fmt=auto&app=138&f=JPEG?w=358&h=537',
      title: 'Image 1',
    },
    {
      id: 2,
      thumbnailUrl:
        'https://img0.baidu.com/it/u=1606892575,2051524531&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      title: 'Image 2',
    },
    {
      id: 3,
      thumbnailUrl:
        'https://img0.baidu.com/it/u=1606892575,2051524531&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      title: 'Image 3',
    },
    {
      id: 4,
      thumbnailUrl:
        'https://img2.baidu.com/it/u=3213964875,1422804913&fm=253&fmt=auto&app=138&f=JPEG?w=753&h=500',
      title: 'Image 4',
    },
    {
      id: 5,
      thumbnailUrl:
        'https://img1.baidu.com/it/u=2378716717,1684345671&fm=253&fmt=auto&app=138&f=GIF?w=380&h=207',
      title: 'Image 5',
    },
    {
      id: 6,
      thumbnailUrl:
        'https://img0.baidu.com/it/u=4070264356,3444003866&fm=253&fmt=auto&app=138&f=JPEG?w=747&h=500',
      title: 'Image 6',
    },
    {
      id: 7,
      thumbnailUrl:
        'https://img2.baidu.com/it/u=415888273,3926168520&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=499',
      title: 'Image 7',
    },
    {
      id: 8,
      thumbnailUrl:
        'https://img1.baidu.com/it/u=3538817243,1198695917&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=658',
      title: 'Image 8',
    },
    {
      id: 9,
      thumbnailUrl:
        'https://img0.baidu.com/it/u=766306580,737832766&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400',
      title: 'Image 9',
    },
    {
      id: 10,
      thumbnailUrl:
        'https://img1.baidu.com/it/u=19588401,2812850230&fm=253&fmt=auto&app=138&f=JPEG?w=729&h=500',
      title: 'Image 10',
    },
    {
      id: 11,
      thumbnailUrl:
        'https://img2.baidu.com/it/u=2236584604,1236002063&fm=253&fmt=auto&app=138&f=JPEG?w=802&h=462',
      title: 'Image 11',
    },
    {
      id: 12,
      thumbnailUrl:
        'https://img2.baidu.com/it/u=3420267687,4126212386&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1083',
      title: 'Image 12',
    },
    {
      id: 13,
      thumbnailUrl:
        'https://img2.baidu.com/it/u=2768471556,3344035247&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
      title: 'Image 13',
    },
    {
      id: 14,
      thumbnailUrl:
        'https://img1.baidu.com/it/u=1568486064,472941036&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500',
      title: 'Image 14',
    },
    {
      id: 15,
      thumbnailUrl:
        'https://img2.baidu.com/it/u=3440669110,3909515963&fm=253&fmt=auto&app=138&f=JPEG?w=671&h=500',
      title: 'Image 15',
    },
    {
      id: 16,
      thumbnailUrl:
        'https://img2.baidu.com/it/u=2695778528,2880542302&fm=253&fmt=auto&app=138&f=JPEG?w=1080&h=482',
      title: 'Image 16',
    },
    {
      id: 17,
      thumbnailUrl:
        'https://img0.baidu.com/it/u=858868122,4026611448&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
      title: 'Image 17',
    },
    {
      id: 18,
      thumbnailUrl:
        'https://img0.baidu.com/it/u=1981038176,3413922214&fm=253&fmt=auto&app=138&f=JPEG?w=394&h=699',
      title: 'Image 18',
    },
    {
      id: 19,
      thumbnailUrl:
        'https://img0.baidu.com/it/u=1430619683,2689489779&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1002',
      title: 'Image 19',
    },
    {
      id: 20,
      thumbnailUrl:
        'https://img1.baidu.com/it/u=3162084123,271759285&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
      title: 'Image 20',
    },
  ]);
  return <WaterFall data={items} cols={2} />;
};
export default App;
```

## API

| 参数  | 说明                                                 | 类型                                                  | 默认值 |
| :---- | :--------------------------------------------------- | :---------------------------------------------------- | :----- |
| data  | 数据源，必须是数组类型，且数组的每一项必须是一个对象 | { id: number; title: string; thumbnailUrl: string }[] | -      |
| cols  | 需要的列数                                           | Number                                                | 2      |
| style | 自定义样式                                           | object                                                | -      |

## 注意事项

- 该组件使用时直接使用，可以自行修改
- 该组件使用了`flex`布局，所以需要在使用的地方加上`flex-wrap: wrap;`
- 如果需要使用`WaterFall`组件，并确需改瀑布流的判定规则可以私信我或提`issues`

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
