let speech = new SpeechSynthesisUtterance();

function texttoAudio() {
    let msg= document.getElementById("contactno").value;
    
    let speech = new SpeechSynthesisUtterance();

    speech.lang="en-US";
    speech.text=msg;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;

    window.SpeechSynthesis.speak(speech);
}

texttoAudio();


