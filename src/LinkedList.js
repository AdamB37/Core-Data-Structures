class Node {
  let data
  let next = null
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
    let elementFound = false
    let iterator = this.head
    while(iterator) {
      if(iterator.data === element) elementFound = true
      iterator = iterator.next
    }
  }

  find(element) {
    let iterator = this.head
    while(iterator) {
      if(iterator.data === element) return iterator
      iterator = iterator.next
    }
    return -1
  }

  insert(element) {
    let tail = new Node()
    this.tail.next = tail
    this.tail = tail
  }

  insertFirst(element) {
    let head = new Node()
    head.data = element
    head.next = this.head
    this.head = head
  }

  insertBefore(match,element) {
    let insertNode = new Node()
    insertNode.data = element

    let matchNode = this.head
    while(matchNode.data !== match && matchNode) matchNode = matchNode.next

    insertNode.next = matchNode.next
    matchNode.next = insertNode

    if(this.head == matchNode) this.head = insertNode
  }

  insertAfter(match,element) {
    let insertNode = new Node()
    insertNode.data = element

    let matchNode = this.head
    let previous = null
    while(matchNode.data !== match && matchNode){
      previous = matchNode
      matchNode = matchNode.next
    }

    insertNode.next = matchNode
    previous.next = insertNode

    if(this.tail == matchNode) this.tail = insertNode
  }

  remove() {
    let iterator = this.head
    while(iterator.next != this.tail) iterator = iterator.next
    iterator.next = null
    this.tail = iterator
  }

  removeFirst() {
    this.head = this.head.next
  }

  isEmpty() {
    return !(this.head) ? true : false
  }

  size() {
    let count = 0
    let iterator = this.head

    while(iterator) {
      count++
      iterator=iterator.next
    }

    return count
  }

  clear() {
    let iterator = this.head

    while(iterator) {
      let temp = iterator.next
      iterator.next = null
      iterator = temp
    }

    this.head = null
    this.tail = null
  }
}
