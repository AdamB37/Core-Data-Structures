import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/Queue'

chai.use(chaiChange)
  let queue

describe('Queue', function () {
  beforeEach(function(){
    queue = new Queue()
  }) 

  it('exists', function () {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', function () {

    it('adds an element to the back of the queue', function () {
      queue.enqueue('dude')
      queue.enqueue('bro')
      queue.enqueue('foo')

      expect(queue.back()).to.deep.equal('foo')
    })

    it('increases the queue size', function () {
      queue.enqueue(10)
      queue.enqueue(11)
      queue.enqueue(12)

      expect(queue.length()).to.equal(3)
    })
  })

  context('dequeue()', function () {
    it('returns and removes the front element in the queue', function() {
      queue.enqueue(10)
      queue.enqueue(11)
      queue.enqueue(12)
      queue.enqueue(13)
      queue.enqueue(14)
      
      expect(queue.dequeue()).to.deep.equal(14)
    })

    it('returns null if the queue is empty', function() {
     expect(queue.length()).to.deep.equal(null)
    })
  })

  context('front()', function(){
    it('returns the front element of the queue', function(){
      queue.enqueue(10)
      queue.enqueue(11)
      queue.enqueue(12)
      expect(queue.front()).to.deep.equal(10)
    })

    it('returns null if the queue is empty', function() {
     expect(queue.length()).to.deep.equal(null)
    })
  })

  context('back()', function(){
    it('returns the back element of the queue', function(){
      queue.enqueue(10)
      queue.enqueue(11)
      queue.enqueue(12)
      expect(queue.back()).to.deep.equal(12)
    })
  })

  context('isEmpty()', function(){
    it('returns true if queue is empty', function(){
      queue.enqueue(10)
      queue.enqueue(11)
      queue.enqueue(12)
      expect(queue.isEmpty()).to.equal(false)
    })
  })

  context('length()', function(){
    it('returns the number of elements in the queue', function(){
      queue.enqueue(10)
      queue.enqueue(11)
      queue.enqueue(12)
      expect(queue.length()).to.deep.equal(3)
    })
  })
})