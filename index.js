const cd = require("countdown");
let time = new Date(2021, 1, 1);
const ascii = "";

let c0 = setInterval(() => {
  let countdown = cd(new Date(2021, 1, 1)).toString();
  console.log(
    "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nTIME TILL NEW YEAR: " + countdown.slice(9)
  );
  if (countdown.slice(9) == "2 days, 11 hours, 56 minutes and 10 seconds") {
    clearInterval(c0);
    setTimeout(() => {
      console.log(
        "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nHAPPY NEW YEAR! 🎉"
      );
      setTimeout(() => {
        console.log("It's now 2021! 🎉");
      }, 500);
      setTimeout(() => {
        console.log(
          " .----------------.  .----------------.  .----------------.  .----------------. "
        );
      }, 1000);
      setTimeout(() => {
        console.log(
          "| .--------------. || .--------------. || .--------------. || .--------------. |"
        );
      }, 1500);
      setTimeout(() => {
        console.log(
          "| |    _____     | || |     ____     | || |    _____     | || |     __       | |"
        );
      }, 2000);
      setTimeout(() => {
        console.log(
          "| |   / ___ `.   | || |   .'    '.   | || |   / ___ `.   | || |    /  |      | |"
        );
      }, 2500);
      setTimeout(() => {
        console.log(
          "| |  |_/___) |   | || |  |  .--.  |  | || |  |_/___) |   | || |    `| |      | |"
        );
      }, 3000);
      setTimeout(() => {
        console.log(
          "| |   .'____.'   | || |  | |    | |  | || |   .'____.'   | || |     | |      | |"
        );
      }, 3500);
      setTimeout(() => {
        console.log(
          "| |  / /____     | || |  |  `--'  |  | || |  / /____     | || |    _| |_     | |"
        );
      }, 4000);
      setTimeout(() => {
        console.log(
          "| |  |_______|   | || |   '.____.'   | || |  |_______|   | || |   |_____|    | |"
        );
      }, 4500);
      setTimeout(() => {
        console.log(
          "| |              | || |              | || |              | || |              | |"
        );
      }, 5000);
      setTimeout(() => {
        console.log(
          "| '--------------' || '--------------' || '--------------' || '--------------' |"
        );
      }, 5500);
      setTimeout(() => {
        console.log(
          " '----------------'  '----------------'  '----------------'  '----------------' "
        );
      }, 6000);

      // setInterval exit
    }, 1000);
    // setTimeout exit
  }
}, 1000);
