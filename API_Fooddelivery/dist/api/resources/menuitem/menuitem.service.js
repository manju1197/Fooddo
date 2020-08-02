"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  validationSchema: function validationSchema(body) {
    var schema = _joi["default"].object().keys({
      Categoryname: _joi["default"].string().required(),
      name: _joi["default"].string().required(),
      restroId: _joi["default"].string().required(),
      image: _joi["default"].string().required(),
      price: _joi["default"].number().required(),
      rating: _joi["default"].number().required(),
      isActive: _joi["default"].string().required()
    });

    var _Joi$validate = _joi["default"].validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    console.log(error);

    if (error && error.details) {
      return {
        error: error
      };
    }

    return {
      value: value
    };
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL21lbnVpdGVtL21lbnVpdGVtLnNlcnZpY2UuanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwiQ2F0ZWdvcnluYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJuYW1lIiwicmVzdHJvSWQiLCJpbWFnZSIsInByaWNlIiwibnVtYmVyIiwicmF0aW5nIiwiaXNBY3RpdmUiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFFOUJDLE1BQUFBLFlBQVksRUFBQ0gsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZpQjtBQUc5QkMsTUFBQUEsSUFBSSxFQUFDTixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBSHlCO0FBSTlCRSxNQUFBQSxRQUFRLEVBQUNQLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFKcUI7QUFLakNHLE1BQUFBLEtBQUssRUFBQ1IsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUwyQjtBQU05QkksTUFBQUEsS0FBSyxFQUFDVCxnQkFBSVUsTUFBSixHQUFhTCxRQUFiLEVBTndCO0FBTzlCTSxNQUFBQSxNQUFNLEVBQUNYLGdCQUFJVSxNQUFKLEdBQWFMLFFBQWIsRUFQdUI7QUFROUJPLE1BQUFBLFFBQVEsRUFBQ1osZ0JBQUlJLE1BQUosR0FBYUMsUUFBYjtBQVJxQixLQUFsQixDQUFmOztBQURrQix3QkFZSUwsZ0JBQUlhLFFBQUosQ0FBYWYsSUFBYixFQUFrQkMsTUFBbEIsQ0FaSjtBQUFBLFFBWVhlLEtBWlcsaUJBWVhBLEtBWlc7QUFBQSxRQVlMQyxLQVpLLGlCQVlMQSxLQVpLOztBQWFsQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7O0FBQ0EsUUFBR0EsS0FBSyxJQUFJQSxLQUFLLENBQUNJLE9BQWxCLEVBQTBCO0FBQ3RCLGFBQU07QUFBQ0osUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQU47QUFFQzs7QUFDRCxXQUFNO0FBQUVDLE1BQUFBLEtBQUssRUFBTEE7QUFBRixLQUFOO0FBQ1A7QUFwQlMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hKGJvZHkpe1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIENhdGVnb3J5bmFtZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICBuYW1lOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgIHJlc3Ryb0lkOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgIGltYWdlOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgIHByaWNlOkpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgIHJhdGluZzpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICBpc0FjdGl2ZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm57ZXJyb3J9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybnsgdmFsdWV9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==