let radio;
export function WhiteNoisePause(){
    NoisePause();
}

export function clickSound(){
    PlayClick();
}

export function PlayWhiteNoise(status){
    WhiteNoiseSound(status);
}

export function PauseWhiteNoise(){
    WhiteNoiseSoundPause();
}

function PlayClick(){
    const sound = file => {
        return new Audio(file);
    }
    const radio = sound('../../src/audio/494493__sheyvan__button-clicking-7-single.mp3');
    radio.volume = 0.8;
    radio.loop = false;
    radio.play();
}

function WhiteNoiseSound(status){
    const sound = file => {
        return new Audio(file);
    }
    radio = sound('../../src/audio/PinkNoise.mp3');
    radio.volume = 1;
    radio.loop = true;
    radio.play();
}

function NoisePause(){
    radio.pause();
}