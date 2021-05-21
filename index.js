const navlist = document.querySelector('.nav-list');
const btn = document.querySelector('.nav-btn');

btn.addEventListener('click',function(){
navlist.classList.toggle('active');
});