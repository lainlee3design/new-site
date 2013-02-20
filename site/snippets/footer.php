<?php $footer_info = $pages->findByUID('footer')->first(); ?>
  </div>
  <div class="footer">
    <div class="links container clearfix">
      <div class="about">
        <h4>About</h4>

        <?php echo kirbytext($footer_info->about_text()); ?>
      </div>
      <div class="tweets">
        <h4>Latest Tweets <a href="http://twitter.com/lainlee3design" class="social-icon twitter right" target="_blank"></a></h4>
        <div class="tweets-inner">
        </div>
      </div>
      <div class="friends">
        <h4>Friends of LL3&#0153;</h4>
        <?php
          $friends = explode("\n", $footer_info->friends());
          $first_column = array_slice($friends, 0, 5);
          $second_column = array_slice($friends, 5);
        ?>
        <ul class="second">
          <?php foreach($second_column as $link): ?>
            <li><?php echo kirbytext($link); ?></li>
          <?php endforeach; ?>
        </ul>
        <ul>
          <?php foreach($first_column as $link): ?>
          <li><?php echo kirbytext($link); ?></li>
          <?php endforeach; ?>
        </ul>
        <?php snippet('newsletter-signup'); ?>
      </div>
      <div class="rights container clearfix">
        <div class="attributes right">Site design by <a href="#">III&#0153;</a> | Programmed by <a href="http://tybenz.com">Tyler Benziger</a></div>
        <div class="copyright">&copy; 2006-2013 III&#0153;. All Rights Reserved</div>
      </div>
    </div>
  </div>
</body>
<!--<?php echo js('assets/javascript/jquery.min.js'); ?>
<?php echo js('assets/javascript/layout.js'); ?>
<?php echo js('assets/javascript/webpro.js'); ?>
<?php echo js('assets/javascript/tweet.js'); ?>-->
<?php echo js('assets/javascript/build/out.min.js'); ?>
<?php echo js('http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-508a2aa958ebbcfd'); ?>
<?php if ($pages->find('home') == $page): ?>
<script type="text/javascript" charset="utf-8">
  $(function() {
    ss = new WebPro.Widget.ContentSlideShow( '.slider', {
        autoPlay: true,
        slideshowClassName: 'slider',
        clipClassName: 'slider-clip',
        viewClassName: 'slider-view',
        slideClassName: 'slide',
        slideLinkClassName: 'thumb',
        nextClassName: 'slide-next',
        prevClassName: 'slide-prev',
        displayInterval: <?php echo intval($page->time_per_slide()->value) * 1000 ?>,
        plugins: [ WebPro.Widget.ContentSlideShow.carouselPlugin, WebPro.Widget.ContentSlideShow.disableThumbsPlugin ]
    });
  });
</script>
<?php endif; ?>
</html>
