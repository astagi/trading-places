(function() {
  var daysLeft = function () {
    var today = new Date();
    var xmasEve = new Date(today.getFullYear(), 11, 24);
    if (today.getMonth() == 11 && today.getDate() > 24) {
      xmasEve.setFullYear(xmasEve.getFullYear() + 1);
    }
    return Math.floor((xmasEve.getTime() - today.getTime()) / (3600000 * 24))
  };
  var setDaysLeft = function () {
    document.querySelector('#daysleft').innerHTML = daysLeft();
  };
  setDaysLeft();
  document.getElementById('video').play();
  setInterval(function () {
    setDaysLeft();
  }, 5000);
})()
