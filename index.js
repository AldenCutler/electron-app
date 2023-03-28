function setTime(){
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;

}

// call the function every second
setInterval(setTime, 1000);


var theme = document.getElementById('theme');
theme.addEventListener("click", function() {
    document.body.classList.toggle('dark');
    theme.classList.toggle('selector-dark');
});