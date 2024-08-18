/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let curNode = dummy;

  while (list1 && list2) {
    let temp = new ListNode();

    if (list1.val > list2.val) {
      temp.val = list2.val;
      list2 = list2.next;
    } else {
      temp.val = list1.val;
      list1 = list1.next;
    }

    curNode.next = temp;
    curNode = temp;
  }

  curNode.next = list1 || list2;

  return dummy.next;
};
