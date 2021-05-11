// for the carousel:
let carouselAj1 = ["aj1Blue.jpg", "aj1Mochas.jpg", "aj1Purple.jpg"];
let currentIndex = 2;
let carouselIMG = document.getElementById("carouselIMG");

// for the select:
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");
let sneakerOptions = ['AirJordan1', 'AirJordan4', 'Dunks'];
let foodOptions = ['coffee', 'desserts', 'cocktails', 'muffins'];


let changeSlideAj1 = function(){
    if(currentIndex === 0){
        carouselIMG.src = carouselAj1[1];
        // currentIndex = 1;
    }
    else if(currentIndex === 1){
        carouselIMG.src = carouselAj1[2];
        // currentIndex = 2;
    }
    else{
        carouselIMG.src = carouselAj1[0];
        // currentIndex = 0;
    }

    if(currentIndex === 2){
        currentIndex = 0;
    }
    else{
        currentIndex = currentIndex+1;
    }
}

window.addEventListener("load", function(){
    //triggered once after 5 sec
    setTimeout(function(){
        prompt("SUBSCRIBE TO OUR NEWSLETTER!!", 
        "my@email.com");
    }, 5000);

    //triggered every 5 sec
    setInterval(changeSlide, 5000);
})

let updateCategory = function(){
    console.log(groupSelect);
    categorySelect.innerHTML = '';
    let selectedValue = groupSelect.value;
    if(selectedValue === "sneakers"){
        sneakerOptions.forEach(function(elem){
           categorySelect.innerHTML += '<option value="' + elem + ' ">' + elem + '</option>'
        })
    }
    else if(selectedValue ==="food"){
        foodOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + ' ">' + elem + '</option>'
         })
    }

}

groupSelect.addEventListener("change", updateCategory)