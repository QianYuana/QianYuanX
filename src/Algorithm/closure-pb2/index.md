---
toc: content
order: 4
group:
  title: 闭包
nav:
  title: 算法
  path: /algorithm
  order: 3
---

# 复合函数

今天来到闭包最经典的题目：**复合函数**

## 问题描述

请你编写一个函数，它接收一个函数数组 `[f1, f2, f3，…， fn]` ，并返回一个新的函数 `fn` ，它是函数数组的 复合函数 。

`[f(x)， g(x)， h(x)]` 的 复合函数 为 `fn(x) = f(g(h(x)))` 。

一个空函数列表的 复合函数 是 `恒等函数 f(x) = x `。

你可以假设数组中的每个函数接受一个整型参数作为输入，并返回一个整型作为输出。

**示例 1：**

```ts
输入：functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
输出：65
解释：
从右向左计算......
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
```

**示例 2：**

```ts
输出：functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
输入：1000
解释：
从右向左计算......
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
```

**示例 3：**

```ts
输入：functions = [], x = 42
输出：42
解释：
空函数列表的复合函数就是恒等函数
```

**提示：**

```ts
-1000 <= x <= 1000;
0 <= functions.length <= 1000;
所有函数都接受并返回一个整型;
```

## 解题思路

题目的意思就是创建一个`compase`函数，我们需要返回一个函数`fn`，当我们调用 `fn(4)`,就把给的函数数组给执行一遍，
首先我们可以把函数数组存到外部函数，也可以存一个变量 sum,在内部函数，如果函数数组为空，直接返回 4 这个参数，
否则，就从右向左把函数执行一遍，类似于 `ramda` 的`compase`函数
我们也可以把函数数组反转，这样就是又左向右了。就好做了如下

```ts
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  let arr = functions;
  let sum = 0;
  return function (x) {
    if (arr.length == 0) {
      return x;
    } else {
      sum = x;
      arr.reverse().forEach((item, index) => {
        sum = item(sum);
      });
    }
    return sum;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
```
