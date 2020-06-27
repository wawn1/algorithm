var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let fast = head,
    slow = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) break;
  }
  if (fast != slow) return false;
  return true;
};
