function convertCurrency(conversionType) {
  // Get input elements based on conversion type
  const amountInput =
    conversionType === "usdToCad"
      ? document.getElementById("amount")
      : document.getElementById("amount-two");
  const currencySelect =
    conversionType === "usdToCad"
      ? document.getElementById("currency")
      : document.getElementById("currency-two");
  const conversionResult = document.getElementById("conversionResult");

  // Get result element based on conversion type
  const result =
    conversionType === "usdToCad"
      ? document.getElementById("amount-two")
      : document.getElementById("amount");

  // Parse amount and currency
  const amount = parseFloat(amountInput.value);
  const currency = currencySelect.value;

  // Validate amount
  if (isNaN(amount) || amount < 0) {
    conversionResult.innerHTML = "<p>Please enter a valid amount.</p>";
    return;
  }

  let convertedAmount;
  let convertedCurrency;

  // Perform currency conversion based on selected currency
  if (currency === "CAD") {
    // Convert CAD to USD
    convertedAmount =
      conversionType === "usdToCad" ? amount * 1.354 : amount * 0.7386;
    convertedCurrency = conversionType === "usdToCad" ? "USD" : "CAD";
  } else if (currency === "USD") {
    // Convert USD to CAD
    convertedAmount =
      conversionType === "cadToUsd" ? amount * 0.7386 : amount * 1.354;
    convertedCurrency = conversionType === "cadToUsd" ? "CAD" : "USD";
  }

  // Set result value based on conversion type
  if (conversionType === "usdToCad" || conversionType === "cadToUsd") {
    // Set result value for USD to CAD or CAD to USD conversion
    result.value = convertedAmount.toFixed(3);
  } else {
    // Default case (should not reach here)
    result.value = `${convertedAmount.toFixed(3)}`;
  }
}
