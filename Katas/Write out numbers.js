function number2words(n) {
  const lowNum = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const highNum = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let checkHighLow = (number) => {
    if (number <= 19) {
      return lowNum[number];
    }
    if (number > 19 && number < 100) {
      return /\./.test(String(number / 10))
        ? highNum[~~(number / 10)] +
            "-" +
            lowNum[Number(String(number / 10).slice(2))]
        : highNum[number / 10];
    }
  };

  let result = "";

  let group = ("000000" + n).substr(-6).match(/^(\d{1})(\d{2})(\d{1})(\d{2})$/);

  if (group[1] !== "0") result += checkHighLow(Number(group[1])) + " hundred ";
  if (group[2] !== "00")
    result += checkHighLow(Number(group[2])) + " thousand ";
  if (group[3] !== "0") result += checkHighLow(Number(group[3])) + " hundred ";

  if (group[4] !== "00") {
    result += checkHighLow(Number(group[4]));
  } else if (n === 0) {
    result += "zero";
  }
  return result.trim();
}
