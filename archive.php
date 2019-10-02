<?php get_header(); ?>

<!-- <div class="breadcrumb"><?php //get_breadcrumb(); ?></div> -->
<!-- <div class="breadcrumb"><?php //if(function_exists('bcn_display')){bcn_display();} ?></div> -->



<banner>
  <?php echo do_shortcode("[the_ad_group id='1625']"); ?>
</banner>
<section id="archiveAtf">


  <?php if(function_exists('yoast_breadcrumb')){yoast_breadcrumb('<p id="breadcrumbs">','</p>');} ?>
  <h1 id="archiveTitle"><?php the_archive_title(); ?></h1>
  <?php
    the_archive_description( '<div class="archiveDescription">', '</div>' );
  ?>
  <?php
  $category = get_queried_object();

  if(is_category()){
    $args = array('parent' => $category->term_id);
    $args = array('child_of' => $category->term_id);
    $categories = get_categories( $args );
    // var_dump($categories[0]);
    if ($categories) { ?>
    <nav id="archiveNav">
      <ul>
      <?php foreach($categories as $cat) {
        echo "<li><a href='". get_category_link( $cat->term_id ) ."'>". $cat->name ."</a></li>";
      } ?>
      </ul>
    </nav>
    <?php } ?>
  <?php } ?>
</section>




<section class="archiveSection">
    <?php $i=0;
    while(have_posts()){the_post();  ?>

      <?php if ($i % 7==0) { ?><div class="archiveMainCorridor archiveCorridor"><?php } ?>
      <?php if ($i % 7==1) { ?><div class="archiveScndCorridor archiveCorridor"><?php } ?>
      <?php if ($i % 7==4) { ?><div class="archiveScndCorridor archiveCorridor"><?php } ?>



      <figure class="archivePost<?php
          if ($i % 7 ==0) { echo ' archiveMainPost';}
          if ($i % 7 >0) {if ($i % 3 == 0) { echo ' archivePostSize1';}}
          if ($i % 7 >0) {if ($i % 3 == 1) { echo ' archivePostSize2';}}
          if ($i % 7 >0) {if ($i % 3 == 2) { echo ' archivePostSize3';}}
        ?>">
        <img class="archivePostImg<?php
            if ($i % 7 ==0) { echo ' archiveMainPostImg';}
            if ($i % 7 >0) {if ($i % 3 == 0) { echo ' archivePostSize1Img';}}
            if ($i % 7 >0) {if ($i % 3 == 1) { echo ' archivePostSize2Img';}}
            if ($i % 7 >0) {if ($i % 3 == 2) { echo ' archivePostSize3Img';}}
          ?>" src="<?php echo get_the_post_thumbnail_url(get_the_ID()); ?>" alt="">
        <figcaption class="archivePostFigcaption<?php
            if ($i % 7 ==0) { echo ' archiveMainPostFigcaption';}
            if ($i % 7 >0) {if ($i % 3 == 0) { echo ' archivePostSize1FigCaption';}}
            if ($i % 7 >0) {if ($i % 3 == 1) { echo ' archivePostSize2FigCaption';}}
            if ($i % 7 >0) {if ($i % 3 == 2) { echo ' archivePostSize3FigCaption';}}
          ?>">
          <a href="<?php the_permalink(); ?>">
            <h3 class="archivePostTitle<?php
                if ($i % 7 ==0) { echo ' archiveMainPostTitle';}
                if ($i % 7 >0) {if ($i % 3 == 0) { echo ' archivePostSize1Title';}}
                if ($i % 7 >0) {if ($i % 3 == 1) { echo ' archivePostSize2Title';}}
                if ($i % 7 >0) {if ($i % 3 == 2) { echo ' archivePostSize3Title';}}
              ?>"><?php the_title(); ?></h3>
          </a>
          <p class="archivePostTxt1">
            <span class="postAuthor">Por <?php the_author(); ?></span> -
            <span class="postDate"><?php the_time('M j, Y'); ?></span>
          </p>
          <?php if(function_exists('the_views')){ ?><p class="vistoNVeces postTxt">👁 <?php the_views(); ?></p><?php } ?>
          <?php if($i % 7==0){ ?><p><?php excerpt(130) ?></p><?php } ?>
          <p class="postCategory"><?php echo get_the_category_list(', '); ?></p>
        </figcaption>
      </figure>


      <?php if ($i % 7==0) { ?></div><?php } ?>
      <?php if ($i % 7==3) { ?></div><?php } ?>
      <?php if ($i % 7==6) { ?></div><?php } ?>

      <!-- <ul id="archiveAtfCategory"><?php $array2 = get_the_category(); ?> -->
        <?php foreach ($array2 as $valor) { $link = get_category_link( $valor->term_id );} ?>


    <?php

    if ($i % 7==6){ ?>
      </section>
      <banner>
        <?php
        switch ($i) {
          case 6:
            echo do_shortcode("[the_ad_group id='1626']");
            break;
          case 13:
            echo do_shortcode("[the_ad_group id='1627']");
            break;

          default:
            echo do_shortcode("[the_ad_group id='']");
            break;
        }
        ?>
      </banner>
      <section class="archiveSection">
    <?php }

    $i++;} wp_reset_query(); ?>
</section>

<div class="pagination">
  <?php echo paginate_links(); ?>
</div>


<?php get_footer(); ?>
