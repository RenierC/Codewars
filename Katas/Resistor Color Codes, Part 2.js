function encodeResistorColors(ohmsString) {
  const color = {
    0: "black",
    1: "brown",
    2: "red",
    3: "orange",
    4: "yellow",
    5: "green",
    6: "blue",
    7: "violet",
    8: "gray",
    9: "white",
  };

  let contain = /(k|M)/g.test(ohmsString);
  let number = ohmsString.replace(/[^0-9.]+/g, "");
  let conversion = 0;

  if (contain) {
    if (ohmsString.includes("k")) {
      conversion = parseFloat(number) * 1000;
    }
    if (ohmsString.includes("M")) {
      conversion = parseFloat(number) * 1000000;
    }
  } else {
    conversion = number;
  }

  let arr = String(conversion).split("");
  let result = [];

  for (let i = 0; i <= 2; i++) {
    if (i <= 1) result.push(color[Number(arr[i])]);
    if (i === 2) result.push(color[arr.length - 2]);
  }
  return `${result.join(" ")} gold`;
}
