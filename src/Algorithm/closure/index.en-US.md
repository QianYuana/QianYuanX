---
toc: content
order: 2
title: The concept of closures
group:
  title: closure
nav:
  title: Algorithm
  path: /algorithm
  order: 3
---

# Closure

For front-end developers, closures are a difficult concept to understand and master! Because the generation of closures is not only related to the scope of variables, but also closely related to the lifecycle of variables. Finally, I can confidently tell you that closures are widely used in practical development, so you **must master** it.

## Definition of closure

A closure is a function that has access to the variables in the scope of another function. **In simple terms, it means creating another function inside a function**.

## The role of closure

The role of closures is to enable functions to have state, so that even after the function's execution ends, its internal variables still exist and can be accessed.

## Code example

Maybe if you only look at the concept, you don't know how closures arise. The following code example will illustrate the creation of closures.

```ts
function add(x: number) {
  return function (y: number) {
    return x + y;
  };
}

var f = add(1);
console.log(f(2)); // 3
```

In the above code, the function `add` receives a parameter `x` and returns a function. This returned function takes a parameter `y` and returns `x + y`.
This creates a closure that can access the parameter `x` of the outer function `add`. When the function `f` is called, it passes the parameter `2` into the function `add` and returns `x + y`, which is `3`.

## Advantages of closures

- Closures allow us to store the state of functions internally, avoiding the need for global variables.
- The advantage of closures lies in the fact that they allow us to define functions outside of the scope of the function itself, eliminating the need to redefine functions within their own scope.
- Closures keep these variable values in memory, ensuring that they are not cleared after function calls.

## Disadvantages of closures

Closures are indeed useful, but there are also some disadvantages:

- Closures can lead to memory leaks because they persist in memory until no other variables point to them.
- Closures can cause memory consumption to become excessive because all variables in the function are stored in memory, leading to performance issues on web pages. The solution is to delete all local variables that are no longer needed before exiting the function.
- Closures allow the values of variables inside functions to be modified from outside the function. Therefore, if you use the outer function as an object and closures as its public methods, and internal variables as private values, you must be careful not to randomly change the values of variables inside the outer function.
