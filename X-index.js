'use strict';

const openBtn = document.getElementById('openPopup');
const closeBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');

openBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Optional: close popup when clicking outside the box
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
