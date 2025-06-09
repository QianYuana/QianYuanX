---
toc: content
order: 17
group:
  title: Components

nav:
  title: Components
  path: /components
---

# WaterFall

## Introduction

Many business displays nowadays require a `waterfall layout`. Many users don't understand how the waterfall layout is implemented. Therefore, based on the principle of the waterfall layout, I have encapsulated the `WaterFall` component. You only need to pass in the `data` and the desired number of `columns`, and you can use it directly in your projects!

## Code Demo

### Basic Usage

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

| Property | Description                                                                                                                                                    | Type   | Default |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| data     | The data source. It must be an array, and each item in the array must be an object with the structure: `{ id: number; title: string; thumbnailUrl: string }[]` | Array  | -       |
| cols     | The number of columns required                                                                                                                                 | Number | 2       |
| style    | Custom styles for the component                                                                                                                                | object | -       |

## Notes

- This component can be used directly and can be modified as needed.
- This component uses a `flex` layout, so make sure to add `flex-wrap: wrap;` where it is used.
- If you need to use the `WaterFall` component and need to change the waterfall layout rules, you can message me directly or raise an issue.

## Conclusion

If you find it helpful, please consider giving it a star by clicking on the top right corner. Thank you.
