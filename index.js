const addDays = require("date-fns/addDays");

function days(d) {
  let date = addDays(2020, 07, d);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
module.exports = days;
