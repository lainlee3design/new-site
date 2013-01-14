<?php
  $articles = $pages->find('blllog')->children()->visible()->flip()->limit(10);

  snippet('feed', array(
    'link' => url('blllog'),
    'items' => $articles,
    'descriptionField' => 'text',
    'descriptionLength' => 300
  ));
?>
