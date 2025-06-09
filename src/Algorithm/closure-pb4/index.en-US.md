---
toc: content
order: 6
group:
  title: closure
nav:
  title: Algorithm
  path: /algorithm
  order: 3
---

# Allow Only One Function Call

Today we approach a closure problem: **Allow Only One Function Call**.

## Problem Description

Given a function `fn`, it returns a new function. The returned function is identical to the original function `fn`, except that it ensures `fn` is called at most once.

- The first time the returned function is called, it should return the same result as `fn`.
- For each subsequent call after the first one, it should return `undefined`.

**Example 1:**

```ts
Input: (fn = (a, b, c) => a + b + c),
  (calls = [
    [1, 2, 3],
    [2, 3, 6],
  ]);
Output: [{ calls: 1, value: 6 }];
Explanation: const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn is not called again
```

**Example 2:**

```ts
Input: (fn = (a, b, c) => a * b * c),
  (calls = [
    [5, 7, 4],
    [2, 3, 6],
    [4, 6, 8],
  ]);
Output: [{ calls: 1, value: 140 }];
Explanation: const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn is not called again
onceFn(4, 6, 8); // undefined, fn is not called again
```

**Constraints:**

```ts
- calls is a valid JSON array
- 1 <= calls.length <= 10
- 1 <= calls[i].length <= 100
- 2 <= JSON.stringify(calls).length <= 1000
```

## Approach

**Using Rest Syntax:** We can declare a boolean value to track whether the function has been called. Then, if the function hasn't been called yet, we can use rest and spread syntax to pass the arguments.

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
