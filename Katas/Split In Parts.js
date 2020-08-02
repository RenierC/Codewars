var splitInParts = function (s, partLength) {
  let re = new RegExp(`\\w{1,${partLength}}`, "g");
  return s.match(re).join(" ");
};
