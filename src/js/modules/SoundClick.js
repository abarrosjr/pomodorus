let radio;

export function clickSound() {
  PlayClick();
}

export function PlayWhiteNoise() {
  WhiteNoiseSound();
}

export function WhiteNoisePause() {
  NoisePause();
}

function PlayClick() {
  playAudio("const", "src/audio/clique_efeito.wav", false, 1);
}

function WhiteNoiseSound() {
  playAudio("no-const", "src/audio/Deep-Sleep-Brown-Noise.mp3", true, 1);
}

function playAudio(type, src, loop, volume) {
  if (type == "const") {
    const sound = (file) => {
      return new Audio(file);
    };
    const radio = sound(src);
    radio.volume = volume;
    radio.loop = loop;
    radio.play();
  } else if (type == "no-const") {
    const sound = (file) => {
      return new Audio(file);
    };
    radio = sound(src);
    radio.volume = volume;
    radio.loop = loop;
    radio.play();
  }
}

function NoisePause() {
  radio.pause();
}
