app.views.fullname = (function() {
  const view = {
    render: function($el, model) {
      const firstname = model.firstname();
      const lastname = model.lastname();
      const fullname = document.createTextNode(`${firstname} ${lastname}`);
      $el.appendChild(fullname);
    }
  };

  return view;
})();