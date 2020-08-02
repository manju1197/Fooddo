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
      name: _joi["default"].string().required(),
      UserId: _joi["default"].string().required(),
      CalculatedAmt: _joi["default"].number().required(),
      FinalAmt: _joi["default"].number().required(),
      quantity: _joi["default"].number().required(),
      discount: _joi["default"].number().required()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL29yZGVyL29yZGVyLnNlcnZpY2UuanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwibmFtZSIsInN0cmluZyIsInJlcXVpcmVkIiwiVXNlcklkIiwiQ2FsY3VsYXRlZEFtdCIsIm51bWJlciIsIkZpbmFsQW10IiwicXVhbnRpdHkiLCJkaXNjb3VudCIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFDYztBQUNWQSxFQUFBQSxnQkFEVSw0QkFDT0MsSUFEUCxFQUNZO0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0MsZ0JBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUM3QkMsTUFBQUEsSUFBSSxFQUFDSCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRHdCO0FBRTdCQyxNQUFBQSxNQUFNLEVBQUNOLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFGc0I7QUFJOUJFLE1BQUFBLGFBQWEsRUFBQ1AsZ0JBQUlRLE1BQUosR0FBYUgsUUFBYixFQUpnQjtBQUs3QkksTUFBQUEsUUFBUSxFQUFDVCxnQkFBSVEsTUFBSixHQUFhSCxRQUFiLEVBTG9CO0FBTTdCSyxNQUFBQSxRQUFRLEVBQUNWLGdCQUFJUSxNQUFKLEdBQWFILFFBQWIsRUFOb0I7QUFPN0JNLE1BQUFBLFFBQVEsRUFBQ1gsZ0JBQUlRLE1BQUosR0FBYUgsUUFBYjtBQVBvQixLQUFsQixDQUFmOztBQURrQix3QkFXSUwsZ0JBQUlZLFFBQUosQ0FBYWQsSUFBYixFQUFrQkMsTUFBbEIsQ0FYSjtBQUFBLFFBV1hjLEtBWFcsaUJBV1hBLEtBWFc7QUFBQSxRQVdMQyxLQVhLLGlCQVdMQSxLQVhLOztBQVlsQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7O0FBQ0EsUUFBR0EsS0FBSyxJQUFJQSxLQUFLLENBQUNJLE9BQWxCLEVBQTBCO0FBQ3RCLGFBQU07QUFBQ0osUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQU47QUFFQzs7QUFDRCxXQUFNO0FBQUVDLE1BQUFBLEtBQUssRUFBTEE7QUFBRixLQUFOO0FBQ1A7QUFuQlMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hKGJvZHkpe1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgICAgICAgbmFtZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgVXNlcklkOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBDYWxjdWxhdGVkQW10OkpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBGaW5hbEFtdDpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgcXVhbnRpdHk6Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGRpc2NvdW50OkpvaS5udW1iZXIoKS5yZXF1aXJlZCgpXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm57ZXJyb3J9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybnsgdmFsdWV9O1xyXG4gICAgfX1cclxuIl19