var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let fast = head,
    slow = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) break;
  }

  if (fast != slow) return null;

  fast = head;
  while (fast != slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
};
