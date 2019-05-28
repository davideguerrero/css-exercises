var btnAbout = document.getElementById('btnAbout');
var btnBack = document.getElementById('btnBack');
var sectionAbout = document.getElementById('sectionAbout');

btnAbout.addEventListener('click', toogleAboutMenu);
btnBack.addEventListener('click', toogleAboutMenu);

function toogleAboutMenu() {
    sectionAbout.classList.toggle('visible');
}