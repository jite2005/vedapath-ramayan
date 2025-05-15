const languages = ['en', 'hi', 'sa', 'ta'];
let currentUtterance = null;

function showLanguage() {
  const selectedLang = document.getElementById('languageSelect').value;
  languages.forEach(lang => {
    document.getElementById(lang).style.display = lang === selectedLang ? 'block' : 'none';
  });
  stopText();
}

function highlightText(event) {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    speakText(selectedText);
  }
}

function speakText(text) {
  stopText();
  const selectedLang = document.getElementById('languageSelect').value;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = {
    en: 'en-US',
    hi: 'hi-IN',
    sa: 'hi-IN',
    ta: 'ta-IN'
  }[selectedLang];
  currentUtterance = utterance;
  speechSynthesis.speak(utterance);
}

function playText() {
  stopText();
  const selectedLang = document.getElementById('languageSelect').value;
  const container = document.getElementById(selectedLang);
  const textElement = container.querySelector('p');
  const text = textElement.innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = {
    en: 'en-US',
    hi: 'hi-IN',
    sa: 'hi-IN',
    ta: 'ta-IN'
  }[selectedLang];
  currentUtterance = utterance;
  speechSynthesis.speak(utterance);
}

function pauseText() {
  if (speechSynthesis.speaking && !speechSynthesis.paused) {
    speechSynthesis.pause();
  }
}

function resumeText() {
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
  }
}

function stopText() {
  if (speechSynthesis.speaking || speechSynthesis.paused) {
    speechSynthesis.cancel();
    currentUtterance = null;
  }
}

window.speechSynthesis.onvoiceschanged = () => {
  console.log(speechSynthesis.getVoices());
};