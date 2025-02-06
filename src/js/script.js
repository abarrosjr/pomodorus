const main = document.querySelector('main');
const container = main.querySelector('.container');
const config_container = main.querySelector('.config_container');

const button_config = container.querySelector('#btn_config');
const button_save = config_container.querySelector('#btn_save');

button_config.addEventListener('click', () => config());
button_save.addEventListener('click', () => save());

const config = () => {
    if (config_container.style.display == "grid") {
        config_container.style.display = "none";

        return;
    }

    config_container.style.display = "grid";
    container.style.display = "none";
}

const save = () => {
    container.style.display = "flex";
    config_container.style.display = "none";
}