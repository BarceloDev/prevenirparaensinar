/* =====================================================
   PREVENIR PARA ENSINAR — script.js
   Único trabalho: destacar no menu a página em que o
   visitante está. Assim o cabeçalho pode ser copiado
   igual para as 4 páginas, sem marcar nada à mão.
   ===================================================== */
(function () {
  // nome do arquivo atual (ex.: "pagina2.html"); vazio vira "index.html"
  var atual = location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.menu a').forEach(function (link) {
    if (link.getAttribute('href') === atual) {
      link.classList.add('ativo');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
