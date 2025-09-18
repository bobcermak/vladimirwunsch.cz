import './fontawesome.js';
import './animations.js';
import './swiper.js';
import './tracking.js';

//page__advertisement - number and month
function getWeekOfMonth(date = new Date()){
  const day = date.getDate();
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
  const startDay = monthStart.getDay() || 7;
  return Math.ceil((day + startDay - 1) / 7);
}
function getCandidate() {
  const startNum = 8;
  let candidate = startNum - getWeekOfMonth();
  switch (candidate) {
    case 3:
      return 'poslední 3 místa';
    case 4:
      return 'poslední 4 místa';
    case 5:
      return 'posledních 5 míst';
    case 6:
      return 'posledních 6 míst';
    case 7:
      return 'posledních 7 míst';
    default:
      return 'poslední 1 místo';
  }
}
function getMonth(date = new Date()) {
  const monthList = [
    'lednu', 'únoru', 'březnu', 'dubnu', 'květnu', 'červnu',
    'červenci', 'srpnu', 'září', 'říjnu', 'listopadu', 'prosinci'
  ];
  const monthIndex = date.getMonth();
  return monthList[monthIndex];
}
function getAdvertisement(candidate = getCandidate(), month = getMonth()) {
  const monthDOM = document.querySelector('.page__advertisement-text-month');
  const candidateDOM = document.querySelector('.page__advertisement-text-candidate');
  monthDOM.textContent = month;
  candidateDOM.textContent = candidate;
}
getAdvertisement();

//page__advertisement - none content
document.addEventListener('DOMContentLoaded', () => {
  const adv = document.querySelector('.page__advertisement');
  const advText = adv?.querySelector('.page__advertisement-text');
  if (adv && advText && advText.textContent.trim() === "") {
    adv.style.display = 'none';
  }
});

//footer
document.getElementById("year").textContent = new Date().getFullYear();