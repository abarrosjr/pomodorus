import variables from './modules/variables.js';
import {
  clickSound,
  playWhiteNoise,
  whiteNoisePause,
  pauseTimeSound
} from './modules/SoundClick.js';
import {
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
} from './modules/selectors.js';
import styleMode from './modules/StyleMode.js';

styleMode();

document.addEventListener('DOMContentLoaded', () => defaultTimer("Pomodoro"));

const modes = {
  'Pomodoro': {
    trabalho: 15,
    pausa: 5
  },
  'ShortPause': {
    trabalho: 30,
    pausa: 10
  },
  'LongPause': {
    trabalho: 60,
    pausa: 20
  }
}

const formatTime = (minutes, seconds) => {
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

const toggleConfigPanel = () => {
  clickSound().play();

  config_container.style.display = config_container.style.display === 'grid' ? 'none' : 'grid';
  container.style.display = config_container.style.display === 'grid' ? 'none' : 'flex';
}

const defaultTimer = mode => {
  variables.minutos_trabalho = modes[mode].trabalho;
  variables.minutos_pausa = modes[mode].pausa;

  variables.tempo_restante = variables.minutos_trabalho * 60;

  clock_timer.textContent = formatTime(variables.minutos_trabalho, 0);
}

const validateAndSaveConfig = () => {
  variables.minutos_trabalho = parseInt(input_minutos_trabalho.value);
  variables.minutos_pausa = parseInt(input_minutos_pausa.value);

  let has_error = false;

  resetErrorsConfig();

  if (isNaN(variables.minutos_trabalho) || variables.minutos_trabalho < 15) {
    displayError(error_minutos, "Mínimo de 15 minutos.", input_minutos_trabalho, "error-input");

    has_error = true;
  }

  if (isNaN(variables.minutos_pausa) || variables.minutos_pausa < 5) {
    displayError(error_minutos_pausa, "Mínimo de 5 minutos.", input_minutos_pausa, "error-input");

    has_error = true;
  }

  if (isNaN(variables.minutos_trabalho) || variables.minutos_trabalho > 60) {
    displayError(error_minutos, "Não é recomendado mais de 60 minutos de foco.", input_minutos_trabalho, "error-input");

    has_error = true;
  }

  if (isNaN(variables.minutos_pausa) || variables.minutos_pausa > 60) {
    displayError(error_minutos_pausa, "Não é recomendado mais de 60 minutos de pausa", input_minutos_pausa, "error-input");

    has_error = true;
  }

  if (has_error) return;

  variables.tempo_restante = variables.minutos_trabalho * 60;

  clock_timer.textContent = formatTime(variables.minutos_trabalho, 0);

  toggleConfigPanel();
}

const displayError = (element, message, input, name) => {
  element.textContent = message;
  element.style.display = "block";

  input.classList.add(name);
}

const resetErrorsConfig = () => {
  error_minutos.textContent = "";
  error_minutos.style.display = "none";

  error_minutos_pausa.textContent = "";
  error_minutos_pausa.style.display = "none";

  input_minutos_trabalho.classList.remove('error-input');
  input_minutos_pausa.classList.remove('error-input');
}

const startTimer = () => {
  if (variables.timer_ativo) return;

  variables.timer_ativo = true;
  variables.timer_interval = setInterval(updateTimer, 1000);

  clickSound().play();
}

const updateTimer = () => {
  if (variables.tempo_restante <= 0) {
    handleTimerEnd();

    return;
  }

  variables.tempo_restante--;

  const minutos = Math.floor(variables.tempo_restante / 60);
  const segundos = variables.tempo_restante % 60;

  clock_timer.textContent = formatTime(minutos, segundos);
}

const handleTimerEnd = () => {
  if (!variables.modo_pausa) {
    clearInterval(variables.timer_interval);

    variables.timer_ativo = false;
    variables.modo_pausa = true;
    variables.tempo_restante = variables.minutos_pausa * 60;

    clock_timer.textContent = formatTime(variables.minutos_pausa, 0);

    pauseTimeSound().play();

    return;
  }

  clearInterval(variables.timer_interval);

  variables.timer_ativo = false;
  variables.modo_pausa = false;

  // Ao zerar minutos_pausa, retorna ao minutos_trabalho
  variables.tempo_restante = variables.minutos_trabalho * 60;

  clock_timer.textContent = formatTime(variables.minutos_trabalho, 0);

  pauseTimer();
}

const pauseTimer = () => {
  clearInterval(variables.timer_interval);

  variables.timer_ativo = false;

  clickSound().play();
}

const radio = () => {
  clickSound().play();

  btn_radio.disabled = true;
  btn_pause_radio.disabled = false;
  btn_radio.style.color = "var(--active-function-color)";

  playWhiteNoise().play();
}

const pause = () => {
  clickSound().play();

  btn_radio.disabled = false;
  btn_pause_radio.disabled = true;
  btn_radio.style.color = "var(--cor-primaria)";

  whiteNoisePause().pause();
}

button_config.addEventListener('click', toggleConfigPanel);
button_save.addEventListener('click', validateAndSaveConfig);
btn_pause.addEventListener('click', pauseTimer);
btn_start.addEventListener('click', startTimer);
btn_radio.addEventListener('click', radio);
btn_pause_radio.addEventListener('click', pause);
btn_pomodoro.addEventListener('click', () => defaultTimer("Pomodoro"));
btn_long_pause.addEventListener('click', () => defaultTimer("LongPause"));
btn_short_pause.addEventListener('click', () => defaultTimer("ShortPause"));
