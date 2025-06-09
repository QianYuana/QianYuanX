---
toc: content
order: 1
group:
  title: 创建React元素
nav:
  title: React源码
  path: /sourceCode
  order: 5
---

# createElement

## 创建元素

为了了解 React.createElement 这个方法，我们自己手动去实现一个简易版的。

OK，首先我们通过 React.createElement 方法创建一个 React 元素，并且打印出来：

<!-- <code src="./demo.ts"></code> -->

```tsx
import React from 'react';
const APP = () => {
  const b = React.createElement('div', { data: '1234' }, '创建的div元素');
  console.log(b);
  return b;
};
export default APP;
```

**打开控制台查看结果**

项目中使用：

```ts
const _getTable = (sizeDisplayMethod) => {
  return React.createElement(AntdTable, {
    key: tableKey,
    maxHeight: tableHeight,
    isMultiLine: isMultiLine,
    rowKey,
    columns: getTableColumns(),
    dataSource: datas.data || [],
    totalData: datas.summary,
    rowSelection:
      rowSelection === false
        ? false
        : {
            fixed: true,
            type: rowType,
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
              setState({ selectedRowKeys, selectedRows });
            },
          },
    isShowTotal: (props.extraDatas || {}).summary,
    isSubTotalEnable,
  });
};
```

## 源码解析

**源码中 16.8 比 16.3 多了一种开发环境中元素类型的判断来触发警告**  
**注意：** 在 React 16.8 版本中引入了 `enableRefAsProp` 控制属性的原因是为了在过渡阶段提供更好的向后兼容性。这个属性的作用是控制是否启用 `ref` 作为属性（即将 `ref` 视为普通属性）。

在 React 16.3 之前，`ref` 是作为一个特殊的属性处理的，即你可以直接在元素上定义 `ref` 属性来获取对该元素的引用。但是从 React 16.3 开始，React 引入了新的 `ref` API，允许通过 `React.createRef`() 或回调函数的方式来创建 `ref`，以替代直接定义 `ref` 属性。这样做的目的是为了提高 React 中对 `ref` 的处理一致性和可预测性。

因此，在 React 16.8 中，引入了 `enableRefAsProp` 控制属性，以便于开发者可以逐步迁移到新的 `ref` API。当 `enableRefAsProp` 被打开时，React 会忽略 `ref` 属性，而是使用 props.`ref` 作为 `ref` 的来源。这样可以让开发者在不修改现有代码的情况下，逐步将 `ref` 替换为新的 API。

至于删除 `self` 和 `source` 属性，这是因为它们在 React 内部并没有被广泛使用，而且可能导致一些开发工具或环境的兼容性问题。因此，在 React 18 中，为了简化代码并减少潜在的问题，决定删除了这两个属性。通常情况下，这些属性对于 React 应用的开发者并不重要，因此删除它们不会对现有代码产生太大影响。

