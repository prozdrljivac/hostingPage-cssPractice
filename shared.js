const backdrop = document.querySelector('.backdrop');
const selectPlanBtn = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for(var i = 0; i < selectPlanBtn.length; i++) {
  selectPlanBtn[i].addEventListener('click', () => {
    //modal.style.display = 'block';
    //backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

backdrop.addEventListener('click', function() {
  mobileNav.classList.remove('open');
  closeModal();
});

if(closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}


function closeModal() {
    //modal.style.display = 'none';
    //backdrop.style.display = 'none';
  if(modal) {
    modal.classList.remove('open');
  }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
