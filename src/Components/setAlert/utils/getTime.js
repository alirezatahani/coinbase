export const GetTimeAsNumber = (time) => {
  if (time) {
    return chengeTimeToNumber(time);
  } else {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    return chengeTimeToNumber(dateTime);
  }
};

const chengeTimeToNumber = (timeString) => {
  let seprateDate = timeString.split(" ");
  let partOne = seprateDate[0].split("-").join("");
  let partTwo = seprateDate[1].split(":").join("");
  let joinedParts = partOne + "" + partTwo;
  return Number(joinedParts);
};
