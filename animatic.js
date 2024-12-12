"use strict";

const check = document.querySelectorAll('input');
const popup = document.querySelector('.popup')
check.forEach(item => {
    item.addEventListener('click',(e) => {
      popup.classList.add('hide')
    });
});

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const closeeePopUp = document.getElementById('pop_up_closeee');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})

closeeePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})