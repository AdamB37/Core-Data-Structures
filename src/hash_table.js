class Node {
  constructor(key,value) {
    this.key = key
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  addNode(key,value) {
    if(!this.head) {
      this.head = new Node(key, value)
    }
    else {
      let currentNode = this.head
      while(currentNode.next) {

        currentNode = currentNode.next
      }
      currentNode.next = new Node(key,value)
    }
  }

  removeNode(key) {
    let currentNode = this.head
    let previous
    while(currentNode.next && currentNode.key !== key) {
      previous = currentNode
      currentNode = currentNode.next
    }
    if(currentNode===this.head) {
      this.head = null
    }
    else {
      previous.next = currentNode.next
    }
  }

  containsNode(key) {
    let currentNode = this.head
    while(currentNode) {
      if(currentNode.key === key) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }

  getNodeValue(key) {
    let currentNode = this.head
    while(currentNode) {
      if(currentNode.key === key) {
        return currentNode.value
      }
    }
    return undefined
  }

  iterateList(callback) {
    let currentNode = this.head
    while(currentNode) {
      callback(currentNode.key, currentNode.value)
      currentNode = currentNode.next
    }
  }

  countList() {
    let count = 0
    if(!this.head) {
      return count
    }
    let currentNode = this.head
    while(currentNode) {
      count++
      currentNode = currentNode.next
    }
    return count
  }

}

class HashTable {
  constructor() {
    this.storage = new Array(1024)
  }

  put(key,value) {
    let bucket = HashTable.hash(key)
    if(!this.storage[bucket]) {
      this.storage[bucket] = new LinkedList()
    }

    this.storage[bucket].addNode(key,value)
  }

  get(key) {
    let bucket = HashTable.hash(key)
    return this.storage[bucket].getNodeValue(key)
  }

  contains(key) {
    let bucket = HashTable.hash(key)
    return this.storage[bucket].containsNode(key)
  }

  iterate(callback) {
    this.storage.forEach( element => element.iterateList(callback) )
  }

  remove(key) {
    let bucket = HashTable.hash(key)
    this.storage[bucket].removeNode(key)
  }

  size() {
    return this.storage.reduce( (acc,element) => { return acc += element.countList() }, 0)
  }
}

HashTable.hash = (key) => {
  let hashString = key.toString().split('')
  let hashKey = hashString.reduce( (acc,element) => {return acc += element.charCodeAt(0) }, 0) % 1024
  return hashKey
}



export default HashTable
