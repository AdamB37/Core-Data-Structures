import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priority_queue'

chai.use(chaiChange)
  let priorityQueue

describe('PriorityQueue', function () {
  beforeEach(function(){
    priorityQueue = new PriorityQueue()
  })

  it('exists', function () {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', function () {

    it('adds an element to the back of the queue', function () {
      priorityQueue.enqueue('dude')
      priorityQueue.enqueue('bro')
      priorityQueue.enqueue('foo')

      expect(priorityQueue.back()).to.deep.equal('foo')
    })

    it('increases the queue size', function () {
      priorityQueue.enqueue(10)
      priorityQueue.enqueue(11)
      priorityQueue.enqueue(12)

      expect(priorityQueue.length()).to.equal(3)
    })
  })

  context('dequeue()', function () {
    it('returns and removes the front element in the queue', function() {
      priorityQueue.enqueue(12)
      expect(priorityQueue.dequeue()).to.deep.equal(12)
    })

    it('returns null if the queue is empty', function() {
     expect(priorityQueue.length()).to.deep.equal(null)
    })
  })

  context('front()', function(){
    it('returns the front element of the queue', function(){
      priorityQueue.enqueue(10)
      priorityQueue.enqueue(11)
      priorityQueue.enqueue(12)
      expect(priorityQueue.front()).to.deep.equal(10)
    })

    it('returns null if the queue is empty', function() {
     expect(priorityQueue.length()).to.deep.equal(null)
    })
  })

  context('back()', function(){
    it('returns the back element of the queue', function(){
      priorityQueue.enqueue(10)
      priorityQueue.enqueue(11)
      priorityQueue.enqueue(12)
      expect(priorityQueue.back()).to.deep.equal(12)
    })

    it('returns null if the queue is empty', function() {
     expect(priorityQueue.length()).to.deep.equal(null)
    })
  })

  context('isEmpty()', function(){
    it('returns true if queue is empty', function(){
      priorityQueue.enqueue(10)
      priorityQueue.enqueue(11)
      priorityQueue.enqueue(12)
      expect(priorityQueue.isEmpty()).to.equal(false)
    })
  })

  context('length()', function(){
    it('returns the number of elements in the queue', function(){
      priorityQueue.enqueue(10)
      priorityQueue.enqueue(11)
      priorityQueue.enqueue(12)
      expect(priorityQueue.length()).to.deep.equal(3)
    })
  })
})
