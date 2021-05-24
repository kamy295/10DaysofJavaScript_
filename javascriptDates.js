console.log("javascrpit Dates");

function getDay(dateString) {
  // const day = new Date(dateString);
  // const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // return weekDays[day.getDay()];

  // }
  const date = new Date(dateString);

  const options = {
    weekday: "long",
  };

  return new Intl.DateTimeFormat("en-Us", options).format(date);
}

let date = 25 / 05 / 2021;
console.log(getDay(date));
console.log();
