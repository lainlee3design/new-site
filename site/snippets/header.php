<!DOCTYPE HTML>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?php echo html($site->title()) ?> - <?php echo html($page->title()) ?></title>
  <?php echo css('assets/styles/styles.css') ?>
  <?php echo css('assets/styles/icons.css') ?>
</head>
<body id="about">
  <div class="header">
    <div class="container">
      <div class="social">
        <a class="facebook" href="#"></a>
        <a class="twitter" href="#"></a>
        <a class="dribbble" href="#"></a>
        <a class="tumblr" href="#"></a>
        <a class="vimeo" href="#"></a>
      </div>
      <ul class="contact-nav">
        <li><a href="#">Client Login</a></li>
        <li><a href="#">Schedule a Meeting</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="main">
    <div class="top">
      <div class="container clearfix">
        <div class="logo"><img src="<?php echo url('assets/images/logo-large.png') ?>" alt="III"></div>
        <ul class="nav">
          <?php $nav_pages = array("Home", "About", "Work", "Blllog");
            foreach($nav_pages as $page_name): 
              $page = $pages->findByTitle($page_name)->first();
          ?> 
            <li<?php echo ($page->isOpen()) ? ' class="active"' : ''?>><a href="<?php echo $page->url(); ?>"><?php echo $page_name . ($page->nav_character()) ?></a></li>
          <?php endforeach; ?>
          <li class="last"><a href="">Shop</a></li>
        </ul>
      </div>
    </div>
