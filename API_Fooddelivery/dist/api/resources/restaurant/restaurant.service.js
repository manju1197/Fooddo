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
      restroId: _joi["default"].string().required(),
      url: _joi["default"].string().required(),
      address: _joi["default"].string().required(),
      city: _joi["default"].string().required(),
      state: _joi["default"].string().required(),
      pin: _joi["default"].number().required(),
      contact: _joi["default"].number().required(),
      type: _joi["default"].string().required(),
      status: _joi["default"].string().required(),
      opentime: _joi["default"].date().required(),
      closetime: _joi["default"].date().required(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJib2R5Iiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsIm5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsInJlc3Ryb0lkIiwidXJsIiwiYWRkcmVzcyIsImNpdHkiLCJzdGF0ZSIsInBpbiIsIm51bWJlciIsImNvbnRhY3QiLCJ0eXBlIiwic3RhdHVzIiwib3BlbnRpbWUiLCJkYXRlIiwiY2xvc2V0aW1lIiwiaXNBY3RpdmUiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLElBQUksRUFBQ0gsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUR3QjtBQUU3QkMsTUFBQUEsUUFBUSxFQUFDTixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRm9CO0FBRzdCRSxNQUFBQSxHQUFHLEVBQUNQLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFIeUI7QUFJN0JHLE1BQUFBLE9BQU8sRUFBQ1IsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUpxQjtBQUs5QkksTUFBQUEsSUFBSSxFQUFDVCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBTHlCO0FBTTlCSyxNQUFBQSxLQUFLLEVBQUNWLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFOd0I7QUFPOUJNLE1BQUFBLEdBQUcsRUFBQ1gsZ0JBQUlZLE1BQUosR0FBYVAsUUFBYixFQVAwQjtBQVE3QlEsTUFBQUEsT0FBTyxFQUFDYixnQkFBSVksTUFBSixHQUFhUCxRQUFiLEVBUnFCO0FBU2hDUyxNQUFBQSxJQUFJLEVBQUNkLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFUMkI7QUFVN0JVLE1BQUFBLE1BQU0sRUFBQ2YsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQVZzQjtBQVc3QlcsTUFBQUEsUUFBUSxFQUFDaEIsZ0JBQUlpQixJQUFKLEdBQVdaLFFBQVgsRUFYb0I7QUFZN0JhLE1BQUFBLFNBQVMsRUFBQ2xCLGdCQUFJaUIsSUFBSixHQUFXWixRQUFYLEVBWm1CO0FBYTdCYyxNQUFBQSxRQUFRLEVBQUNuQixnQkFBSUksTUFBSixHQUFhQyxRQUFiO0FBYm9CLEtBQWxCLENBQWY7O0FBRGtCLHdCQWdCSUwsZ0JBQUlvQixRQUFKLENBQWF0QixJQUFiLEVBQWtCQyxNQUFsQixDQWhCSjtBQUFBLFFBZ0JYc0IsS0FoQlcsaUJBZ0JYQSxLQWhCVztBQUFBLFFBZ0JMQyxLQWhCSyxpQkFnQkxBLEtBaEJLOztBQWlCbEJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaOztBQUNBLFFBQUdBLEtBQUssSUFBSUEsS0FBSyxDQUFDSSxPQUFsQixFQUEwQjtBQUN0QixhQUFNO0FBQUNKLFFBQUFBLEtBQUssRUFBTEE7QUFBRCxPQUFOO0FBRUM7O0FBQ0QsV0FBTTtBQUFFQyxNQUFBQSxLQUFLLEVBQUxBO0FBQUYsS0FBTjtBQUNQO0FBeEJTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgdmFsaWRhdGlvblNjaGVtYShib2R5KXtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgIG5hbWU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHJlc3Ryb0lkOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICB1cmw6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGFkZHJlc3M6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgY2l0eTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICBzdGF0ZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICBwaW46Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGNvbnRhY3Q6Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgIHR5cGU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHN0YXR1czpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgb3BlbnRpbWU6Sm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBjbG9zZXRpbWU6Sm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX0gPSBKb2kudmFsaWRhdGUoYm9keSxzY2hlbWEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgcmV0dXJue2Vycm9yfTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm57IHZhbHVlfTtcclxuICAgIH19XHJcbiJdfQ==