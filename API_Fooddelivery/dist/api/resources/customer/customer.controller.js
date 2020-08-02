"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _customer = _interopRequireDefault(require("./customer.model"));

var _customer2 = _interopRequireDefault(require("./customer.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res) {
    _customer["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  signup: function signup(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _custService$validati, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _custService$validati = _customer2["default"].validationSchema(req.body), error = _custService$validati.error, value = _custService$validati.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _customer["default"].create(value).then(function (item) {
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

    _customer["default"].findOneAndUpdate({
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
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2N1c3RvbWVyL2N1c3RvbWVyLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZmluZEFsbCIsInJlcSIsInJlcyIsImNsaWVudCIsImZpbmQiLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJlcnIiLCJzdGF0dXMiLCJzaWdudXAiLCJjdXN0U2VydmljZSIsInZhbGlkYXRpb25TY2hlbWEiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJjcmVhdGUiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImZpbmRCeVRyYW5zYWN0aW9uIiwibmV4dCIsImlkIiwicGFyYW1zIiwiVHJhbnNhY3Rpb24iLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwiJHNldCIsImVtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztlQUNjO0FBQ1ZBLEVBQUFBLE9BRFUsbUJBQ0ZDLEdBREUsRUFDRUMsR0FERixFQUNNO0FBQ2hCQyx5QkFBT0MsSUFBUCxHQUFjQyxJQUFkLENBQW1CLFVBQUFDLElBQUk7QUFBQSxhQUFJSixHQUFHLENBQUNLLElBQUosQ0FBU0QsSUFBVCxDQUFKO0FBQUEsS0FBdkIsV0FDVyxVQUFBRSxHQUFHO0FBQUEsYUFBSU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQURkO0FBRUMsR0FKUztBQUtKRSxFQUFBQSxNQUxJLGtCQUtHVCxHQUxILEVBS09DLEdBTFAsRUFLVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUdTUyxzQkFBWUMsZ0JBQVosQ0FBNkJYLEdBQUcsQ0FBQ1ksSUFBakMsQ0FIVCxFQUdOQyxLQUhNLHlCQUdOQSxLQUhNLEVBR0FDLEtBSEEseUJBR0FBLEtBSEE7O0FBQUEsb0JBSVRELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxPQUpOO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUtHZCxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQk8sS0FBckIsQ0FMSDs7QUFBQTtBQUFBO0FBQUEscUJBUUhYLHFCQUFPYyxNQUFQLENBQWNGLEtBQWQsRUFDTFYsSUFESyxDQUNBLFVBQUFhLElBQUk7QUFBQSx1QkFBSWhCLEdBQUcsQ0FBQ0ssSUFBSixDQUFTVyxJQUFULENBQUo7QUFBQSxlQURKLFdBRUMsVUFBQVYsR0FBRztBQUFBLHVCQUFHTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSDtBQUFBLGVBRkosQ0FSRzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZWJXLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFmYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCaEIsR0F0Qks7QUF1Qk5DLEVBQUFBLGlCQXZCTSw2QkF1QllwQixHQXZCWixFQXVCZ0JDLEdBdkJoQixFQXVCb0JvQixJQXZCcEIsRUF1QnlCO0FBQUEsUUFDbEJDLEVBRGtCLEdBQ1h0QixHQUFHLENBQUN1QixNQURPLENBQ2xCRCxFQURrQjtBQUV2QkUsSUFBQUEsV0FBVyxDQUFDckIsSUFBWixDQUFpQjtBQUFDLGVBQVFtQjtBQUFULEtBQWpCLEVBQStCbEIsSUFBL0IsQ0FBb0MsVUFBQUMsSUFBSTtBQUFBLGFBQUlKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxJQUFULENBQUo7QUFBQSxLQUF4QyxXQUNPLFVBQUFFLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRFY7QUFFSCxHQTNCQztBQTRCRmtCLEVBQUFBLE1BNUJFLGtCQTRCS3pCLEdBNUJMLEVBNEJTQyxHQTVCVCxFQTRCYTtBQUNYLFFBQU1xQixFQUFFLEdBQUd0QixHQUFHLENBQUN1QixNQUFKLENBQVdELEVBQXRCOztBQUNBcEIseUJBQU93QixnQkFBUCxDQUF3QjtBQUFDQyxNQUFBQSxHQUFHLEVBQUNMO0FBQUwsS0FBeEIsRUFBaUM7QUFBQ00sTUFBQUEsSUFBSSxFQUFDNUIsR0FBRyxDQUFDWTtBQUFWLEtBQWpDLEVBQWlEO0FBQUMsYUFBSTtBQUFMLEtBQWpELEVBQTZEUixJQUE3RCxDQUFrRSxVQUFBeUIsR0FBRyxFQUFJO0FBQ3JFLFVBQUcsQ0FBQ0EsR0FBSixFQUFRO0FBQ0osZUFBTzVCLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLFVBQUFBLEdBQUcsRUFBQztBQUFMLFNBQXJCLENBQVA7QUFDSDs7QUFDRCxhQUFPTixHQUFHLENBQUNLLElBQUosQ0FBU3VCLEdBQVQsQ0FBUDtBQUNILEtBTEQsV0FNTyxVQUFBdEIsR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FOVjtBQU9IO0FBckNDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gJy4vY3VzdG9tZXIubW9kZWwnO1xyXG5pbXBvcnQgY3VzdFNlcnZpY2UgZnJvbSAnLi9jdXN0b21lci5zZXJ2aWNlJztcclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBmaW5kQWxsKHJlcSxyZXMpe1xyXG4gICAgY2xpZW50LmZpbmQoKS50aGVuKGRhdGEgPT4gcmVzLmpzb24oZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzaWdudXAocmVxLHJlcyl7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB7ZXJyb3IsdmFsdWV9ID0gY3VzdFNlcnZpY2UudmFsaWRhdGlvblNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdXNlclxyXG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpZW50LmNyZWF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGl0ZW0gPT4gcmVzLmpzb24oaXRlbSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnIpe1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZEJ5VHJhbnNhY3Rpb24ocmVxLHJlcyxuZXh0KXtcclxuICAgICAgICAgICAgICAgIGxldCB7aWR9ID0gIHJlcS5wYXJhbXM7XHJcbiAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbi5maW5kKHsncmVnSWQnOmlkfSkudGhlbihkYXRhID0+IHJlcy5qc29uKGRhdGEpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBkYXRlKHJlcSxyZXMpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LmZpbmRPbmVBbmRVcGRhdGUoe19pZDppZH0seyRzZXQ6cmVxLmJvZHl9LHtuZXc6dHJ1ZX0pLnRoZW4oZW1wID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighZW1wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJlbXAgbm90IHVwZGF0ZWRcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgICAgICAgICB9LCAgICAgXHJcblxyXG59Il19