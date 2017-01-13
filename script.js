var $ = {};

$.ajax = (function() {

  var _xhr = function(settings) {
    var xhr = new XMLHttpRequest();
    xhr.open(settings.method, settings.url, true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var response = JSON.parse(xhr.responseText);
        if (xhr.status === 200 && response.status === "OK") {
          settings.success();
        } else {
          settings.error(); 
        }
      }
    }

    xhr.send();
  }

  return function(settings) {

  }

})();

// Example AJAX
// $.ajax({
//   method: "POST",
//   url: "some.php",
//   data: { name: "John", location: "Boston" },
//   success: function() {},
// })
