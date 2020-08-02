"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _user = _interopRequireDefault(require("../user/user.model"));

var _Schema;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Schema = _mongoose["default"].Schema;
var VendorSchema = new Schema((_Schema = {
  name: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  pin: {
    type: Number
  },
  contact: {
    type: Number,
    required: true,
    unique: true
  },
  restroId: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: true
  },
  type: {
    type: String
  }
}, _defineProperty(_Schema, "url", {
  type: String
}), _defineProperty(_Schema, "opentime", {
  type: Date
}), _defineProperty(_Schema, "closetime", {
  type: Date
}), _defineProperty(_Schema, "status", {
  type: String
}), _defineProperty(_Schema, "created_dt", {
  type: Date,
  "default": Date.now
}), _defineProperty(_Schema, "isActive", {
  type: String // default:true

}), _Schema), {
  collection: 'restaurants'
});

var _default = new _mongoose["default"].model('vendor', VendorSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlZlbmRvclNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1cmwiLCJhZGRyZXNzIiwiY2l0eSIsInN0YXRlIiwicGluIiwiTnVtYmVyIiwiY29udGFjdCIsInVuaXF1ZSIsInJlc3Ryb0lkIiwicmVmIiwiVHlwZXMiLCJPYmplY3RJZCIsIkRhdGUiLCJub3ciLCJjb2xsZWN0aW9uIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLHFCQUFTRCxNQUF4QjtBQUVBLElBQU1FLFlBQVksR0FBRyxJQUFJRixNQUFKO0FBRXJCRyxFQUFBQSxJQUFJLEVBQUM7QUFDREMsSUFBQUEsSUFBSSxFQUFDQyxNQURKO0FBRURDLElBQUFBLFFBQVEsRUFBRTtBQUZULEdBRmdCO0FBT3JCQyxFQUFBQSxHQUFHLEVBQUM7QUFDQUgsSUFBQUEsSUFBSSxFQUFDQztBQURMLEdBUGlCO0FBVXJCRyxFQUFBQSxPQUFPLEVBQUM7QUFDSkosSUFBQUEsSUFBSSxFQUFDQztBQURELEdBVmE7QUFhckJJLEVBQUFBLElBQUksRUFBQztBQUNETCxJQUFBQSxJQUFJLEVBQUNDO0FBREosR0FiZ0I7QUFnQnJCSyxFQUFBQSxLQUFLLEVBQUM7QUFDRk4sSUFBQUEsSUFBSSxFQUFDQztBQURILEdBaEJlO0FBbUJyQk0sRUFBQUEsR0FBRyxFQUFDO0FBQ0FQLElBQUFBLElBQUksRUFBQ1E7QUFETCxHQW5CaUI7QUFzQnJCQyxFQUFBQSxPQUFPLEVBQUM7QUFDSlQsSUFBQUEsSUFBSSxFQUFDUSxNQUREO0FBRUpOLElBQUFBLFFBQVEsRUFBQyxJQUZMO0FBR0pRLElBQUFBLE1BQU0sRUFBQztBQUhILEdBdEJhO0FBMkJyQkMsRUFBQUEsUUFBUSxFQUFDO0FBQ0xDLElBQUFBLEdBQUcsRUFBQyxNQURDO0FBRUxaLElBQUFBLElBQUksRUFBQ0osTUFBTSxDQUFDaUIsS0FBUCxDQUFhQyxRQUZiO0FBR0xaLElBQUFBLFFBQVEsRUFBQztBQUhKLEdBM0JZO0FBZ0NyQkYsRUFBQUEsSUFBSSxFQUFDO0FBQ0RBLElBQUFBLElBQUksRUFBQ0M7QUFESjtBQWhDZ0IsbUNBbUNqQjtBQUNBRCxFQUFBQSxJQUFJLEVBQUNDO0FBREwsQ0FuQ2lCLHdDQXNDWjtBQUNMRCxFQUFBQSxJQUFJLEVBQUNlO0FBREEsQ0F0Q1kseUNBeUNYO0FBQ05mLEVBQUFBLElBQUksRUFBQ2U7QUFEQyxDQXpDVyxzQ0E0Q2Q7QUFDSGYsRUFBQUEsSUFBSSxFQUFDQztBQURGLENBNUNjLDBDQStDVjtBQUNQRCxFQUFBQSxJQUFJLEVBQUNlLElBREU7QUFFUCxhQUFRQSxJQUFJLENBQUNDO0FBRk4sQ0EvQ1Usd0NBbURaO0FBQ0xoQixFQUFBQSxJQUFJLEVBQUNDLE1BREEsQ0FFTDs7QUFGSyxDQW5EWSxhQXVEbkI7QUFBQ2dCLEVBQUFBLFVBQVUsRUFBRztBQUFkLENBdkRtQixDQUFyQjs7ZUF3RGUsSUFBSXBCLHFCQUFTcUIsS0FBYixDQUFtQixRQUFuQixFQUE0QnBCLFlBQTVCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vdXNlci91c2VyLm1vZGVsJztcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5cclxuY29uc3QgVmVuZG9yU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICAgXHJcbm5hbWU6e1xyXG4gICAgdHlwZTpTdHJpbmcsXHJcbiAgICByZXF1aXJlZCA6dHJ1ZVxyXG59LFxyXG5cclxudXJsOntcclxuICAgIHR5cGU6U3RyaW5nXHJcbn0sXHJcbmFkZHJlc3M6e1xyXG4gICAgdHlwZTpTdHJpbmdcclxufSxcclxuY2l0eTp7XHJcbiAgICB0eXBlOlN0cmluZ1xyXG59LFxyXG5zdGF0ZTp7XHJcbiAgICB0eXBlOlN0cmluZ1xyXG59LFxyXG5waW46e1xyXG4gICAgdHlwZTpOdW1iZXJcclxufSxcclxuY29udGFjdDp7XHJcbiAgICB0eXBlOk51bWJlcixcclxuICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICB1bmlxdWU6dHJ1ZVxyXG59LFxyXG5yZXN0cm9JZDp7XHJcbiAgICByZWY6J1VzZXInLFxyXG4gICAgdHlwZTpTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZXF1aXJlZDp0cnVlXHJcbn0sXHJcbnR5cGU6e1xyXG4gICAgdHlwZTpTdHJpbmcsICBcclxufSxcclxudXJsOntcclxuICAgIHR5cGU6U3RyaW5nLFxyXG59LFxyXG5vcGVudGltZTp7XHJcbiAgICB0eXBlOkRhdGVcclxufSxcclxuY2xvc2V0aW1lOntcclxuICAgIHR5cGU6RGF0ZVxyXG59LFxyXG5zdGF0dXM6e1xyXG4gICAgdHlwZTpTdHJpbmdcclxufSxcclxuY3JlYXRlZF9kdDp7XHJcbiAgICB0eXBlOkRhdGUsXHJcbiAgICBkZWZhdWx0OkRhdGUubm93XHJcbn0sXHJcbmlzQWN0aXZlOntcclxuICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgLy8gZGVmYXVsdDp0cnVlXHJcbn1cclxufSx7Y29sbGVjdGlvbiA6ICdyZXN0YXVyYW50cyd9KTtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IG1vbmdvb3NlLm1vZGVsKCd2ZW5kb3InLFZlbmRvclNjaGVtYSk7Il19