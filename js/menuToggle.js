console.log(document.querySelector('.toggle-menu-button'));

// const menuToggle = () => {
//     const toggleMenuButton = document.querySelector('.toggle-menu-button');
//     const mainMenu = document.querySelector('#main-menu');
    
//     toggleMenuButton.addEventListener('click', e => {
//         mainMenu.classList.toggle('hidden');
//         toggleMenuButton.classList.toggle('hide');

//         if (toggleMenuButton.getAttribute('aria-expanded') === 'false') {
//             toggleMenuButton.setAttribute('aria-expanded', 'true');
//         } else {
//             toggleMenuButton.setAttribute( 'aria-expanded', 'false');
//         }

//         let hiddenTextElement = toggleMenuButton.querySelector('.hidden-visually');
//         if (hiddenTextElement.innerText === 'Show menu') {
//             hiddenTextElement.innerText = 'Hide menu';
//         } else {
//             hiddenTextElement.innerText = 'Show menu';
//         }
//     });
// }