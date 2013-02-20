<?php echo snippet('header') ?>
<div class="container">
  <h2>Blllog&trade;</h2>
</div>
<div id="blog-container" class="container clearfix">
  <div id="blog" class="left">
    <?php
      $tag_filter = $site->uri()->params('tag');
      if (get('search')) {
        $search = new search(array(
          'searchfield' => 'search',
          'paginate' => 4,
          'in' => $page->uri()
        ));
        $posts = $search->results();
      } else if ($tag_filter) {
        $posts = $page->children()->filterBy('tags', $tag_filter, ',')->flip()->visible();
      } else {
        $posts = $page->children()->flip()->visible();
      }

      $month = $site->uri()->params('month');
      $year = $site->uri()->params('year');
      if ($month && $year) {
        foreach($posts->_ as $key => $p) {
          if (strtolower(strftime('%B', $p->date())) != $month || strftime('%Y', $p->date()) != $year) {
            unset($posts->_[$key]);
          }
        }
      }
      $posts = $posts->paginate(4);
      if($posts):
        foreach($posts as $post):
    ?>
    <?php if ($post->isVisible()): ?>
      <div class="post">
        <div class="post-header clearfix">
          <div class="img"></div>
          <div class="text">
          <h3><a href="<?php echo $post->url(); ?>"><?php echo $post->title(); ?></a></h3>
            <div class="meta">
              Posted by <a href="<?php echo $site->url(); ?>"><?php echo $post->author(); ?></a> on <strong><?php echo $post->date('M d, Y'); ?></strong>
            </div>
          </div>
        </div>
        <?php if ($post->images()->first()): ?>
        <div class="post-image">
          <img src="<?php echo $post->header_image() ? $post->files()->find($post->header_image()->value)->url() : $post->images()->first()->url(); ?>" alt="" />
        </div>
        <?php endif; ?>
        <div class="preview">
          <?php $arr = explode("\n", $post->text());
          echo kirbytext(implode("\n", array($arr[0],$arr[1]))); ?>
        </div>
        <a class="button right" href="<?php echo $post->url() ?>">Read more</a>
        <div class="social">
          <!-- AddThis Button BEGIN -->
          <div class="addthis_toolbox addthis_default_style ">
          <a class="addthis_button_facebook_like" fb:like:layout="button_count"></a>
          <a class="addthis_button_tweet"></a>
          <a class="addthis_button_google_plusone" g:plusone:size="medium"></a>
          <a class="addthis_counter addthis_pill_style"></a>
          </div>
          <!-- AddThis Button END -->
        </div>
      </div>
    <?php endif; ?>
    <?php endforeach; ?>
      <?php if ($posts->pagination()->hasPages()): ?>
        <div class="blog-pagination">
          <?php if ($posts->pagination()->hasNextPage()): ?>
            <a href="<?php echo $posts->pagination()->nextPageURL(); ?>" class="button next">Next</a>
          <?php endif; ?>
          <?php if ($posts->pagination()->hasPrevPage()): ?>
            <a href="<?php echo $posts->pagination()->prevPageURL(); ?>" class="button prev">Previous</a>
          <?php endif; ?>
        </div>
      <?php endif; ?>
    <?php else: ?>
      <div class="post results">
        <h3>Sorry, no results were found.</h3>
      </div>
    <?php
      endif;
    ?>
  </div>
  <?php snippet('sidebar'); ?>
</div>
<?php snippet('footer'); ?>
