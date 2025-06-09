---
toc: content
order: 9
title: Linked List Cycle II
group:
  title: Two Pointers
nav:
  title: Algorithm
  path: /algorithm
  order: 3
---

# Linked List Cycle II

## Problem Description

Given a `head` of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

If a linked list has a cycle, you can find the cycle's start. There are several ways to define the start of the cycle. In this problem, we use `pos` which represents the position (0-indexed) in the linked list where tail connects to. If `pos` is `-1`, then there is no cycle in the linked list.

**You should not modify the linked list.**

**Example 1:**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```ts
Input: head = [3,2,0,-4], pos = 1
Output: Return the node where the cycle begins
Explanation: There is a cycle in the linked list, where the tail connects to the second node.
```

**Example 2:**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```ts
Input: head = [1,2], pos = 0
Output: Return the node where the cycle begins
Explanation: There is a cycle in the linked list, where the tail connects to the first node.
```

**Example 3:**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```ts
Input: head = [1], pos = -1
Output: Return null
Explanation: There is no cycle in the linked list.
```

**Solution**

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
  // Check if head is null or head.next is null
  if (!head || !head.next) {
    return null;
  }
  // Initialize slow and fast pointers
  let slow = head;
  let fast = head;
  // When fast pointer exists
  while (fast && fast.next) {
    // Slow pointer moves one step, fast pointer moves two steps
    slow = slow.next;
    fast = fast.next.next;
    // When they meet
    if (slow === fast) {
      // Reinitialize slow pointer
      slow = head;
      // Loop until slow pointer is not equal to current fast pointer
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      // When slow pointer meets fast pointer, it's the starting point of the cycle
      return slow;
    }
  }
  // If fast pointer doesn't exist or its next doesn't exist, there is no cycle
  return null;
}
```
