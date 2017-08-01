app.events = (function() {
  const events = {
    name: function($el) {
      $el.addEventListener('click', app.controllers.name.submitForm);
    }
  };

  return events;
})();
