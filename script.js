let sideMenu = document.querySelector("#sideMenu");
let navBar = document.querySelector("nav");
let navLink = document.querySelector('nav ul');

function openMenu(){
    sideMenu.style.transform = ("translateX(-16rem)")
}
function closeMenu(){
    sideMenu.style.transform = ("translateX(16rem)")
}
window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
       navBar.classList.add("bg-white", "bg-opacity-50", "backdrop-blur-lg","shadow-sm" ) 
    }else{
        navBar.classList.remove("bg-white", "bg-opacity-50", "backdrop-blur-lg","shadow-sm")
    }
})