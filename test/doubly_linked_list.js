import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../src/doubly_linked_list'

chai.use(chaiChange)

describe('DoublyLinkedList', () => {
  it('exists', function () {
    expect(DoublyLinkedList).to.be.a('function')
  })

  context('next and previous pointers', () => {
    const dll = new DoublyLinkedList()
    dll.insert('dude')
    dll.insert('asuh')
    it('node should point to next node in linked list', () => {
      expect(dll.head.next.data).to.deep.equal('asuh')
    })
    it('node should point to the previous node in the list', () => {
      expect(dll.tail.previous.data).to.deep.equal('dude')
    })
  })

  context('getHeadNode()', () => {
    it('returns the head node in the list', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
      dll.insert(13)

      expect(dll.getHeadNode().data).to.deep.equal(10)
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const dll = new DoublyLinkedList()
      dll.insert(12)
      dll.insert(13)

      expect(dll.getTailNode().data).to.eql(13)
    })
  })

  context('contains()', () => {
    it('returns true if it exist in the list', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)

      expect(dll.contains(10)).to.eql(true)
    })
  })

  context('find()', () => {
    it('returns the node of the found data element in the list or -1 if not found', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)

    expect(dll.find(10)).to.eql({data: 10, next: null, previous: null})
    })
  })

  context('insert()', () => {
    it('adds the value to the end of the list', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)
      dll.insert(20)

    expect(dll.getTailNode().data).to.deep.equal(20)
    })
  })

  context('insertFirst()', () => {
    it('adds the value to the beginning of the list', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)
      dll.insertFirst(20)

    expect(dll.getHeadNode().data).to.deep.equal(20)
    })
  })

  context('insertBefore()', () => {
    it('adds the value to the beginning of the list', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)
      dll.insert(20)
      dll.insert(30)
      dll.insert(40)
      dll.insertBefore(10,35)

    expect(dll.getHeadNode().data).to.deep.equal(35)
    })
  })

  context('insertAfter()', () => {
    it('adds the value to the beginning of the list', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)
      dll.insert(20)
      dll.insert(30)
      dll.insert(40)
      dll.insertAfter(40,35)

    expect(dll.getTailNode().data).to.deep.equal(35)
    })
  })

  context('remove()', () => {
    it('deletes the last node in the list', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
      dll.insert(13)
      dll.insert(14)

      expect( () => dll.remove() ).to.alter(() => dll.size(), { from: 5, to: 4 } )
      expect(dll.getTailNode().data).to.deep.equal(13)
    })
  })

  context('removeFirst()', () => {
    it('deletes the getHeadNode node in the list', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
      dll.insert(13)
      dll.insert(14)

      expect( () => dll.removeFirst() ).to.alter(() => dll.size(), { from: 5, to: 4 } )
      expect(dll.getHeadNode().data).to.deep.equal(11)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the list is empty', () => {
      const dll = new DoublyLinkedList()

      expect(dll.isEmpty()).to.eql(true)
    })

    it('returns false if the list is not empty', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
      dll.insert(13)
      dll.insert(14)

      expect(dll.isEmpty()).to.eql(false)
    })
  })

  context('size()', () => {
    it('returns size of the list', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
      dll.insert(13)
      dll.insert(14)

      expect(dll.isEmpty()).to.eql(false)
    })
  })

  context('clear()', () => {
    it('deletes all the values and nodes in the list', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
      dll.insert(13)
      dll.insert(14)

      expect( () => dll.clear() ).to.alter(() => dll.size(), { from: 5, to: 0 } )
    })
  })

})
