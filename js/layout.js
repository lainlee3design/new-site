$(function() {

  $( '#newsletter-signup' ).wpForm({
    ajaxSubmit: false
  });

  $( '.search-bar form' ).wpForm({ ajaxSubmit: false });

  var $fbLikeBox = $( '.fb-like-box' ),
    html = $fbLikeBox.html();
  var t = setInterval( function() {
    if ( $fbLikeBox.html() != html ) {
      clearInterval( t );
      iframeLoaded();
    }
  }, 1000);

  function iframeLoaded() {
    $( '.fb-like-wrapper' ).animate({
      height: 256
    }, 500, function() {
      $fbLikeBox.css( 'margin-bottom', '20px' );
    });
  }

});
