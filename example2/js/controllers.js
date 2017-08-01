app.controllers = (function() {
  const controllers = {
    name: {
      submitForm: function(e) {
        e.preventDefault();
        app.models.name.firstname(app.elements.name.firstname.value);
        app.models.name.lastname(app.elements.name.lastname.value);
        app.views.name.render(app.elements.name.display);
      }
    }
  };

  return controllers;
})();