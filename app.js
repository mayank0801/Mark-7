var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/groot.json";

function makeUrl(input) {
  return serverUrl + "?" + "text=" + input;
}
function errorMsg(error) {
  console.log("error occured", error);
  alert("Something wrong with server , Please try after sometime.");
}

function clickHandler() {
  var inputText = txtInput.value;
  fetch(makeUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorMsg);
}
btnTranslate.addEventListener("click", clickHandler);
