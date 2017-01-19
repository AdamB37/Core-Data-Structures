import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linked_list'

chai.use(chaiChange)

describe('LinkedList', () => {
  it('exists', function () {
    expect(LinkedList).to.be.a('function')
  })

  context('next pointer', () => {
    it('node should point to next node in linked list', () => {
      const sll = new LinkedList()
      sll.insert('dude')
      sll.insert('asuh')

      expect(sll.head.next.data).to.deep.equal('asuh')
    })
  })

  context('getHeadNode()', () => {
    it('returns the head node in the list', () => {
      const sll = new LinkedList
      sll.insert(10)
      sll.insert(11)
      sll.insert(12)
      sll.insert(13)

      expect(sll.getHeadNode().data).to.deep.equal(10)
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const sll = new LinkedList
      sll.insert(10)
      sll.insert(11)
      sll.insert(12)
      sll.insert(13)

      expect(sll.getTailNode()).to.eql({data: 13, next: null})
    })
  })

  context('contains()', () => {
    it('returns true if it exist in the list', () => {
      const sll = new LinkedList()
      sll.insert(10)

      expect(sll.contains(10)).to.eql(true)
    })
  })

  context('find()', () => {
    it('returns the node of the found data element in the list or -1 if not found', () => {
      const sll = new LinkedList()
      sll.insert(10)

    expect(sll.find(10)).to.eql({data: 10, next: null })
    })
  })

  context('insert()', () => {
    it('adds the value to the end of the list', () => {
      const sll = new LinkedList()
      sll.insert(10)
      sll.insert(20)

    expect(sll.getTailNode().data).to.deep.equal(20)
    })
  })

  context('insertFirst()', () => {
    it('adds the value to the beginning of the list', () => {
      const sll = new LinkedList()
      sll.insert(10)
      sll.insertFirst(20)

    expect(sll.getHeadNode().data).to.deep.equal(20)
    })
  })

  context('insertBefore()', () => {
    it('adds the value to the beginning of the list', () => {
      const sll = new LinkedList()
      sll.insert(10)
      sll.insert(20)
      sll.insert(30)
      sll.insert(40)
      sll.insertBefore(10,35)

    expect(sll.getHeadNode().data).to.deep.equal(35)
    })
  })

  context('insertAfter()', () => {
    it('adds the value to the beginning of the list', () => {
      const sll = new LinkedList()
      sll.insert(10)
      sll.insert(20)
      sll.insert(30)
      sll.insert(40)
      sll.insertAfter(40,35)

    expect(sll.getTailNode().data).to.deep.equal(35)
    })
  })

  context('remove()', () => {
    it('deletes the last node in the list', () => {
      const sll = new LinkedList
      sll.insert(10)
      sll.insert(11)
      sll.insert(12)
      sll.insert(13)
      sll.insert(14)

      expect( () => sll.remove() ).to.alter(() => sll.size(), { from: 5, to: 4 } )
      expect(sll.getTailNode().data).to.deep.equal(13)
    })
  })

  context('removeFirst()', () => {
    it('deletes the getHeadNode node in the list', () => {
      const sll = new LinkedList
      sll.insert(10)
      sll.insert(11)
      sll.insert(12)
      sll.insert(13)
      sll.insert(14)

      expect( () => sll.removeFirst() ).to.alter(() => sll.size(), { from: 5, to: 4 } )
      expect(sll.getHeadNode().data).to.deep.equal(11)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the list is empty', () => {
      const sll = new LinkedList

      expect(sll.isEmpty()).to.eql(true)
    })

    it('returns false if the list is not empty', () => {
      const sll = new LinkedList
      sll.insert(10)
      sll.insert(11)
      sll.insert(12)
      sll.insert(13)
      sll.insert(14)

      expect(sll.isEmpty()).to.eql(false)
    })
  })

  context('size()', () => {
    it('returns size of the list', () => {
      const sll = new LinkedList
      sll.insert(10)
      sll.insert(11)
      sll.insert(12)
      sll.insert(13)
      sll.insert(14)

      expect(sll.isEmpty()).to.eql(false)
    })
  })

  context('clear()', () => {
    it('deletes all the values and nodes in the list', () => {
      const sll = new LinkedList
      sll.insert(10)
      sll.insert(11)
      sll.insert(12)
      sll.insert(13)
      sll.insert(14)

      expect( () => sll.clear() ).to.alter(() => sll.size(), { from: 5, to: 0 } )
    })
  })

})
