app.events = (function() {
  const events = {
    fullname: function($el) {
      $el.addEventListener('click', app.controllers.fullname.submitForm);
    }
  };

  return events;
})();
