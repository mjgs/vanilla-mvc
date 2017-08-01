app.models = (function() {
  const models = {
    fullname: {
      firstname: function(name) {
        (name) ? localStorage.setItem('firstname', name) : null;
        return localStorage.getItem('firstname');
      },
      lastname: function(name) {
        (name) ? localStorage.setItem('lastname', name) : null;
        return localStorage.getItem('lastname');
      }
    }
  };

  return models;
})();