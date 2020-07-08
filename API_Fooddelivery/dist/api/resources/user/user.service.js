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
      contact: _joi["default"].number().required()
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
  } // validationLoginSchema(body){
  //     const schema = Joi.object().keys({
  //         email:Joi.string().email().required(),
  //         password:Joi.string().required(),
  //         role:Joi.string()
  //     });
  //     const {error,value} = Joi.validate(body,schema);
  //     console.log(error);
  //     if(error && error.details){
  //         return{error};
  //         }
  //         return{ value};
  // }

};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJib2R5Iiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsIm5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwicGFzc3dvcmQiLCJjb250YWN0IiwibnVtYmVyIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNjO0FBQ1ZBLEVBQUFBLGdCQURVLDRCQUNPQyxJQURQLEVBQ1k7QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxJQUFJLEVBQUNILGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFEd0I7QUFFN0JDLE1BQUFBLEtBQUssRUFBQ04sZ0JBQUlJLE1BQUosR0FBYUUsS0FBYixHQUFxQkQsUUFBckIsRUFGdUI7QUFHN0JFLE1BQUFBLFFBQVEsRUFBQ1AsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUhvQjtBQUk3QkcsTUFBQUEsT0FBTyxFQUFDUixnQkFBSVMsTUFBSixHQUFhSixRQUFiO0FBSnFCLEtBQWxCLENBQWY7O0FBRGtCLHdCQVFJTCxnQkFBSVUsUUFBSixDQUFhWixJQUFiLEVBQWtCQyxNQUFsQixDQVJKO0FBQUEsUUFRWFksS0FSVyxpQkFRWEEsS0FSVztBQUFBLFFBUUxDLEtBUkssaUJBUUxBLEtBUks7O0FBU2xCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjs7QUFDQSxRQUFHQSxLQUFLLElBQUlBLEtBQUssQ0FBQ0ksT0FBbEIsRUFBMEI7QUFDdEIsYUFBTTtBQUFDSixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBTjtBQUVDOztBQUNELFdBQU07QUFBRUMsTUFBQUEsS0FBSyxFQUFMQTtBQUFGLEtBQU47QUFDUCxHQWhCUyxDQWlCVjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFqQ1UsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hKGJvZHkpe1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgICAgICAgbmFtZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgZW1haWw6Sm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGNvbnRhY3Q6Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm57ZXJyb3J9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybnsgdmFsdWV9O1xyXG4gICAgfVxyXG4gICAgLy8gdmFsaWRhdGlvbkxvZ2luU2NoZW1hKGJvZHkpe1xyXG4gICAgLy8gICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIGVtYWlsOkpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgICAvLyAgICAgICAgIHBhc3N3b3JkOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgLy8gICAgICAgICByb2xlOkpvaS5zdHJpbmcoKVxyXG4gICAgICAgICAgIFxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIGNvbnN0IHtlcnJvcix2YWx1ZX0gPSBKb2kudmFsaWRhdGUoYm9keSxzY2hlbWEpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIC8vICAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgIC8vICAgICAgICAgcmV0dXJue2Vycm9yfTtcclxuICAgICAgICBcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICByZXR1cm57IHZhbHVlfTtcclxuICAgICAgICBcclxuICAgIC8vIH1cclxufSJdfQ==