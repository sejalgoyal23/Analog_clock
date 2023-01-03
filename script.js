var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var seconds = document.getElementById("seconds");

    var set_clock = setInterval(function clock(){
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();

        hrotation = (hr * 30) + (min / 2);
        mrotation = (min * 6) + (sec / 10);
        srotation = sec*6;

        hour.style.transform = `rotate(${hrotation}deg)`;
        minute.style.transform = `rotate(${mrotation}deg)`;
        seconds.style.transform = `rotate(${srotation}deg)`;
    }, 1000);