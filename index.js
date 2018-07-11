import englishToBrailleLiteralSet from './english-to-braille.js';
/**
* Converts text in english to braille code.
* Write all code related to the DOM Manipulation here.
* Using the english-to-braille mapper convert the text
* in english language to that in the equivalent braille
* code.
*/
function respond() {
  document.getElementById('targetLangText').innerHTML = '';
  const mes = document.getElementById('sourceLangText').value;
  const myMap = new Map(englishToBrailleLiteralSet);
  let brailletxt = '';
  const result = mes.split('').map(messtr => myMap.get(messtr));
  brailletxt = result.join('');
  document.getElementById('targetLangText').innerHTML = brailletxt;
}
document.getElementById('btnConvertEnglishToBraille').onclick = respond;
