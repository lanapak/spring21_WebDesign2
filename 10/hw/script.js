let airJordan1 = document.getElementById("aj1");
let airJordan3 = document.getElementById("aj3");
let airJordan4 = document.getElementById("aj4");
let dunkLow = document.getElementById("dunk");
let largeImg = document.getElementById("largeImage");


console.log(largeImg);

function largeAJ1(){
    largeImg.src="images/aj1blue.png";
}

function largeAJ3(){
    largeImg.src="images/aj3tan.png";
}

function largeAJ4(){
    largeImg.src="images/aj4blue.png";
}

function largeDunk(){
    largeImg.src="images/dunklow.png";
}

airJordan1.addEventListener("click", largeAJ1);
airJordan3.addEventListener("click", largeAJ3);
airJordan4.addEventListener("click", largeAJ4);
dunkLow.addEventListener("click", largeDunk);

