var star = document.getElementById("star");
var h = +prompt("Enter Hour");
var m = +prompt("Enter Minutes");
var s = +prompt("Enter Seconds");


var hour = document.getElementById("hours");
var min = document.getElementById("minutes");
var sec = document.getElementById("seconds");

function timer() {
    if(h == 0 && m == 0 && s == 0){
        h = 0;
        m = 0;
        s = 0;
    }else if(s != 0){
        s--; 
        sec.innerHTML = s;
    }else if(m != 0 && s == 0){
        s = 60;
        m--;
        min.innerHTML = m;
    }else if (h != 0 && m == 0){
        m = 60;
        h--;
        hour.innerHTML = h;
    }
};
function start(){
    setInterval(timer,1000);
    star.setAttribute("disabled","disabled");
   
};

function reset(){
    location.reload();
};