$(document).ready(function () {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    /* Target de navbar a secciones */
    $("a").click(function () {
      var flag = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(flag).offset().top,
        },
        1000
      );
    });
  
  })