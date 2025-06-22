const html = document.querySelector('html');
const buttonStyle = html.querySelector('.button-style-mode');

const main = html.querySelector('main');

const btn_start = main.querySelector('#btn_start');
const btn_pause = main.querySelector('#btn_pause');
const btn_radio = main.querySelector('#btn_radio');
const btn_pause_radio = main.querySelector('#btn_pause_radio');

const btn_pomodoro = main.querySelector('#btn_pomodoro');
const btn_long_pause = main.querySelector('#btn_long_pause');
const btn_short_pause = main.querySelector('#btn_short_pause');

const config_container = main.querySelector('.config_container');
const input_minutos_trabalho = config_container.querySelector('#minutos');
const input_minutos_pausa = config_container.querySelector('#minutos_pausa');
const button_save = config_container.querySelector('#btn_save');
const error_minutos = config_container.querySelector('#error-minutos');
const error_minutos_pausa = config_container.querySelector('#error-minutos-pausa');

const container = main.querySelector('.container');
const button_config = container.querySelector('#btn_config');

const clock_timer = main.querySelector('#clock-time');

export {
    html,
    buttonStyle,
    btn_start,
    btn_pause,
    btn_radio,
    btn_pause_radio,
    btn_pomodoro,
    btn_long_pause,
    btn_short_pause,
    config_container,
    input_minutos_trabalho,
    input_minutos_pausa,
    button_save,
    error_minutos,
    error_minutos_pausa,
    container,
    button_config,
    clock_timer
}