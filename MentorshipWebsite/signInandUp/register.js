const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');
const pass =document.getElementById('password');
const conPass =document.getElementById('confirm-password');

form.addEventListener('submit',(e) => {
   if (fname.value === '' || lname === '' || pass =='' || conPass === ''){
       e.preventDefault()
       para.textContent = ' Please fill all required fields';
   }
});