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
<<<<<<< HEAD
    this.head = 0;
=======
    this._highestPriority = Infinity;
    this._lowestPriority = 0;
>>>>>>> origin
  }

  _createClass(PriorityQueue, [{
    key: "enqueue",
    value: function enqueue(element) {
<<<<<<< HEAD
      this.data[this.head] = element;
      this.head++;
=======
      this.data[this.data.length] = element;
      if (element.priority > this._lowestPriority) {
        this._lowestPriority = element.priority;
      }
>>>>>>> origin
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
<<<<<<< HEAD
      return this.head > 0 ? this.data.shift() : null;
=======
      if (!this.data.length) {
        return null;
      }
      var index = void 0;
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].priority < this._highestPriority) {
          this._highestPriority = this.data[i].priority;
          index = i;
        }
      }
      return this.data.splice(index, 1);
>>>>>>> origin
    }
  }, {
    key: "front",
    value: function front() {
<<<<<<< HEAD
      return this.head > 0 ? this.data[0] : null;
=======
      if (!this.data.length) {
        return null;
      }
      var index = void 0;
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].priority < this._highestPriority) {
          this._highestPriority = this.data[i].priority;
          index = i;
        }
      }
      return this.data[index];
>>>>>>> origin
    }
  }, {
    key: "back",
    value: function back() {
<<<<<<< HEAD
      return this.head > 0 ? this.data[this.head - 1] : null;
=======
      if (!this.data.length) {
        return null;
      }
      var index = void 0;
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].priority >= this._lowestPriority) {
          this._lowestPriority = this.data[i].priority;
          index = i;
        }
      }
      return this.data[index];
>>>>>>> origin
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
<<<<<<< HEAD
      return this.head === 0;
=======
      return this.data.length === 0;
>>>>>>> origin
    }
  }, {
    key: "length",
    value: function length() {
<<<<<<< HEAD
      return this.head > 0 ? this.head : null;
=======
      return this.data.length;
>>>>>>> origin
    }
  }]);

  return PriorityQueue;
}();

<<<<<<< HEAD
// const queue = new Queue()

// console.log(queue.dequeue())


=======
>>>>>>> origin
exports.default = PriorityQueue;