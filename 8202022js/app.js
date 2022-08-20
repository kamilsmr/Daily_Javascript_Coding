// https://www.youtube.com/watch?v=tEPZdVcdwoU&t=21s

const sec = document.querySelector(".sec");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");


 
function tiktak() {
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();
    // console.log({second,minute,hour});

    sec.style.transform = `rotate(${180 +(second*6)}deg)`;
    min.style.transform = `rotate(${180 +(minute*6)}deg)`;
    hours.style.transform = `rotate(${180 +(hour*30)}deg)`;





}

setInterval(tiktak,1000)



