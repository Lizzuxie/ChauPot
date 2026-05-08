function hamClick(){
    var drawerEl = document.querySelector(".drawer-nav");
    var hamEl = document.querySelector("#ham")
    drawerEl.classList.toggle("opened");

    if(drawerEl.classList.contains("opened")){
        hamEl.src = "./images/x-symbol (2) (1).svg"
    }else{
        hamEl.src = "./images/bars-solid.png"
    }
}