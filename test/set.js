import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)
  let set

describe('Set', () => {
  beforeEach( () => {
    set = new Set()
  })

  it('exist', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('add an element to the set', () => {
      expect( () => set.add(10)).to.alter(() => set.size(), {from: 0, to:1})
    })
  })

  context('isEmpty()', () => {
    it('returns true if set is empty', () => {
      expect(set.isEmpty()).to.deep.equal(true)
    })

    it('return false if set is not empty', () => {
      set.add(1)
      expect(set.isEmpty()).to.deep.equal(false)
    })
  })

  context('contains(element)', () => {
    it('returns true if element exists in set', () => {
      set.add(1)
      set.add(2)
      expect(set.contains(1)).to.deep.equal(true)
    })

    it('returns false if element does not exist in set', () => {
      set.add(1)
      set.add(2)
      expect(set.contains(3)).to.deep.equal(false)
    })
  })

  context('remove(element)', () => {
    it('removes the element from the set if it exists', () => {
      set.add(1)
      set.add(2)
      set.add(3)
      set.remove(2)
      expect(set.array).to.deep.equal([1,3])
    })
  })

  context('forEach(callback)', () => {
    it('takes a callback function and passes it each element in the set', () => {
      const testArray = []
      set.add(1)
      set.add(2)
      set.add(3)

      set.forEach(element => testArray.push(set.array[element]))
      expect(testArray).to.deep.equal([1,2,3])
    })
  })

  context('size()', () => {
    it('returns the size of the set', () => {
       set.add(1)
       set.add(99)
       expect(set.size()).to.deep.equal(2)
    })
  })

  context('union(otherSet)', () => {
    it('returns the union of two sets (all elements from both sets with no repeats)', () => {
      set.add(1)
      set.add(2)
      const otherSet = new Set([3,4])
      expect(set.union(otherSet)).to.deep.equal([1,2,3,4])
    })
  })

  context('intersect(otherSet)', () => {
    it('returns the intersection of two sets (all elements that exist in both sets)', () => {
      set.add(1)
      set.add(2)
      set.add(3)
      const otherSet = new Set([3,4])
      expect(set.intersect(otherSet)).to.deep.equal([3])
    })
  })

  context('difference(otherSet)', () => {
    it('returns the elements that are in otherSet that do not exist in first set', () => {
      set.add(1)
      set.add(2)
      set.add(3)
      const otherSet = new Set([3,4])
      expect(set.difference(otherSet)).to.deep.equal([4])
    })
  })

  context('isSubset(otherSet)', () => {
    it('returns true if \'set\' is subset of \'otherSet\'', () => {
      set.add(1)
      set.add(2)
      set.add(3)
      const otherSet = new Set([1,2,3,4])
      expect(set.isSubset(otherSet)).to.deep.equal(true)
    })

    it('returns false if \'set\' is not a subset of \'otherSet\'', () => {
      set.add(1)
      set.add(5)
      set.add(3)
      const otherSet = new Set([1,2,3,4])
      expect(set.isSubset(otherSet)).to.deep.equal(false)
    })
  })

  context('clone()', () => {
    it('returns a clone of the original set', () => {
      set.add(1)
      set.add(2)
      set.add(3)
      expect(set.clone()).to.deep.equal([1,2,3])
    })
  })

})
