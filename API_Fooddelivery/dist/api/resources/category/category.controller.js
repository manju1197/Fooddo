"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _category = _interopRequireDefault(require("./category.model"));

var _category2 = _interopRequireDefault(require("./category.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res) {
    _category["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  signup: function signup(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _CatService$validatio, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _CatService$validatio = _category2["default"].validationSchema(req.body), error = _CatService$validatio.error, value = _CatService$validatio.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _category["default"].create(value).then(function (item) {
                return res.json(item);
              })["catch"](function (err) {
                return res.status(500).json(err);
              });

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }))();
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZmluZEFsbCIsInJlcSIsInJlcyIsIkNhdGVnb3J5IiwiZmluZCIsInRoZW4iLCJkYXRhIiwianNvbiIsImVyciIsInN0YXR1cyIsInNpZ251cCIsIkNhdFNlcnZpY2UiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiY3JlYXRlIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7ZUFFYztBQUNWQSxFQUFBQSxPQURVLG1CQUNGQyxHQURFLEVBQ0VDLEdBREYsRUFDTTtBQUNoQkMseUJBQVNDLElBQVQsR0FBZ0JDLElBQWhCLENBQXFCLFVBQUFDLElBQUk7QUFBQSxhQUFJSixHQUFHLENBQUNLLElBQUosQ0FBU0QsSUFBVCxDQUFKO0FBQUEsS0FBekIsV0FDVyxVQUFBRSxHQUFHO0FBQUEsYUFBSU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQURkO0FBRUMsR0FKUztBQUtKRSxFQUFBQSxNQUxJLGtCQUtHVCxHQUxILEVBS09DLEdBTFAsRUFLVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUdTUyxzQkFBV0MsZ0JBQVgsQ0FBNEJYLEdBQUcsQ0FBQ1ksSUFBaEMsQ0FIVCxFQUdOQyxLQUhNLHlCQUdOQSxLQUhNLEVBR0FDLEtBSEEseUJBR0FBLEtBSEE7O0FBQUEsb0JBSVRELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxPQUpOO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUtHZCxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQk8sS0FBckIsQ0FMSDs7QUFBQTtBQUFBO0FBQUEscUJBUUhYLHFCQUFTYyxNQUFULENBQWdCRixLQUFoQixFQUNMVixJQURLLENBQ0EsVUFBQWEsSUFBSTtBQUFBLHVCQUFJaEIsR0FBRyxDQUFDSyxJQUFKLENBQVNXLElBQVQsQ0FBSjtBQUFBLGVBREosV0FFQyxVQUFBVixHQUFHO0FBQUEsdUJBQUdOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFIO0FBQUEsZUFGSixDQVJHOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlYlcsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQWZhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJoQjtBQXRCSyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnkubW9kZWwnO1xyXG5pbXBvcnQgQ2F0U2VydmljZSBmcm9tICcuL2NhdGVnb3J5LnNlcnZpY2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGZpbmRBbGwocmVxLHJlcyl7XHJcbiAgICBDYXRlZ29yeS5maW5kKCkudGhlbihkYXRhID0+IHJlcy5qc29uKGRhdGEpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2lnbnVwKHJlcSxyZXMpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IENhdFNlcnZpY2UudmFsaWRhdGlvblNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdXNlclxyXG4gICAgICAgICAgICAgICAgYXdhaXQgQ2F0ZWdvcnkuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaXRlbSA9PiByZXMuanNvbihpdGVtKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycil7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0iXX0=