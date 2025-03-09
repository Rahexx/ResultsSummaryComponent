const map = {
  Reaction: '.summary__info--red',
  Memory: '.summary__info--yellow',
  Verbal: '.summary__info--green',
  Visual: '.summary__info--blue',
};

function updateContent(data) {
  for (let i = 0; i < data.length; i++) {
    const { category, score, icon } = data[i];
    const selector = map[category];

    if (!selector) continue;

    const info = document.querySelector(selector);
    const infoIcon = info.querySelector('.summary__icon');
    const scorePoint = info.querySelector('.summary__score');

    if (icon) infoIcon.src = icon;
    if (score) scorePoint.textContent = score;
  }
}

function fetchData() {
  fetch('data.json')
    .then((res) => res.json())
    .then((data) => updateContent(data))
    .catch((err) => console.error('Error:', err));
}

window.addEventListener('DOMContentLoaded', fetchData);
