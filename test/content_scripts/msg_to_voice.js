console.log("Content Script loaded");
var synth = window.speechSynthesis;

let textContainer = document.querySelector("div[aria-live='polite']");

const voices = synth.getVoices();

var selectedVoice;

voices.forEach(voice => {
    if(voice.name.includes("en-US") || voice.lang.includes("en-US")) 
    selectedVoice = voice;
});

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: false  };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {

    if ((textContainer.innerText).includes('500 characters maximum')) {
        return;
    }

    if (mutationsList.length > 1) {
        console.log("Length increased");
    }
    var utterThis = new SpeechSynthesisUtterance(textContainer.innerText);
    utterThis.voice = selectedVoice;
    utterThis.pitch = 1;
    utterThis.rate =1;
    synth.speak(utterThis);
    console.log(textContainer.innerText);
};




// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(textContainer, config);