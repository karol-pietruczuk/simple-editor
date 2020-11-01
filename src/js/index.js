import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

let result = '';
//code from this place
const entry = localStorage.getItem('entry');
if (entry) {
    console.log(`wartość entry: ${entry}`);
    result = entry;
}
//to this place is because of indicating actual value of variable localStorage entry

const entryInput = document.querySelector('.entry--js');
const buttonRead = document.querySelector('.button__read--js');
const buttonSave = document.querySelector('.button__save--js');


buttonRead.addEventListener('click', (e) => {
    entryInput.value = localStorage.getItem('entry');
});

buttonSave.addEventListener('click', () => {
    localStorage.setItem('entry', entryInput.value)
});


const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', function(ev){
     
        let x = ev.clientX - ev.target.offsetLeft; //ev.clientX - x right button position + mouse movement from left extreme button position || ev.target.offsetLeft - x right button position
        let y = ev.clientY - ev.target.offsetTop + scrollY; //scrollY - Y position of scroll bar
        let ripples = document.createElement('span');
        
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        },1000);
    })
})
