import variables from './variables.js';

const sound = (file, loop, volume) => {
  variables.audio = new Audio(`src/audio/${file}`);
  variables.audio.volume = volume;
  variables.audio.loop = loop;
  variables.audio.load();

  return variables.audio;
}

export const clickSound = () => {
  return sound('clique_efeito.wav', false, 1);
}

export const playWhiteNoise = () => {
  variables.windSound = sound('Deep-Sleep-Brown-Noise.mp3', true, 1);

  return variables.windSound;
}

export const whiteNoisePause = () => {
  return variables.windSound;
}

export const pauseTimeSound = () => {
  return sound('efeito-pausa-som.mp3', false, 1);
}
