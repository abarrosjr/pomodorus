export default function StyleMode() {}

const buttonStyle = document.querySelector(".button-style-mode");
const html = document.querySelector('html');
buttonStyle.addEventListener("click", handleClick);

function handleClick() {
    const classActive = "active";
    const iconSun = buttonStyle.querySelector(".sun");
    const iconMoon = buttonStyle.querySelector(".moon");
    buttonStyle.classList.toggle(classActive);
    iconSun.classList.toggle(classActive)
    iconMoon.classList.toggle(classActive);
    html.classList.toggle('dark-mode');
}
