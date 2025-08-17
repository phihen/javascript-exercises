const palindromes = function (text) {
    let formattedText = formatText(text);
    let formattedTextReversed = formattedText.split('').reverse().join('');

    return formattedText === formattedTextReversed;
};

function formatText(text) {
  let punctuation = /[\.,?!]/g;
  let newText = text.replace(punctuation, "");
  newText = newText.toLowerCase();
  newText = newText.replace(/\s/g, '');
  return newText;
}

// Do not edit below this line
module.exports = palindromes;
