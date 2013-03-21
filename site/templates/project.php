<?php echo snippet('header'); ?>
<div class="container">
  <ul class="subnav clearfix">
      <li class="">
        <a href="<?php echo $page->url(); ?>">All</a>
      </li>
      <?php
        $tagcloud = tagcloud($pages->find('portfolio'), array('field' => 'categories'));
        foreach($tagcloud as $category):
      ?>
      <li class="<?php echo $category->name(); ?>">
        <a href="<?php echo $category->url(); ?>"><?php echo $category->name() == 'branding' ? 'BRANDING + IDENTITY' : ucwords($category->name()); ?></a>
      </li>
      <?php endforeach; ?>
  </ul>
  <h2>Work</h2>
</div>
<div class="container clearfix" id="project-view">
  <div class="images">
    <?php foreach($page->images() as $name => $img): ?>
      <?php if ($name != "thumb.png" && $name != "featured.png"): ?>
      <div class="preview">
        <img src="<?php echo $img->url(); ?>" alt="" />
      </div>
      <?php endif; ?>
    <?php endforeach; ?>
  </div>
  <div class="meta">
    <div class="controls">
      <?php
        if ($filter) {
          $projects = $portfolio->children()->children()->sortBy('date','desc');
        } else {
          $projects = $page->siblings()->sortBy('date','desc');
        }
        $i = 0;
        $projects_new = array();
        foreach($projects->_ as $p) {
          $projects_new[$i] = $p;
          $i++;
        }
        $projects = $projects_new;
        $i = 0;
        foreach($projects as $key => $p) {
          if($p->uid() == $page->uid()) {
            break;
          }
          $i++;
        }
        $next_url = $i < sizeof($projects) - 1 ? $projects[$i+1]->url() : null;
        $prev_url = $i > 0 ? $projects[$i-1]->url() : null;
      ?>
      <?php if ($next_url): ?>
        <a href="<?php echo $next_url . ($filter ? '/filter:all' : ''); ?>" class="next right">Next</a>
      <?php endif; ?>
      <?php if ($prev_url): ?>
        <a href="<?php echo $prev_url . ($filter ? '/filter:all' : ''); ?>" class="last">Last</a>
      <?php endif; ?>
    </div>
    <h3 class="name"><?php echo $page->name(); ?></h3>
    <div class="description">
      <?php echo kirbytext($page->description()); ?>
    </div>
    <div class="separator"></div>
    <div class="client data">
      <h4>Client</h4>
      <?php echo kirbytext($page->client()); ?>
    </div>
    <div class="scope data">
      <h4>Scope</h4>
      <?php echo kirbytext($page->scope()); ?>
    </div>
    <?php if ( $page->project_link() ): ?>
      <div class="link data">
        <h4>Link</h4>
        <a href="<?php echo $page->project_link(); ?>">
          <?php echo kirbytext($page->project_link()); ?>
        </a>
      </div>
    <?php endif; ?>
  </div>
</div>
<?php snippet('footer'); ?>
