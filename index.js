const menuButton = document.querySelector('.menu-btn');

menuButton.addEventListener('click', function() {
    const iconMenu = document.querySelector('.icon-menu');
    const iconMenuClose = document.querySelector('.icon-menu-close');
    const dropDownContainer = document.querySelector('.drop-down-container');

    if (dropDownContainer.style.display === '' || dropDownContainer.style.display === 'none' ) {

        iconMenu.style.display = 'none';
        iconMenuClose.style.display = 'block';
        dropDownContainer.style.display = 'block';
        document.body.classList.add('overlay-active');

    } else {

        iconMenu.style.display = 'block';
        iconMenuClose.style.display = 'none';
        dropDownContainer.style.display = 'none'
        document.body.classList.remove('overlay-active');
    }
})