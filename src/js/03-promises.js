import Notiflix from 'notiflix';
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const promisesButton = document.querySelector('button[type="submit"]');
const form = document.querySelector(".form");


function createPromise(position, delay) {
        const shouldResolve = Math.random() > 0.3;
        return new Promise((resolve, reject) => {
          setTimeout(() => { 
            if (shouldResolve) {
              resolve({ position, delay })
            }
            else {
              reject({ position, delay });
            }
          }, delay)
        })      
};
     
function showPromise(e) {
  e.preventDefault();
  
  const { elements: { amount, delay, step } } = e.currentTarget;
    
 let currentAmount = e.currentTarget.amount.value;
  let startDelay = Number(e.currentTarget.delay.value);
  let delayStep = Number(e.currentTarget.step.value);
         
        for (let position = 1; position <= currentAmount; position++) {
          createPromise(position, startDelay)
          .then(({ position, delay }) => {
            Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
          });
          
          startDelay += delayStep;
        }
}

form.addEventListener("submit", showPromise);


