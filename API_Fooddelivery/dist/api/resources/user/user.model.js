"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true,
    unique: true
  },
  role: {
    type: String
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
  collection: 'User'
});

var _default = new _mongoose["default"].model('User', UserSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImNvbnRhY3QiLCJOdW1iZXIiLCJyb2xlIiwiY3JlYXRlZF9kdCIsIkRhdGUiLCJub3ciLCJpc0FjdGl2ZSIsIkJvb2xlYW4iLCJjb2xsZWN0aW9uIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBLElBQU1BLE1BQU0sR0FBR0MscUJBQVNELE1BQXhCO0FBQ0EsSUFBTUUsVUFBVSxHQUFHLElBQUlGLE1BQUosQ0FBVztBQUU5QkcsRUFBQUEsSUFBSSxFQUFDO0FBQ0RDLElBQUFBLElBQUksRUFBQ0MsTUFESjtBQUVEQyxJQUFBQSxRQUFRLEVBQUU7QUFGVCxHQUZ5QjtBQU85QkMsRUFBQUEsS0FBSyxFQUFDO0FBQ0ZILElBQUFBLElBQUksRUFBQ0MsTUFESDtBQUVGQyxJQUFBQSxRQUFRLEVBQUUsSUFGUjtBQUdGRSxJQUFBQSxNQUFNLEVBQUM7QUFITCxHQVB3QjtBQVk5QkMsRUFBQUEsUUFBUSxFQUFDO0FBQ0xMLElBQUFBLElBQUksRUFBQ0MsTUFEQTtBQUVMQyxJQUFBQSxRQUFRLEVBQUU7QUFGTCxHQVpxQjtBQWlCOUJJLEVBQUFBLE9BQU8sRUFBQztBQUNKTixJQUFBQSxJQUFJLEVBQUNPLE1BREQ7QUFFSkwsSUFBQUEsUUFBUSxFQUFDLElBRkw7QUFHSkUsSUFBQUEsTUFBTSxFQUFDO0FBSEgsR0FqQnNCO0FBc0I5QkksRUFBQUEsSUFBSSxFQUFDO0FBQ0RSLElBQUFBLElBQUksRUFBQ0M7QUFESixHQXRCeUI7QUEwQjlCUSxFQUFBQSxVQUFVLEVBQUM7QUFDUFQsSUFBQUEsSUFBSSxFQUFDVSxJQURFO0FBRVAsZUFBUUEsSUFBSSxDQUFDQztBQUZOLEdBMUJtQjtBQThCOUJDLEVBQUFBLFFBQVEsRUFBQztBQUNMWixJQUFBQSxJQUFJLEVBQUNhLE9BREE7QUFFTCxlQUFRO0FBRkg7QUE5QnFCLENBQVgsRUFrQ2pCO0FBQUNDLEVBQUFBLFVBQVUsRUFBRztBQUFkLENBbENpQixDQUFuQjs7ZUFtQ2UsSUFBSWpCLHFCQUFTa0IsS0FBYixDQUFtQixNQUFuQixFQUEwQmpCLFVBQTFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgICBcclxubmFtZTp7XHJcbiAgICB0eXBlOlN0cmluZyxcclxuICAgIHJlcXVpcmVkIDp0cnVlXHJcbn0sXHJcblxyXG5lbWFpbDp7XHJcbiAgICB0eXBlOlN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdW5pcXVlOnRydWVcclxufSxcclxucGFzc3dvcmQ6e1xyXG4gICAgdHlwZTpTdHJpbmcsXHJcbiAgICByZXF1aXJlZCA6dHJ1ZVxyXG4gICAgXHJcbn0sXHJcbmNvbnRhY3Q6e1xyXG4gICAgdHlwZTpOdW1iZXIsXHJcbiAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgdW5pcXVlOnRydWVcclxufSxcclxucm9sZTp7XHJcbiAgICB0eXBlOlN0cmluZyxcclxuICAgXHJcbn0sXHJcbmNyZWF0ZWRfZHQ6e1xyXG4gICAgdHlwZTpEYXRlLFxyXG4gICAgZGVmYXVsdDpEYXRlLm5vd1xyXG59LFxyXG5pc0FjdGl2ZTp7XHJcbiAgICB0eXBlOkJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OnRydWVcclxufVxyXG59LHtjb2xsZWN0aW9uIDogJ1VzZXInfSk7XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBtb25nb29zZS5tb2RlbCgnVXNlcicsVXNlclNjaGVtYSk7Il19