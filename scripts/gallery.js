const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

const thumbNail = document.querySelectorAll('.image-links');
const modalContainer = document.querySelector('#modal-container');
const closeButton = document.querySelector('.close-modal');
const modalImage = document.querySelector('.modal-image');
const closeIcon = document.querySelector('.close-icon');

//% Navbar toggle button event listener
toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
});

//% Function to select Image for Modal
function selectModalImage(num) {
  const thumb = `./images/gallery/gallery-image-${num}.jpg`;
  modalImage.src = thumb;
}

thumbNail.forEach((image) => {
  image.addEventListener('click', (event) => {
    modalContainer.classList.add('show');
    toggleButton.classList.add('hide');
  });
});

closeButton.addEventListener('click', (event) => {
  modalContainer.classList.remove('show');
  toggleButton.classList.remove('hide');
});

closeIcon.addEventListener('click', (event) => {
  modalContainer.classList.remove('show');
  toggleButton.classList.remove('hide');
});
