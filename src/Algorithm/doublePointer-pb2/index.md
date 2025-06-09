---
toc: content
order: 9
title: 环形链表II
group:
  title: 双指针
nav:
  title: 算法
  path: /algorithm⑁
  order: 3
---

# 环形链表 II

## 题目描述

给定一个`链表的头节点 head` ，返回链表开始入环的第一个节点。 如果链表无环，则返回 `null`。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。`如果 pos 是 -1`，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

**不允许修改 链表。**

**示例 1：**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```ts
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例 2：**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```ts
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3：**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```ts
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
```

**解法**

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
  //首先判断head是否为空或者head的next是否为空
  if (!head || !head.next) {
    return null;
  }
  //初始化快慢指针
  let slow = head;
  let fast = head;
  //当快指针一直存在时
  while (fast && fast.next) {
    //慢指针走一步，快指针走两步
    slow = slow.next;
    fast = fast.next.next;
    //相遇时
    if (slow === fast) {
      //重新初始化慢指针
      slow = head;
      //如果新慢指针不等于当前快指针时进入循环
      while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
      }
      //新慢指针与快指针相遇时，相遇点就是环
      return slow;
    }
  }
  // 快指针不存在或next不存在是说明没环
  return null;
}
```
