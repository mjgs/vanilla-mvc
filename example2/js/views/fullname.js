app.views.fullname = (function(model) {
  const view = {
    render: function($el) {
      const firstname = model.firstname();
      const lastname = model.lastname();
      const fullname = document.createTextNode(`${firstname} ${lastname}`);
      $el.appendChild(fullname);
    }
  };

  return view;
})(app.models.fullname);