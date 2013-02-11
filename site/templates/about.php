<?php echo snippet('header') ?>

<div class="about-text">
  <div class="container">
    <img src="assets/images/fantastic.png" alt="" id="fantastic" />
    <ul class="subnav clearfix">
      <li class="active">
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#stats-profile">Stats + Profile</a>
      </li>
      <li>
        <a href="#faq">FAQ</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <h2 id="about"><?php echo $page->title() ?></h2>
    <?php echo kirbytext(preg_replace("/\n.*/", "", $page->text())) ?>
    <img src="assets/images/passion-purpose.png" alt="" class="right" style="margin-left: 10px;" />
    <?php
      preg_match("/\n/", $page->text(), $matches, PREG_OFFSET_CAPTURE);
      $pos = $matches[0][1];
      $text = $page->text();
    ?>
    <?php echo kirbytext(substr($text, $pos, strlen($text) - $pos)) ?>
  </div>
</div>
<div id="stats-profile" class="stats-profile">
  <div class="container clearfix">
    <a href="#about" class="button">Top</a>
    <div class="stats">
      <h2>Stats</h2>
      <?php
        $stats = $page->stats();
        $stats = explode("\n", $stats);
        foreach($stats as $s):
          $s = explode(" - ", $s);
      ?>
      <div class="stat">
        <div class="prop"><?php echo $s[0] ?>:</div>
        <div class="value"><?php echo $s[1] ?></div>
      </div>
      <?php
        endforeach;
      ?>
    </div>
    <div class="profile">
      <h2>Profile</h2>
      <div class="video">
        <iframe src="http://player.vimeo.com/video/40705287?title=0&amp;byline=0&amp;portrait=0" width="653" height="367" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
      </div>
    </div>
    <div class="text">
      <?php echo kirbytext($page->stats_text()); ?>
    </div>
  </div>
</div>
<div id="faq" class="faq">
  <div class="container">
    <a href="#about" class="button black">Top</a>
    <h2>FAQ</h2>
    <?php
      $faq = $page->faq();
      $faq = explode("\nQ: ", $faq);
      $faq[0] = preg_replace("/Q\:\s/", "", $faq[0]);
      foreach($faq as $q):
        $q = explode("\nA: ", $q);
    ?>
    <div class="qa">
      <div class="question"><?php echo $q[0] ?></div>
      <div><?php echo $q[1] ?></div>
    </div>
    <?php
      endforeach;
    ?>
    
  </div>
</div>
<?php snippet('contact'); ?>
<?php snippet('footer'); ?>
