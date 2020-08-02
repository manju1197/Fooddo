"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _menuitem = _interopRequireDefault(require("./menuitem.model"));

var _restaurant = _interopRequireDefault(require("../restaurant/restaurant.model"));

var _menuitem2 = _interopRequireDefault(require("./menuitem.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res) {
    _menuitem["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _MenuService$validati, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _MenuService$validati = _menuitem2["default"].validationSchema(req.body), error = _MenuService$validati.error, value = _MenuService$validati.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _menuitem["default"].create(value).then(function (item) {
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

    _menuitem["default"].findById(id).then(function (emp) {
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
    var id = req.params.id; //     const {page =1 ,perPage =10} = req.query;
    // const options ={
    //     page: parseInt(page,10),
    //     limit:parseInt(perPage,10),
    //     populate:'UserId OrderId'
    // }

    _menuitem["default"].find({
      'restroId': id
    }).then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    _menuitem["default"].findOneAndUpdate({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL21lbnVpdGVtL21lbnVpdGVtLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZmluZEFsbCIsInJlcSIsInJlcyIsIk1lbnUiLCJmaW5kIiwidGhlbiIsImRhdGEiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiY3JlYXRlIiwiTWVudVNlcnZpY2UiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsImVtcCIsImZpbmRCeVRyYW5zYWN0aW9uIiwibmV4dCIsInVwZGF0ZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJfaWQiLCIkc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O2VBQ2M7QUFDVkEsRUFBQUEsT0FEVSxtQkFDRkMsR0FERSxFQUNFQyxHQURGLEVBQ007QUFDWkMseUJBQUtDLElBQUwsR0FBWUMsSUFBWixDQUFpQixVQUFBQyxJQUFJO0FBQUEsYUFBSUosR0FBRyxDQUFDSyxJQUFKLENBQVNELElBQVQsQ0FBSjtBQUFBLEtBQXJCLFdBQ08sVUFBQUUsR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FEVjtBQUVILEdBSlM7QUFLSkUsRUFBQUEsTUFMSSxrQkFLR1QsR0FMSCxFQUtPQyxHQUxQLEVBS1c7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FHU1Msc0JBQVlDLGdCQUFaLENBQTZCWCxHQUFHLENBQUNZLElBQWpDLENBSFQsRUFHTkMsS0FITSx5QkFHTkEsS0FITSxFQUdBQyxLQUhBLHlCQUdBQSxLQUhBOztBQUFBLG9CQUlURCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FKTjtBQUFB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QWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBTlY7QUFPSDtBQXJESyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51aXRlbS5tb2RlbCc7XHJcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi4vcmVzdGF1cmFudC9yZXN0YXVyYW50Lm1vZGVsJztcclxuaW1wb3J0IE1lbnVTZXJ2aWNlIGZyb20gJy4vbWVudWl0ZW0uc2VydmljZSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgZmluZEFsbChyZXEscmVzKXtcclxuICAgICAgICBNZW51LmZpbmQoKS50aGVuKGRhdGEgPT4gcmVzLmpzb24oZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBjcmVhdGUocmVxLHJlcyl7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB7ZXJyb3IsdmFsdWV9ID0gTWVudVNlcnZpY2UudmFsaWRhdGlvblNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdXNlclxyXG4gICAgICAgICAgICAgICAgYXdhaXQgTWVudS5jcmVhdGUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAudGhlbihpdGVtID0+IHJlcy5qc29uKGl0ZW0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnIpe1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZE9uZShyZXEscmVzKXtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgICAgICBNZW51LmZpbmRCeUlkKGlkKS50aGVuKGVtcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighZW1wKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcImVtcCBub3QgZm91bmRcIn0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVtcCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kQnlUcmFuc2FjdGlvbihyZXEscmVzLG5leHQpe1xyXG4gICAgICAgICAgICBsZXQge2lkfSA9ICByZXEucGFyYW1zO1xyXG4gICAgICAgIC8vICAgICBjb25zdCB7cGFnZSA9MSAscGVyUGFnZSA9MTB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgICAgIC8vIGNvbnN0IG9wdGlvbnMgPXtcclxuICAgICAgICAvLyAgICAgcGFnZTogcGFyc2VJbnQocGFnZSwxMCksXHJcbiAgICAgICAgLy8gICAgIGxpbWl0OnBhcnNlSW50KHBlclBhZ2UsMTApLFxyXG4gICAgICAgIC8vICAgICBwb3B1bGF0ZTonVXNlcklkIE9yZGVySWQnXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgICAgIE1lbnUuZmluZCh7J3Jlc3Ryb0lkJzppZH0pLnRoZW4oZGF0YSA9PiByZXMuanNvbihkYXRhKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZShyZXEscmVzKXtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgICAgICBNZW51LmZpbmRPbmVBbmRVcGRhdGUoe19pZDppZH0seyRzZXQ6cmVxLmJvZHl9LHtuZXc6dHJ1ZX0pLnRoZW4oZW1wID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCFlbXApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiZW1wIG5vdCB1cGRhdGVkXCJ9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgICAgIH1cclxuICAgXHJcbiAgICAgICBcclxuICAgIH0iXX0=