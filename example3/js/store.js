(function(window) {
  'use strict';

  function Store(name, cb) {
    cb = cb || function () {};
    this._dbName = name;

    if (!localStorage[name]) {
      const data = {
        things: []
      };
      localStorage[name] = JSON.stringify(data);
    }

    cb.call(this, JSON.parse(localStorage[name]));
  }

  Store.prototype.find = function(query, callback) {
    if (!callback) {
      return;
    }

    var things = JSON.parse(localStorage[this._dbName]).things;

    callback.call(this, things.filter(function (thing) {
      for (var q in query) {
        if (query[q] !== thing[q]) {
          return false;
        }
      }
      return true;
    }));
  };

  Store.prototype.findAll = function(callback) {
    callback = callback || function () {};
    callback.call(this, JSON.parse(localStorage[this._dbName]).things);
  };

  Store.prototype.save = function(updateData, callback, id) {
    var self = this;

    var data = JSON.parse(localStorage[this._dbName]);
    var things = data.things;

    callback = callback || function () {};

    // If an ID was actually given, find the item and update each property
    if (id) {
      for (var i = 0; i < things.length; i++) {
        if (things[i].id === id) {
          for (var key in updateData) {
            things[i][key] = updateData[key];
          }
          break;
        }
      }

      localStorage[this._dbName] = JSON.stringify(data);
      callback.call(this, things);
    }
    else {
      // Generate an ID
      updateData.id = new Date().getTime();
      things.push(updateData);
      localStorage[this._dbName] = JSON.stringify(data);
      callback.call(this, updateData);
    }
  };

  Store.prototype.remove = function (id, callback) {
    var data = JSON.parse(localStorage[this._dbName]);
    var things = data.things;

    for (var i = 0; i < things.length; i++) {
      if (things[i].id == id) {
        things.splice(i, 1);
        break;
      }
    }

    localStorage[this._dbName] = JSON.stringify(data);
    callback.call(this, things);
  };

  Store.prototype.drop = function (callback) {
    var data = {things: []};
    localStorage[this._dbName] = JSON.stringify(data);
    callback.call(this, data.things);
  };

  window.app = window.app || {};
  window.app.Store = Store;
})(window);