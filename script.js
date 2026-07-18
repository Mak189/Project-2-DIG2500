//This javascript toggles the darkmode theme by changing the class for the body of the html file
const themeSwitch = document.getElementById('themeswitch');

themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle('darkmode');
});