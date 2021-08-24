const togglerOpen = document.querySelector('.fa-bars');
const togglerClose = document.querySelector('.fa-times');
const dropdownMenu = document.querySelector('.navlinks-wrapper');
const dropdownLinks = document.querySelectorAll('.nav-link');

// let fullname = document.getElementById('nameText').innerHTML = 'Godson Imiebo';




const toggleFunction = () => {
    dropdownMenu.classList.toggle('active');
}

const removeFunction = () => {
    dropdownMenu.classList.remove('active');
}

togglerOpen.addEventListener('click', toggleFunction);

togglerClose.addEventListener('click', removeFunction);

dropdownLinks.forEach(dLink => dLink.addEventListener('click', removeFunction));