let header = document.getElementById("myHeader");
let clrBTN = document.getElementById("colorBTN");
let quokkaImg = document.getElementById("quokkaImg");
let tgglBTN = document.getElementById("toggleBTN");

function changeTheColor(){
    // well do csome color changing here
    let redComp = Math.random() *255
    let greenComp = Math.random()*255
    let blueComp = Math.random()*255

    console.log("RED: " + redComp);
    console.log("GREEN: " + greenComp);
    console.log("BLUE: " + blueComp);

    header.style.backgroundColor = "rgb(" + redComp + "," + greenComp + "," + blueComp + ")";
}; 

let toggleTheImage = function(){
    // We'll add some image toggling here
   

    if(tgglBTN.innerText === "Show the second image"){
        console.log("show second one");
        quokkaImg.src = "quokka2.jpg";
        tgglBTN.innerText = "Now show the first one";
    }
    else{
        console.log("show the first one");
        quokkaImg.src = "quokka1.jpg";
        tgglBTN.innerText = "Show the second image.";
    };
    
};

changeTheColor();

clrBTN.addEventListener("click", changeTheColor);
tgglBTN.addEventListener("click", toggleTheImage);