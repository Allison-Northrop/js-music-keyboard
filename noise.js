$(document).ready( function() {
  // $('.note c')
  // $('.c').on('click', function(event) {
  //   // alert('Got a click on an <li> containing "' + $(this).html() + '"');
  //    $('#cAudio').play();
  // });

  $('body').keydown(function(event){
    if (event.key == 'c') {
      cAudio.load(),
      cAudio.play();
    }
    if (event.key == 'd') {
      dAudio.load(),
      dAudio.play();
    }

    if (event.key == 'e') {
      eAudio.load(),
      eAudio.play();
    }

    if (event.key == 'f') {
      fAudio.load(),
      fAudio.play();
    }

    if (event.key == 'g') {
      gAudio.load(),
      gAudio.play();
    }

    if (event.key == 'a') {
      aAudio.load(),
      aAudio.play();
    }

    if (event.key == 'b') {
      bAudio.load(),
      bAudio.play();
    }
  })

  $('.c').on('click', function playAudio() {
      cAudio.load(),
      cAudio.play();
  })

  $('.d').on('click', function playAudio() {
      dAudio.load(),
      dAudio.play();
  })
  $('.e').on('click', function playAudio() {
      eAudio.load(),
      eAudio.play();
  })
  $('.f').on('click', function playAudio() {
      fAudio.load(),
      fAudio.play();
  })
  $('.g').on('click', function playAudio() {
      gAudio.load(),
      gAudio.play();
  })
  $('.a').on('click', function playAudio() {
      aAudio.load(),
      aAudio.play();
  })
  $('.b').on('click', function playAudio() {
      bAudio.load(),
      bAudio.play();
  })

});
