const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
      this.root1 = null; // корень bst
  }

  root () {
   
      if (!this.root1) {
          return null;
      }
      return this.root1;
  }

  add (data) {
      let newNode = new Node (data);

      if (this.root1 === null) {
          this.root1 = newNode;
 
      } else {
          this.insertNode(this.root1, newNode)
      }

  }
  insertNode (node, newNode) {
      if (newNode.data < node.data) {
          if (node.left === null) {
              node.left = newNode;
          } else {
            this.insertNode(node.left, newNode)
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode)
          }

      }
  }

  has (data) {
    return search (this.root1, data);
    function search (node, data) {
        if (!node) {
            return false;
        }
        if (node.data === data) {
            return true
        }
        if (data < node.data) {
            return search (node.left, data)
        } else {
            return search (node.right, data)
        }
    }

  }

  find (data) {
      return searchData (this.root1, data);
      function searchData (node, data) {
          if (!node) {
              return null;
          }
          if (node.data === data) {
              return node
          }
          if (data < node.data) {
              return searchData (node.left, data)
          } else {
              return searchData (node.right, data)
          }
      }


  }

  remove (data) {
      this.root1 = removeNode(this.root1, data);
      
      function removeNode(node, data) {
          if (!node) {
              return null;
          }

          if (data < node.data) {
              node.left = removeNode (node.left, data);
              return node;

          } else if (data > node.data) {
              node.right = removeNode (node.right, data);
              return node;

          } else {
              if (!node.left && !node.right) {
                  return null;
              }
          }

          if (!node.left) {
              node = node.right;
              return node;

          }
          if (!node.right) {
              node = node.left;
              return node;

          }

          let minFromRight = node.right;
          while (minFromRight.left) {
              minFromRight = minFromRight.left;
          }
          node.data = minFromRight.data;
          node.right = removeNode (node.right, minFromRight.data)
          return node;


      }

 
      
  }
  min() {
      if (!this.root1) {
          return null;
      }
      let node = this.root1;
      while (node.left) {
          node = node.left;
      }
      return node.data;
  }
  max() {
      if (!this.root1) {
          return null;
      }
      let node = this.root1;
      while (node.right) {
          node = node.right;
      }
      return node.data;
  }


}

module.exports = {
  BinarySearchTree
};