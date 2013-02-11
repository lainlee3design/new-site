<?php echo snippet('header') ?>

<div class="container">
  <h2><?php echo $page->title(); ?></h2>
</div>
<?php $i = 0; ?>
<?php foreach($page->children()->visible() as $job): ?>
  <div class="collab-item <?php echo $i % 2 == 0 ? "odd" : "even" ?> <?php echo $i == 0 ? "first" : ""; ?>">
    <div class="container">
      <h3><?php echo $job->title(); ?></h3>
      <div class="meta">
        <p>Needed: <?php echo $job->needed(); ?></p>
        <p>Project Length: <?php echo $job->project_length(); ?></p>
        <p>Compensation: <?php echo $job->compensation(); ?></p>
      </div>
      <div class="description">
        <h3>Project Description</h3>
        <?php echo kirbytext($job->description()); ?>
      </div>
      <div class="actions">
        <h3>Interested in Working Together?</h3>
        <div>
          <a href="#contact" class="button collab-contact">Contact Me</a>
        </div>
        <div>
          <a href="#" class="button">Recommend</a>
        </div>
      </div>
    </div>
  </div>
  <?php $i++; ?>
<?php endforeach; ?>
<?php snippet('contact'); ?>
<?php snippet('footer'); ?>
