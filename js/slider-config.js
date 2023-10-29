import './nouislider.min.js';
const costInput = document.querySelector('#cost-input');
const contributionInput = document.querySelector('.calculator__input--contribution');
const contribution = document.querySelector('#contribution-cost');
const termInput = document.querySelector('#term-input');
const sumField = document.querySelector('.sum__count');
const onMonthFiled = document.querySelector('.on-month__count');

const Calculator = {
  COST: 3300000,
  CONTRIBUTION: 10,
  TERM: 1,
  SUM: 4467313,
  ON_MONTH: 114455,
  PERCENT: 7,
};

const updateValues = (data) => {
  costInput.value = data.COST;
  contributionInput.value = data.CONTRIBUTION;
  termInput.value = data.TERM;
  contribution.textContent = data.CONTRIBUTION * data.COST;
  sumField.textContent = (data.CONTRIBUTION * data.COST) + (data.TERM * data.ON_MONTH);
  onMonthFiled.textContent = data.COST - ((data.CONTRIBUTION * data.COST) * (data.PERCENT/(1 + data.PERCENT) - (data.TERM - 1)));
};

const costSlider = document.querySelector('#cost-slider');

noUiSlider.create(costSlider, {
  start: [3300000],
  connect: 'lower',
  range: {
      'min': 1000000,
      'max': 6000000
  },
});

costSlider.noUiSlider.on('update', (value) => {
  Calculator.COST = Math.round(value);
  updateValues(Calculator);
});

const contributionSlider = document.querySelector('#contribution-slider');


noUiSlider.create(contributionSlider, {
  start: [10],
  connect: 'lower',
  range: {
    'min': 10,
    'max': 60,
  },
})

contributionSlider.noUiSlider.on('update', (value) => {
  Calculator.CONTRIBUTION = Math.round(value);
  updateValues(Calculator);
});

const termSlider = document.querySelector('#term-slider');

noUiSlider.create(termSlider, {
  start: [10],
  connect: 'lower',
  range: {
    'min': 1,
    'max': 60,
  },
});

termSlider.noUiSlider.on('update', (value) => {
  Calculator.TERM = Math.round(value);
  updateValues(Calculator);
});
