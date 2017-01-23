class Node {
  constructor(data) {
    this.parent = null
    this.rightChild = null
    this.leftChild = null
    this.data = data
  }
}
//////HELPER FUNCTIONS
function hasChildren(node) {
  return node.rightChild || node.leftChild
}

function findReplacementNode(currentNode) {
  if(!hasChildren(currentNode)) return currentNode
  if(currentNode.leftChild) return findReplacementNode(currentNode.leftChild)
  return currentNode.rightChild
}

function addToLeftTree(currentNode, newNode) {
  if(!currentNode.leftChild) {
    currentNode.leftChild = newNode
    newNode.parent = currentNode
  }
  else {
    return recursiveInsert(currentNode.leftChild,newNode)
  }
}


function addToRightTree(currentNode,newNode) {
  if(!currentNode.rightChild) {
    currentNode.rightChild = newNode
    newNode.parent = currentNode
  }
  else {
    return recursiveInsert(currentNode.rightChild,newNode)
  }
}


function recursiveInsert(startNode,newNode) {
  if(newNode.data<=startNode.data) {
    addToLeftTree(startNode,newNode)
  }
  else{
    addToRightTree(startNode,newNode)
  }
}

function recursiveSearch(searchNode,value) {
  if(value===searchNode.data) {
    return searchNode
  }
  if(value < searchNode.data && searchNode.leftChild) {
    return recursiveSearch(searchNode.leftChild, value)
  }
  if(searchNode.rightChild) {
    return recursiveSearch(searchNode.rightChild, value)
  }
  return null
}

function recursiveCount(node,count=0) {
  if(!node) return count

  return 1 + recursiveCount(node.leftChild) + recursiveCount(node.rightChild)
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
    let newNode = new Node(element)
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
    const searchNode = recursiveSearch(this.root, value)
    if(this.root == searchNode) {
      if(!hasChildren(this.root)) {
        this.root = null
      }
      else {
        let replaceNode = findReplacementNode(this.root.rightChild)
        this.root.data = replaceNode.data

        if(replaceNode.parent.rightChild == replaceNode){
          replaceNode.parent.rightChild = null
        }
        else{
          replaceNode.parent.leftChild = null
        }

      }
    }
    else if(this.root){
      let toBeReplacedNode = searchNode
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
        let replaceNode = findReplacementNode(toBeReplacedNode.rightChild)
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

export default BinarySearchTree
