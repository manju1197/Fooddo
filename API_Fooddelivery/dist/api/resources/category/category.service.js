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
      name: _joi["default"].string().required() //    createdBy:Joi.string().required()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NhdGVnb3J5L2NhdGVnb3J5LnNlcnZpY2UuanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwibmFtZSIsInN0cmluZyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNjO0FBQ1ZBLEVBQUFBLGdCQURVLDRCQUNPQyxJQURQLEVBQ1k7QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxJQUFJLEVBQUNILGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFEd0IsQ0FFakM7O0FBRmlDLEtBQWxCLENBQWY7O0FBRGtCLHdCQU1JTCxnQkFBSU0sUUFBSixDQUFhUixJQUFiLEVBQWtCQyxNQUFsQixDQU5KO0FBQUEsUUFNWFEsS0FOVyxpQkFNWEEsS0FOVztBQUFBLFFBTUxDLEtBTkssaUJBTUxBLEtBTks7O0FBT2xCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjs7QUFDQSxRQUFHQSxLQUFLLElBQUlBLEtBQUssQ0FBQ0ksT0FBbEIsRUFBMEI7QUFDdEIsYUFBTTtBQUFDSixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBTjtBQUVDOztBQUNELFdBQU07QUFBRUMsTUFBQUEsS0FBSyxFQUFMQTtBQUFGLEtBQU47QUFDUDtBQWRTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgdmFsaWRhdGlvblNjaGVtYShib2R5KXtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgIG5hbWU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgLy8gICAgY3JlYXRlZEJ5OkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm57ZXJyb3J9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybnsgdmFsdWV9O1xyXG4gICAgfX1cclxuIl19