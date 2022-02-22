const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  let idInterval;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let seconds = Math.floor(timeRemaining % 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    const hours = Math.floor(timeRemaining / 60 / 60);

    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const addZero = (value) => {
    if (value < 10) {
      value = "0" + value;
    }
    return value;
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerHours.textContent = addZero(getTime.hours);
    timerMinutes.textContent = addZero(getTime.minutes);
    timerSeconds.textContent = addZero(getTime.seconds);

    if (getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    } else if (getTime.timeRemaining < 0) {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };

  updateClock();
};

export default timer;
