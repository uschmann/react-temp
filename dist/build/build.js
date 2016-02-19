(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/andreuschmann/react/src/js/App.js":[function(require,module,exports){
var Parent = require('./Parent');

React.render(Parent, document.getElementById('app'));

},{"./Parent":"/Users/andreuschmann/react/src/js/Parent.js"}],"/Users/andreuschmann/react/src/js/Child.js":[function(require,module,exports){
var Child = React.createClass({displayName: "Child",
    render: function(){
        return (
            React.createElement("div", null, 
            "and this is the ", React.createElement("b", null, this.props.name), "."
            )
        )
    }
});

module.exports = Child;

},{}],"/Users/andreuschmann/react/src/js/Parent.js":[function(require,module,exports){
var Child = require('./Child');

var Parent = React.createClass({displayName: "Parent",
    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("div", null, " This is the parent. "), 
                React.createElement(Child, {name: "child"})
            )
        )
    }
});

module.exports = Parent;

},{"./Child":"/Users/andreuschmann/react/src/js/Child.js"}]},{},["/Users/andreuschmann/react/src/js/App.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYW5kcmV1c2NobWFubi9yZWFjdC9zcmMvanMvQXBwLmpzIiwiL1VzZXJzL2FuZHJldXNjaG1hbm4vcmVhY3Qvc3JjL2pzL0NoaWxkLmpzIiwiL1VzZXJzL2FuZHJldXNjaG1hbm4vcmVhY3Qvc3JjL2pzL1BhcmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFakMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O0FDRnBELElBQUksMkJBQTJCLHFCQUFBO0lBQzNCLE1BQU0sRUFBRSxVQUFVO1FBQ2Q7WUFDSSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO0FBQUEsWUFBQSxrQkFBQSxFQUNXLG9CQUFBLEdBQUUsRUFBQSxJQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFTLENBQUEsRUFBQSxHQUFBO0FBQUEsWUFDbEMsQ0FBQTtTQUNUO0tBQ0o7QUFDTCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUs7OztBQ1Z0QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRS9CLElBQUksNEJBQTRCLHNCQUFBO0lBQzVCLE1BQU0sRUFBRSxVQUFVO1FBQ2Q7WUFDSSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO2dCQUNELG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUEsdUJBQTJCLENBQUEsRUFBQTtnQkFDaEMsb0JBQUMsS0FBSyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQTtZQUNuQixDQUFBO1NBQ1Q7S0FDSjtBQUNMLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUGFyZW50ID0gcmVxdWlyZSgnLi9QYXJlbnQnKTtcblxuUmVhY3QucmVuZGVyKFBhcmVudCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJ2YXIgQ2hpbGQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIGFuZCB0aGlzIGlzIHRoZSA8Yj57dGhpcy5wcm9wcy5uYW1lfTwvYj4uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoaWxkOyIsInZhciBDaGlsZCA9IHJlcXVpcmUoJy4vQ2hpbGQnKTtcblxudmFyIFBhcmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+IFRoaXMgaXMgdGhlIHBhcmVudC4gPC9kaXY+XG4gICAgICAgICAgICAgICAgPENoaWxkIG5hbWU9XCJjaGlsZFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyZW50OyJdfQ==
