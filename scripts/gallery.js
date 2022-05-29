const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

const thumbNail = document.querySelectorAll('.image-links');
const modalContainer = document.querySelector('#modal-container');
const close = document.querySelector('.close-modal');
const modalImage = document.querySelector('.modal-image');

//% Navbar toggle button event listener
toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
});

//% Function to select Image for Modal
function selectModalImage(num) {
  const thumb = `../images/gallery/gallery-image-${num}.jpg`;
  modalImage.src = thumb;
}

thumbNail.forEach((image) => {
  image.addEventListener('click', (event) => {
    modalContainer.classList.add('show');
  });
});

close.addEventListener('click', (event) => {
  modalContainer.classList.remove('show');
});
