let characters = [];

for (let i=32; i<127; i++)
    characters.push( String.fromCharCode(i) );
    

function generatePassword(){
    let password = ""
    for(let i = 0; i < 10; i++){
        password += characters[Math.floor(Math.random() * characters.length)] 
     }
     return password
}

const block1 = document.getElementById('block1')
const block2 = document.getElementById('block2')
const block3 = document.getElementById('block3')
const block4 = document.getElementById('block4')





function applyNewPasswords(){
   block1.textContent = generatePassword()
   block2.textContent = generatePassword()
   block3.textContent = generatePassword()
   block4.textContent = generatePassword()
   
}
const button = document.querySelector('button')
button.addEventListener('click',applyNewPasswords)