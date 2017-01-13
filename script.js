var $ = {};

$.ajax = (function() {

  function JQXHR(xhr) {
    this.readyState = xhr.readyState;
    this.responseText = xhr.responseText;
    this.responseJSON = JSON.parse(xhr.responseText);
    this.status = xhr.status;
    this.readyState = xhr.readyState
  };

  var _sendXHR = function(settings) {
    var xhr = new XMLHttpRequest();

    xhr.open(settings.method, settings.url, true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status === 200) {
          if (settings.success) {
            settings.success(xhr.responseText);
          }
        } else {
          if (settings.error) {
            settings.error(); 
          }
        }
        if (settings.complete) {
          settings.complete();
        }
      }
    }

    xhr.send();
    return xhr;
  }

  return function(settings) {
    settings.method = settings.method || settings.type;
    var xhr = _sendXHR(settings);
    return new JQXHR(xhr);
  }

})();

var response = $.ajax({
    url: "https://reqres.in/api/users",
    type: "GET",
    success: function(response){
        console.log(response);
    }
});