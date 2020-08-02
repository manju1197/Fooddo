"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _joi = require("joi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // createdBy:{
  //     ref:'vendor',
  //     type:Schema.Types.ObjectId,
  //     required:true
  // },
  created_dt: {
    type: Date,
    "default": Date.now
  },
  isActive: {
    type: Boolean,
    "default": true
  }
}, {
  collection: 'Category'
});

var _default = new _mongoose["default"].model('Category', CategorySchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NhdGVnb3J5L2NhdGVnb3J5Lm1vZGVsLmpzIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiQ2F0ZWdvcnlTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiY3JlYXRlZF9kdCIsIkRhdGUiLCJub3ciLCJpc0FjdGl2ZSIsIkJvb2xlYW4iLCJjb2xsZWN0aW9uIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBLElBQU1BLE1BQU0sR0FBR0MscUJBQVNELE1BQXhCO0FBQ0EsSUFBTUUsY0FBYyxHQUFHLElBQUlGLE1BQUosQ0FBVztBQUVsQ0csRUFBQUEsSUFBSSxFQUFDO0FBQ0RDLElBQUFBLElBQUksRUFBQ0MsTUFESjtBQUVEQyxJQUFBQSxRQUFRLEVBQUU7QUFGVCxHQUY2QjtBQU1sQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLEVBQUFBLFVBQVUsRUFBQztBQUNQSCxJQUFBQSxJQUFJLEVBQUNJLElBREU7QUFFUCxlQUFRQSxJQUFJLENBQUNDO0FBRk4sR0FYdUI7QUFlbENDLEVBQUFBLFFBQVEsRUFBQztBQUNMTixJQUFBQSxJQUFJLEVBQUNPLE9BREE7QUFFTCxlQUFRO0FBRkg7QUFmeUIsQ0FBWCxFQW1CckI7QUFBQ0MsRUFBQUEsVUFBVSxFQUFHO0FBQWQsQ0FuQnFCLENBQXZCOztlQW9CZSxJQUFJWCxxQkFBU1ksS0FBYixDQUFtQixVQUFuQixFQUE4QlgsY0FBOUIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IG51bWJlciB9IGZyb20gJ2pvaSc7XHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuY29uc3QgQ2F0ZWdvcnlTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgICBcclxubmFtZTp7XHJcbiAgICB0eXBlOlN0cmluZyxcclxuICAgIHJlcXVpcmVkIDp0cnVlXHJcbn0sXHJcbi8vIGNyZWF0ZWRCeTp7XHJcbi8vICAgICByZWY6J3ZlbmRvcicsXHJcbi8vICAgICB0eXBlOlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuLy8gICAgIHJlcXVpcmVkOnRydWVcclxuLy8gfSxcclxuY3JlYXRlZF9kdDp7XHJcbiAgICB0eXBlOkRhdGUsXHJcbiAgICBkZWZhdWx0OkRhdGUubm93XHJcbn0sXHJcbmlzQWN0aXZlOntcclxuICAgIHR5cGU6Qm9vbGVhbixcclxuICAgIGRlZmF1bHQ6dHJ1ZVxyXG59XHJcbn0se2NvbGxlY3Rpb24gOiAnQ2F0ZWdvcnknfSk7XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBtb25nb29zZS5tb2RlbCgnQ2F0ZWdvcnknLENhdGVnb3J5U2NoZW1hKTsiXX0=