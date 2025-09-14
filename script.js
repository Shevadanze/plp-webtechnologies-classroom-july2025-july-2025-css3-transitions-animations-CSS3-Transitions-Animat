/* script.js */
requestAnimationFrame(() => modal.classList.add('show'));
} else {
modal.classList.remove('show');
// wait for transition to end before adding hidden
setTimeout(() => modal.classList.add('hidden'), 420);
}
return show;
}


// DOM hookup and demonstration of scope and reusable functions
document.addEventListener('DOMContentLoaded', () => {
const animateBtn = document.getElementById('animateBtn');
const box = document.getElementById('box');
const toggleLoaderBtn = document.getElementById('toggleLoader');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const card = document.getElementById('card');


// Button click -> triggers box animation; demonstrates parameters & returns
animateBtn.addEventListener('click', async () => {
// use pxToNumber to show local variable usage
const boxWidth = pxToNumber(getComputedStyle(box).width);
// intensity is proportional to width (just for demo) and passed as param
const intensity = clamp(boxWidth / 140, 0.5, 2);
const finished = await triggerBoxAnimation(box, intensity);
console.log('box animation finished:', finished);
});


// Toggle loader button
toggleLoaderBtn.addEventListener('click', () => {
startLoader(!state.loaderOn);
});


// Modal open/close
openModalBtn.addEventListener('click', () => openModal(true));
closeModalBtn.addEventListener('click', () => openModal(false));


// Card flip toggled by click — demonstrates toggleClass reuse
card.addEventListener('click', () => {
const isFlipped = toggleClass(card, 'flip');
console.log('card flipped?', isFlipped);
});


// Example: automatically trigger box animation once after 2s (time-based trigger)
setTimeout(() => {
// local anonymous function uses global state read-only
triggerBoxAnimation(box, 0.8);
}, 2000);
});