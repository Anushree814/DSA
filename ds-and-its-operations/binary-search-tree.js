class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

  // constructor(value, value1, value2){ // a class can have only one constructore it says.. True???
  //     this.data = value;
  //     this.left = new Node(value1);
  //     this.right = new Node(value2);
  // }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  preOrderTraversal(root) {
    const nodeArr = [],
      result = [];
    nodeArr.push(root);
    while (nodeArr.length > 0) {
      let currentNode = nodeArr.pop();
      result.push(currentNode.data);
      if (currentNode.right) {
        nodeArr.push(currentNode.right);
      }
      if (currentNode.left) {
        nodeArr.push(currentNode.left);
      }
    }

    return result;
  }

  inorderTraversal(root){
    const nodeArr=[], result=[];
   let currentNode = root;
    while(nodeArr.length>0 || currentNode!=null){
        while(currentNode!=null){
            nodeArr.push(currentNode)
            currentNode=currentNode.left;
        }
        currentNode = nodeArr.pop()
        result.push(currentNode.data);
        currentNode = currentNode.right;
    }
    return result
  }
}

const root = new Node(1);
//root.left = new Node(2);
root.right = new Node(2);
//root.left.left = new Node(4);
//root.left.right = new Node(5);
root.right.left = new Node(3);
root.right.left.right = new Node(4);
root.right.left.right.left = new Node(5);
const root2 = new Node(9);
root2.left = new Node(13);
root2.right = new Node(18);
root2.left.left = new Node(21);
root2.left.left.right = new Node(30);
root2.left.right = new Node(15);
root2.right.left = new Node(24);
root2.right.left.right = new Node(41);
const tree = new BinarySearchTree(root);
const tree2 = new BinarySearchTree(root2);
//console.log(tree.preOrderTraversal(root));
//console.log(tree.preOrderTraversal(root2));
console.log(tree.inorderTraversal(root));
