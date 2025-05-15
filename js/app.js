// Sample shloka data for manual translation (Option 3)
const shlokas = {
  "Shloka 1": {
    original: "तपःस्वाध्यायनिरतं...",
    translations: {
      en: "The sage engaged in penance and study...",
      hi: "ऋषि तप और स्वाध्याय में लीन थे...",
      ta: "ரிஷி தபம் மற்றும் சொந்த படிப்பு உள்ளவர்...",
    }
  },
  "Shloka 2": {
    original: "यो वेदवेदाङ्गतत्त्वज्ञः...",
    translations: {
      en: "One who knows the essence of Vedic knowledge...",
      hi: "जो वेद के तत्त्व को जानता है...",
      ta: "ஒரு வேத அறிவின் சாரத்தை அறிவவர்...",
    }
  }
};

// Function to display the translated text based on selected language
function displayTranslatedShloka(shlokaKey, lang) {
  const shloka = shlokas[shlokaKey];
  
  if (shloka) {
    const translation = shloka.translations[lang] || shloka.original;
    document.querySelector("#shloka-reading-box").innerHTML = `<p>${translation}</p>`;
  }
}

// Translate content when the user selects a new language
function translateContent() {
  const lang = document.getElementById("lang-select").value;
  const shlokaKey = "Shloka 1";  // Change dynamically based on the current shloka
  
  displayTranslatedShloka(shlokaKey, lang);
}
