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
<<<<<<< HEAD
      if(currentNode.data === element) return true
=======
      if(currentNode.data === element) {
        return true
      }
>>>>>>> master
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
<<<<<<< HEAD
    let newNode = new Node()
    newNode.data = element

    if(!this.head) this.head = newNode
    if(this.tail) this.tail.next = newNode
=======
    const newNode = new Node()
    newNode.data = element
    if(!this.head) {
      this.head = newNode
    }
    if(this.tail) {
      this.tail.next = newNode
    }
>>>>>>> master

    this.tail = newNode

  }

  insertFirst(element) {
<<<<<<< HEAD
    let newNode = new Node()
    newNode.data = element
    newNode.next = this.head

    if(!this.tail) this.tail = newNode

=======
    const newNode = new Node()
    newNode.data = element
    newNode.next = this.head
>>>>>>> master
    this.head = newNode
  }

  insertBefore(match,element) {
<<<<<<< HEAD
    let newNode = new Node()
    newNode.data = element
    if(this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    }
    else{
      let matchNode = this.head
      let previousNode = null
      while(matchNode.data !== match && matchNode) {
        previousNode = matchNode
        matchNode = matchNode.next
      }

      newNode.next = matchNode

      if(previousNode) previousNode.next = newNode

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

      if(this.tail == matchNode) this.tail = newNode
    }

  }

  remove() {
    let currentNode = this.head

    while(currentNode.next != this.tail) currentNode = currentNode.next

    currentNode.next = null
    this.tail = currentNode
=======
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
>>>>>>> master
  }

  removeFirst() {
    this.head = this.head.next
  }

  isEmpty() {
<<<<<<< HEAD
    return !this.head ? true : false
=======
    return !this.head
>>>>>>> master
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
<<<<<<< HEAD
      let tempNode = currentNode.next
      currentNode.next = null
      currentNode = tempNod
=======
      let temp = currentNode.next
      currentNode.next = null
      currentNode = temp
>>>>>>> master
    }

    this.head = null
    this.tail = null
  }
}

<<<<<<< HEAD
// let ll = new LinkedList()
// ll.insert('dude')
// ll.insert('asuh')
// console.log(ll.head)
=======
>>>>>>> master
export default LinkedList
