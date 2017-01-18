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
    this._highestPriority = Infinity;
    this._lowestPriority = 0;
  }

  _createClass(PriorityQueue, [{
    key: "enqueue",
    value: function enqueue(element) {
      this.data[this.data.length] = element;
      if (element.priority > this._lowestPriority) {
        this._lowestPriority = element.priority;
      }
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
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
    }
  }, {
    key: "front",
    value: function front() {
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
    }
  }, {
    key: "back",
    value: function back() {
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
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.data.length === 0;
    }
  }, {
    key: "length",
    value: function length() {
      return this.data.length;
    }
  }]);

  return PriorityQueue;
}();

exports.default = PriorityQueue;