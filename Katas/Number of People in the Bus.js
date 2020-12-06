var number = function (busStops) {
  return busStops.map((e) => e[0] - e[1]).reduce((a, b) => a + b);
};
