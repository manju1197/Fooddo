"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _restaurant = _interopRequireDefault(require("./restaurant.model"));

var _restaurant2 = _interopRequireDefault(require("./restaurant.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = _defineProperty({
  findAll: function findAll(req, res) {
    _restaurant["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  signup: function signup(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _transService$validat, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _transService$validat = _restaurant2["default"].validationSchema(req.body), error = _transService$validat.error, value = _transService$validat.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _restaurant["default"].create(value).then(function (item) {
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
  Hotel: function Hotel(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _transService$validat2, error, value, user;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _transService$validat2 = _restaurant2["default"].validationSchema(req.body), error = _transService$validat2.error, value = _transService$validat2.value;

              if (!(error && error.details)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(500).json(error));

            case 4:
              _context2.next = 6;
              return _restaurant["default"].find({
                isActive: {
                  True: True
                }
              });

            case 6:
              user = _context2.sent;

              if (!(user.isActive == "True")) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt("return", res.json(user));

            case 11:
              return _context2.abrupt("return", res.status(400).json({
                err: 'Invalid Restaurant'
              }));

            case 12:
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }))();
  },
  findByTransaction: function findByTransaction(req, res, next) {
    var id = req.params.id;
    Transaction.find({
      'regId': id
    }).then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    _restaurant["default"].findOneAndUpdate({
      _id: id
    }, {
      $set: req.body
    }, {
      "new": true
    }).then(function (emp) {
      if (!emp) {
        return res.status(400).json({
          err: "emp not updated"
        });
      }

      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  }
}, "findByTransaction", function findByTransaction(req, res, next) {
  var id = req.params.id;

  _restaurant["default"].find({
    'regId': id
  }).then(function (data) {
    return res.json(data);
  })["catch"](function (err) {
    return res.status(500).json(err);
  });
});

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJ2ZW5kb3IiLCJmaW5kIiwidGhlbiIsImRhdGEiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwic2lnbnVwIiwidHJhbnNTZXJ2aWNlIiwidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsImNyZWF0ZSIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiSG90ZWwiLCJpc0FjdGl2ZSIsIlRydWUiLCJ1c2VyIiwiZmluZEJ5VHJhbnNhY3Rpb24iLCJuZXh0IiwiaWQiLCJwYXJhbXMiLCJUcmFuc2FjdGlvbiIsInVwZGF0ZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJfaWQiLCIkc2V0IiwiZW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUlBLEVBQUFBLE8sbUJBQVFDLEcsRUFBSUMsRyxFQUFJO0FBQ2hCQywyQkFBT0MsSUFBUCxHQUFjQyxJQUFkLENBQW1CLFVBQUFDLElBQUk7QUFBQSxhQUFJSixHQUFHLENBQUNLLElBQUosQ0FBU0QsSUFBVCxDQUFKO0FBQUEsS0FBdkIsV0FDVyxVQUFBRSxHQUFHO0FBQUEsYUFBSU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQURkO0FBRUMsRztBQUNLRSxFQUFBQSxNLGtCQUFPVCxHLEVBQUlDLEcsRUFBSTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUdTUyx3QkFBYUMsZ0JBQWIsQ0FBOEJYLEdBQUcsQ0FBQ1ksSUFBbEMsQ0FIVCxFQUdOQyxLQUhNLHlCQUdOQSxLQUhNLEVBR0FDLEtBSEEseUJBR0FBLEtBSEE7O0FBQUEsb0JBSVRELEtBQUssSUFBSUEsS0FBSyxD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LEdBQUosRUFBUTtBQUNKLGVBQU9oQyxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFDQyxVQUFBQSxHQUFHLEVBQUM7QUFBTCxTQUFyQixDQUFQO0FBQ0g7O0FBQ0QsYUFBT04sR0FBRyxDQUFDSyxJQUFKLENBQVMyQixHQUFULENBQVA7QUFDSCxLQUxELFdBTU8sVUFBQTFCLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBTlY7QUFPSDttREFDaUJQLEcsRUFBSUMsRyxFQUFJd0IsSSxFQUFLO0FBQUEsTUFDdEJDLEVBRHNCLEdBQ2YxQixHQUFHLENBQUMyQixNQURXLENBQ3RCRCxFQURzQjs7QUFHNUJ4Qix5QkFBT0MsSUFBUCxDQUFZO0FBQUMsYUFBUXVCO0FBQVQsR0FBWixFQUEwQnRCLElBQTFCLENBQStCLFVBQUFDLElBQUk7QUFBQSxXQUFJSixHQUFHLENBQUNLLElBQUosQ0FBU0QsSUFBVCxDQUFKO0FBQUEsR0FBbkMsV0FDUSxVQUFBRSxHQUFHO0FBQUEsV0FBSU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxHQURYO0FBRUYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2ZW5kb3IgZnJvbSAnLi9yZXN0YXVyYW50Lm1vZGVsJztcclxuaW1wb3J0IHRyYW5zU2VydmljZSBmcm9tICcuL3Jlc3RhdXJhbnQuc2VydmljZSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgZmluZEFsbChyZXEscmVzKXtcclxuICAgIHZlbmRvci5maW5kKCkudGhlbihkYXRhID0+IHJlcy5qc29uKGRhdGEpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2lnbnVwKHJlcSxyZXMpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IHRyYW5zU2VydmljZS52YWxpZGF0aW9uU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgaWYoIGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB1c2VyXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB2ZW5kb3IuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaXRlbSA9PiByZXMuanNvbihpdGVtKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycil7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBIb3RlbChyZXEscmVzKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX0gPSB0cmFuc1NlcnZpY2UudmFsaWRhdGlvblNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIHVzZXJcclxuICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB2ZW5kb3IuZmluZCh7aXNBY3RpdmU6IHtUcnVlfSAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgIGlmKHVzZXIuaXNBY3RpdmUgPT0gXCJUcnVlXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0ludmFsaWQgUmVzdGF1cmFudCd9KTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goZXJyKXtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgLFxyXG4gICAgICAgIGZpbmRCeVRyYW5zYWN0aW9uKHJlcSxyZXMsbmV4dCl7XHJcbiAgICAgICAgICAgICAgICBsZXQge2lkfSA9ICByZXEucGFyYW1zO1xyXG4gICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24uZmluZCh7J3JlZ0lkJzppZH0pLnRoZW4oZGF0YSA9PiByZXMuanNvbihkYXRhKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZShyZXEscmVzKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgICAgICAgICAgIHZlbmRvci5maW5kT25lQW5kVXBkYXRlKHtfaWQ6aWR9LHskc2V0OnJlcS5ib2R5fSx7bmV3OnRydWV9KS50aGVuKGVtcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWVtcCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiZW1wIG5vdCB1cGRhdGVkXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVtcCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmluZEJ5VHJhbnNhY3Rpb24ocmVxLHJlcyxuZXh0KXtcclxuICAgICAgICAgICAgICAgIGxldCB7aWR9ID0gIHJlcS5wYXJhbXM7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB2ZW5kb3IuZmluZCh7J3JlZ0lkJzppZH0pLnRoZW4oZGF0YSA9PiByZXMuanNvbihkYXRhKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbn0iXX0=