class Node {
  constructor() {
    this.parent = null
    this.rightChild = null
    this.leftChild = null
    this.data
  }
}
//////HELPER FUNCTIONS
function hasChildren(node) {
  return node.rightChild || node.leftChild
}

function recursiveInsert(startNode,newNode) {
  if(newNode.data<=startNode.data) {
    if(!startNode.leftChild) {
      startNode.leftChild = newNode
      newNode.parent = startNode
    }
    else {
      return recursiveInsert(startNode.leftChild,newNode)
    }
  }
  else{
    if(!startNode.rightChild) {
      startNode.rightChild = newNode
      newNode.parent = startNode
    }
    else {
      return recursiveInsert(startNode.rightChild,newNode)
    }
  }
}

function recursiveSearch(searchNode,value) {
  if(value===searchNode.data) {
    return searchNode
  }
  if(value < searchNode.data) {
    if(searchNode.leftChild) {
      return recursiveSearch(searchNode.leftChild, value)
    }
  }
  else {
    if(searchNode.rightChild) {
      return recursiveSearch(searchNode.rightChild, value)
    }
  }
  return null
}

function recursiveCount(node,count=0) {

  if(node.leftChild) count = recursiveCount(node.leftChild,count+1)
  if(node.rightChild) count = recursiveCount(node.rightChild,count+1)

  return count
}

function traverseInOrder(node, callback) {
  if(!node){
    return
  }

  traverseInOrder(node.leftChild, callback)
  callback(node.data)
  traverseInOrder(node.rightChild, callback)
}

function traversePreOrder(node, callback) {
  if(!node){
    return
  }
  callback(node.data)
  traversePreOrder(node.leftChild, callback)
  traversePreOrder(node.rightChild, callback)

}

function traversePostOrder(node, callback) {
  if(!node){
    return
  }
  traversePostOrder(node.leftChild, callback)
  traversePostOrder(node.rightChild, callback)
  callback(node.data)
}
///////END OF HELPER FUNCTIONS

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(element) {
    let newNode = new Node()
    newNode.data = element
    if(!this.root){
      this.root = newNode
    }
    else{
      recursiveInsert(this.root,newNode)
    }
  }

  search(value) {
    if(!this.root) return null
    return recursiveSearch(this.root,value)
  }

  remove(value) {
    if(this.root == recursiveSearch(this.root, value)) this.root = null

    if(this.root){
      let toBeReplacedNode = recursiveSearch(this.root, value)
      if(!hasChildren(toBeReplacedNode)) {
        if(toBeReplacedNode.parent.rightChild == toBeReplacedNode) {
          toBeReplacedNode.parent.rightChild = null
        }
        else {
          toBeReplacedNode.parent.leftChild = null
        }
      }
      else if(!toBeReplacedNode.rightChild){
        if(toBeReplacedNode.parent.rightChild == toBeReplacedNode){
          toBeReplacedNode.parent.rightChild = toBeReplacedNode.leftChild
          toBeReplacedNode.leftChild.parent = toBeReplacedNode.parent
        }
        else{
          toBeReplacedNode.parent.leftChild = toBeReplacedNode.leftChild
          toBeReplacedNode.leftChild.parent = toBeReplacedNode.parent
        }
      }
      else {
        let replaceNode = toBeReplacedNode.rightChild
        //traverse through tree to find replacement for remove
        while(hasChildren(replaceNode)) {
          while(replaceNode.leftChild){
            replaceNode = replaceNode.leftChild
          }
          while(replaceNode.rightChild && !replaceNode.leftChild){
            replaceNode = replaceNode.rightChild
          }
        }
        toBeReplacedNode.data = replaceNode.data

        if(replaceNode.parent.rightChild == replaceNode){
          replaceNode.parent.rightChild = null
        }
        else{
          replaceNode.parent.leftChild = null
        }

      }
    }


  }

  traverse (order,callback) {
    switch(order){
      case 'inOrder':
        traverseInOrder(this.root, callback)
        break;

      case 'preOrder':
        traversePreOrder(this.root, callback)
        break;

      case 'postOrder':
        traversePostOrder(this.root, callback)
        break;

      default:
        break;
    }
  }

  count() {
    if(!this.root) return 0
    return recursiveCount(this.root, 1)
  }
}
// let bst = new BinarySearchTree()
// bst.insert(25)
// bst.insert(10)
// bst.insert(15)
// bst.insert(5)
// bst.insert(30)
// // const array1 = []
// bst.traverse('inOrder', (element) => {console.log(element)})
export default BinarySearchTree
