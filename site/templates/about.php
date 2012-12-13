<?php echo snippet('header') ?>

<div class="about-text">
  <div class="container">
    <h2><?php echo $page->title() ?></h2>
    <img src="assets/images/fantastic.png" alt="" id="fantastic" />
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
<div class="stats-profile">
  <div class="container clearfix">
    <a href="#" class="top-button">Top</a>
    <div class="stats">
      <h2>Stats</h2>
      <?php
        $stats = $page->stats();
        $stats = explode("\n", $stats);
        foreach($stats as $s):
          $s = explode(" - ", $s);
      ?>
      <div class="stat">
        <div class="prop"><?php echo $s[0] ?></div>
        <div class="value"><?php echo $s[1] ?></div>
      </div>
      <?php
        endforeach;
      ?>
    </div>
    <div class="profile">
      <h2>Profile</h2>
      <div class="video">
        <img src="assets/images/video.png" alt="" />
      </div>
    </div>
    <div class="text">
      <?php echo kirbytext($page->stats_text()); ?>
    </div>
  </div>
</div>
<div class="faq">
  <div class="container">
    <a href="#" class="top-button">Top</a>
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
