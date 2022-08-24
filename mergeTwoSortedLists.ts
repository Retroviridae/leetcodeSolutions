
//  * Definition for singly-linked list.
function ListNode(next?, val?) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    // Save a new node to a variable, and a variable tracking the end of the new list,
    let dummy = new ListNode();
    // and a variable tracking tail of the list
    let tail = dummy;
    // While both lists have next nodes
    while (list1 && list2){
        // Compare nodes, point tail at the smaller, and set the smaller value to smaller.next
        if(list1.val < list2.val){
            tail.next = list1
            list1 = list1.next
        }else {
            tail.next = list2
            list2 = list2.next
        }
        // Update the tail
        tail = tail.next
    }
    // Point the tail to whichever list isn't empty
    tail.next = list1 || list2
    // Return the head of the new list
    return dummy.next
};


    // Save new node to a variable, and a variable tracking the end of the new list

    // Iterate while both lists have nodes
        // If list1 node < list2 node
            // Attach list1 node to tail
            // Set list 1 node to list1 node.next
       // If list1 node > list2 node
            // Attach list2 node to tail
            // Set list2 node to list2 node.next
        // Set tail to tail.next 
    // Set tail.next to whichever list isn't empty
    // Return head of merged linked list, dummy.next