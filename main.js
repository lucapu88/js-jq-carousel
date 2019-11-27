// Provate a riprodurre uno slider di immagini simile a quello visto a lezione, con grafica totalmente a piacere!
// BONUS: cambiare immagine cliccando sui pallini (mostrando quindi l'immagine con indice corrispondente)

$(document).ready(function() {
  $('.arrowRight').click(function() { //al click sulla freccia di destra imposto una funzione.
    var imgActive = $('img.active'); //dichiaro la var contenente l'immagine visibile.
    var imgNext = imgActive.next('img'); //dichiaro la var contenente l'immagine successiva.
    if (imgNext.length == 0) { //controllo che ci sia un'immagine e nel caso non c'è, riprende l'immagine iniziale
      imgNext = $('img.first');
    }
    if (!imgNext.hasClass('active')) { //se l'immagine successiva non ha classe active la aggiungo per renderla visibile e rimuovo la classe active dove era attiva in precedenza (in pratica sposto active).
      $(imgActive).removeClass('active');
      $(imgNext).addClass('active');
    }

  });//qui sotto faccio la stessa cosa, ma cliccando sulla freccia di sinistra. Non va all'immagine successiva ma va all'immagine precedente,
  $('.arrowLeft').click(function() {
    var imgActive = $('img.active');
    var imgNext = imgActive.prev('img');
    if (imgNext.length == 0) {
      imgNext = $('img.last');
    }
    if (!imgNext.hasClass('active')) {
      $(imgActive).removeClass('active');
      $(imgNext).addClass('active');
    }
  });
});
