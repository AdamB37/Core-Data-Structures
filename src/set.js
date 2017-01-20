class Set {
  constructor(array = []){
    this.array = array

  }

  add(element) {
    if(this.array.indexOf(element) < 0) this.array.push(element)
  }

  isEmpty() {
    return this.array.length === 0
  }

  contains(element) {
    return this.array.indexOf(element) >= 0
  }

  remove(element) {
    let index = this.array.indexOf(element)
    if(index >= 0) this.array.splice(index,1)
  }

  forEach(callback) {
    for(let i = 0; i < this.array.length; i++){
      callback(i)
    }
  }

  size() {
    return this.array.length
  }

  union(otherSet) {
    let newSet = this.array.slice()

    for(let i = 0; i < otherSet.array.length; i++){
      if(newSet.indexOf(otherSet.array[i]) < 0) newSet.push(otherSet.array[i])
    }

    return newSet
  }

  intersect(otherSet) {
    let newSet = []

    for(let i = 0; i < otherSet.array.length; i++){
      if(this.array.indexOf(otherSet.array[i]) >= 0) newSet.push(otherSet.array[i])
    }

    return newSet
  }

  difference(otherSet) {
    let newSet = []

    for(let i = 0; i < otherSet.array.length; i++){
      if(this.array.indexOf(otherSet.array[i]) < 0) newSet.push(otherSet.array[i])
    }

    return newSet

  }

  isSubset(otherSet) {
    let index = otherSet.array.indexOf(this.array[0])
    if(index < 0) return false

    for(let i = 0; i < this.array.length; i++) {
      if(otherSet.array[index + i] !== this.array[i]) return false
    }

    return true
  }

  clone() {
    return this.array.slice()
  }
}

export default Set
