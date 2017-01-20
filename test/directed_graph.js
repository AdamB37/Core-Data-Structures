import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DirectedGraph from '../src/directed_graph'

chai.use(chaiChange)
  let dg

describe('DirectedGraph', () => {
  beforeEach(() => {
    dg = new DirectedGraph()
  })

  it('exists', () => {
    expect(DirectedGraph).to.be.a('function')
  })

  describe('addVertex()', () => {
    it('adds vertex to graph', () => {
      dg.addVertex('v1')
      dg.addVertex('v2')
      dg.addVertex('v3')
      expect(dg.count()).to.deep.equal(3)
    })
  })

  describe('hasVertex()', () => {
    it('checks if vertex exists in graph', () => {
      dg.addVertex('v1')
      dg.addVertex('v2')
      dg.addVertex('v3')
      expect(dg.hasVertex('v3')).to.deep.equal(true)
    })
  })

  describe('addDirection(vertexA, vertexB, weight)', () => {
    it('gives direction and weight from vertexA to vertexB', () => {
      dg.addVertex('v1')
      dg.addVertex('v2')
      dg.addDirection('v1','v2',5)
      expect(dg.graph['v1'].edges['v2']).to.deep.equal(5)
    })
  })

  describe('hasDirection(vertexA, vertexB)', () => {
    it('returns true there is direction from vertexA to vertexB', () => {
      dg.addVertex('v1')
      dg.addVertex('v2')
      dg.addDirection('v1','v2',5)
      expect(dg.hasDirection('v1','v2')).to.deep.equal(true)
    })
  })

  describe('getDirectionWeight(vertexA, vertexB)', () => {
    it('returns weight of direction from vertexA to vertexB', () => {
      dg.addVertex('v1')
      dg.addVertex('v2')
      dg.addDirection('v1','v2',5)
      expect(dg.getDirectionWeight('v1','v2')).to.deep.equal(5)
    })
  })

  describe('visit(vertex, callback)', () => {
    it('returns weight of direction from vertexA to vertexB', () => {
      dg.addVertex('v1')
      dg.addVertex('v2')
      dg.addVertex('v3')
      dg.addDirection('v1','v2',5)
      dg.addDirection('v2','v3',5)
      dg.addVertex('v4')
      dg.visit('v1',(element) => {element.edges['v4']=1})
      expect(dg.graph['v1'].edges['v4']).to.deep.equal(1)
      expect(dg.graph['v2'].edges['v4']).to.deep.equal(1)
      expect(dg.graph['v3'].edges['v4']).to.deep.equal(1)
    })
  })

  describe('findShortestPath(vertexA, vertexB)', () => {
    it('returns array of shortest path from vertexA to vertexB', () => {
      dg.addVertex('v1')
      dg.addVertex('v2')
      dg.addVertex('v3')
      dg.addVertex('v4')
      dg.addVertex('v5')
      dg.addVertex('v6')
      dg.addVertex('v7')
      dg.addDirection('v1','v2',5)
      dg.addDirection('v2','v7',7)
      dg.addDirection('v1','v3',1)
      dg.addDirection('v3','v4',1)
      dg.addDirection('v4','v5',1)
      dg.addDirection('v5','v6',1)
      dg.addDirection('v6','v7',1)
      expect(dg.findShortestPath('v1','v7')).to.deep.equal(5)
    })
  })

  describe('removeDirection(vertexA, vertexB)', () => {
    it('removes weight of direction from vertexA to vertexB', () => {
      dg.addVertex('v1')
      dg.addVertex('v2')
      dg.addVertex('v3')
      dg.addDirection('v1','v2',5)
      dg.addDirection('v2','v3',5)
      dg.removeDirection('v1','v2')
      expect(dg.graph['v1'].edges.hasOwnProperty('v2')).to.deep.equal(false)
    })
  })

  describe('getSeperatedVertices()', () => {
    it('returns an array of seperated vertices', () => {
      dg.addVertex('v1')
      dg.addVertex('v2')
      dg.addVertex('v3')
      expect(dg.getSeperatedVertices()).to.deep.equal(['v1','v2','v3'])
    })
  })

  describe('removeVertex()', () => {
    it('removes vertex from graph', () => {
      dg.addVertex('v1')
      dg.addVertex('v2')
      dg.addVertex('v3')
      dg.removeVertex('v3')
      expect(dg.graph.hasOwnProperty('v3')).to.deep.equal(false)
    })
  })

  describe('count()', () => {
    it('returns count of vertices in the graph', () => {
      dg.addVertex('v1')
      dg.addVertex('v2')
      dg.addVertex('v3')
      expect(dg.count()).to.deep.equal(3)
    })
  })
})
