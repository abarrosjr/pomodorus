import { html, buttonStyle } from './selectors.js';

const handleClick = () => {
    const iconSun = buttonStyle.querySelector('.sun');
    const iconMoon = buttonStyle.querySelector('.moon');

    iconSun.classList.toggle('active')
    iconMoon.classList.toggle('active')

    buttonStyle.classList.toggle('active')

    html.classList.toggle('dark-mode');
}

buttonStyle.addEventListener('click', handleClick);

export default function styleMode() {}