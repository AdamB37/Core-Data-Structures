class Node {
  constructor() {
    this.data
    this.next = null
    this.previous = null
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
    let newNode = this.head
    while(newNode) {
      if(newNode.data === element) return true
      newNode = newNode.next
    }
    return false
  }

  find(element) {
    let newNode = this.head
    while(newNode) {
      if(newNode.data === element) return newNode
      newNode = newNode.next
    }
    return -1
  }

  insert(element) {
    let newNode = new Node()
    newNode.data = element

    if(!this.head) this.head = newNode

    if(this.tail) {
      this.tail.next = newNode
      newNode.previous = this.tail
    }

    this.tail = newNode
  }

  insertFirst(element) {
    let newNode = new Node()
    newNode.data = element
    newNode.next = this.head

    if(this.head) this.previous = newNode

    if(!this.tail) this.tail = newNode

    this.head = newNode
  }

  insertBefore(match,element) {
    let newNode = new Node()
    newNode.data = element

    if(this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    }
    else{

      let matchNode = this.head

      while(matchNode.data !== match && matchNode) {
        matchNode = matchNode.next
      }

      newNode.next = matchNode

      if(matchNode && matchNode.previous) matchNode.previous.next = newNode
      if(matchNode) matchNode.previous = newNode
      if(this.head == matchNode) this.head = newNode
    }



  }

  insertAfter(match,element) {
    let newNode = new Node()
    newNode.data = element

    if(this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    }
    else{
      let matchNode = this.head

      while(matchNode.data !== match && matchNode){
        matchNode = matchNode.next
      }
      newNode.next = matchNode.next
      matchNode.next = newNode
      newNode.previous = matchNode

      if(this.tail == matchNode) this.tail = newNode
    }

  }

  remove() {
    this.tail = this.tail.previous
    this.tail.next = null
  }

  removeFirst() {
    this.head = this.head.next
    this.head.previous = null
  }

  isEmpty() {
    return !this.head ? true : false
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
      currentNode.previous = null
      currentNode = temp
    }

    this.head = null
    this.tail = null
  }
}

export default LinkedList
