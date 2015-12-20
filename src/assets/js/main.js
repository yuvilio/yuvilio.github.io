(function($) {
  $(function(){
    //initialize foundation
    $(document).foundation();

    //syntax highlighting
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
    
  })
})(jQuery);
