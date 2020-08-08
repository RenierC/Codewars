function josephus(items, k) {
  let deaths = [];
  let position = (k - 1) % items.length;

  const len = items.length;

  for (let i = 0; i < len; i++) {
    deaths.push(items[position]);
    items.splice(position, 1);
    position += k - 1;
    position = position % items.length;
  }
  return deaths;
}
