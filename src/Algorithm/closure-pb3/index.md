---
toc: content
order: 5
group:
  title: 闭包
nav:
  title: 算法
  path: /algorithm
  order: 3
---

# 计数器 II

今天来到闭包最经典的题目：**计数器 II**

## 问题描述

请你写一个函数 `createCounter`。这个函数接收一个初始的整数值 `init`。并返回一个包含三个函数的对象。

这三个函数是：

- `increment()` 将当前值加 `1` 并返回。
- `decrement()` 将当前值减 `1` 并返回。
- `reset()` 将当前值设置为 `init` 并返回。

**示例 1：**

```ts
输入：
n = 10
["call","call","call"]
输出：[10,11,12]
解释：
counter( ) = 10 // 第一次调用 counter()，返回 n。
counter( ) = 11 // 返回上次调用的值加 1。
counter( ) = 12 // 返回上次调用的值加 1。
```

**示例 2：**

```ts
输入：
n = -2
["call","call","call","call","call"]

输出： [-2,-1,0,1,2]
解释: counter() 最初返回 -2。然后在每个后续调用后增加 1。
```

**提示：**

```ts
-1000 <= n <= 1000;
0 <= calls.length <= 1000;
calls[i] === 'call';
```

## 解题思路

**自己的编写**

```ts
type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let newinit: number = init;
  let sum = init;
  const increment = () => {
    sum += 1;
    return sum;
  };
  const decrement = () => {
    sum -= 1;
    return sum;
  };
  const reset = () => {
    sum = newinit;
    return sum;
  };
  return {
    increment,
    decrement,
    reset,
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
```

**方法 1: 闭包**  
我们可以声明一个变量 `currentCount` 并将其设置为 `init`。然后返回一个包含三个函数的对象，这些函数分别用于 `increment`、`decrement` 和 `reset` 来重置 `currentCount` 。

```ts
var createCounter = function (init: number) {
  let currentCount = init;
  return {
    increment: function () {
      currentCount += 1;
      return currentCount;
    },
    decrement: function () {
      currentCount -= 1;
      return currentCount;
    },
    reset: function () {
      currentCount = init;
      return currentCount;
    },
  };
};
```

**方法 2: 使用缩短语法的闭包**

我们可以采用`方法 1` 中的概念，并缩短语法的几种方式。

- 我们可以用前缀`递增/递减`语法替代` += 1` 和 `-= 1`。这种语法允许你递增或递减一个数字，然后返回它。
- 将 `currentCount = init` 和 `return currentCount` 合并成一行代码。在 JavaScript 中，将值赋给变量也会返回该值。
- 在定义函数时，将函数语法切换为箭头语法。

```ts
var createCounter = function (init: number) {
  let currentCount = init;
  return {
    increment: () => ++currentCount,
    decrement: () => --currentCount,
    reset: () => (currentCount = init),
  };
};
```
