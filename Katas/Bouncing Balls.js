function bouncingBall(h, bounce, window) {
  const condition = h > 0 && bounce > 0 && bounce < 1 && window < h;

  return condition ? 2 + bouncingBall(h * bounce, bounce, window) : -1;
}
