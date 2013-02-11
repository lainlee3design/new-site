<!DOCTYPE HTML>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?php echo html($site->title()) ?> - <?php echo html($page->title()) ?></title>
  <?php echo css('assets/styles/styles.css') ?>
  <?php echo css('assets/styles/social-icons2.css') ?>
</head>
<body id="about">
  <div class="header">
    <div class="container">
      <div class="header-social">
        <a class="social-icon facebook" href="http://facebook.com/lainlee3design" target="_blank"></a>
        <a class="social-icon twitter" href="http://twitter.com/lainlee3design" target="_blank"></a>
        <a class="social-icon dribbble" href="http://dribbble.com/lainlee3design" target="_blank"></a>
        <a class="social-icon instagram" href="http://instagram.com/lainlee3" target="_blank"></a>
      </div>
      <ul class="contact-nav">
        <li><a href="http://lainlee3design.basecamphq.com/">Client Login</a></li>
        <li><a href="<?php echo $pages->find('collaborate')->url(); ?>">Collaborate</a></li>
        <li><a href="<?php echo $pages->find('home')->url() . '#contact'; ?>">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="main">
    <div class="top">
      <div class="container clearfix">
        <div class="logo"><img src="<?php echo url('assets/images/logo-large.png') ?>" alt="III"></div>
        <ul class="nav">
          <?php $home = $pages->find('home'); ?>
          <li class="<?php echo $home->isOpen() || $page->nav() == 'Home' ? 'active' : '' ?>"><a href="<?php echo $home->url(); ?>"><?php echo $home->title() ?></a></li>
          <?php foreach($pages->visible() as $page): ?>
            <li<?php echo ($page->isOpen()) ? ' class="active"' : ''?>><a href="<?php echo $page->url(); ?>"><?php echo $page->title() . ($page->nav_character()) ?></a></li>
          <?php endforeach; ?>
          <li class="last"><a href="">Shop</a></li>
        </ul>
      </div>
    </div>
