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


  $( '.fb-like-box iframe' ).on( 'load', function() {
    $( '.fb-like-wrapper' ).animate({
      height: 256,
      marginBottom: 20
    }, 1000);
  });

  $(".tweets-inner").tweet({
    join_text: "auto",
    username: "lainlee3design",
    fetch: 20,
    count: 3,
    filter: function(t){ return ! /^@\w+/.test(t.tweet_raw_text); },
    template: "{time} {text}"
  });

  $( '.collab-contact' ).click( function( evt ) {
      var $form = $( '#contact form' )
          $item = $( this ).closest( '.collab-item' ),
          title = $item.find( 'h3:first' ).text(),
          $message = $form.find( '[name=text]' );

      $message.text( "Responding to " + title + " - " );
  });

  var scrollTo = function( $el ) {
    $( 'html, body' ).animate({
      scrollTop: $el.offset().top
    }, 300);
  }

  var initialHash = window.location.hash.substring(1);
  if ( initialHash ) {
    scrollTo( $( '#' + initialHash ) );
  }

  $( '[data-scroll-to]' ).click( function( evt ) {
    console.log('test');
    var $this = $( this ),
      id = $this.attr( 'data-scroll-to' ),
      $target = $( id );

    if ( $target.length ) {
      evt.preventDefault();
      $( 'html, body' ).animate({ scrollTop: $target.offset().top }, 300 );
    }
  });

  $( '.top.button' ).click( function( evt ) {
    evt.preventDefault();
    scrollTo( $( 'body' ) );
  });

});
