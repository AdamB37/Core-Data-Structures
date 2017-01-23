import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/PriorityQueue'

chai.use(chaiChange)
  let pQueue

describe('PriorityQueue', function () {
  beforeEach(function(){
    pQueue = new PriorityQueue()
  }) 

  it('exists', function () {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', function () {

    it('adds an element with priority number to the back of the priority queue', function () {
      pQueue.enqueue({data: 'dude', priority: 1})
      pQueue.enqueue({data: 'bro', priority: 2})
      pQueue.enqueue({data: 'foo', priority: 3})

      expect(pQueue.data).to.deep.equal([{data: 'dude', priority: 1}, {data: 'bro', priority: 2}, {data: 'foo', priority: 3}])
    })

    it('increases the queue size', function () {
      pQueue.enqueue({data: 'dude', priority: 1})
      pQueue.enqueue({data: 'bro', priority: 2})
      pQueue.enqueue({data: 'foo', priority: 3})

      expect(pQueue.length()).to.equal(3)
    })
  })

  context('dequeue()', function () {
    it('returns and removes the front element in the priority queue', function() {
      pQueue.enqueue({data: 'dude', priority: 1})
      pQueue.enqueue({data: 'bro', priority: 2})
      pQueue.enqueue({data: 'foo', priority: 3})
      expect(pQueue.dequeue()).to.deep.equal([{data: 'dude', priority: 1}])
    })

    it('returns null if the queue is empty', function() { 
     expect(pQueue.dequeue()).to.deep.equal(null)
    })
  })

  context('front()', function(){
    it('returns the front element of with the highest priority in the queue', function(){
      pQueue.enqueue({data: 'dude', priority: 1})
      pQueue.enqueue({data: 'bro', priority: 2})
      pQueue.enqueue({data: 'foo', priority: 3})
      expect(pQueue.front()).to.deep.equal({data: 'dude', priority: 1})
    })

    it('returns null if the priority queue is empty', function() {
     expect(pQueue.front()).to.deep.equal(null)
    })
  })

  context('back()', function(){
    it('returns the back element with the lowest priority in the queue', function(){
      pQueue.enqueue({data: 'dude', priority: 1900})
      pQueue.enqueue({data: 'bro', priority: 2055})
      pQueue.enqueue({data: 'foo', priority: 300})
      expect(pQueue.back()).to.deep.equal({data: 'bro', priority: 2055})
    })

    it('returns null if the priority queue is empty', function() {
     expect(pQueue.back()).to.deep.equal(null)
    })
  })

  context('isEmpty()', function(){
    it('returns true if priority queue is empty', function(){
      pQueue.enqueue(10)
      pQueue.enqueue(11)
      pQueue.enqueue(12)
      expect(pQueue.isEmpty()).to.equal(false)
    })
  })

  context('length()', function(){
    it('returns the number of elements in the priority queue', function(){
      pQueue.enqueue(10)
      pQueue.enqueue(11)
      pQueue.enqueue(12)
      expect(pQueue.length()).to.deep.equal(3)
    })
  })
})