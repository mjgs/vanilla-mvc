(function(window) {
  function View(storage, selector) {
    this.storage = storage;
    this.$el = document.querySelector(selector);
    this.submitButton = document.getElementById('submit');
  }

  View.prototype.initialize = function() {
    var self = this;

    self.submitButton.addEventListener('click', this.processForm.bind(this));
  };

  View.prototype.render = function(data) {
    var self = this;

    self.storage.findAll(function(data) {
      const record = data[data.length - 1];
      const fullname = document.createTextNode(`${record.firstname} ${record.lastname}`);
      self.$el.appendChild(fullname);
    });
  };

  View.prototype.processForm = function(e) {
    var self = this;

    e.preventDefault();

    self.storage.save({
      firstname: document.querySelector('[name=firstname]').value,
      lastname: document.querySelector('[name=lastname]').value
    }, self.render.bind(this));
  };

  window.app = window.app || {};
  window.app.View = View;
})(window);