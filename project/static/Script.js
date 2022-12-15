const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('nav a').forEach(link => {    
   if(link.href.includes(`${activePage}`)){
     link.classList.add('active');
   }
 });

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};


