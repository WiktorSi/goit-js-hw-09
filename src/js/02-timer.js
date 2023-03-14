import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const fp = document.querySelector('input[type="text"]');
const startButton = document.querySelector('button[data-start]');
const timerDays = document.querySelector('span[data-days]')
const timerHours = document.querySelector('span[data-hours]')
const timerMinutes = document.querySelector('span[data-minutes]')
const timerSeconds = document.querySelector('span[data-seconds]')
startButton.disabled = true;
let ms;
let futureDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (new Date() >= selectedDates[0]) {
          Notiflix.Notify.failure('Please choose a date in teh future');
          return
        }
        startButton.disabled = false;
        futureDate = selectedDates[0];
    },
    
};

flatpickr(fp, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

const addLeadingZero = (value) => {
    return value.toString().padStart(2, '0');
};
      
startButton.addEventListener('click', (timeCounter) => {
            startButton.disabled = true;
            function getCounter () {
                const date = new Date();
                const uniDate = date.getTime();
                const calcDate = new Date(futureDate).getTime();
                const ms = calcDate - uniDate;
                const { days, hours, minutes, seconds } = convertMs(ms);
                if (uniDate >= calcDate) {
                    clearInterval(timer);
                    timerDays.textContent = "00"
                    timerHours.textContent = "00"
                    timerMinutes.textContent = "00"
                    timerSeconds.textContent = "00"
                    return;
                }
        timerDays.textContent = addLeadingZero(convertMs(ms).days)
        timerHours.textContent = addLeadingZero(convertMs(ms).hours)
        timerMinutes.textContent = addLeadingZero(convertMs(ms).minutes)
        timerSeconds.textContent = addLeadingZero(convertMs(ms).seconds)
    }
    timer = setInterval(getCounter, 1000)
})

