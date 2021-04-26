const menuLogo = document.getElementById('mobile-menu');
const handleMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}
menuLogo.addEventListener('click', handleMenu);

const menuOptions = {
    'menu-product': 'product-options',    
    'menu-company': 'company-options',    
    'menu-connect': 'connect-options',    
}
const openOptions =  event => {
    const selector = event.target.id;
    const selection =  document.getElementById(menuOptions[selector]);
    selection.classList.toggle('open');
}