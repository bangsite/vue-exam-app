"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sqlite3 = require("sqlite3").verbose();

var Db =
/*#__PURE__*/
function () {
  function Db(file) {
    _classCallCheck(this, Db);

    this.db = new sqlite3.Database(file);
    this.createTable();
  }

  _createClass(Db, [{
    key: "createTable",
    value: function createTable() {
      var sql = "CREATE TABLE IF NOT EXISTS userAuth (id INTEGER PRIMARY KEY, name text, email text UNIQUE, password text)";
      return this.db.run(sql);
    }
  }, {
    key: "selectByEmail",
    value: function selectByEmail(email, callback) {
      return this.db.get("SELECT * FROM userAuth WHERE email = ? ", [email], function (err, row) {
        callback(err, row);
      });
    }
  }, {
    key: "insert",
    value: function insert(user, callback) {
      return this.db.run("INSERT INTO userAuth(name,email,password) VALUES (?,?,?)", user, function (err) {
        callback(err);
      });
    }
  }]);

  return Db;
}();