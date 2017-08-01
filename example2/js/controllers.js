app.controllers = (function() {
  const controllers = {
    fullname: {
      submitForm: function(e) {
        e.preventDefault();
        app.models.fullname.firstname(app.elements.fullname.firstname.value);
        app.models.fullname.lastname(app.elements.fullname.lastname.value);
        app.views.fullname.render(app.elements.fullname.display);
      }
    }
  };

  return controllers;
})();