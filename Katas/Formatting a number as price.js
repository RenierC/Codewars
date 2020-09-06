var numberToPrice = function (number) {
  if (number === "") return "NaN";

  // use the intl helper to turn into currency which does all we want
  let numString = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 3,
  })
    //then we remove the spaces and the currency sign
    .format(number)
    .replace(/€/g, "")
    .replace(/\s/, "");
  // the false part eliminates everything past 2 places after the dot
  return numString === "NaN"
    ? "NaN"
    : numString.substring(0, numString.indexOf(".") + 3);
};
