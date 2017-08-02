app.controllers.fullname = (function(model, view, elements) {
  const controller = {
    submitForm: function(e) {
      e.preventDefault();
      model.firstname(elements.firstname.value);
      model.lastname(elements.lastname.value);
      view.render(elements.display, model);
    }
  };

  return controller;
})(app.models.user, app.views.fullname, app.elements.fullname);