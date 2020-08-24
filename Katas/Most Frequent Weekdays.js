function mostFrequentDays(year) {
  let startDate = new Date(year, 0, 1);
  let endDate = new Date(year, 11, 31);
  let weekdays = [];

  let daysOfWeek = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
  };

  // get all the weekdays
  while (startDate <= endDate) {
    let day = startDate.toLocaleDateString("en-US", { weekday: "long" });
    weekdays.push(day);
    startDate.setDate(startDate.getDate() + 1);
  }
  // get an object with the amount of ocurrances of each weekday
  let obj = weekdays.reduce((weekdays, day) => {
    if (day in weekdays) {
      weekdays[day]++;
    } else {
      weekdays[day] = 1;
    }
    return weekdays;
  }, {});
  // maximum number of ocurrances
  let max = Math.max(...Object.values(obj));

  return Object.entries(obj)
    .map((e) => {
      if (e[1] === max) return e[0];
    })
    .filter((x) => x)
    .sort((a, b) => daysOfWeek[a] - daysOfWeek[b]);
}
