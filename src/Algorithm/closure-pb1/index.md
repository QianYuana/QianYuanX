---
toc: content
order: 3
group:
  title: 闭包
nav:
  title: 算法
  path: /algorithm
  order: 3
---

# 计数器

今天来到闭包最经典的题目：**计数器**

## 问题描述

给定一个整型参数 `n`，请你编写并返回一个 `counter` 函数。这个 `counter` 函数最初返回 `n`，每次调用它时会返回前一个值加 `1` 的值 `( n ,  n + 1 ,  n + 2 ，等等)`。

**示例 1：**

```ts
**输入：**
n = 10
["call","call","call"]
**输出：**[10,11,12]
**解释：**
counter( ) = 10 // 第一次调用 counter()，返回 n。
counter( ) = 11 // 返回上次调用的值加 1。
counter( ) = 12 // 返回上次调用的值加 1。
```

**示例 2：**

```ts
**输入：**
n = -2
["call","call","call","call","call"]

**输出：** [-2,-1,0,1,2]
**解释:** counter() 最初返回 -2。然后在每个后续调用后增加 1。
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
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let sum = null;
  return function () {
    if (sum === null) {
      sum = n;
    } else {
      sum++;
    }
    return sum;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```

**方法 1: 先增加再返回**  
我们先声明一个变量 `currentCount` 并将其设置为` n - 1`。然后在 `counter` 函数内部，增加 `currentCount` 并返回其值。请注意，由于修改了 `currentCount` ，应该使用 `let` 而不是 `const` 来声明它。

```ts
var createCounter = function (n: number) {
  let currentCount = n - 1;
  return function () {
    currentCount += 1;
    return currentCount;
  };
};
```
