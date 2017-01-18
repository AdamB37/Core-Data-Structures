"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.data = [];
    this.head = 0;
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(element) {
      this.data[this.head] = element;
      this.head++;
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      this.head--;
      return this.data.shift();
    }
  }, {
    key: "front",
    value: function front() {
      return this.data[0];
    }
  }, {
    key: "back",
    value: function back() {
      return this.data[this.head - 1];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.head === 0;
    }
  }, {
    key: "length",
    value: function length() {
      return this.head;
    }
  }]);

  return Queue;
}();

// const queue = new Queue()
// queue.enqueue('dude')
// console.log(queue.back())


exports.default = Queue;