
// Bring in the generated svg stack sprite sheet
// Source: https://css-tricks.com/ajaxing-svg-sprite/
var loadSvgs = function(){

  var ajax = new XMLHttpRequest();
  ajax.open("GET", "/assets/img/stack/svg/sprite.stack.svg", true);
  ajax.send();
  ajax.onload = function(e) {
    var div = document.createElement("div");
    div.classList.add('svg-stack');
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  }

};

(function($) {
  $(function(){
    //initialize foundation
    $(document).foundation();

    //syntax highlighting
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    //svg stacks
    loadSvgs();


  });
})(jQuery);
