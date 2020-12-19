var inputText = document.querySelector("#txt-input");
var translateButton = document.querySelector("#btn-translate");
var outputText = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

// handling errors while calling server
function errorHandler(error){
    console.log("error occured",error);
    alert("Some error occured in the server! Try after some time.")
}

function clickEventListener() {
    var txtInput = inputText.value; // taking input

    // showing output
    function result(json) {
        outputText.innerText = json.contents.translated;
    }
    // calling server for processing
    fetch(getTranslationURL(txtInput))
        .then(response => response.json())
        .then(json => result(json))
        .catch(errorHandler)

}

translateButton.addEventListener("click", clickEventListener);