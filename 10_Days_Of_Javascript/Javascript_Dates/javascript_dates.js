function getDayName(dateString) {
  let dayName = "";
  const date = new Date(dateString);
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  dayName = dayNames[date.getUTCDay()];

  return dayName;
}
//input : 
//2
//10/11/2009
//11/10/2010
