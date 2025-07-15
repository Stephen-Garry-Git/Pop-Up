'use strict';

const showBtn = document.getElementById('showPopup');
const popup = document.getElementById('popup');
const dismissBtn = document.getElementById('dismiss');

showBtn.addEventListener('click', () => {
  popup.style.display = 'flex';

  // Auto-hide after 5 seconds
  setTimeout(() => {
    popup.style.display = 'none';
  }, 5000);
});

dismissBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
