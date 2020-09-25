function cakes(recipe, available) {
  // check if the elements are contained in the other
  let result = [];

  function checkIngredients(recipe, available) {
    for (var key in recipe) {
      return available.hasOwnProperty(key) ? true : false;
    }
  }

  function checkQuantities(...objs) {
    objs.reduce((acc, curr) => {
      for (let key in curr) {
        if (curr.hasOwnProperty(key)) {
          if (curr >= acc) {
            if (!isNaN(curr[key] / acc[key])) {
              result.push(curr[key] / acc[key]);
            }
          } else {
            result.push(0);
          }

          // curr >= acc ?  result.push(curr[key]/acc[key]) :  result.push(0);
        }
      }
    });
  }

  if (checkIngredients(recipe, available)) {
    checkQuantities(recipe, available);
    let amount = Math.min(...result);
    console.log(result);
    return Math.floor(amount);
  } else {
    return 0;
  }
}
