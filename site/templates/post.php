<?php echo snippet('header') ?>
<div class="container">
  <h2>Blllog&trade;</h2>
</div>
<div id="blog-container" class="blogpost container clearfix">
  <div id="blog" class="left">
    <div class="post">
      <div class="post-header clearfix">
        <div class="img"></div>
        <div class="text">
        <h3><?php echo $page->title(); ?></h3>
          <div class="meta">
            Posted by <a href="#"><?php echo $page->author(); ?></a> on <strong><?php echo $page->date('M d, Y'); ?></strong>
          </div>
        </div>
      </div>
      <div class="post-image">
        <img src="<?php echo $page->files()->find("main") ?>" alt="" />
      </div>
      <div class="preview">
        <?php echo kirbytext($page->text()); ?>
        <img title="separator blllog" src="http://lainlee3design.com/wp-content/uploads/2011/05/Separator_Blllog.png" alt="" width="614" height="18" />
        <strong>Enjoyed this Post?</strong><br>

        Share it with your friends! Click on the “Share”, “Like” or “Tweet” buttons <em><strong>below</strong></em> to share this post with your fans, followers and friends! OR Leave a comment below and strike up a conversation!

        <img title="separator blllog" src="http://lainlee3design.com/wp-content/uploads/2011/05/Separator_Blllog.png" alt="" width="614" height="18" />
      </div>
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
    <div class="comment-form">
<?php snippet('disqus', array('disqus_shortname' => 'LainLee3Design', 'disqus_developer' => true)) ?>
      <!--<div class="title clearfix">
        <h2>Comments</h2>
        <span>
          <strong>1</strong> total comments so far
        </span>
      </div>
      <div class="thread">
        <div class="comment-wrapper clearfix">
          <div class="avatar"><img src="<?php // echo url("assets/images/logo.png") ?>"></div>
          <div class="comment">
            <div class="comment-meta">
              <span class="name">User Name</span> wrote:
            </div>
            <div class="text">
              <p>Etiam at tortor. Vivamus quis sapien nec magna scelerisque lobortis.</p>

              <p>Curabitur tincidunt viverra justo. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Sed eros ante, mattis
              ullamcorper, posuere quis, tempor vel, metus. Maecenas.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <form action="" class="clearfix">
          <div class="column-1">
            <div>
              <label for="">Name*</label><br>
              <input />
            </div>
            <div>
              <label for="">Email*</label>&nbsp;<span>Must Be Valid</span><br>
              <input />
            </div>
          </div>
          <div class="column-2">
            <div>
              <label for"">Message</label><br>
              <textarea></textarea>
            </div>
          </div>
          <div class="column-1">
            <div>
              <label for="">URL</label><br>
              <input />
            </div>
          </div>
          <div class="column-2">
            <input class="right" type="submit" value="Boom. Said."/>
          </div>
        </form>
      </div>-->
      <?php $related = related($page->related()); ?>
      <?php if ($related->first()): ?>
        <div class="related-posts">
          <div class="title">Related Posts</div>
          <?php foreach ($related->limit(3) as $related): ?>
            <div class="related-post">
              <h3><?php echo $related->title(); ?></h3>
              <div class="preview"><?php echo excerpt($related->text(), 300); ?></div>
              <a href="<?php echo $related->url() ?>" class="button right">Read More</a><br class="clear"><br>
            </div>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
  <?php echo snippet('sidebar'); ?>
</div>
<?php snippet('footer'); ?>
