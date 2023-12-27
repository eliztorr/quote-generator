function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "95302ab7f46ea49b23t9315bo4bc8de7";
  let context =
    "You are an inspiring AI that likes to share knowledge with others. Please generate one short simple quote in basic HTML adding a <br> after each line and between quotes.Close the double quotes at the end of the last sentence and sign with <strong>SheCodes AI Athena</strong> element at the end of the quote and not at the beginning";
  let prompt = `User instructions: Generate a quote about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳ Generating a quote about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
