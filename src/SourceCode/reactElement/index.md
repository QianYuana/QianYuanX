---
toc: content
order: 2
group:
  title: 创建React元素
nav:
  title: React源码
  path: /sourceCode
  order: 5
---

# reactElement

当 createElement 函数被调用的时候, 最后会调用 ReactElement 方法返回 ReactElement 对象。

## 注意

ReactElement 是 React 库中的一个重要概念，代表着 React 应用中的一个元素。在 React 应用中，UI 是由多个 ReactElement 组成的，它们描述了你希望在页面上看到的内容。ReactElement 对象包含了构成元素的所有信息，如类型、属性、子元素等，并在 React 应用中被用于构建虚拟 DOM。

以下是对 ReactElement 的一些关键属性的解释：

- **type：** 表示 ReactElement 的类型，可以是字符串、函数或者类。当类型为字符串时，表示该元素是一个 HTML 原生标签；当类型为函数或者类时，表示该元素是一个自定义组件。

- **key：** 用于标识元素的唯一性，帮助 React 更高效地更新 DOM。通常用于列表渲染中，用来识别列表中的每个元素，以便 React 能够正确地跟踪它们的变化。

- **ref：** 用于引用元素的实例或 DOM 元素。可以用于访问组件实例或 DOM 元素，并进行相应的操作。通常在组件中使用 ref 来获取子组件的实例或操作 DOM 元素。

- **props：** 表示元素的属性，是一个包含了所有属性和值的对象。

- **\_owner：** 表示创建该元素的组件。在开发过程中，用于调试和跟踪组件的层级结构。

ReactElement 对象是不可变的，一旦创建就不能更改其内容。React 使用 ReactElement 来构建虚拟 DOM，然后根据虚拟 DOM 来更新实际的 DOM。因此，理解和掌握 ReactElement 对象是很重要的，它是 React 应用中构建 UI 的基础。

```ts
/**
 * 接收参数 返回 ReactElement
 */
const ReactElement = function (type, key, ref, self, source, owner, props) {
  const element = {
    /**
     * 组件的类型, 十六进制数值或者 Symbol 值
     * React 在最终在渲染 DOM 的时候, 需要确保元素的类型是 REACT_ELEMENT_TYPE
     * 需要此属性作为判断的依据
     */
    $$typeof: REACT_ELEMENT_TYPE,

    /**
     * 元素具体的类型值 如果是元素节点 type 属性中存储的就是 div span 等等
     * 如果元素是组件 type 属性中存储的就是组件的构造函数
     */
    type: type,
    /**
     * 元素的唯一标识
     * 用作内部 vdom 比对 提升 DOM 操作性能
     */
    key: key,
    /**
     * 存储元素 DOM 对象或者组件 实例对象
     */
    ref: ref,
    /**
     * 存储向组件内部传递的数据
     */
    props: props,

    /**
     * 记录当前元素所属组件 (记录当前元素是哪个组件创建的)
     */
    _owner: owner,
  };
  // 返回 ReactElement
  return element;
};
```
