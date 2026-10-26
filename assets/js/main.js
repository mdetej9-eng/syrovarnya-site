// Сыроварня Натальи Уско — интерактив сайта

// Мобильное меню
(function () {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }
})();

// Плавное появление блоков при скролле
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();

// Текущий год в подвале
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Форма на странице контактов: собираем сообщение и открываем WhatsApp
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var msg =
      'Здравствуйте! Заявка с сайта сыроварни.%0A' +
      'Имя: ' + encodeURIComponent(data.get('name') || '—') + '%0A' +
      'Телефон: ' + encodeURIComponent(data.get('phone') || '—') + '%0A' +
      'Интересует: ' + encodeURIComponent(data.get('topic') || '—') + '%0A' +
      'Комментарий: ' + encodeURIComponent(data.get('comment') || '—');
    window.open('https://wa.me/79289635934?text=' + msg, '_blank');
  });
})();
