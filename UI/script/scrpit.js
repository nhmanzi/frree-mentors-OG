
const slideNav = () => {
const screen=document.querySelector('.screen');
const burger = document.querySelector('.burger');
const navbar=document.querySelector('.nav-links');
const navlinks=document.querySelectorAll('.nav-links li');
burger.addEventListener('click',() => {
navbar.classList.toggle('nav-activator')

navlinks.forEach((link,index)=>{
    if(link.style.animation){
        link.style.animation='';
    }else {
        link.style.animation= `navlinksfade      0.5s ease forwards ${index/7+.4 }s`;
    }



});
burger.classList.toggle('toggle');
screen.classList.toggle('screenDisplay');
});

}
slideNav();

