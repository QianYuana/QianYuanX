---
toc: content
order: 5
group:
  title: closure
nav:
  title: Algorithm
  path: /algorithm
  order: 3
---

# Counter II

Today we delve into one of the most classic problems involving closures: **Counter II**.

## Problem Description

Write a function `createCounter` that takes an initial integer value `init` and returns an object containing three functions:

- `increment()`: Increases the current value by `1` and returns it.
- `decrement()`: Decreases the current value by `1` and returns it.
- `reset()`: Sets the current value to `init` and returns it.

**Example 1:**

```ts
Input: n = (10)[('call', 'call', 'call')];
Output: [10, 11, 12];
Explanation: counter() = 10; // First call to counter(), returns n.
counter() = 11; // Returns the value of the previous call plus 1.
counter() = 12; // Returns the value of the previous call plus 1.
```

**Example 2:**

```ts
Input:
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases by 1 after each subsequent call.
```

**Constraints:**

```ts
-1000 <= n <= 1000;
0 <= calls.length <= 1000;
calls[i] === 'call';
```

## Approach

**Own Implementation**

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

**Method 1: Using Closures**  
We can declare a variable `currentCount` and set it to `init`. Then return an object containing three functions for `increment`, `decrement`, and `reset` to manipulate `currentCount`.

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

**Method 2: Using Closure with Shortened Syntax**

We can employ the concept from `Method 1` and apply some syntax shortcuts.

- We can use prefix `++` and `--` syntax instead of `+= 1` and `-= 1`, respectively. This syntax allows you to increment or decrement a number and then return it.
- Combining `currentCount = init` and `return currentCount` into one line of code. In JavaScript, assigning a value to a variable also returns that value.
- Switching the function syntax to arrow syntax while defining functions.

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
