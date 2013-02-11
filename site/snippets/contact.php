<?php $contact = $pages->findByDirname('contact')->first(); ?>
<div id="contact" class="contact">
  <div class="container clearfix">
    <div class="contact-form">
      <h2>Contact Us</h2>
      <p><?php echo $contact->message(); ?></p>
      <?php snippet('contactform'); ?>
    </div>
    <div class="contact-info">
      <h2>Now Accepting</h2>
      <p><?php echo $contact->accepting(); ?></p>
      <div class="clearfix phone"><img src="assets/images/iphone.png"><p><?php echo $contact->phone_number(); ?></p></div>
      <div class="clearfix email"><img src="assets/images/mail.png"><p><?php echo $contact->email_address(); ?></p></div>
      <div class="social">
        <a class="social-icon facebook" href="http://facebook.com/lainlee3design" target="_blank"></a>
        <a class="social-icon twitter" href="http://twitter.com/lainlee3design" target="_blank"></a>
        <a class="social-icon dribbble" href="http://dribbble.com/lainlee3design" target="_blank"></a>
        <a class="social-icon instagram" href="http://instagram.com/lainlee3" target="_blank"></a>
      </div>
    </div>
  </div>
</div>
