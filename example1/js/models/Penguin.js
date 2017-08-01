Penguin.model = (function() {
  var Model = function(XMLHttpRequest) {
    this.XMLHttpRequest = XMLHttpRequest;
  };

  Model.prototype.getPenguin = function(index, fn) {
    var oReq = new this.XMLHttpRequest();

    oReq.onload = function onLoad(e) {
      var ajaxResponse = JSON.parse(e.currentTarget.responseText);
      var penguin = ajaxResponse[index];

      penguin.index = index;
      penguin.count = ajaxResponse.length;

      fn(penguin);
    };

    oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
    oReq.send();
  };

  return Model;
})();  