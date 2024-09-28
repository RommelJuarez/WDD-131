const yearElement=document.getElementById("currentyear");
const currentYear= new Date().getFullYear();
yearElement.textContent= `© ${currentYear} | Rommel Juarez | Quito-Ecuador`;

const lastModifiedElement=document.getElementById("lastModified");
const lastModified= document.lastModified;
lastModifiedElement.textContent=`${lastModified}`;


const hamButton = document.querySelector('#hamburger-btn');
const navigation = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});