const iconMenu = document.querySelector('.button__burger-menu');
const iconMenu2 = document.querySelector('.button__hide');
const title__main = document.querySelector('.title__main');
if (iconMenu, iconMenu2){
    const menuBody = document.querySelector('.mobile_version');
    iconMenu.addEventListener("click", function(e) {
        menuBody.classList.toggle('_active');
        title__main.classList.add('_hide');
    });
    iconMenu2.addEventListener("click", function(e) {
        menuBody.classList.toggle('_active');
        title__main.classList.remove('_hide');
    });
}