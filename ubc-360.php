<?php

/* Template Name: UBC-360 */

?>

<?php
  get_header();
?>

<iframe id="iframe" src="http://vchdesign.ca/BOT-360/ubc.html"></iframe>

<script type="text/javascript">
  function resizeIframe() {
    var headerHeight = document.getElementById('main-header').clientHeight;
    var htmlMargin = window.getComputedStyle(document.documentElement).marginTop.replace('px', '');
  	var totalHeight = +headerHeight + +htmlMargin;
  	var heightString = "height: calc(100vh - " + totalHeight + "px)";
    console.log(headerHeight + " " + htmlMargin +" "+ totalHeight)
    document.getElementById('iframe').setAttribute("style", heightString);
  }
  window.onresize = function(event) {
    resizeIframe();
  };
  window.onload = function(event) {
    resizeIframe();
  }
</script>

<?php
  for ($i = 1; $i < 12; $i++) {
      echo '<link rel="prefetch" href="http://vchdesign.ca/BOT-360/assets/ubc/ubc' . $i . '.jpg">';
  }
?>
