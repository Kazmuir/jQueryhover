$(function() {
    console.log( "test" );

    $(".box").on("mouseover",
      function(){
        event.stopPropagation()
        $(this).animate({width: "100%"}, 300);
        return false;
      }
    ).on("mouseout",
    function(){
      event.stopPropagation()
      $(this).animate({width: "20%"}, 300);
      return false;
    })
});
