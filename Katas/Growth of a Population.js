function nbYear(p0, percent, aug, p) {
  if (percent > 0) percent = percent / 100;
  let years = 0;
  let population = p0;

  while (population < p) {
    population += population * percent + aug;
    years++;
  }
  return years;
}
