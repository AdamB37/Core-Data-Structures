class PriorityQueue {
  constructor() {
    this.data = []
    this._highestPriority = Infinity
    this._lowestPriority = 0
  }

  enqueue(element) {
    this.data[this.data.length] = element
    if(element.priority > this._lowestPriority) {
      this._lowestPriority = element.priority
    }
  }

  dequeue() {
    if (!this.data.length) {
      return null
    }
    let index;
    for(let i=0; i < this.data.length; i++) {
      if (this.data[i].priority < this._highestPriority) {
        this._highestPriority = this.data[i].priority
        index = i
      }
    }
      return this.data.splice(index, 1)
  }

  front() {
    if (!this.data.length) {
      return null
    }
    let index;
    for(let i=0; i < this.data.length; i++) {
      if (this.data[i].priority < this._highestPriority) {
        this._highestPriority = this.data[i].priority
        index = i
      }
    }
      return this.data[index]
  }

  back() {
    if (!this.data.length) {
      return null
    }
    let index;
    for(let i=0; i < this.data.length; i++) {
      if (this.data[i].priority >= this._lowestPriority) {
        this._lowestPriority = this.data[i].priority
        index = i
      }
    }
    return this.data[index]
  }

  isEmpty() {
    return this.data.length === 0
  }

  length() {
    return this.data.length
  }
}

export default PriorityQueue
