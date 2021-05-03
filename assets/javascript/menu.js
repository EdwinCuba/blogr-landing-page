const menuLogo = document.getElementById('mobile-menu');
const handleMenu = () => {
    menuLogo.classList.toggle('open');
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}
menuLogo.addEventListener('click', handleMenu);

const menuOptions = {
    'menu-product': 'product-options',
    'menu-company': 'company-options',
    'menu-connect': 'connect-options',
}
const openOptions = event => {
    const selector = event.target.id;
    const arrow = document.getElementById(selector);
    const selection = document.getElementById(menuOptions[selector]);
    arrow.classList.toggle('open');
    selection.classList.toggle('open');
}