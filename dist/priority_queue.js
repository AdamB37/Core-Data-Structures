"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PriorityQueue = function () {
  function PriorityQueue() {
    _classCallCheck(this, PriorityQueue);

    this.data = [];
    this.head = 0;
  }

  _createClass(PriorityQueue, [{
    key: "enqueue",
    value: function enqueue(element) {
      this.data[this.head] = element;
      this.head++;
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this.head > 0 ? this.data.shift() : null;
    }
  }, {
    key: "front",
    value: function front() {
      return this.head > 0 ? this.data[0] : null;
    }
  }, {
    key: "back",
    value: function back() {
      return this.head > 0 ? this.data[this.head - 1] : null;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.head === 0;
    }
  }, {
    key: "length",
    value: function length() {
      return this.head > 0 ? this.head : null;
    }
  }]);

  return PriorityQueue;
}();

// const queue = new Queue()

// console.log(queue.dequeue())


exports.default = PriorityQueue;