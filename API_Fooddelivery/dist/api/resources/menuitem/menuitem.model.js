"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _joi = require("joi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  Categoryname: {
    type: String,
    required: true
  },
  restroId: {
    ref: 'vendor',
    type: Schema.Types.ObjectId,
    required: true
  },
  image: {
    type: String
  },
  price: {
    type: Number
  },
  rating: {
    type: Number
  },
  created_dt: {
    type: Date,
    "default": Date.now
  },
  isActive: {
    type: String,
    "default": "True"
  }
}, {
  collection: 'MenuItems'
});

var _default = new _mongoose["default"].model('Menu', ItemSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL21lbnVpdGVtL21lbnVpdGVtLm1vZGVsLmpzIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiSXRlbVNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJDYXRlZ29yeW5hbWUiLCJyZXN0cm9JZCIsInJlZiIsIlR5cGVzIiwiT2JqZWN0SWQiLCJpbWFnZSIsInByaWNlIiwiTnVtYmVyIiwicmF0aW5nIiwiY3JlYXRlZF9kdCIsIkRhdGUiLCJub3ciLCJpc0FjdGl2ZSIsImNvbGxlY3Rpb24iLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxxQkFBU0QsTUFBeEI7QUFDQSxJQUFNRSxVQUFVLEdBQUcsSUFBSUYsTUFBSixDQUFXO0FBRTlCRyxFQUFBQSxJQUFJLEVBQUM7QUFDREMsSUFBQUEsSUFBSSxFQUFDQyxNQURKO0FBRURDLElBQUFBLFFBQVEsRUFBRTtBQUZULEdBRnlCO0FBTTlCQyxFQUFBQSxZQUFZLEVBQUM7QUFDVkgsSUFBQUEsSUFBSSxFQUFDQyxNQURLO0FBRVRDLElBQUFBLFFBQVEsRUFBQztBQUZBLEdBTmlCO0FBVTlCRSxFQUFBQSxRQUFRLEVBQUM7QUFDTEMsSUFBQUEsR0FBRyxFQUFDLFFBREM7QUFFTEwsSUFBQUEsSUFBSSxFQUFDSixNQUFNLENBQUNVLEtBQVAsQ0FBYUMsUUFGYjtBQUdMTCxJQUFBQSxRQUFRLEVBQUM7QUFISixHQVZxQjtBQWdCOUJNLEVBQUFBLEtBQUssRUFBQztBQUNGUixJQUFBQSxJQUFJLEVBQUNDO0FBREgsR0FoQndCO0FBbUI5QlEsRUFBQUEsS0FBSyxFQUFDO0FBQ0ZULElBQUFBLElBQUksRUFBQ1U7QUFESCxHQW5Cd0I7QUFzQjlCQyxFQUFBQSxNQUFNLEVBQUM7QUFDSFgsSUFBQUEsSUFBSSxFQUFDVTtBQURGLEdBdEJ1QjtBQXlCOUJFLEVBQUFBLFVBQVUsRUFBQztBQUNQWixJQUFBQSxJQUFJLEVBQUNhLElBREU7QUFFUCxlQUFRQSxJQUFJLENBQUNDO0FBRk4sR0F6Qm1CO0FBNkI5QkMsRUFBQUEsUUFBUSxFQUFDO0FBQ0xmLElBQUFBLElBQUksRUFBQ0MsTUFEQTtBQUVMLGVBQVE7QUFGSDtBQTdCcUIsQ0FBWCxFQWlDakI7QUFBQ2UsRUFBQUEsVUFBVSxFQUFHO0FBQWQsQ0FqQ2lCLENBQW5COztlQWtDZSxJQUFJbkIscUJBQVNvQixLQUFiLENBQW1CLE1BQW5CLEVBQTBCbkIsVUFBMUIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IG51bWJlciB9IGZyb20gJ2pvaSc7XHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuY29uc3QgSXRlbVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgIFxyXG5uYW1lOntcclxuICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgcmVxdWlyZWQgOnRydWVcclxufSxcclxuQ2F0ZWdvcnluYW1lOntcclxuICAgdHlwZTpTdHJpbmcsXHJcbiAgICByZXF1aXJlZDp0cnVlXHJcbn0sXHJcbnJlc3Ryb0lkOntcclxuICAgIHJlZjondmVuZG9yJyxcclxuICAgIHR5cGU6U2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgcmVxdWlyZWQ6dHJ1ZVxyXG59LFxyXG5cclxuaW1hZ2U6e1xyXG4gICAgdHlwZTpTdHJpbmdcclxuIH0sXHJcbnByaWNlOntcclxuICAgIHR5cGU6TnVtYmVyXHJcbn0sXHJcbnJhdGluZzp7XHJcbiAgICB0eXBlOk51bWJlclxyXG59LFxyXG5jcmVhdGVkX2R0OntcclxuICAgIHR5cGU6RGF0ZSxcclxuICAgIGRlZmF1bHQ6RGF0ZS5ub3dcclxufSxcclxuaXNBY3RpdmU6e1xyXG4gICAgdHlwZTpTdHJpbmcsXHJcbiAgICBkZWZhdWx0OlwiVHJ1ZVwiXHJcbn1cclxufSx7Y29sbGVjdGlvbiA6ICdNZW51SXRlbXMnfSk7XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBtb25nb29zZS5tb2RlbCgnTWVudScsSXRlbVNjaGVtYSk7Il19