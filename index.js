const shopButton = document.getElementById("shopButton");


const shopButtonImage = document.getElementById("shopButtonImage");


const shopWindow = document.getElementById("shopWindow");



let shopIsOpen = false;



shopButton.addEventListener("click", function() {


    shopIsOpen = !shopIsOpen;



    if (shopIsOpen === true) {

   
        shopButtonImage.src = "images/IMG_1179.jpeg";

     
        shopWindow.classList.add("open");

    }

   
    else {

      
        shopButtonImage.src = "images/IMG_1178.jpeg";

        
        shopWindow.classList.remove("open");

    }

});
