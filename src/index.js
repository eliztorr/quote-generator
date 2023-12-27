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
    "You are an inspiring AI that likes to share knowledge with others. Your mission is to generate one simple cite of maximum 3 lines in basic HTML adding a <br> after each line without using quotes. Please make sure to follow the user instructions.Please sign at the end of the quote with the authors name and <strong>SheCodes AI Athena</strong>";
  let prompt = `User instructions: Generate a quote about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳ Generating a quote about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
