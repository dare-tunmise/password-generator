const words = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 
'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '$', '&', '%', '?'];

const btn  = document.getElementById('btn');

const newPassword = document.querySelector('.password');


btn.addEventListener('click', ()=> {
    let myPassword = '';
    for(let i = 0; i < 12; i++) {
        myPassword += words[getRandomPassword()];

        newPassword.textContent = myPassword;
    }
});

function getRandomPassword() {
    return Math.floor(Math.random() * words.length)
}

let icon = document.getElementById('icon');

icon.onclick = () => {
    document.body.classList.toggle('white-theme');
    if (document.body.classList.contains('white-theme')) {
        icon.src = "./icon-moon.svg"
    } else {
        icon.src = "./icon-sun.svg"
    }
}