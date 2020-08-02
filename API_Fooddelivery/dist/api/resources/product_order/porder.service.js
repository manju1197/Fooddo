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
      restroId: _joi["default"].string().required(),
      OrderId: _joi["default"].string().required(),
      ProductId: _joi["default"].string().required(),
      Productname: _joi["default"].string().required(),
      quantity: _joi["default"].number().required(),
      Total: _joi["default"].number().required()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3Byb2R1Y3Rfb3JkZXIvcG9yZGVyLnNlcnZpY2UuanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwibmFtZSIsInN0cmluZyIsInJlcXVpcmVkIiwiVXNlcklkIiwicmVzdHJvSWQiLCJPcmRlcklkIiwiUHJvZHVjdElkIiwiUHJvZHVjdG5hbWUiLCJxdWFudGl0eSIsIm51bWJlciIsIlRvdGFsIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNjO0FBQ1ZBLEVBQUFBLGdCQURVLDRCQUNPQyxJQURQLEVBQ1k7QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxJQUFJLEVBQUNILGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFEd0I7QUFFN0JDLE1BQUFBLE1BQU0sRUFBQ04sZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZzQjtBQUc3QkUsTUFBQUEsUUFBUSxFQUFDUCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBSG9CO0FBSTdCRyxNQUFBQSxPQUFPLEVBQUNSLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFKcUI7QUFLN0JJLE1BQUFBLFNBQVMsRUFBQ1QsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUxtQjtBQU0vQkssTUFBQUEsV0FBVyxFQUFDVixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBTm1CO0FBTzlCTSxNQUFBQSxRQUFRLEVBQUNYLGdCQUFJWSxNQUFKLEdBQWFQLFFBQWIsRUFQcUI7QUFRN0JRLE1BQUFBLEtBQUssRUFBQ2IsZ0JBQUlZLE1BQUosR0FBYVAsUUFBYjtBQVJ1QixLQUFsQixDQUFmOztBQURrQix3QkFhSUwsZ0JBQUljLFFBQUosQ0FBYWhCLElBQWIsRUFBa0JDLE1BQWxCLENBYko7QUFBQSxRQWFYZ0IsS0FiVyxpQkFhWEEsS0FiVztBQUFBLFFBYUxDLEtBYkssaUJBYUxBLEtBYks7O0FBY2xCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjs7QUFDQSxRQUFHQSxLQUFLLElBQUlBLEtBQUssQ0FBQ0ksT0FBbEIsRUFBMEI7QUFDdEIsYUFBTTtBQUFDSixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBTjtBQUVDOztBQUNELFdBQU07QUFBRUMsTUFBQUEsS0FBSyxFQUFMQTtBQUFGLEtBQU47QUFDUDtBQXJCUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIHZhbGlkYXRpb25TY2hlbWEoYm9keSl7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICAgICAgICBuYW1lOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBVc2VySWQ6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHJlc3Ryb0lkOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBPcmRlcklkOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBQcm9kdWN0SWQ6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICBQcm9kdWN0bmFtZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICBxdWFudGl0eTpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgVG90YWw6Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm57ZXJyb3J9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybnsgdmFsdWV9O1xyXG4gICAgfX1cclxuIl19