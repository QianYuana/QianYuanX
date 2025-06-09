---
toc: content
order: 6
group:
  title: 闭包
nav:
  title: 算法
  path: /algorithm
  order: 3
---

# 只允许一次函数调用

今天来到闭包的题目：**只允许一次函数调用**

## 问题描述

给定一个函数 `fn` ，它返回一个新的函数，返回的函数与原始函数完全相同，只不过它确保 `fn` 最多被调用一次。

- 第一次调用返回的函数时，它应该返回与 `fn` 相同的结果。
- 第一次后的每次调用，它应该返回 `undefined` 。

**示例 1：**

```ts
输入：fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
输出：[{"calls":1,"value":6}]
解释：
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn 没有被调用
```

**示例 2：**

```ts
输入：fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
输出：[{"calls":1,"value":140}]
解释：
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn 没有被调用
onceFn(4, 6, 8); // undefined, fn 没有被调用
```

**提示：**

```ts
· calls 是一个有效的 JSON 数组
· 1 <= calls.length <= 10
· 1 <= calls[i].length <= 100
· 2 <= JSON.stringify(calls).length <= 1000
```

## 解题思路

**Rest 语法：**我们可以声明一个布尔值，用于跟踪函数是否已被调用。然后，如果函数尚未被调用，我们可以使用 `rest` 和 `spread` 语法传递参数。

```ts
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let status = false;
  return function (...args) {
    if (status) {
      return undefined;
    } else {
      status = true;
      return fn(...args);
    }
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
```
