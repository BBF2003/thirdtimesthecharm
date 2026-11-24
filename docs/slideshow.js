(function () {
  var slides = document.querySelectorAll('.slide');
  var count = document.getElementById('slide-count');
  var i = 0;
  if (!slides.length) return;

  function show(n) {
    slides[i].classList.remove('active');
    i = (n + slides.length) % slides.length;
    slides[i].classList.add('active');
    count.textContent = (i + 1) + ' / ' + slides.length;
  }

  document.getElementById('slide-prev').onclick = function () { show(i - 1); };
  document.getElementById('slide-next').onclick = function () { show(i + 1); };
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
  show(0);
})();
