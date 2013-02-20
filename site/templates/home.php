<?php echo snippet('header') ?>

<div class="showcase">
  <div class="container">
    <div class="slider">
      <div class="slider-clip">
        <div class="slider-view">
          <?php
            $i = 0;
            $images = $page->children()->first()->images();
            foreach($images as $image):
          ?>
          <div class="slide">
            <img id="banner-<?php echo $i; ?>" src="<?php echo $image->url() ?>" alt="<?php echo preg_replace("/[0-9]*(\-)?/", "", $image->name()) ?>"/>
          </div>
          <?php
              $i++;
            endforeach;
          ?>
        </div>
      </div>
      <div class="thumbs">
        <a href="#banner-1" class="thumb"></a>
        <a href="#banner-2" class="thumb"></a>
        <a href="#banner-3" class="thumb"></a>
      </div>
    </div>
    <div class="banner">
      <div class="triangle triangle-1"></div>
      <div class="triangle triangle-2"></div>
      <strong><i>Now Accepting:</i></strong>Projects in Logo Design, iOS Design, Web Design & Motion Graphics
    </div>
  </div>
</div>
<div class="tag">
  <div class="container">
  <div class="tagline"><?php echo $page->hello(); ?></div>
    <div class="hello">Helllo.</div>
  </div>
</div>
<div class="work">
  <div class="container clearfix">
    <h2>Featured Work<a href="#" class="button right">View Full Portfolio</a></h2>
    <?php
      $featured = $pages->find('portfolio')->children()->children()->filterBy('featured', 'true')->limit(3);
      $size = sizeof($featured->_);
      $i = 1;
      foreach($featured as $project):
    ?>
      <div class="project-card <?php echo $i == $size ? 'last' : '' ?>">
        <a href="<?php echo $project->url(); ?>">
          <div class="thumbnail"><img src="<?php echo $project->files()->find('featured.jpg')->url(); ?>" alt="" /></div>
        </a>
        <div class="project-meta">
          <a href="<?php echo $project->url(); ?>" class="name"><?php echo $project->title(); ?></a>
          <a href="<?php echo $project->parent()->url(); ?>" class="category"><?php echo $project->category(); ?></a>
        </div>
      </div>
    <?php $i++; endforeach; ?>
  </div>
</div>
<div class="stream">
  <div class="container clearfix">
    <div class="latest-post">
      <div class="head"><div class="triangle"></div>Latest Post <strong>//</strong></div>
      <div class="post-title">Sample Blog Post Title: Can be as wide as this and can two lines if necessary</div>
      <div class="post-date">Thursday September 19th, 2012</div>
      <div class="post-preview">
        <p>Venenatis magna feugiat nisi. Vestibulum et turpis. Maecenas a enim.
          Suspendisse ultricies ornare justo. Fusce sit amet nisi sed arcu
          condimentum.
        </p>
      </div>
      <a href="" class="button black right">Read More</a>
    </div>
    <?php $rand = array_rand($pages->find('testimonials')->files()->_); ?>
    <?php $testimonial = $pages->find('testimonials')->files()->_[$rand]; ?>
    <div class="testimonial">
      <div class="head"><div class="triangle"></div>Testimonials <strong>//</strong></div>
      <div class="quote">"<?php echo $testimonial->variables['text']; ?>"</div>
      <div class="name"><?php echo $testimonial->variables['_name']; ?></div>
      <div class="title"><?php echo $testimonial->variables['position']; ?></div>
    </div>
  </div>
</div>
<?php snippet('contact'); ?>
<?php snippet('footer'); ?>
