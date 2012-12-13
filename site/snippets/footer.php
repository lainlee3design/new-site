<?php $footer_info = $pages->findByUID('footer')->first(); ?>
  </div>
  <div class="footer">
    <div class="links container clearfix">
      <div class="about">
        <h4>About</h4>

        <p><a href="#">Lorem ipsum</a> sed justo. Curabitur consectetuer arcu. Etiam placerat est eget odio.
        Nulla facilisi. Nulla facilisi. Mauris non neque. Suspendisse et diam. Sed
        vestibulum malesuada ipsum. Cras id magna. Nunc pharetra velit vitae eros.
        Vivamus.</p>

        <p>Nulla facilisi. Nulla facilisi. Mauris non neque. Suspendisse et diam. Sed
        vestibulum malesuada ipsum. Cras id magna. Nunc pharetra velit vitae eros.
        Vivamus.</p>
      </div>
      <div class="tweets">
        <h4>Latest Tweets <img class="right" src="assets/images/twitter-yellow.png"></h4>
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
            <li><a href="#"><?php echo $link ?></a></li>
          <?php endforeach; ?>
        </ul>
        <ul>
          <?php foreach($first_column as $link): ?>
            <li><a href="#"><?php echo $link ?></a></li>
          <?php endforeach; ?>
        </ul>
        <h4>Sign up for our newsletter</h4>
        <form class="clearfix" id="newsletter-signup">
          <div class="field">
            <label for="newsletter-email">Email Address</label>
            <input id="newsletter-email" name="email" value="" />
          </div>
          <input type="submit" name="" value="" />
        </form>
      </div>
      <div class="rights container clearfix">
        <div class="attributes right">Site design by <a href="#">III&#0153;</a> | Programmed by <a href="http://tybenz.com">Tyler Benziger</a></div>
        <div class="copyright">&copy; 2006-2013 III&#0153;. All Rights Reserved</div>
      </div>
    </div>
  </div>
</body>
<script type="text/javascript" charset="utf-8" src="assets/javascript/jquery.min.js"></script>
<script type="text/javascript" charset="utf-8" src="assets/javascript/webpro.js"></script>
<script type="text/javascript" charset="utf-8" src="assets/javascript/tweet.js"></script>
<script type="text/javascript" charset="utf-8" src="assets/javascript/layout.js"></script>
</html>
