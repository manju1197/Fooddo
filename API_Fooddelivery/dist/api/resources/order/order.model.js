"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _joi = require("joi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var OrderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  UserId: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: true
  },
  CalculatedAmt: {
    type: Number
  },
  FinalAmt: {
    type: Number
  },
  discount: {
    type: Number
  },
  quantity: {
    type: Number
  },
  created_dt: {
    type: Date,
    "default": Date.now
  },
  isActive: {
    type: Boolean,
    "default": true
  }
}, {
  collection: 'Order'
});

var _default = new _mongoose["default"].model('Order', OrderSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL29yZGVyL29yZGVyLm1vZGVsLmpzIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiT3JkZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiVXNlcklkIiwicmVmIiwiVHlwZXMiLCJPYmplY3RJZCIsIkNhbGN1bGF0ZWRBbXQiLCJOdW1iZXIiLCJGaW5hbEFtdCIsImRpc2NvdW50IiwicXVhbnRpdHkiLCJjcmVhdGVkX2R0IiwiRGF0ZSIsIm5vdyIsImlzQWN0aXZlIiwiQm9vbGVhbiIsImNvbGxlY3Rpb24iLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxxQkFBU0QsTUFBeEI7QUFDQSxJQUFNRSxXQUFXLEdBQUcsSUFBSUYsTUFBSixDQUFXO0FBRS9CRyxFQUFBQSxJQUFJLEVBQUM7QUFDREMsSUFBQUEsSUFBSSxFQUFDQyxNQURKO0FBRURDLElBQUFBLFFBQVEsRUFBRTtBQUZULEdBRjBCO0FBTS9CQyxFQUFBQSxNQUFNLEVBQUM7QUFDSEMsSUFBQUEsR0FBRyxFQUFDLE1BREQ7QUFFSEosSUFBQUEsSUFBSSxFQUFDSixNQUFNLENBQUNTLEtBQVAsQ0FBYUMsUUFGZjtBQUdISixJQUFBQSxRQUFRLEVBQUM7QUFITixHQU53QjtBQVkvQkssRUFBQUEsYUFBYSxFQUFDO0FBQ1ZQLElBQUFBLElBQUksRUFBQ1E7QUFESyxHQVppQjtBQWUvQkMsRUFBQUEsUUFBUSxFQUFDO0FBQ0xULElBQUFBLElBQUksRUFBQ1E7QUFEQSxHQWZzQjtBQWtCL0JFLEVBQUFBLFFBQVEsRUFBQztBQUNMVixJQUFBQSxJQUFJLEVBQUNRO0FBREEsR0FsQnNCO0FBc0IvQkcsRUFBQUEsUUFBUSxFQUFDO0FBQ0xYLElBQUFBLElBQUksRUFBQ1E7QUFEQSxHQXRCc0I7QUF5Qi9CSSxFQUFBQSxVQUFVLEVBQUM7QUFDUFosSUFBQUEsSUFBSSxFQUFDYSxJQURFO0FBRVAsZUFBUUEsSUFBSSxDQUFDQztBQUZOLEdBekJvQjtBQTZCL0JDLEVBQUFBLFFBQVEsRUFBQztBQUNMZixJQUFBQSxJQUFJLEVBQUNnQixPQURBO0FBRUwsZUFBUTtBQUZIO0FBN0JzQixDQUFYLEVBaUNsQjtBQUFDQyxFQUFBQSxVQUFVLEVBQUc7QUFBZCxDQWpDa0IsQ0FBcEI7O2VBa0NlLElBQUlwQixxQkFBU3FCLEtBQWIsQ0FBbUIsT0FBbkIsRUFBMkJwQixXQUEzQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgbnVtYmVyIH0gZnJvbSAnam9pJztcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5jb25zdCBPcmRlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgIFxyXG5uYW1lOntcclxuICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgcmVxdWlyZWQgOnRydWVcclxufSxcclxuVXNlcklkOntcclxuICAgIHJlZjonVXNlcicsXHJcbiAgICB0eXBlOlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlcXVpcmVkOnRydWVcclxufSxcclxuXHJcbkNhbGN1bGF0ZWRBbXQ6e1xyXG4gICAgdHlwZTpOdW1iZXJcclxufSxcclxuRmluYWxBbXQ6e1xyXG4gICAgdHlwZTpOdW1iZXJcclxufSxcclxuZGlzY291bnQ6e1xyXG4gICAgdHlwZTpOdW1iZXJcclxuICAgIFxyXG59LFxyXG5xdWFudGl0eTp7XHJcbiAgICB0eXBlOk51bWJlclxyXG59LFxyXG5jcmVhdGVkX2R0OntcclxuICAgIHR5cGU6RGF0ZSxcclxuICAgIGRlZmF1bHQ6RGF0ZS5ub3dcclxufSxcclxuaXNBY3RpdmU6e1xyXG4gICAgdHlwZTpCb29sZWFuLFxyXG4gICAgZGVmYXVsdDp0cnVlXHJcbn1cclxufSx7Y29sbGVjdGlvbiA6ICdPcmRlcid9KTtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IG1vbmdvb3NlLm1vZGVsKCdPcmRlcicsT3JkZXJTY2hlbWEpOyJdfQ==