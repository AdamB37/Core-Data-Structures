class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(value) {
    const oldTop = this.top
    this.top = new Node()
    this.top.next = oldTop
    this.top.data = value
    }

  pop() {
    if(this.top == null) return null
    let data = this.top.data
    this.top = this.top.next
    return data
  }

  peek() {
    return this.top == null ? null : this.top.data
  }

  isEmpty() {
    return this.top == null ? true : false
  }

  length() {
    let count = 0
    let currentNode = this.top

    while(currentNode) {
      count++
      currentNode = currentNode.next
    }
    return count
  }
}

export default Stack
