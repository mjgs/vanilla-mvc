app.elements = (function() {
  const elements = {
    name: {
      firstname: document.querySelectorAll('input[type="text"]')[0],
      lastname: document.querySelectorAll('input[type="text"]')[1],
      submitButton: document.getElementById('submit'),
      display: document.getElementById('display')
    }
  };

  return elements;
})();