const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timezone: "UTC",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const greeting = document.querySelector(".greeting");
const day = document.querySelector(".day");
const time = document.querySelector(".time");
const daysLeft = document.querySelector(".days-left");
const newYearDate = new Date("1 January 2023");

const dateOutput = () => {
  const currentTime = new Date();
  const dateFormatRU = currentTime.toLocaleString("ru", options).split(", ");
  const dateFormatEN = currentTime.toLocaleString("en-US", options).split(", ");
  const hours = currentTime.getHours();

  if (hours >= 0 && hours < 4) {
    greeting.textContent = "Доброй ночи";
  } else if (hours >= 4 && hours < 12) {
    greeting.textContent = "Доброе утро";
  } else if (hours >= 12 && hours < 18) {
    greeting.textContent = "Добрый день";
  } else if (hours >= 18 && hours < 24) {
    greeting.textContent = "Добрый вечер";
  }

  const timeForNewYaer = Math.floor(
    (newYearDate - currentTime) / 1000 / 3600 / 24
  );

  day.textContent = day.textContent = `Сегодня: ${
    dateFormatRU[0].charAt(0).toUpperCase() + dateFormatRU[0].substring(1)
  }`;
  time.textContent = `Текущее время: ${dateFormatEN[3]}`;
  daysLeft.textContent = `До нового года осталось ${timeForNewYaer} дней`;
};

setInterval(() => {
  dateOutput();
}, 500);
