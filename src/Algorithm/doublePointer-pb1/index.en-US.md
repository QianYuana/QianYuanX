---
toc: content
order: 8
title: Linked List Cycle
group:
  title: Two Pointers
nav:
  title: Algorithm
  path: /algorithm
  order: 3
---

# Linked List Cycle

## Linked List

A `linked list` is a data structure composed of a series of nodes, where each node contains a data item and a reference (or pointer) to the next node. In frontend development, linked list nodes are commonly used to organize and manipulate data, especially when dynamic addition or deletion of data is required. Linked lists are more flexible than arrays in such scenarios.

Linked lists can be classified into two common types:

- Singly Linked List: Each node contains a reference to the next node.
- Doubly Linked List: Each node contains references to both the next and previous nodes.

The advantage of linked lists lies in the efficiency of insertion and deletion operations, as only the pointers of nodes need to be modified without moving other nodes. However, the drawback is the lower efficiency of accessing nodes because traversal must start from the head node and proceed one by one.

## Cycle

In a linked list, a cycle refers to the situation where at least one node's `next pointer` points to a node that has already appeared in the linked list, creating a cyclic structure. The presence of a cycle in a linked list can lead to issues such as infinite loops during traversal or affecting the correctness of other operations.

In frontend development, detecting whether a cycle exists in a linked list typically involves using the `Floyd's Tortoise and Hare algorithm`, also known as the `slow and fast pointers algorithm`. This algorithm traverses the linked list with two pointers at different speeds. **If there's a cycle in the linked list, the fast pointer will eventually catch up with the slow pointer, thus indicating the existence of a cycle**. This algorithm has a time complexity of `O(n)` and a space complexity of `O(1)`, making it an efficient method for cycle detection.

## Using Linked List in React

**Example**

```ts
import React from 'react';

// Definition of a linked list node class
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Definition of a linked list component
function LinkedListComponent() {
  // Create linked list nodes
  const node1 = new ListNode('Node 1');
  const node2 = new ListNode('Node 2');
  const node3 = new ListNode('Node 3');

  // Build the linked list structure
  node1.next = node2;
  node2.next = node3;

  // Traverse the linked list and output node values
  const traverseLinkedList = () => {
    let current = node1; // Start traversal from the head node
    const nodeList = [];

    while (current) {
      nodeList.push(current.val);
      current = current.next;
    }

    console.log('Node values in the linked list:', nodeList.join(' -> '));
  };

  // Render the linked list component
  return (
    <div>
      <h2>Linked List Component</h2>
      <button onClick={traverseLinkedList}>Traverse the Linked List</button>
    </div>
  );
}

export default LinkedListComponent;
```

In this example, we first define a `ListNode` class to represent the nodes of the linked list. Then, within the functional component `LinkedListComponent`, we create several linked list nodes and construct a simple linked list by connecting their `next` properties. The component also includes a button that, when clicked, traverses the linked list and outputs the values of the nodes.

**Note**: Although directly using linked lists in actual React applications is not common, understanding the concept of linked lists and the basic principles of using linked lists in React components can help expand your programming mindset and better handle complex data structure and algorithm problems.

## Linked List Cycle

Given a `head` of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. To represent a cycle in the given linked list, we use an integer `pos` which represents the position (0-indexed) in the linked list where tail connects to. If `pos` is `-1`, then there is no cycle in the linked list.

**Example 1:**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```ts
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node.
```

**Example 2:**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```ts
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

**Example 3:**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```ts
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

**Solution**

```ts
function hasCycle(head: ListNode | null): boolean {
  // If the linked list is empty or contains only one node, return false
  if (!head || !head.next) {
    return false;
  }
  // Initialize slow and fast pointers
  let slow = head;
  let fast = head;
  // Move the fast pointer two steps at a time and the slow pointer one step at a time
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    // If the slow pointer meets the fast pointer, there is a cycle in the linked list
    if (slow === fast) {
      return true;
    }
  }
  // If the fast pointer reaches the end of the linked list, there is no cycle
  return false;
}
```
