// Creating a span element
const box = document.createElement('span');

// Getting the text to speech API
const speech = new SpeechSynthesisUtterance();

// Getting the array of different voices and accents
window.speechSynthesis.getVoices();

// Creating the different elements (outline) inside the popup box
box.innerHTML = `

    <div class = "popup-box" id = "box">
        <span id="spoken-text"></span>
        <br><br>
        <select name="accent" id="accent">
            <option value="ae" selected>American English</option>
            <option value="be">British English</option>
            <option value="ie">Indian English</option>
        </select>
        <br><br>
        <button type="button" id="submit">Speak</button>
    </div>`


// Attaching the span element to the body element
document.body.appendChild(box);

// Getting the text that is selected by the user
document.body.addEventListener("mouseup", function(event) {
    const popup = document.getElementById("box");
    const spokenText = document.getElementById("spoken-text");
    popup.style.visibility = 'hidden';
    const text = document.getSelection().toString();

    // Check whether the text selected is a complete word
    if (text) {
        spokenText.innerHTML = text;
        
        if (spokenText.innerHTML.includes(" ") == false && spokenText.innerHTML.length > 1){ 
            
            // Position the popup and make it visible
            const x = event.clientX;
            const y = event.clientY;
            popup.style.left = x+'px';
            popup.style.top = y+'px';
            popup.style.visibility = 'visible';

            speech.text = text;

        }      
        
    }
});

// Ability to access 3 different pronounciation 
const submit = document.getElementById("submit");
submit.addEventListener("click", function(event){
    
    // Setting the rate of the speech
    speech.rate = 0.9;
    const accent = document.getElementById("accent")
    const voices = window.speechSynthesis.getVoices();

    // If the accent selected is American English
    if (accent.value == "ae") {
        // Setting the voice to American accent
        speech.voice = voices[34];
        speech.pitch = 1.5;
        window.speechSynthesis.speak(speech);  
    }
    // If the accent selected is British English
    else if (accent.value == "be") {
        // Setting the voice to British accent
        speech.voice = voices[50];
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    }
    // If the accent selected is Indian English.
    else if (accent.value == "ie"){
        // Setting the voice to Indian English
        speech.voice = voices[0];
        speech.pitch = 0.8;
        window.speechSynthesis.speak(speech);
    }
});

// Stopping the propagation
const popup = document.getElementById("box");
popup.addEventListener("mouseup", function(event){
    event.stopPropagation();
});

