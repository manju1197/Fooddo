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
      firstname: _joi["default"].string().required(),
      lastname: _joi["default"].string().required(),
      userId: _joi["default"].string().required(),
      address: _joi["default"].string().required(),
      dob: _joi["default"].string().required(),
      city: _joi["default"].string().required(),
      state: _joi["default"].string().required(),
      pin: _joi["default"].number().required(),
      contact: _joi["default"].number().required(),
      email: _joi["default"].string().email().required(),
      gender: _joi["default"].string().required(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2N1c3RvbWVyL2N1c3RvbWVyLnNlcnZpY2UuanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwiZmlyc3RuYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0bmFtZSIsInVzZXJJZCIsImFkZHJlc3MiLCJkb2IiLCJjaXR5Iiwic3RhdGUiLCJwaW4iLCJudW1iZXIiLCJjb250YWN0IiwiZW1haWwiLCJnZW5kZXIiLCJpc0FjdGl2ZSIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFDYztBQUNWQSxFQUFBQSxnQkFEVSw0QkFDT0MsSUFEUCxFQUNZO0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0MsZ0JBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUM3QkMsTUFBQUEsU0FBUyxFQUFDSCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRG1CO0FBRTdCQyxNQUFBQSxRQUFRLEVBQUNOLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFGb0I7QUFHN0JFLE1BQUFBLE1BQU0sRUFBQ1AsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUhzQjtBQUk3QkcsTUFBQUEsT0FBTyxFQUFDUixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBSnFCO0FBSzdCSSxNQUFBQSxHQUFHLEVBQUNULGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFMeUI7QUFNOUJLLE1BQUFBLElBQUksRUFBQ1YsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQU55QjtBQU85Qk0sTUFBQUEsS0FBSyxFQUFDWCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBUHdCO0FBUTlCTyxNQUFBQSxHQUFHLEVBQUNaLGdCQUFJYSxNQUFKLEdBQWFSLFFBQWIsRUFSMEI7QUFTN0JTLE1BQUFBLE9BQU8sRUFBQ2QsZ0JBQUlhLE1BQUosR0FBYVIsUUFBYixFQVRxQjtBQVU3QlUsTUFBQUEsS0FBSyxFQUFDZixnQkFBSUksTUFBSixHQUFhVyxLQUFiLEdBQXFCVixRQUFyQixFQVZ1QjtBQVc3QlcsTUFBQUEsTUFBTSxFQUFDaEIsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQVhzQjtBQVk5QlksTUFBQUEsUUFBUSxFQUFDakIsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYjtBQVpxQixLQUFsQixDQUFmOztBQURrQix3QkFlSUwsZ0JBQUlrQixRQUFKLENBQWFwQixJQUFiLEVBQWtCQyxNQUFsQixDQWZKO0FBQUEsUUFlWG9CLEtBZlcsaUJBZVhBLEtBZlc7QUFBQSxRQWVMQyxLQWZLLGlCQWVMQSxLQWZLOztBQWdCbEJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaOztBQUNBLFFBQUdBLEtBQUssSUFBSUEsS0FBSyxDQUFDSSxPQUFsQixFQUEwQjtBQUN0QixhQUFNO0FBQUNKLFFBQUFBLEtBQUssRUFBTEE7QUFBRCxPQUFOO0FBRUM7O0FBQ0QsV0FBTTtBQUFFQyxNQUFBQSxLQUFLLEVBQUxBO0FBQUYsS0FBTjtBQUNQO0FBdkJTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgdmFsaWRhdGlvblNjaGVtYShib2R5KXtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgIGZpcnN0bmFtZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgbGFzdG5hbWU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHVzZXJJZDpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgYWRkcmVzczpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgZG9iOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgIGNpdHk6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgc3RhdGU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgcGluOkpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBjb250YWN0OkpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBlbWFpbDpKb2kuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBnZW5kZXI6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgaXNBY3RpdmU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKClcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7ZXJyb3IsdmFsdWV9ID0gSm9pLnZhbGlkYXRlKGJvZHksc2NoZW1hKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybntlcnJvcn07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJueyB2YWx1ZX07XHJcbiAgICB9fVxyXG4iXX0=