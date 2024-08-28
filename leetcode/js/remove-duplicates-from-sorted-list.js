/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const dummyNode = new ListNode(null);
  let currentNode = dummyNode;

  while (head) {
    if (currentNode.val !== head.val) {
      currentNode.next = new ListNode(head.val);
      currentNode = currentNode.next;
    }

    head = head.next;
  }

  return dummyNode.next;
};

var deleteDuplicates = function (head) {
  let currentNode = head;

  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return head;
};
