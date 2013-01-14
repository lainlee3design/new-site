<?php $contact = $pages->findByDirname('contact')->first(); ?>
<div id="contact" class="contact">
  <div class="container clearfix">
    <div class="contact-form">
      <h2>Contact Us</h2>
      <p><?php echo $contact->message(); ?></p>
      <form action="">
        <div class="column-1">
          <div class="field">
            <label for="">Name*</label><br>
            <input />
          </div>
          <div class="field">
            <label for="">Email*</label><br>
            <input />
          </div>
          <div class="field">
            <label for="">Company</label><br>
            <input />
          </div>
        </div>
        <div class="column-2">
          <div>
            <label for"">Message</label><br>
            <textarea></textarea>
          </div>
          <br>
          <input class="right" type="submit" value="<?php echo $contact->button_text(); ?>"/>
        </div>
      </form>
    </div>
    <div class="contact-info">
      <h2>Now Accepting</h2>
      <p><?php echo $contact->accepting(); ?></p>
      <div class="clearfix phone"><img src="assets/images/iphone.png"><p><?php echo $contact->phone_number(); ?></p></div>
      <div class="clearfix email"><img src="assets/images/mail.png"><p><?php echo $contact->email_address(); ?></p></div>
      <div class="social">
        <a href="#"><img src="assets/images/facebook-large.png"></a>
        <a href="#"><img src="assets/images/twitter-large.png"></a>
        <a href="#"><img src="assets/images/dribbble-large.png"></a>
        <a href="#"><img src="assets/images/tumblr-large.png"></a>
        <a href="#"><img src="assets/images/vimeo-large.png"></a>
      </div>
    </div>
  </div>
</div>
