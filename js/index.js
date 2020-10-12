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
  document.querySelector('.tv__btn__maximize').onclick = function() {
    document.querySelector('.tv').classList.toggle('tv--full');
    document.querySelector('.tv__buttons').classList.toggle('tv__buttons--full');
    document.querySelector('.tv__screen').classList.toggle('tv__screen--full');
  }
  document.querySelector('.tv__btn__off').onclick = function() {

  }
  feather.replace()
  setDaysLeft();
  document.getElementById('video').play();
  setInterval(function () {
    setDaysLeft();
  }, 5000);
})()
