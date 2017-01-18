class Queue {
  constructor() {
    this.data = []
    this.head = 0
  }

  enqueue(element) {
    this.data[this.head] = element
    this.head++
  }

  dequeue() {
    return this.head > 0 ? this.data.shift() : null
  }

  front() {
    return this.head > 0 ? this.data[0] : null
  }

   back() {
    return this.data[this.head-1]
   }

  isEmpty() {
    return this.head === 0
  }

  length() {
    return this.head > 0 ? this.head : null
  }



}

// const queue = new Queue()

// console.log(queue.dequeue())


export default Queue