"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("@babel/polyfill");

var _api = require("./api");

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var express = require('express');

var app = express();
var PORT = 3001;
_mongoose["default"].Promise = global.Promise;

_mongoose["default"].connect('mongodb://localhost/foodorder', {
  useNewUrlParser: true
});

_mongoose["default"].set('useCreateIndex', true);

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])());
app.use('/api', _api.restRouter); // app.use('/api',restRouter);

app.use(function (req, res, next) {
  var error = new Error("Not Found");
  error.status = 404;
  error.message = "Invalid route";
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});
app.get('/', function (req, res) {
  res.json({
    msg: 'Welcome to online food order FoodAPI '
  });
});
app.use(function (res, req, next) {
  console.log("middleware before api call");
  next();
});
app.listen(PORT, function () {
  console.log("Server is running at port number ".concat(PORT));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJhcHAiLCJQT1JUIiwibW9uZ29vc2UiLCJQcm9taXNlIiwiZ2xvYmFsIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInNldCIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicmVzdFJvdXRlciIsInJlcSIsInJlcyIsIm5leHQiLCJlcnJvciIsIkVycm9yIiwic3RhdHVzIiwibWVzc2FnZSIsImdldCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFOQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXZCOztBQUNBLElBQU1DLEdBQUcsR0FBR0YsT0FBTyxFQUFuQjtBQUNBLElBQU1HLElBQUksR0FBRyxJQUFiO0FBTUFDLHFCQUFTQyxPQUFULEdBQWtCQyxNQUFNLENBQUNELE9BQXpCOztBQUVBRCxxQkFBU0csT0FBVCxDQUFpQiwrQkFBakIsRUFBa0Q7QUFBRUMsRUFBQUEsZUFBZSxFQUFFO0FBQW5CLENBQWxEOztBQUNBSixxQkFBU0ssR0FBVCxDQUFhLGdCQUFiLEVBQStCLElBQS9COztBQUVBUCxHQUFHLENBQUNRLEdBQUosQ0FBUUMsdUJBQVdDLElBQVgsRUFBUjtBQUNBVixHQUFHLENBQUNRLEdBQUosQ0FBUUMsdUJBQVdFLFVBQVgsQ0FBc0I7QUFDMUJDLEVBQUFBLFFBQVEsRUFBQztBQURpQixDQUF0QixDQUFSO0FBR0FaLEdBQUcsQ0FBQ1EsR0FBSixDQUFRLHVCQUFSO0FBQ0FSLEdBQUcsQ0FBQ1EsR0FBSixDQUFRLE1BQVIsRUFBZUssZUFBZixFLENBQ0E7O0FBQ0FiLEdBQUcsQ0FBQ1EsR0FBSixDQUFRLFVBQUNNLEdBQUQsRUFBS0MsR0FBTCxFQUFTQyxJQUFULEVBQWtCO0FBQ3RCLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsV0FBVixDQUFkO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0UsTUFBTixHQUFlLEdBQWY7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRyxPQUFOLEdBQWdCLGVBQWhCO0FBQ0FKLEVBQUFBLElBQUksQ0FBQ0MsS0FBRCxDQUFKO0FBQ0gsQ0FMRDtBQU1BakIsR0FBRyxDQUFDUSxHQUFKLENBQVEsVUFBQ1MsS0FBRCxFQUFPSCxHQUFQLEVBQVdDLEdBQVgsRUFBZUMsSUFBZixFQUF3QjtBQUN4QkQsRUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVdGLEtBQUssQ0FBQ0UsTUFBTixJQUFnQixHQUEzQjtBQUNBLFNBQU9KLEdBQUcsQ0FBQ0wsSUFBSixDQUFTO0FBQ1pPLElBQUFBLEtBQUssRUFBQztBQUNGRyxNQUFBQSxPQUFPLEVBQUNILEtBQUssQ0FBQ0c7QUFEWjtBQURNLEdBQVQsQ0FBUDtBQU1QLENBUkQ7QUFVQXBCLEdBQUcsQ0FBQ3FCLEdBQUosQ0FBUSxHQUFSLEVBQWMsVUFBQ1AsR0FBRCxFQUFLQyxHQUFMLEVBQWE7QUFDdkJBLEVBQUFBLEdBQUcsQ0FBQ0wsSUFBSixDQUFTO0FBQ0xZLElBQUFBLEdBQUcsRUFBQztBQURDLEdBQVQ7QUFJSCxDQUxEO0FBTUF0QixHQUFHLENBQUNRLEdBQUosQ0FBUSxVQUFTTyxHQUFULEVBQWFELEdBQWIsRUFBaUJFLElBQWpCLEVBQXNCO0FBQzFCTyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjtBQUNBUixFQUFBQSxJQUFJO0FBQ1AsQ0FIRDtBQUlBaEIsR0FBRyxDQUFDeUIsTUFBSixDQUFXeEIsSUFBWCxFQUFnQixZQUFNO0FBQ2xCc0IsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLDRDQUFnRHZCLElBQWhEO0FBQ0gsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJztcclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBQT1JUID0gMzAwMTtcclxuaW1wb3J0IHtyZXN0Um91dGVyfSBmcm9tICcuL2FwaSc7XHJcbmltcG9ydCBtb25nb29zZSwgeyBDb2xsZWN0aW9uIH0gZnJvbSdtb25nb29zZSc7XHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XHJcblxyXG5tb25nb29zZS5Qcm9taXNlID1nbG9iYWwuUHJvbWlzZTtcclxuXHJcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3QvZm9vZG9yZGVyJywgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUgfSk7XHJcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKTsgIFxyXG5cclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcclxuICAgIGV4dGVuZGVkOmZhbHNlXHJcbn0pKTtcclxuYXBwLnVzZShjb3JzKCkpO1xyXG5hcHAudXNlKCcvYXBpJyxyZXN0Um91dGVyKTtcclxuLy8gYXBwLnVzZSgnL2FwaScscmVzdFJvdXRlcik7XHJcbmFwcC51c2UoKHJlcSxyZXMsbmV4dCkgPT4ge1xyXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXCJOb3QgRm91bmRcIik7XHJcbiAgICBlcnJvci5zdGF0dXMgPSA0MDQ7XHJcbiAgICBlcnJvci5tZXNzYWdlID0gXCJJbnZhbGlkIHJvdXRlXCI7XHJcbiAgICBuZXh0KGVycm9yKTtcclxufSk7XHJcbmFwcC51c2UoKGVycm9yLHJlcSxyZXMsbmV4dCkgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzIHx8IDUwMCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgZXJyb3I6e1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTplcnJvci5tZXNzYWdlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxufSk7XHJcblxyXG5hcHAuZ2V0KCcvJyAsIChyZXEscmVzKSA9PiB7XHJcbiAgICByZXMuanNvbih7XHJcbiAgICAgICAgbXNnOidXZWxjb21lIHRvIG9ubGluZSBmb29kIG9yZGVyIEZvb2RBUEkgJ1xyXG4gICAgfSlcclxuICAgXHJcbn0pXHJcbmFwcC51c2UoZnVuY3Rpb24ocmVzLHJlcSxuZXh0KXtcclxuICAgIGNvbnNvbGUubG9nKFwibWlkZGxld2FyZSBiZWZvcmUgYXBpIGNhbGxcIik7XHJcbiAgICBuZXh0KCk7XHJcbn0pXHJcbmFwcC5saXN0ZW4oUE9SVCwoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgU2VydmVyIGlzIHJ1bm5pbmcgYXQgcG9ydCBudW1iZXIgJHtQT1JUfWApO1xyXG59KSJdfQ==