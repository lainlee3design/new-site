<?php
require('wp_posts.php');
$str = "";
$posts = array();
foreach($wp_posts as $post) {
  if ($post['post_type'] == 'post') {
    $posts[$post['ID']] = $post;
  }
}
foreach($wp_posts as $p) {
  if (isset($p['post_parent']) && $p['post_parent'] != '0' && $p['post_type'] == 'attachment' && $p['guid'] != '') {
    $id = $p['post_parent'];
    if (isset($posts[$id])) {
      if(isset($posts[$id]['attachments'])) {
        $posts[$id]['attachments'][] = $p;
      } else {
        $posts[$id]['attachments'] = array($p);
      }
    }
  }
}
$i = 1;
foreach($posts as $ID => &$post) {
  $str = "";
  $fnum = '00' . $i;
  if ($i > 9 ) {
    $fnum = '0' . $i;
  }
  if( $i > 99 ) {
    $fnum = $i;
  }
  $path = "old_posts/" . $fnum . "-" . $post['post_name'];
  mkdir($path, 0777);

  if (isset($post['attachments'])) {
    $j = 1;
    foreach($post['attachments'] as $a) {
      $num = '';
      if ($j < 10) {
        $num = '0' . $j;
      } else {
        $num = $j;
      }
      $ext = explode('.',$a['guid']);
      $ext = $ext[sizeof($ext) - 1];
      $out = $path . '/' . $num . '.' . $ext;
      system('curl "' . $a['guid'] . '" -o ' . $out . ' &> /dev/null');
      /* $post['post_content'] = str_replace($a['guid'], $num . '.' . $ext, $post['post_content']); */
      $j++;
    }
  }

  /* $post['post_content'] = preg_replace('/\.\.\/wp-content\/uploads\/2011\/05\/Separator_Blllog\.png/', "http://lainlee3design.com/wp-content/uploads/2011/04/Separator_Blllog.png",$post['post_content']); */
  $str .= "Title: " . $post['post_title'] . "\n----\n";
  $str .= "Author: Lain 3\n----\n";
  $str .= "Date: " . $post['post_date'] . "\n----\n";
  $str .= "Text: " . $post['post_content'];
  /* if ($i == 3 ) { */
  /* echo "\n" . $str; */
  /* exit; */
  /* } */
  $file = fopen($path . '/post.txt', 'w');
  fwrite($file, $str);
  fclose($file);
  $i++;
}
var_dump($i);exit;
?>
