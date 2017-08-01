app.models.fullname = (function() {
  const model = {
    firstname: function(name) {
      (name) ? localStorage.setItem('firstname', name) : null;
      return localStorage.getItem('firstname');
    },
    lastname: function(name) {
      (name) ? localStorage.setItem('lastname', name) : null;
      return localStorage.getItem('lastname');
    }
  };

  return model;
})();