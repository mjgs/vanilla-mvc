app.views = (function() {
  const views = {
    name: {
      render: function($el) {
        const firstname = app.models.name.firstname();
        const lastname = app.models.name.lastname();
        const fullname = document.createTextNode(`${firstname} ${lastname}`);
        $el.appendChild(fullname);
      }
    }
  };

  return views;
})();