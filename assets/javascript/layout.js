$(function() {

  $( '.top-button' ).click( function() {
    $( 'html, body' ).animate({
      scrollTop: $( 'body' ).offset().top
    }, 300);
  });

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
      height: 256,
      marginBottom: 20
    }, 1000, function() {
      $fbLikeBox.css( 'margin-bottom', '20px' );
    });
  }

  $(".tweets-inner").tweet({
    join_text: "auto",
    username: "lainlee3design",
    fetch: 20,
    count: 3,
    filter: function(t){ return ! /^@\w+/.test(t.tweet_raw_text); },
    template: "{time} {text}"
  });
});