const hamBurger = document.getElementsByClassName('ham_bur');
const menu = document.getElementsByClassName('maincontent');
// const nav = document.getElementsByTagName('nav');
const mainBody = document.getElementsByClassName('main_body');

const showOrHideMenu = () => {
    console.log('Hello');
    if (menu[0].style.display == 'none') {
        mainBody[0].style.top = "330px"
        menu[0].style.display = 'flex'
    } else {
        mainBody[0].style.top = "0px"
        menu[0].style.display = 'none'
    }
}

hamBurger[0].addEventListener('click', showOrHideMenu);
