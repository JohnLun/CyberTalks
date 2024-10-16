// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const text = "Welcome to Cyber Talks. I'm your host, Cyber Justin. Click news to get the latest updates in the cyber space........... My best friend is Lebron James. From the screen, to the ring, to the pen, to the king.";
const temp = "I'm in the thick of it, everybody knows. They know me where it snows, I skied in and they froze. I don't know no nothin' 'bout no ice, I'm just cold. Forty somethin' milli' subs or so, I've been told. I'm in my prime, and this ain't even final form . They knocked me down, but still, my feet, they find the floor. I went from living rooms straight out to sold - out tours. Life's a fight, but trust, I'm ready for the war. Woah - oh - oh This is how the story goes Woah - oh - oh I guess this is how the story goes";
const typedTextElement = document.getElementById('typedText');
let currentChar = 0;

// Function to type text in real-time
function typeText() {
    if (currentChar < text.length) {
        typedTextElement.innerHTML += text.charAt(currentChar);
        currentChar++;
        setTimeout(typeText, 75);  // Delay for typing speed
    }
}

// Function to handle text-to-speech for the entire sentence
function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US'; // Set the language
    window.speechSynthesis.speak(speech);
}

// Automatically start speech first, then typing when the view renders
window.onload = function () {
    // Start speaking the text
    speakText(text);

    // After speech starts, begin typing
    typeText();
};
// Get the image element
const faceImage = document.getElementById('faceImage');

// Paths to the images
const eyesClosed = '/assets/EyesClosed.png';
const eyesOpenMouthClosed = '/assets/EyesOpenMouthClosed.png';
const eyesOpenMouthOpen = '/assets/EyesOpenMouthOpen.png'; // Talking image
const umActually = '/assets/UmActually.png'; // New image to cycle through

// Variable to track the current talking state
let talkState = 0; // 0 for mouth closed, 1 for mouth open, 2 for "Um Actually"

// Function to "blink"
function blink() {
    // Close eyes for half a second
    faceImage.src = eyesClosed;
    setTimeout(() => {
        // Open eyes again after 0.5 seconds
        faceImage.src = eyesOpenMouthClosed;
    }, 500);
}

// Blink at intervals of 4 seconds
setInterval(blink, 4300);  // 4 seconds between blinks

// Function to simulate talking
function talk() {
    // Cycle through the three states
    switch (talkState) {
        case 0: // Mouth closed
            faceImage.src = eyesOpenMouthClosed;
            talkState = 1; // Move to next state
            break;
        case 1: // Mouth open
            faceImage.src = eyesOpenMouthOpen;
            talkState = 2; // Move to the "Um Actually" state
            break;
        case 2: // "Um Actually"
            faceImage.src = umActually;
            talkState = 0; // Reset to mouth closed
            break;
    }
}

// Talk at intervals (adjust the interval as necessary)
setInterval(talk, 500);