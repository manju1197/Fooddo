"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _porder = _interopRequireDefault(require("./porder.model"));

var _porder2 = _interopRequireDefault(require("./porder.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res) {
    _porder["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  signup: function signup(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ProductService$valid, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _ProductService$valid = _porder2["default"].validationSchema(req.body), error = _ProductService$valid.error, value = _ProductService$valid.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _porder["default"].create(value).then(function (item) {
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

    _porder["default"].findById(id).then(function (emp) {
      if (!emp) {
        return res.status(400).json({
          err: "emp not found"
        });
      }

      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  findByTransaction: function findByTransaction(req, res, next) {
    var id = req.params.id;
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === void 0 ? 1 : _req$query$page,
        _req$query$perPage = _req$query.perPage,
        perPage = _req$query$perPage === void 0 ? 10 : _req$query$perPage;
    var options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      populate: 'UserId OrderId'
    };

    _porder["default"].paginate({
      'UserId': id
    }, options).then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  findByOrder: function findByOrder(req, res, next) {
    var id = req.params.id;
    var _req$query2 = req.query,
        _req$query2$page = _req$query2.page,
        page = _req$query2$page === void 0 ? 1 : _req$query2$page,
        _req$query2$perPage = _req$query2.perPage,
        perPage = _req$query2$perPage === void 0 ? 10 : _req$query2$perPage;
    var options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      populate: 'UserId OrderId'
    };

    _porder["default"].paginate({
      'restroId': id
    }, options).then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3Byb2R1Y3Rfb3JkZXIvcG9yZGVyLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZmluZEFsbCIsInJlcSIsInJlcyIsIlBPcmRlciIsImZpbmQiLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJlcnIiLCJzdGF0dXMiLCJzaWdudXAiLCJQcm9kdWN0U2VydmljZSIsInZhbGlkYXRpb25TY2hlbWEiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJjcmVhdGUiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiZW1wIiwiZmluZEJ5VHJhbnNhY3Rpb24iLCJuZXh0IiwicXVlcnkiLCJwYWdlIiwicGVyUGFnZSIsIm9wdGlvbnMiLCJwYXJzZUludCIsImxpbWl0IiwicG9wdWxhdGUiLCJwYWdpbmF0ZSIsImZpbmRCeU9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O2VBQ2M7QUFDVkEsRUFBQUEsT0FEVSxtQkFDRkMsR0FERSxFQUNFQyxHQURGLEVBQ007QUFDaEJDLHVCQUFPQyxJQUFQLEdBQWNDLElBQWQsQ0FBbUIsVUFBQUMsSUFBSTtBQUFBLGFBQUlKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxJQUFULENBQUo7QUFBQSxLQUF2QixXQUNXLFVBQUFFLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRGQ7QUFFQyxHQUpTO0FBS0pFLEVBQUFBLE1BTEksa0JBS0dULEdBTEgsRUFLT0MsR0FMUCxFQUtXO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBR1NTLG9CQUFlQyxnQkFBZixDQUFnQ1gsR0FBRyxDQUFDWSxJQUFwQyxDQUhULEVBR05DLEtBSE0seUJBR05BLEtBSE0sRUFHQUMs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Q0FFUixDQUZRO0FBQUEsMENBRUxDLE9BRks7QUFBQSxRQUVMQSxPQUZLLG9DQUVJLEVBRko7QUFHekIsUUFBTUMsT0FBTyxHQUFFO0FBQ1hGLE1BQUFBLElBQUksRUFBRUcsUUFBUSxDQUFDSCxJQUFELEVBQU0sRUFBTixDQURIO0FBRVhJLE1BQUFBLEtBQUssRUFBQ0QsUUFBUSxDQUFDRixPQUFELEVBQVMsRUFBVCxDQUZIO0FBR1hJLE1BQUFBLFFBQVEsRUFBQztBQUhFLEtBQWY7O0FBS0kvQix1QkFBT2dDLFFBQVAsQ0FBZ0I7QUFBQyxrQkFBV2I7QUFBWixLQUFoQixFQUFnQ1MsT0FBaEMsRUFBeUMxQixJQUF6QyxDQUE4QyxVQUFBQyxJQUFJO0FBQUEsYUFBSUosR0FBRyxDQUFDSyxJQUFKLENBQVNELElBQVQsQ0FBSjtBQUFBLEtBQWxELFdBQ08sVUFBQUUsR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FEVjtBQUVIO0FBdERDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFBPcmRlciBmcm9tICcuL3BvcmRlci5tb2RlbCc7XHJcbmltcG9ydCBQcm9kdWN0U2VydmljZSBmcm9tICcuL3BvcmRlci5zZXJ2aWNlJztcclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBmaW5kQWxsKHJlcSxyZXMpe1xyXG4gICAgUE9yZGVyLmZpbmQoKS50aGVuKGRhdGEgPT4gcmVzLmpzb24oZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzaWdudXAocmVxLHJlcyl7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB7ZXJyb3IsdmFsdWV9ID0gUHJvZHVjdFNlcnZpY2UudmFsaWRhdGlvblNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdXNlclxyXG4gICAgICAgICAgICAgICAgYXdhaXQgUE9yZGVyLmNyZWF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGl0ZW0gPT4gcmVzLmpzb24oaXRlbSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnIpe1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZE9uZShyZXEscmVzKXtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgICAgICBQT3JkZXIuZmluZEJ5SWQoaWQpLnRoZW4oZW1wID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCFlbXApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiZW1wIG5vdCBmb3VuZFwifSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmRCeVRyYW5zYWN0aW9uKHJlcSxyZXMsbmV4dCl7XHJcbiAgICAgICAgICAgICAgICBsZXQge2lkfSA9ICByZXEucGFyYW1zO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3BhZ2UgPTEgLHBlclBhZ2UgPTEwfSA9IHJlcS5xdWVyeTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9e1xyXG4gICAgICAgICAgICAgICAgcGFnZTogcGFyc2VJbnQocGFnZSwxMCksXHJcbiAgICAgICAgICAgICAgICBsaW1pdDpwYXJzZUludChwZXJQYWdlLDEwKSxcclxuICAgICAgICAgICAgICAgIHBvcHVsYXRlOidVc2VySWQgT3JkZXJJZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgUE9yZGVyLnBhZ2luYXRlKHsnVXNlcklkJzppZH0sb3B0aW9ucykudGhlbihkYXRhID0+IHJlcy5qc29uKGRhdGEpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmluZEJ5T3JkZXIocmVxLHJlcyxuZXh0KXtcclxuICAgICAgICAgICAgICAgIGxldCB7aWR9ID0gIHJlcS5wYXJhbXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7cGFnZSA9MSAscGVyUGFnZSA9MTB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID17XHJcbiAgICAgICAgICAgICAgICBwYWdlOiBwYXJzZUludChwYWdlLDEwKSxcclxuICAgICAgICAgICAgICAgIGxpbWl0OnBhcnNlSW50KHBlclBhZ2UsMTApLFxyXG4gICAgICAgICAgICAgICAgcG9wdWxhdGU6J1VzZXJJZCBPcmRlcklkJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBQT3JkZXIucGFnaW5hdGUoeydyZXN0cm9JZCc6aWR9LG9wdGlvbnMpLnRoZW4oZGF0YSA9PiByZXMuanNvbihkYXRhKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbn0iXX0=