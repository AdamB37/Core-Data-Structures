class Queue {
  constructor() {
    this.data = []
  }

  enqueue(element) {
    this.data[this.data.length] = element
  }

  dequeue() {
    return this.data.shift()
  }

  front() {
    return this.data[0]
  }

   back() {
    return this.data[this.data.length-1]
   }

  isEmpty() {
    return this.data.length === 0
  }

  length() {
    return this.data.length
  }
}

<<<<<<< HEAD
export default Queue
=======
export default Queue
>>>>>>> origin
