
//  Initializing vars
var synth = window.speechSynthesis;

const inputForm = document.querySelector('form');
const textF = document.querySelector('#textField');
const voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');

var voices = [];


function populateVoiceList() {
    voices = synth.getVoices();

    voices.forEach(voice => {
        let option = document.createElement('option');
        option.textContent = voice.name;
        console.log(voice.name);
        option.textContent += " (" + voice.lang + ")";
        if (voice.default) {
            option.textContent += " -Default";
        }
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);

        voiceSelect.appendChild(option);
    });
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault();
    var utterThis = new SpeechSynthesisUtterance(textF.value);
    var selectedOpt = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name == selectedOpt) {    

            utterThis.voice = voices[i];
            break;
        }
    }
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;

    synth.speak(utterThis);
    textF.blur();
});
