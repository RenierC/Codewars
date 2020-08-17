function capitalize(s) {
  let even = [...s].map((e, i) => (i % 2 === 0 ? e.toUpperCase() : e)).join("");
  let odd = [...s].map((e, i) => (i % 2 !== 0 ? e.toUpperCase() : e)).join("");
  return [even, odd];
}
