"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node() {
  _classCallCheck(this, Node);

  this.data;
  this.next = null;
};

var LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.tail = null;
  }

  _createClass(LinkedList, [{
    key: "getHeadNode",
    value: function getHeadNode() {
      return this.head;
    }
  }, {
    key: "getTailNode",
    value: function getTailNode() {
      return this.tail;
    }
  }, {
    key: "contains",
    value: function contains(element) {
      var elementFound = false;
      var iterator = this.head;
      while (iterator) {
        if (iterator.data === element) elementFound = true;
        iterator = iterator.next;
      }
      return elementFound;
    }
  }, {
    key: "find",
    value: function find(element) {
      var iterator = this.head;
      while (iterator) {
        if (iterator.data === element) return iterator;
        iterator = iterator.next;
      }
      return -1;
    }
  }, {
    key: "insert",
    value: function insert(element) {
      var tail = new Node();
      tail.data = element;

      if (this.head == null) this.head = tail;
      if (this.tail != null) this.tail.next = tail;

      this.tail = tail;
    }
  }, {
    key: "insertFirst",
    value: function insertFirst(element) {
      var head = new Node();
      head.data = element;
      head.next = this.head;

      if (this.tail == null) this.tail = head;

      this.head = head;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(match, element) {
      var insertNode = new Node();
      insertNode.data = element;
      if (this.isEmpty()) {
        this.head = insertNode;
        this.tail = insertNode;
      } else {
        var matchNode = this.head;
        var previous = null;
        while (matchNode.data !== match && matchNode) {
          previous = matchNode;
          matchNode = matchNode.next;
        }

        insertNode.next = matchNode;

        if (previous) previous.next = insertNode;

        if (this.head == matchNode) this.head = insertNode;
      }
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(match, element) {
      var insertNode = new Node();
      insertNode.data = element;
      if (this.isEmpty()) {
        this.head = insertNode;
        this.tail = insertNode;
      } else {
        var matchNode = this.head;

        while (matchNode.data !== match && matchNode) {
          matchNode = matchNode.next;
        }
        insertNode.next = matchNode.next;
        matchNode.next = insertNode;

        if (this.tail == matchNode) this.tail = insertNode;
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var iterator = this.head;
      var previous = void 0;
      while (iterator.next != this.tail) {
        iterator = iterator.next;
      }iterator.next = null;
      this.tail = iterator;
    }
  }, {
    key: "removeFirst",
    value: function removeFirst() {
      this.head = this.head.next;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return !this.head ? true : false;
    }
  }, {
    key: "size",
    value: function size() {
      var count = 0;
      var iterator = this.head;

      while (iterator) {
        count++;
        iterator = iterator.next;
      }

      return count;
    }
  }, {
    key: "clear",
    value: function clear() {
      var iterator = this.head;

      while (iterator) {
        var temp = iterator.next;
        iterator.next = null;
        iterator = temp;
      }

      this.head = null;
      this.tail = null;
    }
  }]);

  return LinkedList;
}();

// let ll = new LinkedList()
// ll.insert('dude')
// ll.insert('asuh')
// console.log(ll.head)


exports.default = LinkedList;