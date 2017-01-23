class Node {
  constructor() {
    this.data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  contains(element) {
    let currentNode = this.head
    while(currentNode) {
      if(currentNode.data === element) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }

  find(element) {
    let currentNode = this.head
    while(currentNode) {
      if(currentNode.data === element) return currentNode
      currentNode = currentNode.next
    }
    return -1
  }

  insert(element) {
    const newNode = new Node()
    newNode.data = element
    if(!this.head) {
      this.head = newNode
    }
    if(this.tail) {
      this.tail.next = newNode
    }

    this.tail = newNode

  }

  insertFirst(element) {
    const newNode = new Node()
    newNode.data = element
    newNode.next = this.head
    this.head = newNode
  }

  insertBefore(match,element) {
    const newNode = new Node()
    newNode.data = element

    let matchNode = this.head

    while(matchNode.data !== match && matchNode) {
      matchNode = matchNode.next
    }
    newNode.next = matchNode.next
    matchNode.next = newNode

    if(this.head == matchNode) {
      this.head = newNode
    }
  }

  insertAfter(match,element) {
    const newNode = new Node()
    newNode.data = element

    let matchNode = this.head
    let previous = null

    while(matchNode && matchNode.data !== match) {
      previous = matchNode
      matchNode = matchNode.next
    }

    newNode.next = matchNode
    previous.next = newNode

    if(this.tail == matchNode) this.tail = newNode
  }

  remove() {
    if(this.head) {
      let currentNode = this.head

      while(currentNode.next != this.tail) {
        currentNode = currentNode.next
      }
      currentNode.next = null
      this.tail = currentNode
    }
  }

  removeFirst() {
    this.head = this.head.next
  }

  isEmpty() {
    return !this.head
  }

  size() {
    let count = 0
    let currentNode = this.head

    while(currentNode) {
      count++
      currentNode=currentNode.next
    }

    return count
  }

  clear() {
    let currentNode = this.head

    while(currentNode) {
      let temp = currentNode.next
      currentNode.next = null
      currentNode = temp
    }

    this.head = null
    this.tail = null
  }
}

export default LinkedList
