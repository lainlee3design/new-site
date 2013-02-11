<div id="sidebar" class="left">
  <div class="search-bar clearfix title">
  <form action="<?php $page->url() ?>">
      <div class="field">
        <label for="search-field">Search</label>
        <input id="search-field" name="search" value="" />
      </div>
      <input type="submit" name="" value="" />
    </form>
  </div>
  <div class="rss-subscribe title">
    <span class="right social-icon rss"></span>
    <a href="<?php echo url('blllog/feed') ?>">Feed on this</a>
  </div>
  <div class="like-button title">
    <span class="icon right like"></span>
    Like LL3DSN
  </div>
  <div class="fb-like-wrapper">
    <div class="fb-like-box" data-href="http://www.facebook.com/lainlee3design" data-width="312" data-show-faces="true" data-border-color="none" data-stream="false" data-header="false">
      <iframe src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Flainlee3design&amp;width=312&amp;height=258&amp;show_faces=true&amp;colorscheme=light&amp;stream=false&amp;border_color=transparent&amp;header=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:312px; height:258px;" allowTransparency="true"></iframe>
    </div>
  </div>
  <div class="dribbble-widget">
    <div class="title">
      <span class="icon right dribbble"></span>
      Dribbble
    </div>
    <div class="mini-grid clearfix">
      <?php
        $dribbble = dribbble('lainlee3design', 8);
        $shots = $dribbble->shots();

        foreach ($shots as $shot):
      ?>
      <a href="<?php echo $shot->url ?>" target="_blank" title="<?php echo $shot->title; ?>" class="grid-item"><img src="<?php echo $shot->image ?>" alt="" /></a>
      <?php endforeach; ?>
    </div>
  </div>
  <div class="xbox-widget">
    <div class="title">
      <span class="icon right xbox"></span>
      XB360 Playlist
    </div>
    <div class="mini-grid clearfix">
      <?php
        $playlist = $pages->findByDirname('xbox-360-playlist')->first()->images();
        foreach($playlist as $game):
      ?>
        <a href="<?php echo $game->link(); ?>" target="_blank" title="<?php echo $game->title(); ?>" class="grid-item"><img src="<?php echo $game->url(); ?>" alt="" /></a>
      <?php endforeach; ?>
    </div>
  </div>
  <div class="amped-for">
    <div class="title">
      <span class="icon right power"></span>
      Amped about
    </div>
    <div class="mini-grid clearfix">
      <?php
        $amped_for = $pages->findByDirname('amped-for')->first()->images();
        foreach($amped_for as $item):
      ?>
        <a href="<?php echo $item->link(); ?>" target="_blank" title="<?php echo $item->title(); ?>" class="grid-item"><img src="<?php echo $item->url(); ?>" alt="" /></a>
      <?php endforeach; ?>
    </div>
  </div>
  <div class="categories">
    <div class="title">
      <span class="icon right list"></span>
      Categories
    </div>
    <ul>
      <?php
        $tagcloud = tagcloud($pages->find('blog'), array('limit' => 20));
        foreach($tagcloud as $tag):
      ?>
        <li><a href="<?php echo $tag->url(); ?>"><?php echo ucwords($tag->name());?></a></li>
      <?php endforeach; ?>
    </ul>
  </div>
  <div class="archives">
    <div class="title">
      <span class="icon right folder"></span>
      Archives
    </div>
    <ul>
      <?php
        $all_posts = $page->children()->visible()->flip();
        $months = array();
        $currentMonth = (int)date('m');
        for($x = $currentMonth; $x > $currentMonth-12; $x--) {
          $month = date('F', mktime(0,0,0,$x,1));
          $year = date('Y', mktime(0, 0, 0, $x, 1));
          $count = 0;
          foreach($all_posts->_ as $key => $p) {
            if (strftime('%B', $p->date()) == $month) {
              $count++;
            }
          }
      ?>
        <li><a href="<?php echo url('/blllog/year:' . $year . '/month:' . strtolower($month)) ?>"><?php echo $month . ' ' . $year . ' (' . $count . ')'; ?></a></li>
      <?php
        }
      ?>
    </ul>
  </div>
</div>
