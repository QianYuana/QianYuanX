---
toc: content
order: 8
title: 环形链表
group:
  title: 双指针
nav:
  title: 算法
  path: /algorithm
  order: 3
---

# 环形链表

## 链表

`链表`是一种数据结构，由一系列节点组成，每个节点包含数据项和指向下一个节点的引用（或指针）。在前端开发中，链表的节点通常被用来组织和处理数据，尤其是在需要`动态添加或删除数据`时，链表比数组更为灵活。

链表可以分为`单向链表`和`双向链表`两种常见类型：

- 单向链表：每个节点只包含指向下一个节点的引用。
- 双向链表：每个节点同时包含指向下一个节点和上一个节点的引用。

链表的优势在于插入和删除操作的效率较高，因为只需修改节点的指针，而不需要移动其他节点。然而，链表的缺点是访问节点的效率较低，因为必须从头节点开始逐个遍历。

## 环

链表中的环指的是链表中至少有一个节点的 `next 指针`指向了在链表中的一个`已经出现过的节点`，导致链表中出现了环状结构。环在链表中出现可能会导致一些问题，例如在遍历链表时陷入死循环，或者影响其他操作的正确性。

在前端开发中，检测链表中是否存在环通常会用到`快慢指针算法`。快慢指针算法是通过`两个指针以不同的速度遍历链表`，**如果链表中存在环，快指针最终会追上慢指针，从而判断链表中存在环**。这种算法的`时间复杂度为 O(n)`，`空间复杂度为 O(1)`，是一种高效的环检测方法。

## React 中使用链表

**示例**

```ts
import React from 'react';

// 定义链表节点类
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 定义链表组件
function LinkedListComponent() {
  // 创建链表节点
  const node1 = new ListNode('Node 1');
  const node2 = new ListNode('Node 2');
  const node3 = new ListNode('Node 3');

  // 构建链表结构
  node1.next = node2;
  node2.next = node3;

  // 遍历链表并输出节点值
  const traverseLinkedList = () => {
    let current = node1; // 从头节点开始遍历
    const nodeList = [];

    while (current) {
      nodeList.push(current.val);
      current = current.next;
    }

    console.log('链表节点值:', nodeList.join(' -> '));
  };

  // 渲染链表组件
  return (
    <div>
      <h2>链表组件</h2>
      <button onClick={traverseLinkedList}>遍历链表</button>
    </div>
  );
}

export default LinkedListComponent;
```

在这个示例中，我们首先定义了一个`ListNode`类来表示链表节点，然后在函数组件` LinkedListComponent` 中创建了几个`链表节点`，并通过将它们的 `next 属性`连接起来构建了一个简单的链表。组件中还包含了一个按钮，点击按钮会遍历链表并输出节点的值。

**注意**：虽然在实际的 React 应用中，直接使用链表的情况并不常见，但是理解链表的概念和在 React 组件中使用链表的基本原理有助于扩展你的编程思维，更好地应对复杂的数据结构和算法问题。

## 环形链表

给你一个`链表的头节点 head `，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

**示例 1：**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```ts
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表
```

**示例 2：**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```ts
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3：**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```ts
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

**解法**

```ts
function hasCycle(head: ListNode | null): boolean {
  //链表不为空 且 链表下一步不为空 否则返回 false
  if (!head || !head.next) {
    return false;
  }
  // 快慢指针
  let slow = head;
  let fast = head;
  // 快指针当前满足不为空，并且快指针下一步不为空 否则为false
  while (fast && fast.next) {
    // 快指针每次移动两步，慢指针每次移动一步
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      // 如果快指针和慢指针相遇，则链表中存在环
      return true;
    }
  }
  return false;
}
```
