const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

const blogImages = document.querySelectorAll('.blog-image-link');
const readThisButtons = document.querySelectorAll('.read-this');

const modalContainer1 = document.querySelector('#modal-container-1');
const modalContainer2 = document.querySelector('#modal-container-2');
const modalContainer3 = document.querySelector('#modal-container-3');
const closeButton = document.querySelector('.close-modal');
const closeIcon = document.querySelector('.close-icon');
const closeButton2 = document.querySelector('.close-modal2');
const closeIcon2 = document.querySelector('.close-icon2');
const closeButton3 = document.querySelector('.close-modal3');
const closeIcon3 = document.querySelector('.close-icon3');

//% Navbar toggle button event listener
toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
});

// % Adding event listeners to blog images to open modal
const blogSelector = (ID) => {
  // const blogID = blogImage.id;
  if (ID.slice(-1) === '1') {
    modalContainer1.classList.add('show');
    toggleButton.classList.add('hide');
  } else if (ID.slice(-1) === '2') {
    modalContainer2.classList.add('show');
    toggleButton.classList.add('hide');
  } else if (ID.slice(-1) === '3') {
    modalContainer3.classList.add('show');
    toggleButton.classList.add('hide');
  }
};

blogImages.forEach((blogImage) => {
  blogImage.addEventListener('click', (event) => {
    blogSelector(blogImage.id);
  });
});

// % Adding event listeners to blog buttons to open modal
readThisButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    blogSelector(button.id);
  });
});

//% Adding event listenters to close modal.
closeButton.addEventListener('click', (event) => {
  modalContainer1.classList.remove('show');
  toggleButton.classList.remove('hide');
});
closeButton2.addEventListener('click', (event) => {
  modalContainer2.classList.remove('show');
  toggleButton.classList.remove('hide');
});
closeButton3.addEventListener('click', (event) => {
  modalContainer3.classList.remove('show');
  toggleButton.classList.remove('hide');
});

closeIcon.addEventListener('click', (event) => {
  modalContainer1.classList.remove('show');
  toggleButton.classList.remove('hide');
});
closeIcon2.addEventListener('click', (event) => {
  modalContainer2.classList.remove('show');
  toggleButton.classList.remove('hide');
});
closeIcon3.addEventListener('click', (event) => {
  modalContainer3.classList.remove('show');
  toggleButton.classList.remove('hide');
});
// //% Function to select Image for Modal
// function selectModalImage(num) {
//   const thumb = `./images/gallery/gallery-image-${num}.jpg`;
//   modalImage.src = thumb;
// }

// thumbNail.forEach((image) => {
//   image.addEventListener('click', (event) => {
//     modalContainer.classList.add('show');
//     toggleButton.classList.add('hide');
//   });
// });

// closeButton.addEventListener('click', (event) => {
//   modalContainer.classList.remove('show');
//   toggleButton.classList.remove('hide');
// });

// closeIcon.addEventListener('click', (event) => {
//   modalContainer.classList.remove('show');
//   toggleButton.classList.remove('hide');
// });
