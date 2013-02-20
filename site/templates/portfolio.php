<?php echo snippet('header') ?>
<?php $category = $site->uri()->path(2); ?>
<div class="container">
  <ul class="subnav clearfix">
    <?php $nav = array('branding' => 'Branding + Identity', 'illustration' => 'Illustration', 'web' => 'Web', 'other' => 'Other'); ?>
      <li class="<?php echo $category ? '' : 'active'; ?>">
        <a href="<?php echo $category ? $page->parent()->url() : $page->url() ?>">All</a>
      </li>
    <?php
      foreach($nav as $key => $n):
    ?>
      <li class="<?php echo $category == $key ? 'active' : '' ?>">
        <a href="<?php echo $category ? $page->parent()->url() . '/' . $key : $page->url() . '/' . $key; ?>"><?php echo $n; ?></a>
      </li>
    <?php
      endforeach;
    ?>
  </ul>
  <h2>Work</h2>
</div>
<div class="container">
  <div id="portfolio-grid" class="clearfix">
    <?php
      if ($category) {
        $thumbnails = $page->children()->sortBy('date', 'desc');
        $filter = null;
      } else {
        $thumbnails = $page->children()->children()->sortBy('date','desc');
        $filter = '/filter:all';
      }
      $i = 0;
    ?>
    <?php foreach($thumbnails as $thumb): ?>
      <?php
        if ($i > 19) break;
        $i++;
      ?>
      <a href="<?php echo $thumb->url() . $filter; ?>" class="work-thumbnail">
        <img src="<?php echo $thumb->files()->find('thumb.jpg')->url(); ?>" alt="" />
      </a>
    <?php endforeach; ?>
  </div>
</div>
<?php snippet('footer'); ?>
