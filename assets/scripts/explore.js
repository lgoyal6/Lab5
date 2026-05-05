// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector('select');
  const textArea = document.querySelector('textarea');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = '';

    voices.forEach(function (voice, index) {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  talkButton.addEventListener('click', function () {
    const text = textArea.value;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[voiceSelect.value];

    utterance.addEventListener('start', function () {
      faceImage.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', function () {
      faceImage.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utterance);
  });
}
