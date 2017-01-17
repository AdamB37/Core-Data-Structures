"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data, next) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = next;
};

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.top = null;
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(value) {

      var oldTop = this.top;
      this.top = new Node();
      this.top.next = oldTop;
      this.top.data = value;

      console.log(this.top);
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.top == null) return null;
      var data = this.top.data;
      this.top = this.top.next;
      return data;
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.top == null ? null : this.top.data;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.top == null ? true : false;
    }
  }, {
    key: "length",
    value: function length() {
      var count = 0;
      var temp = this.top;

      while (temp) {
        count++;
        temp = temp.next;
      }
      return count;
    }
  }]);

  return Stack;
}();

// const stack = new Stack()
// stack.push(10)
// stack.push(11)
// stack.push(12)
// console.log(stack.length())

exports.default = Stack;