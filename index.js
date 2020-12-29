const cd = require("countdown");
let today = new Date();
cd.DEFAULTS = cd.MONTHS | cd.DAYS | cd.HOURS | cd.MINUTES | cd.SECONDS;

let c0 = setInterval(() => {
  let countdown = cd(new Date(2021, 1, 1)).toString();
  console.log(
    "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nTIME TILL NEW YEAR: " + countdown.slice(9)
  );
  if (countdown.slice(9) == "2 days, 12 hours, 34 minutes and 20 seconds") {
    clearInterval(c0);
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nHAPPY NEW YEAR!");
  }
}, 1000);
