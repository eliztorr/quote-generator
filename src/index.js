function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings:
      "Three things cannot be long hidden: the sun, the moon, and the truth",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
