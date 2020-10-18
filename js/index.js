(function() {
  var tvTurnedOn=true;
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
  var offBtn = document.querySelector('.tv__btn__off');
  var maxBtn = document.querySelector('.tv__btn__maximize');
  maxBtn.onclick = function() {
    document.querySelector('.tv').classList.toggle('tv--full');
    document.querySelector('.tv__buttons').classList.toggle('tv__buttons--full');
    document.querySelector('.tv__screen').classList.toggle('tv__screen--full');
  }
  offBtn.onclick = function() {
    offBtn.classList.add('tv__btn--disabled');
    var tvWhiteStripe = document.querySelector('.tv__black__stripe');
    var tvBlack = document.querySelector('.tv__black');
    if (tvTurnedOn) {
      tvBlack.style.display = 'block';
      tvWhiteStripe.classList.remove('tv__black__stripe--off');
      void tvWhiteStripe.offsetWidth;
      tvWhiteStripe.classList.add('tv__black__stripe--on');
      tvTurnedOn = false;
      tvWhiteStripe.onanimationend = function () {
        offBtn.classList.remove('tv__btn--disabled');
      };
    } else {
      tvWhiteStripe.classList.remove('tv__black__stripe--on');
      void tvWhiteStripe.offsetWidth;
      tvWhiteStripe.classList.add('tv__black__stripe--off');
      tvTurnedOn = true;
      tvWhiteStripe.onanimationend = function () {
        tvBlack.style.display = 'none';
        offBtn.classList.remove('tv__btn--disabled');
      };
    }
  }
  feather.replace()
  setDaysLeft();
  document.getElementById('video').play();
  setInterval(function () {
    setDaysLeft();
  }, 5000);
})()
