---
toc: content
order: 7
title: Concept of Two Pointers
group:
  title: Two Pointers
nav:
  title: Algorithm
  path: /algorithm
  order: 3
---

# Two Pointers

`Two Pointers` is a widely used and fundamental algorithm, more like a mindset than an algorithm strictly speaking. In the context of algorithms, "pointers" don't just refer to memory addresses as in languages like C/C++, but also to indices or cursors. This article will provide a brief introduction to the concept of two pointers and the `four common models` of two pointers, serving as a reference for beginners to learn about two pointers.

## Core Idea of Two Pointers

`Two Pointers` involve using two or more pointers to traverse an object and perform corresponding operations. It is mostly used in array operations, leveraging the sequential nature of arrays. Two pointers are commonly used to reduce the time complexity of algorithms, as using multiple pointers can avoid nested loops.

## Key Points of Two Pointers

- Selection of initial pointer positions
- Direction of pointer movement
- Speed of pointer movement

**These three key points are the core and the challenge of the two-pointer algorithm.**

## Definition of Two Pointers

`Two Pointers` refer to the process of traversing an object using two or more pointers, which move in the same direction (`fast-slow pointers`) or in opposite directions (`collision pointers`). In other words, the two-pointer technique fully utilizes the ordered nature of arrays, simplifying some computations in certain cases.

## Collision Pointers Model

`Collision Pointers`, also known as `Two Pointers`, are used in `ordered arrays`. The pointer pointing to the leftmost index is defined as the `left pointer`, and the one pointing to the rightmost index is defined as the `right pointer`. Then, the arrays are traversed from both ends towards the middle.

**The Collision Pointers are suitable for ordered arrays, meaning that when you encounter a problem with an ordered array, you should think of using Collision Pointers as a solution. It is also known as binary search.**

**Sum of Two Numbers**

```ts
function sum(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] > target) {
      right--;
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else if (arr[left] + arr[right] === target) {
      return [left, right];
    }
  }
}
```

**Array Reversal**

```ts
function reverse(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
```

## Fast-Slow Pointers Model

Fast-slow pointers are also a form of `Two Pointers`, but both pointers start traversing the array from the same end. The two pointers, namely `fast pointer` and `slow pointer`, move according to different strategies until their values are equal (or other special conditions are met), such as `fast advancing by two positions` and `slow advancing by one position`.

- **Note:** Fast-slow pointers are suitable for handling problems related to linked lists, especially those involving cycles, middle nodes, or the kth node from the end. In these scenarios, fast-slow pointers can effectively traverse the linked list and move at different speeds, thus finding the required node or determining if the linked list has a cycle.
- **Application Scenarios:** For example, determining if a linked list has a cycle, finding the middle node of a linked list, or determining the intersection point of linked lists.

**String Compression**

```ts
function compressString(S) {
  let newS = '', i = 0, j = 0;
  while (j < S.length - 1) {
    if (S[j] !== S[j + 1]) {
      newS += S[i] + (j - i + 1);
      i = j + 1;
    }
    j++;
  }
  newS += S[i] + (j - i + 1);
  return newS.length < S.length ? S;
}
```

## Sliding Window Model

**Sliding Window:** Left and right pointers form a "window", with the right pointer continuously expanding and the left pointer shrinking according to certain conditions. This type of problem often involves finding substrings, subarrays, subsequences, etc., and is typically solved using the sliding window technique.

**Case 1: Finding the Longest**
① Initialize the left and right pointers, the content between them forms the window. Define a variable `result` to record the current result of the sliding window and another variable `bestResult` to record the best result under the current sliding window.
② The right pointer should slide rightward.
③ After each slide, record the current sliding result. If the current result meets the condition, update the best result, and then the right pointer continues to slide right; if the current result does not meet the condition, the left pointer should gradually shrink.
④ Stop sliding when the right pointer reaches the end.

```ts
Initialize left, right, result, bestResult
while (right pointer has not reached the end) {
    Expand the window, add the element corresponding to the right, update the current result
    while (result does not meet the requirement) {
        Update the best result
        Shrink the window, remove the element corresponding to the left, move left
    }
    Update the best result
    right++;
}
Return bestResult
```

**Case 2: Finding the Shortest**
① Initialize the left and right pointers, the content between them forms the window. Define a variable `result` to record the current result of the sliding window and another variable `bestResult` to record the best result under the current sliding window.
② The right pointer should slide rightward.
③ After each slide, record the current sliding result. If the current result meets the condition, update the best result, and then the right pointer continues to slide right; if the current result does not meet the condition, the left pointer should gradually shrink.
④ Stop sliding when the right pointer reaches the end.

```ts
Initialize left, right, result, bestResult
while (right pointer has not reached the end) {
    Expand the window, add the element corresponding to the right, update the current result
    while (result does not meet the requirement) {
        Update the best result
        Shrink the window, remove the element corresponding to the left, move left
    }
    Update the best result
    right++;
}
Return bestResult
```

## Merge Sort Model

**Merge Sort** involves splitting an array into two subarrays, sorting each subarray, and then merging the two sorted subarrays into one sorted array.

**Merge Two Sorted Arrays**
Given two integer arrays `nums1` and `nums2` sorted in `non-decreasing order`, with `m` and `n` elements, respectively, merge `nums2` into `nums1` as one sorted array. The sorted array should not

be returned by the function but instead stored within the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

**Example 1:**

```ts
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: We need to merge [1,2,3] and [2,5,6].
The result is [1,2,2,3,5,6].
```

**Example 2:**

```ts
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: We need to merge [1] and [].
The result is [1].
```

**Example 3:**

```ts
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: We need to merge [] and [1].
The result is [1].
Note that because m = 0, the initial elements in nums1 are supposed to be ignored. We just need to ensure that the result can be stored in nums1.
```

**Constraints:**

```ts
nums1.length == m + n;
nums2.length == n;
0 <= m, n <= 200;
1 <= m + n <= 200 - 109 <= nums1[i], nums2[j] <= 109;
```

**Solution:**

```ts
function merge(nums1: number[], m: number, nums2: number[], n: number) {
  let e = nums1.length - 1; // Points to the end of nums1
  let mi = m - 1; // Points to the end of nums1
  let ni = n - 1; // Points to the end of nums2

  while (mi >= 0 && ni >= 0) {
    if (nums1[mi] > nums2[ni]) {
      // Move the maximum value to the end
      nums1[e] = nums1[mi];
      mi--;
    } else {
      nums1[e] = nums2[ni];
      ni--;
    }
    // Move the end pointer to the left
    e--;
  }

  // nums2 is empty
  while (mi >= 0) {
    nums1[e] = nums1[mi];
    mi--;
    e--;
  }

  // nums1 is empty (all zeros)
  while (ni >= 0) {
    nums1[e] = nums2[ni];
    ni--;
    e--;
  }

  return nums1;
}
```
