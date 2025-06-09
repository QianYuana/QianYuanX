---
toc: content
order: 6
group:
  title: Components

nav:
  title: Components
  path: /components
---

# ListTel

## Introduction

The list template has been extracted for ease of use as it is frequently used in business. Antd also has a list, but it performs rendering and other configuration operations in Reder, and when used after encapsulation, it is the normal way to write label content

## Code Demo

### Basic Usage

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

### Customize default deployment

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

|    Parameter     |         Explanation         |     Type      | Default Value |
| :--------------: | :-------------------------: | :-----------: | :-----------: |
|      title       |            Title            |    string     |       -       |
|     children     |           Content           |   ReactNode   |       -       |
|    className     |      Style class name       |    string     |       -       |
|      style       |        Inline style         | CSSProperties |       -       |
| defaultActiveKey |     Default active key      |   string[]    |       -       |
|     bordered     | Whether to display a border |    boolean    |     true      |

## Precautions

- This component is developed based on the "collapse" panel, and its source code usage is consistent with the antd design. For specific details, you can refer to [Collapse Panel](https://ant.design/components/collapse-cn/)
- If you want to continue developing, you can click the "GitHub" button on the top right corner to view and modify.

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
