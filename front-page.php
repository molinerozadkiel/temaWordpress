<?php get_header(); ?>

<figure id="atf">
  <?php
  $args=array(
    'post_type'=>'post',
    'posts_per_page'=>1,
    'meta_query'=>array(
       array(
         'key'=>'_featured',
         'value'=>'yes'
       )
    )
  );$atf=new WP_Query($args);
  while($atf->have_posts()){$atf->the_post(); ?>
    <img src="<?php echo get_the_post_thumbnail_url(get_the_ID()); ?>" alt="">
    <figcaption>
      <p id="atfCategory"></p>
      <h3 id="atfTitle"><?php the_title(); ?></h3>
      <p id="atfAuthor">Por <?php the_author(); ?></p>
    </figcaption>
  <?php } ?>
</figure>

<h1>FRONT PAGE</h1>

<section id="sec1">
  <div class="sectionMarker" id="sec1Marker"><p>Section 1</p></div>
  <div id="sec1Main">
    <?php
    $args = array(
      // 'post_type' => 'project',
      'post_type'=>'post',
      'posts_per_page'=>5,
    );$blogPosts=new WP_Query($args);$i=0;
    while($blogPosts->have_posts()) {
      $blogPosts->the_post(); ?>
      <a href="<?php the_permalink(); ?>">
        <figure>
          <img src="<?php echo get_the_post_thumbnail_url(get_the_ID()); ?>" alt="">
          <h3><?php the_title(); ?></h3>
          <p class="sec1MainExcerpt"><?php if($i==0){the_excerpt();$i++;} ?></p>
          <p class="sec1MainAuthor">Por <?php the_author(); ?></p>
        </figure>
      </a>


    <?php } ?>
  </div>
  <div id="sec1Second">
    <?php
    $args = array(
      // 'post_type' => 'project',
      'post_type'=>'post',
      'posts_per_page'=>3,
    );$blogPosts=new WP_Query($args);$i=0;
    while($blogPosts->have_posts()) {
      $blogPosts->the_post(); ?>
      <a href="<?php the_permalink(); ?>">
        <figure>
          <img src="<?php echo get_the_post_thumbnail_url(get_the_ID()); ?>" alt="">
          <h3><?php the_title(); ?></h3>
          <p class="sec1MainExcerpt"><?php if($i==0){the_excerpt();$i++;} ?></p>
          <p class="sec1MainAuthor">Por <?php the_author(); ?></p>
        </figure>
      </a>


    <?php } ?>
  </div>
</section>



<?php get_footer(); ?>
