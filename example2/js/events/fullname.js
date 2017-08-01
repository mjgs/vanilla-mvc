app.events.fullname = (function(controller) {
  const events = function($el) {
    $el.addEventListener('click', controller.submitForm);
  };

  return events;
})(app.controllers.fullname);
