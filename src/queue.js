const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor () {
      this.root = null;
  }

getUnderlyingList() {
  return this.root;
}

enqueue(data) {
  let newListNode =  new ListNode (data);
  if (!this.root) {
      this.root = newListNode;
  } else {
      this.enqueueNode (this.root, newListNode);
  }


  
}


  enqueueNode (node, newListNode) {
      if (!node.next) {
          node.next = newListNode
      } else {
          this.enqueueNode (node.next, newListNode)
      }
  }

  dequeue() {
      let dequeueNode = this.root.value;
  
      this.root = this.root.next;
      return dequeueNode;

  }


}
module.exports = {
  Queue
};
