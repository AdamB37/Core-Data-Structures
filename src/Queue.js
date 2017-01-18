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
    this.head--
    return this.data.shift()
  }

  front() {
    return this.data[0]
  }

   back() {
    return this.data[this.head-1]
   }

  isEmpty() {
    return this.head === 0
  }

  length() {
    return this.head
  }



}

// const queue = new Queue()
// queue.enqueue('dude')
// console.log(queue.back())


export default Queue