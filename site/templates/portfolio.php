<?php
  echo snippet('header');
  $category_filter = $site->uri()->params('categories');
  if ( !$category_filter ) $category_filter = 'all';
?>
<div class="container">
  <ul class="subnav clearfix">
  <li class="<?php echo $category_filter == 'all' ? 'active' : ''; ?>">
        <a href="<?php echo $page->url(); ?>">All</a>
      </li>
      <?php
        $tagcloud = tagcloud($pages->find('portfolio'), array('field' => 'categories','param' => 'categories'));
        foreach($tagcloud as $category):
      ?>
      <li class="<?php echo $category->name(); ?> <?php echo $category_filter == $category->name() ? 'active' : ''; ?>">
        <a href="<?php echo $category->url(); ?>"><?php echo $category->name() == 'branding' ? 'BRANDING + IDENTITY' : ucwords($category->name()); ?></a>
      </li>
      <?php endforeach; ?>
  </ul>
  <h2>Work</h2>
</div>
<div class="container">
  <div id="portfolio-grid" class="clearfix">
    <?php
      if ($category_filter != 'all') {
        $thumbnails = $page->children()->filterBy('categories', $category_filter, ',')->sortBy('date', 'desc')->visible();
      } else {
        $thumbnails = $page->children()->filterBy('categories', true, ',')->sortBy('date','desc')->visible();
      }
      $i = 0;
    ?>
    <?php foreach($thumbnails as $thumb): ?>
      <?php
        if ($i > 19) break;
        $i++;
      ?>
      <a href="<?php echo $thumb->url(); ?>" class="work-thumbnail">
        <img src="<?php echo $thumb->files()->find('thumb.png')->url(); ?>" alt="" />
      </a>
    <?php endforeach; ?>
  </div>
</div>
<?php snippet('footer'); ?>
