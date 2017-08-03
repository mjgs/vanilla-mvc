(function(window) {
  'use strict';

  function App(name) {
    this.storage = new app.Store(name);
    this.view = new app.View(this.storage, '#display');
  }

  var App = new App('fullname');
  App.view.initialize();
})();
