// git the objects

const toggles = document.querySelector(".btn");

const show = document.querySelector(".hide");


//add events that would trigger the nav

toggles.addEventListener("click", () =>{
    // if(show.classList.contains("show-link")){
    //     show.classList.remove("show-link");
    // }
    // else{
    //     show.classList.add("show-link");
    // }
    show.classList.toggle("show-link")
})