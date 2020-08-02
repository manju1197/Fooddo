"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _order = _interopRequireDefault(require("./order.model"));

var _order2 = _interopRequireDefault(require("./order.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res) {
    _order["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  signup: function signup(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _OrderService$validat, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _OrderService$validat = _order2["default"].validationSchema(req.body), error = _OrderService$validat.error, value = _OrderService$validat.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _order["default"].create(value).then(function (item) {
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
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _order["default"].findById(id).then(function (emp) {
      if (!emp) {
        return res.status(400).json({
          err: "emp not found"
        });
      }

      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL29yZGVyL29yZGVyLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZmluZEFsbCIsInJlcSIsInJlcyIsIk9yZGVyIiwiZmluZCIsInRoZW4iLCJkYXRhIiwianNvbiIsImVyciIsInN0YXR1cyIsInNpZ251cCIsIk9yZGVyU2VydmljZSIsInZhbGlkYXRpb25TY2hlbWEiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJjcmVhdGUiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiZW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBRWM7QUFDVkEsRUFBQUEsT0FEVSxtQkFDRkMsR0FERSxFQUNFQyxHQURGLEVBQ007QUFDaEJDLHNCQUFNQyxJQUFOLEdBQWFDLElBQWIsQ0FBa0IsVUFBQUMsSUFBSTtBQUFBLGFBQUlKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxJQUFULENBQUo7QUFBQSxLQUF0QixXQUNXLFVBQUFFLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRGQ7QUFFQyxHQUpTO0FBS0pFLEVBQUFBLE1BTEksa0JBS0dULEdBTEgsRUFLT0MsR0FMUCxFQUtXO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBR1NTLG1CQUFhQyxnQkFBYixDQUE4QlgsR0FBRyxDQUFDWSxJQUFsQyxDQUhULEVBR05DLEtBSE0seUJBR05BLEtBSE0sRUFHQUMsS0FIQSx5QkFHQUEsS0FIQTs7QUFBQSxvQkFJVEQsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BSk47QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBS0dkLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCTyxLQUFyQixDQUxIOztBQUFBO0FBQUE7QUFBQSxxQkFRSFgsa0JBQU1jLE1BQU4sQ0FBYUYsS0FBYixFQUNMVixJQURLLENBQ0EsVUFBQWEsSUFBSTtBQUFBLHVCQUFJaEIsR0FBRyxDQUFDSyxJQUFKLENBQVNXLElBQVQsQ0FBSjtBQUFBLGVBREosV0FFQyxVQUFBVixHQUFHO0FBQUEsdUJBQUdOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFIO0FBQUEsZUFGSixDQVJHOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlYlcsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQWZhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJoQixHQXRCSztBQXVCTkMsRUFBQUEsT0F2Qk0sbUJBdUJFcEIsR0F2QkYsRUF1Qk1DLEdBdkJOLEVBdUJVO0FBQ1osUUFBTW9CLEVBQUUsR0FBR3JCLEdBQUcsQ0FBQ3NCLE1BQUosQ0FBV0QsRUFBdEI7O0FBQ0FuQixzQkFBTXFCLFFBQU4sQ0FBZUYsRUFBZixFQUFtQmpCLElBQW5CLENBQXdCLFVBQUFvQixHQUFHLEVBQUk7QUFDM0IsVUFBRyxDQUFDQSxHQUFKLEVBQVE7QUFDSixlQUFPdkIsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsVUFBQUEsR0FBRyxFQUFDO0FBQUwsU0FBckIsQ0FBUDtBQUNIOztBQUNELGFBQU9OLEdBQUcsQ0FBQ0ssSUFBSixDQUFTa0IsR0FBVCxDQUFQO0FBQ0gsS0FMRCxXQU1PLFVBQUFqQixHQUFHO0FBQUEsYUFBSU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQU5WO0FBT0g7QUFoQ0ssQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcmRlciBmcm9tICcuL29yZGVyLm1vZGVsJztcclxuaW1wb3J0IE9yZGVyU2VydmljZSBmcm9tICcuL29yZGVyLnNlcnZpY2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGZpbmRBbGwocmVxLHJlcyl7XHJcbiAgICBPcmRlci5maW5kKCkudGhlbihkYXRhID0+IHJlcy5qc29uKGRhdGEpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2lnbnVwKHJlcSxyZXMpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IE9yZGVyU2VydmljZS52YWxpZGF0aW9uU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgaWYoIGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB1c2VyXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBPcmRlci5jcmVhdGUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAudGhlbihpdGVtID0+IHJlcy5qc29uKGl0ZW0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyKXtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmRPbmUocmVxLHJlcyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgICAgICAgT3JkZXIuZmluZEJ5SWQoaWQpLnRoZW4oZW1wID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCFlbXApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiZW1wIG5vdCBmb3VuZFwifSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgICAgICB9LFxyXG5cclxufSJdfQ==