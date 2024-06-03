//Date(year, month, date, hour, minute, second, ms)
const data = new Date(2002, 0, 1, 9, 27, 31, 41);
console.log(data);

const year = data.getFullYear();
console.log(year);

const month = data.getMonth();
console.log(month);

const date = data.getDate();
console.log(date);

const hour = data.getHours();
console.log(hour);

const min = data.getMinutes();
console.log(min);

const sec = data.getSeconds();
console.log(sec);

const dayOfWeek = data.getDay();
console.log(dayOfWeek);

console.log("-------------------------------------------------------------");

data.setFullYear(2024);
data.setMonth(3);
data.setDate(2);
data.setHours(2);
data.setMinutes(3);

console.log(data);

console.log("-------------------------------------------------------------");

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1) {
  console.log("Happy New Year");
}
