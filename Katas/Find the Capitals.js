function capital(capitals) {
  return capitals.map(
    (e) => `The capital of ${e.country || e.state} is ${e.capital}`
  );
}
