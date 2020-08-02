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
      email: _joi["default"].string().email().required(),
      password: _joi["default"].string().required(),
      contact: _joi["default"].number().required(),
      role: _joi["default"].string()
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
  },
  validationLoginSchema: function validationLoginSchema(body) {
    var schema = _joi["default"].object().keys({
      email: _joi["default"].string().email().required(),
      password: _joi["default"].string().required(),
      role: _joi["default"].string()
    });

    var _Joi$validate2 = _joi["default"].validate(body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJib2R5Iiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsIm5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwicGFzc3dvcmQiLCJjb250YWN0IiwibnVtYmVyIiwicm9sZSIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWxzIiwidmFsaWRhdGlvbkxvZ2luU2NoZW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFDYztBQUNWQSxFQUFBQSxnQkFEVSw0QkFDT0MsSUFEUCxFQUNZO0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0MsZ0JBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUM3QkMsTUFBQUEsSUFBSSxFQUFDSCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRHdCO0FBRTdCQyxNQUFBQSxLQUFLLEVBQUNOLGdCQUFJSSxNQUFKLEdBQWFFLEtBQWIsR0FBcUJELFFBQXJCLEVBRnVCO0FBRzdCRSxNQUFBQSxRQUFRLEVBQUNQLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFIb0I7QUFJN0JHLE1BQUFBLE9BQU8sRUFBQ1IsZ0JBQUlTLE1BQUosR0FBYUosUUFBYixFQUpxQjtBQUs3QkssTUFBQUEsSUFBSSxFQUFDVixnQkFBSUksTUFBSjtBQUx3QixLQUFsQixDQUFmOztBQURrQix3QkFTSUosZ0JBQUlXLFFBQUosQ0FBYWIsSUFBYixFQUFrQkMsTUFBbEIsQ0FUSjtBQUFBLFFBU1hhLEtBVFcsaUJBU1hBLEtBVFc7QUFBQSxRQVNMQyxLQVRLLGlCQVNMQSxLQVRLOztBQVVsQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7O0FBQ0EsUUFBR0EsS0FBSyxJQUFJQSxLQUFLLENBQUNJLE9BQWxCLEVBQTBCO0FBQ3RCLGFBQU07QUFBQ0osUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQU47QUFFQzs7QUFDRCxXQUFNO0FBQUVDLE1BQUFBLEtBQUssRUFBTEE7QUFBRixLQUFOO0FBQ1AsR0FqQlM7QUFrQlZJLEVBQUFBLHFCQWxCVSxpQ0FrQlluQixJQWxCWixFQWtCaUI7QUFDdkIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBRTdCSSxNQUFBQSxLQUFLLEVBQUNOLGdCQUFJSSxNQUFKLEdBQWFFLEtBQWIsR0FBcUJELFFBQXJCLEVBRnVCO0FBRzdCRSxNQUFBQSxRQUFRLEVBQUNQLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFIb0I7QUFJN0JLLE1BQUFBLElBQUksRUFBQ1YsZ0JBQUlJLE1BQUo7QUFKd0IsS0FBbEIsQ0FBZjs7QUFEdUIseUJBUURKLGdCQUFJVyxRQUFKLENBQWFiLElBQWIsRUFBa0JDLE1BQWxCLENBUkM7QUFBQSxRQVFoQmEsS0FSZ0Isa0JBUWhCQSxLQVJnQjtBQUFBLFFBUVZDLEtBUlUsa0JBUVZBLEtBUlU7O0FBU3ZCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjs7QUFDQSxRQUFHQSxLQUFLLElBQUlBLEtBQUssQ0FBQ0ksT0FBbEIsRUFBMEI7QUFDdEIsYUFBTTtBQUFDSixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBTjtBQUVDOztBQUNELFdBQU07QUFBRUMsTUFBQUEsS0FBSyxFQUFMQTtBQUFGLEtBQU47QUFFUDtBQWxDUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIHZhbGlkYXRpb25TY2hlbWEoYm9keSl7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICAgICAgICBuYW1lOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBlbWFpbDpKb2kuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZDpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgY29udGFjdDpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgcm9sZTpKb2kuc3RyaW5nKCksXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm57ZXJyb3J9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybnsgdmFsdWV9O1xyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25Mb2dpblNjaGVtYShib2R5KXtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbWFpbDpKb2kuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZDpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgcm9sZTpKb2kuc3RyaW5nKClcclxuICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7ZXJyb3IsdmFsdWV9ID0gSm9pLnZhbGlkYXRlKGJvZHksc2NoZW1hKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybntlcnJvcn07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJueyB2YWx1ZX07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0=