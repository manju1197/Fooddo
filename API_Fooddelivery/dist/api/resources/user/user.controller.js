"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user.model"));

var _user2 = _interopRequireDefault(require("./user.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res) {
    // res.json({msg:"Find All Users!!!"});
    _user["default"].find().then(function (emp) {
      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        email = _req$body.email,
        password = _req$body.password,
        contact = _req$body.contact;

    if (!name) {
      return res.status(400).json({
        err: "name is required"
      });
    }

    if (!email) {
      return res.status(400).json({
        err: "email is required"
      });
    }

    if (!password) {
      return res.status(400).json({
        err: "password is required"
      });
    }

    if (!contact) {
      return res.status(400).json({
        err: "contact is required"
      });
    } // if(!role){
    //     return res.status(400).json({err : "role is required"});
    // }


    _user["default"].create({
      name: name,
      email: email,
      password: password,
      contact: contact
    }).then(function (emp) {
      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _user["default"].findById(id).then(function (emp) {
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
  update: function update(req, res) {
    var id = req.params.id;

    _user["default"].findOneAndUpdate({
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
  },
  signup: function signup(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _userService$validati, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _userService$validati = _user2["default"].validationSchema(req.body), error = _userService$validati.error, value = _userService$validati.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _user["default"].create(value).then(function (item) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJVc2VyIiwiZmluZCIsInRoZW4iLCJlbXAiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiY3JlYXRlIiwiYm9keSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29udGFjdCIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIiRzZXQiLCJzaWdudXAiLCJ1c2VyU2VydmljZSIsInZhbGlkYXRpb25TY2hlbWEiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsIml0ZW0iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7O2VBQ2M7QUFDVkEsRUFBQUEsT0FEVSxtQkFDRkMsR0FERSxFQUNFQyxHQURGLEVBQ007QUFDWjtBQUNBQyxxQkFBS0MsSUFBTCxHQUFZQyxJQUFaLENBQWlCLFVBQUFDLEdBQUc7QUFBQSxhQUFJSixHQUFHLENBQUNLLElBQUosQ0FBU0QsR0FBVCxDQUFKO0FBQUEsS0FBcEIsV0FDTyxVQUFBRSxHQUFHO0FBQUEsYUFBSU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQURWO0FBR0gsR0FOUztBQU9WRSxFQUFBQSxNQVBVLGtCQU9IVCxHQVBHLEVBT0NDLEdBUEQsRUFPSztBQUFBLG9CQUN1QkQsR0FBRyxDQUFDVSxJQUQzQjtBQUFBLFFBQ1BDLElBRE8sYUFDUEEsSUFETztBQUFBLFFBQ0ZDLEtBREUsYUFDRkEsS0FERTtBQUFBLFFBQ0lDLFFBREosYUFDSUEsUUFESjtBQUFBLFFBQ2FDLE9BRGIsYUFDYUEsT0FEYjs7QUFFWCxRQUFHLENBQUNILElBQUosRUFBUztBQUNMLGFBQU9WLEdB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LEdBQXJCLENBQUo7QUFBQSxLQU5WO0FBT0gsR0FqRFM7QUFrREpnQixFQUFBQSxNQWxESSxrQkFrREd2QixHQWxESCxFQWtET0MsR0FsRFAsRUFrRFc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FHU3VCLGtCQUFZQyxnQkFBWixDQUE2QnpCLEdBQUcsQ0FBQ1UsSUFBakMsQ0FIVCxFQUdOZ0IsS0FITSx5QkFHTkEsS0FITSxFQUdBQyxLQUhBLHlCQUdBQSxLQUhBOztBQUFBLG9CQUlURCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FKTjtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FLRzNCLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCb0IsS0FBckIsQ0FMSDs7QUFBQTtBQUFBO0FBQUEscUJBUUh4QixpQkFBS08sTUFBTCxDQUFZa0IsS0FBWixFQUNMdkIsSUFESyxDQUNBLFVBQUF5QixJQUFJO0FBQUEsdUJBQUk1QixHQUFHLENBQUNLLElBQUosQ0FBU3VCLElBQVQsQ0FBSjtBQUFBLGVBREosV0FFQyxVQUFBdEIsR0FBRztBQUFBLHVCQUFHTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSDtBQUFBLGVBRkosQ0FSRzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZWJ1QixjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBZmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQmhCO0FBbkVLLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgdXNlck1vZGVsIGZyb20gJy4vdXNlci5tb2RlbCc7XHJcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgZmluZEFsbChyZXEscmVzKXtcclxuICAgICAgICAvLyByZXMuanNvbih7bXNnOlwiRmluZCBBbGwgVXNlcnMhISFcIn0pO1xyXG4gICAgICAgIFVzZXIuZmluZCgpLnRoZW4oZW1wID0+IHJlcy5qc29uKGVtcCkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlKHJlcSxyZXMpe1xyXG4gICAgICAgIGxldHtuYW1lLGVtYWlsLHBhc3N3b3JkLGNvbnRhY3R9PSByZXEuYm9keTtcclxuICAgICAgICBpZighbmFtZSl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyIDogXCJuYW1lIGlzIHJlcXVpcmVkXCJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgIGlmKCFlbWFpbCl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyIDogXCJlbWFpbCBpcyByZXF1aXJlZFwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBpZighcGFzc3dvcmQpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VyciA6IFwicGFzc3dvcmQgaXMgcmVxdWlyZWRcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighY29udGFjdCl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyIDogXCJjb250YWN0IGlzIHJlcXVpcmVkXCJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYoIXJvbGUpe1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VyciA6IFwicm9sZSBpcyByZXF1aXJlZFwifSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICBVc2VyLmNyZWF0ZSh7bmFtZSxlbWFpbCxwYXNzd29yZCxjb250YWN0fSlcclxuICAgICAgICAudGhlbihlbXAgPT4gcmVzLmpzb24oZW1wKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuICAgIGZpbmRPbmUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgIFVzZXIuZmluZEJ5SWQoaWQpLnRoZW4oZW1wID0+IHtcclxuICAgICAgICAgICAgaWYoIWVtcCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcImVtcCBub3QgZm91bmRcIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgIFVzZXIuZmluZE9uZUFuZFVwZGF0ZSh7X2lkOmlkfSx7JHNldDpyZXEuYm9keX0se25ldzp0cnVlfSkudGhlbihlbXAgPT4ge1xyXG4gICAgICAgICAgICBpZighZW1wKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiZW1wIG5vdCB1cGRhdGVkXCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2lnbnVwKHJlcSxyZXMpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRpb25TY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICBpZiggZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHVzZXJcclxuICAgICAgICAgICAgICAgIGF3YWl0IFVzZXIuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaXRlbSA9PiByZXMuanNvbihpdGVtKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycil7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbn07Il19