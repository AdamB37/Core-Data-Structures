import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binary_search_tree'

chai.use(chaiChange)
  let bst

describe('BinarySearchTree', () => {
  beforeEach( () => {
    bst = new BinarySearchTree()
  })

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  describe('insert(element)', () => {
    context('when bst is empty', () => {
      it('set root to insert element', () => {
        bst.insert(10)
        expect(bst.root.data).to.deep.equal(10)
      })
    })
    context('bst contains tree nodes', () => {
      it('set left child to insert element', () => {
        bst.insert(10)
        bst.insert(5)
        expect(bst.root.leftChild.data).to.deep.equal(5)
      })
    })
  })

  describe('search(element)', () => {
    it('returns the target node if found in th bst or null if not found', () => {
      bst.insert(10)
      bst.insert(20)
      bst.insert(3)
      bst.insert(14)
      bst.insert(5)
      bst.insert(6)
      expect(bst.search(14).data).to.deep.equal(14)
    })
  })
  describe('remove(element)', () => {
    context('only one tree node', () => {
      it('count of bst after remove will be zero', () => {
        bst.insert(10)
        bst.remove(10)
        expect(bst.count()).to.deep.equal(0)
      })
    })
    context('node to be removed does not have any child nodes', () => {
      it('delete first node found containing element', () => {
        bst.insert(10)
        bst.insert(2)
        bst.insert(30)
        bst.insert(8)
        bst.insert(15)
        bst.insert(6)
        bst.remove(15)
        expect(bst.search(15)).to.deep.equal(null)
      })
    })
    context('node to be removed is the root with children', () => {
      it('delete root node and restructures the tree', () => {
        bst.insert(10)
        bst.insert(2)
        bst.insert(30)
        bst.insert(8)
        bst.insert(15)
        bst.insert(6)
        bst.remove(10)
        expect(bst.root).to.deep.equal(15)
      })
    })
    context('node to be removed has child nodes', () => {
      it('delete and replace node with minimum value to the right of the node', () => {
        bst.insert(10)
        bst.insert(2)
        bst.insert(30)
        bst.insert(8)
        bst.insert(15)
        bst.insert(6)
        bst.remove(30)
        expect(bst.root.rightChild.data).to.deep.equal(15)
      })
    })
  })
  describe('traverse(order, callback)', () => {
    context('InOrder', () => {
      it('traverse order 5, 10, 15, 25, 30', () => {
        bst.insert(25)
        bst.insert(10)
        bst.insert(15)
        bst.insert(5)
        bst.insert(30)
        const array1 = []
        bst.traverse('inOrder', element => array1.push(element))
        expect(array1).to.deep.equal([5, 10, 15, 25, 30])
      })
    })
    context('PreOrder', () => {
      it('traverse order 25, 10, 5, 15, 30', () => {
        bst.insert(25)
        bst.insert(10)
        bst.insert(15)
        bst.insert(5)
        bst.insert(30)
        const array2 = []
        bst.traverse('preOrder', element => array2.push(element))
        expect(array2).to.deep.equal([25, 10, 5, 15, 30])
      })
    })
    context('PostOrder', () => {
      it('travers order 5, 15, 10, 30, 25', () => {
        bst.insert(25)
        bst.insert(10)
        bst.insert(15)
        bst.insert(5)
        bst.insert(30)
        const array3 = []
        bst.traverse('postOrder', element => array3.push(element))
        expect(array3).to.deep.equal([5, 15, 10, 30, 25])
      })
    })

  })
  describe('count()', () => {
    it('returns number of nodes in bst', () => {
      bst.insert(25)
      bst.insert(10)
      bst.insert(15)
      bst.insert(5)
      bst.insert(30)
      expect(bst.count()).to.deep.equal(5)
    })
  })
})
