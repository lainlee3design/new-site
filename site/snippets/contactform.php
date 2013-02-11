<?php

$form = new contactform(array(
  'to'       => 'Tyler <tabenziger@gmail.com>',
  'from'     => 'Contact Form <contactform@lainlee3design.com>',
  'subject'  => 'New contact form request',
  'goto'     => $page->url() . '/status:thank-you'
));

?>
<section id="contactform">
<?php var_dump($form->isError('send')); ?>

  <?php if(param('status') == 'thank-you'): ?>

  <h1>Thank you very much for your request</h1>
  <p class="contactform-text">We will get in contact as soon as possible</p>
  
  <?php else: ?>

  <h1>Get in contact</h1>
  
  <form action="#contactform" method="post">
    <div class="column-1">
      <div class="contactform-field<?php if($form->isError('name')) echo ' error' ?> field">
        <label class="contactform-label" for="contactform-name">Name <?php if($form->isRequired('name')) echo '*' ?> <?php if($form->isError('name')): ?><small>Please enter a name</small><?php endif ?></label><br>
          <input class="contactform-input" type="text" id="contactform-name" name="name" value="<?php echo $form->htmlValue('name') ?>" />
      </div>
  
      <div class="contactform-field<?php if($form->isError('email')) echo ' error' ?> field">
        <label class="contactform-label" for="contactform-email">Email <?php if($form->isRequired('email')) echo '*' ?> <?php if($form->isError('email')): ?><small>Please enter a valid email address</small><?php endif ?></label><br>
        <input class="contactform-input" type="text" id="contactform-email" name="email" value="<?php echo $form->htmlValue('email') ?>" />
      </div>
  
      <div class="contactform-field<?php if($form->isError('company')) echo ' error' ?> field">
        <label class="contactform-label" for="company">Company</label><br>
        <input class="contactform-input" type="text" id="contactform-company" name="company" value="<?php echo $form->htmlValue('company') ?>" />
      </div>
    </div>
    <div class="column-2">
      <div>
        <div class="contactform-field<?php if($form->isError('text')) echo ' error' ?>">
          <label class="contactform-label" for="contactform-text">Message <?php if($form->isRequired('text')) echo '*' ?> <?php if($form->isError('text')): ?><small>Please enter your text</small><?php endif ?></label>
          <textarea class="contactform-input" name="text" id="contactform-text"><?php echo $form->htmlValue('text') ?></textarea>
        </div>
      </div>
      <br>
      <input class="right button" type="submit" value="<?php echo $pages->find('contact')->button_text(); ?>"/>
    </div>
  </form>
  
  <?php endif ?>

</section>
