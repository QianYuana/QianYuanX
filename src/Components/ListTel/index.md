---
toc: content
order: 6
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# ListTel 列表模版

## 介绍

列表模版因为在业务中经常会用到，所以抽离出来了，方便使用。Antd 中也有列表，但是他在 reder 中进行渲染等配置操作，封装后使用时就是正常的标签内容写法

## 代码演示

### 基础用法

```tsx
import { ListTel } from 'qianyuanx';

const App: React.FC = () => {
  return (
    <ListTel title="自定义标题" defaultActiveKey={['1']}>
      <p>自定义内容</p>
    </ListTel>
  );
};
export default App;
```

### 自定义默认展开

```tsx
import { ListTel } from 'qianyuanx';

const App: React.FC = () => {
  return (
    <>
      <ListTel title="自定义标题" defaultActiveKey={['1']}>
        <p>自定义内容</p>
      </ListTel>
      <ListTel title="不展开">
        <p>自定义内容</p>
      </ListTel>
    </>
  );
};
export default App;
```

## API

| 参数             | 说明           | 类型          | 默认值 |
| ---------------- | -------------- | ------------- | ------ |
| title            | 标题           | string        | -      |
| children         | 内容           | ReactNode     | -      |
| className        | 样式类名       | string        | -      |
| style            | 内联样式       | CSSProperties | -      |
| defaultActiveKey | 默认展开的 key | string[]      | []     |
| bordered         | 是否显示边框   | boolean       | true   |

## 注意事项

- 组件是依靠**collapse 折叠面板**进行二次开发的，源码的用法与 antd 一致，具体可以查看[折叠面板](https://ant.design/components/collapse-cn/)
- 想要继续开发可以点击右上角**GitHub**进行查看修改。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
