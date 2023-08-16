function openMenu() {
    document.querySelector('.hidden_menu').style.display = 'flex';
    document.querySelector('.cross').style.display = 'flex';
    document.querySelector('.burger').style.display = 'none';
}

function closeMenu() {
    document.querySelector('.hidden_menu').style.display = 'none';
    document.querySelector('.cross').style.display = 'none';
    document.querySelector('.burger').style.display = 'flex';
}