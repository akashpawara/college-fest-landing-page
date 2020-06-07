const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('June 13, 2021 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerHTML = Math.floor(distance / (day))+"D",
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour))+"H",
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute))+"M",
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second)+"S";

      //do something later when date is reached
      if (distance <= 0) {
        //clearInterval(x);
        document.getElementById('days').innerHTML = "0";
        document.getElementById('hours').innerHTML = "0";
        document.getElementById('minutes').innerHTML = "0";
        document.getElementById('seconds').innerHTML = "0";
      }

    }, second)
