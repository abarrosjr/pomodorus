let radio;

export function clickSound() {
  playAudio("play", "const", "src/audio/clique_efeito.wav", false, 1);
}

export function PlayWhiteNoise() {
  playAudio(
    "play",
    "no-const",
    "src/audio/Deep-Sleep-Brown-Noise.mp3",
    true,
    1,
  );
}

export function WhiteNoisePause() {
  playAudio("pause");
}

function playAudio(status, type, src, loop, volume) {
  if (status == "play") {
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
  } else if (status == "pause") {
    radio.pause();
  }
}
