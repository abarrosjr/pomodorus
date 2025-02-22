export function clickSound(){
    PlayClick();
}

export function PlayWhiteNoise(){
    WhiteNoiseSound();
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

function WhiteNoiseSound(){
    const sound = file => {
        return new Audio(file);
    }
    const radio = sound('../../src/audio/PinkNoise.mp3');
    radio.volume = 0.8;
    radio.loop = true;
    radio.play();
}