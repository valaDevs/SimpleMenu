const btnNav = document.querySelector('.btn')
const navBar =  document.querySelector('nav')

navBar.style.left ="-300px"

btnNav.addEventListener('click' ,openNav)

function openNav(){
    if(navBar.style.left === "-300px"){
        navBar.style.left ="0"
    }
    else{
        navBar.style.left ="-300px"
    }
}