```ts
/**
 * 创建 React Element
 * type      元素类型
 * config    配置属性
 * children  子元素
 * 1. 分离 props 属性和特殊属性
 * 2. 将子元素挂载到 props.children 中
 * 3. 为 props 属性赋默认值 (defaultProps)
 * 4. 创建并返回 ReactElement
 */
export function createElement(type, config, children) {
  if (__DEV__) {
    //如果处于开发模式
    if (!isValidElementType(type)) {
      //检查传入的元素类型是否有效，如果无效，发出警告信息。
      // 这是一个无效的元素类型。
      //
      // 我们会在这种情况下发出警告，但不会抛出错误。我们期望元素的创建会成功，
      // 但可能在渲染时会出现错误。
      let info = ''; //初始化一个信息字符串，用于存储警告信息。
      if (
        type === undefined ||
        (typeof type === 'object' &&
          type !== null &&
          Object.keys(type).length === 0)
      ) {
        //如果类型为 undefined 或者是一个空对象，则提示开发者可能忘记导出组件或混淆了默认导出和命名导入。
        info +=
          ' 你可能忘记从定义组件的文件中导出你的组件，或者可能混淆了默认导出和命名导入。';
      }

      let typeString; //初始化一个变量，用于存储类型的字符串表示。
      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        //如果类型为 React 元素对象，则类型字符串为元素的组件名或 'Unknown'，并提醒开发者可能意外地导出了 JSX 字面量。
        typeString = `<${getComponentNameFromType(type.type) || '未知'} />`;
        info = ' 你是否意外地导出了一个 JSX 字面量而不是一个组件？';
      } else {
        //否则，类型字符串为类型的类型名。
        typeString = typeof type;
      }

      console.error(
        'React.createElement: 类型无效 -- 期望一个字符串（用于 ' +
          '内置组件）或一个类/函数（用于复合组件），但得到了: %s.%s',
        typeString,
        info,
      );
    } else {
      // 这是一个有效的元素类型。

      // 如果类型无效，则跳过键值警告，因为我们的键值验证逻辑不希望接收非字符串/函数类型，
      // 这可能会导致混乱的错误。我们不希望开发和生产环境的异常行为不同。
      // （渲染将抛出带有有用信息的错误，并且一旦类型被修复，键值警告将出现。）
      for (let i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
      // 对传入的子元素进行键值验证。
    }

    // 与 jsx() 运行时不同，createElement() 不会警告键值扩展。
  }
  /**
   * propName -> 属性名称
   * 用于后面的 for 循环
   */
  let propName;

  /**
   * 存储 React Element 中的普通元素属性 即不包含 key ref ,     self source 在18已经删除了
   */
  const props = {};

  /**
   * 待提取属性
   * React 内部为了实现某些功能而存在的属性
   */
  let key = null;
  let ref = null;

  if (config != null) {
    //如果配置项不为null，
    if (hasValidRef(config)) {
      // // 如果 config 对象中有合法的 ref 属性
      if (!enableRefAsProp) {
        //如果未启用 enableRefAsProp，则将 ref 属性赋值给 ref 变量。
        ref = config.ref;
      }

      if (__DEV__ && !disableStringRefs) {
        //如果处于开发模式且未禁用字符串 ref，则警告如果字符串 ref 无法自动转换。
        warnIfStringRefCannotBeAutoConverted(config, config.__self);
      }
    }
    if (hasValidKey(config)) {
      // 如果配置对象中存在有效的 key 属性，则执行以下代码块。
      if (__DEV__) {
        // 如果处于开发模式，则检查 key 是否可以强制转换为字符串。
        checkKeyStringCoercion(config.key);
      }
      key = '' + config.key;
      // 将 key 属性转换为字符串并赋值给 key 变量。
    }

    // 剩余属性将添加到新道具对象中
    for (propName in config) {
      //遍历配置对象中的属性。
      if (
        hasOwnProperty.call(config, propName) &&
        // 跳过保留的道具名称
        propName !== 'key' &&
        (enableRefAsProp || propName !== 'ref') &&
        //即使我们不再在运行时使用这些，我们也不希望
        //它们以道具的形式出现，所以在createElement中我们将它们过滤掉。
        //我们不必在jsx(),运行时这样做，因为jsx()
        //transform从未将这些作为道具；它使用了单独的论据。
        propName !== '__self' &&
        propName !== '__source'
        // 如果属性是配置对象自身的属性，并且不是保留的属性（'key', 'ref', '__self', '__source'），则执行以下代码块。
      ) {
        props[propName] = config[propName];
        // 将属性添加到 props 对象中。
      }
    }
  }

  // Children 可以是多个论点，这些论点被转移到
  //新分配的道具对象。

  /**
   * 将第三个及之后的参数挂载到 props.children 属性中
   * 如果子元素是多个 props.children 是数组
   * 如果子元素是一个 props.children 是对象
   */

  // 由于从第三个参数开始及以后都表示子元素
  // 所以减去前两个参数的结果就是子元素的数量
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    // 如果只有一个子元素，将子元素赋值给 props 对象的 children 属性。
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    // 创建一个与子元素数量相同大小的数组。
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
      // 将子元素添加到数组中。
    }
    if (__DEV__) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
      // 在开发模式下，冻结子元素数组。
    }
    props.children = childArray;
    // 将子元素数组赋值给 props 对象的 children 属性。
  }

  // 解析defaultProps 赋值给props
  if (type && type.defaultProps) {
    // 如果存在类型且类型有 defaultProps 属性
    const defaultProps = type.defaultProps;
    // 将类型的 defaultProps 属性赋值给变量
    for (propName in defaultProps) {
      // 遍历 defaultProps 对象中的属性。
      if (props[propName] === undefined) {
        // 如果 props 对象中对应属性的值为 undefined，
        props[propName] = defaultProps[propName];
        // 将 defaultProps 中的属性值赋值给 props 对象。
      }
    }
  }
  if (__DEV__) {
    // 开发模式，
    if (key || (!enableRefAsProp && ref)) {
      // 如果存在 key 或者未启用 enableRefAsProp 并且存在 ref
      const displayName =
        typeof type === 'function'
          ? type.displayName || type.name || 'Unknown'
          : type;
      // 获取类型的显示名称。
      if (key) {
        // 如果存在 key，则定义警告信息。
        defineKeyPropWarningGetter(props, displayName);
      }
      if (!enableRefAsProp && ref) {
        // 如果未启用 enableRefAsProp 并且存在 ref，则定义警告信息。
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  const element = ReactElement(
    type,
    key,
    ref,
    undefined,
    undefined,
    ReactCurrentOwner.current,
    props,
  );
  // 创建 React 元素。

  if (type === REACT_FRAGMENT_TYPE) {
    // 如果类型是 Fragment，则验证 Fragment 的属性。
    validateFragmentProps(element);
  }

  return element;
}
```

**注意：** 这段代码主要是用来创建 React 元素的，它接受类型、配置和子元素作为参数，并根据这些参数创建一个描述 React 元素的对象。同时，在开发模式下，它还会对一些情况下的不规范用法进行警告提示，以帮助开发者发现潜在的问题。
