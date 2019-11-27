// Provate a riprodurre uno slider di immagini simile a quello visto a lezione, con grafica totalmente a piacere!
// BONUS: cambiare immagine cliccando sui pallini (mostrando quindi l'immagine con indice corrispondente)

$(document).ready(function() {
  $('.arrowRight').click(function() { //al click sulla freccia di destra imposto una funzione
    var imgActive = $('img.active'); //dichiaro la var contenente l'immagine visibile
    var imgNext = imgActive.next('img'); //dichiaro la var contenente l'immagine successiva
    if (imgNext.length == 0) { //se l'immagine successiva è false (cioè non è visibile) aggiungo la classe acrive per renderla visibile
      $('imgNext').addClass('active');
    }
  })
});
