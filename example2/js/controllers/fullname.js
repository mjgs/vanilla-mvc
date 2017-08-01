app.controllers.fullname = (function(model, view, el) {
  const controller = {
    submitForm: function(e) {
      e.preventDefault();
      model.firstname(el.firstname.value);
      model.lastname(el.lastname.value);
      view.render(el.display);
    }
  };

  return controller;
})(app.models.fullname, app.views.fullname, app.elements.fullname);