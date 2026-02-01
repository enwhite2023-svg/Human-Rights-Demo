const translations = {
    'ru': {
        instruction: 'Приложи палец и держи',
        l1: 'Я ЕСТЬ ТОТ, КТО СВОБОДЕН НЕ УБИВАТЬ',
        l2: 'МОЯ МИССИЯ — СЧАСТЛИВОЕ БУДУЩЕЕ ДЕТЕЙ ЗЕМЛИ',
        l3: 'МОЙ ВЫБОР — ЖИЗНЬ, МОЙ ПУТЬ — ЛЮБОВЬ',
        button: 'ТВОРИТЬ МИР ВНОВЬ 🕊️'
    },
    'en': {
        instruction: 'PRESS AND HOLD YOUR FINGER',
        l1: 'I AM THE ONE WHO IS FREE NOT TO KILL',
        l2: 'MY MISSION IS A HAPPY FUTURE FOR EARTH\'S CHILDREN',
        l3: 'MY CHOICE IS LIFE, MY PATH IS LOVE',
        button: 'CREATE PEACE AGAIN 🕊️'
    },
    'uk': {
        instruction: 'Приклади палець і тримай',
        l1: 'Я Є ТОЙ, ХТО ВІЛЬНИЙ НЕ ВБИВАТИ',
        l2: 'МОЯ МІСІЯ — ЩАСЛИВЕ МАЙБУТНЄ ДІТЕЙ ЗЕМЛІ',
        l3: 'МІЙ ВИБІР — ЖИТТЯ, МІЙ ШЛЯХ — ЛЮБОВ',
        button: 'ТВОРИТИ МИР ЗНОВУ 🕊️'
    }
};

let userLang = navigator.language.slice(0, 2);
if (!translations[userLang]) {
    userLang = 'en';
}
const lang = translations[userLang];

document.getElementById('instruction').textContent = lang.instruction;
document.getElementById('line1').textContent = lang.l1;
document.getElementById('line2').textContent = lang.l2;
document.getElementById('line3').textContent = lang.l3;
document.getElementById('reset-btn').textContent = lang.button;

const handContainer = document.getElementById('hand-container');
const humanRightsLogo = document.getElementById('human-rights-logo');
const flash = document.getElementById('flash');
const manifesto = document.getElementById('manifesto');
const lines = document.querySelectorAll('.line, .logo, #reset-btn');
const resetBtn = document.getElementById('reset-btn');
let timer;

['mousedown', 'touchstart'].forEach(evt => handContainer.addEventListener(evt, () => {
  humanRightsLogo.style.transform = 'translate(-50%, -50%) scale(1.1)';
  if (navigator.vibrate) navigator.vibrate(200);

  timer = setTimeout(() => {
    flash.style.transition = 'none';
    flash.style.opacity = '1';

    setTimeout(() => {
      flash.style.transition = 'opacity 1.5s ease';
      flash.style.opacity = '0';
      handContainer.style.display = 'none';
      manifesto.style.display = 'block';

      lines.forEach((line, i) => {
        setTimeout(() => line.classList.add('visible'), i * 1800);
      });
    }, 100);
  }, 3000);
}));

['mouseup', 'mouseleave', 'touchend'].forEach(evt => handContainer.addEventListener(evt, () => {
  clearTimeout(timer);
  humanRightsLogo.style.transform = 'translate(-50%, -50%) scale(1)';
}));

resetBtn.addEventListener('click', () => {
  window.location.href = 'https://www.ohchr.org';
});
