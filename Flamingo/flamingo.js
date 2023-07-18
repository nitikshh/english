const searchInput = document.querySelector('.search-container input');
const faqItems = document.querySelectorAll('.faq-item');

searchInput.addEventListener('keyup', function () {
  const searchTerm = searchInput.value.toLowerCase();
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question').textContent.toLowerCase();
    if (question.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

var lastSelectedText = '';
var speechUtterance = null;

window.addEventListener('mouseup', function () {
  var selectedText = window.getSelection().toString().trim();
  if (selectedText !== '' && selectedText !== lastSelectedText) {
    speakText(selectedText);
    lastSelectedText = selectedText;
  }
});

document.body.addEventListener('mousedown', function () {
  stopSpeaking();
});

function speakText(text) {
  stopSpeaking();

  var utterance = new SpeechSynthesisUtterance(text);

  // Set the speed
  utterance.rate = 0.8; // Adjust the rate value as per your desired speed

  speechSynthesis.speak(utterance);
  speechUtterance = utterance;
}

function stopSpeaking() {
  if (speechUtterance !== null) {
    speechSynthesis.cancel();
    speechUtterance = null;
  }
}