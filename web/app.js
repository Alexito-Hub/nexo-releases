/**
 * Animaciones de revelado al hacer scroll.
 * Cero dependencias. Usa IntersectionObserver, ampliamente soportado.
 *
 * Elementos con `data-reveal` o `data-reveal-stagger` reciben la clase
 * `revealed` cuando entran en el viewport (umbral 15%). El CSS define
 * los estados antes/después y la transición.
 */
(function () {
  'use strict';

  // Fallback: si no hay IntersectionObserver, mostrar todo de inmediato.
  if (!('IntersectionObserver' in window)) {
    document
      .querySelectorAll('[data-reveal], [data-reveal-stagger]')
      .forEach(function (el) { el.classList.add('revealed'); });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  document
    .querySelectorAll('[data-reveal], [data-reveal-stagger]')
    .forEach(function (el) { io.observe(el); });
})();
