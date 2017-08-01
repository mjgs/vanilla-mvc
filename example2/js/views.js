app.views = (function() {
  const views = {
    fullname: {
      render: function($el) {
        const firstname = app.models.fullname.firstname();
        const lastname = app.models.fullname.lastname();
        const fullname = document.createTextNode(`${firstname} ${lastname}`);
        $el.appendChild(fullname);
      }
    }
  };

  return views;
})();