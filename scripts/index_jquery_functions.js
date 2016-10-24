$(document).ready(function(){
    $("#l-button").hover(function(){
      $(this).css({
                "border-bottom" : "solid #F50057 2px",
                "color" : "#F50057"
                });
    },function(){
      $(this).css({
                "border-bottom" : "solid #fff 2px",
                "color" : "#BDBDBD"
                });
    });
    
    $("#m-button").hover(function(){
      $(this).css({
                "border-bottom" : "solid #00B0FF 2px",
                "color" : "#00B0FF"
                });
    },function(){
      $(this).css({
                "border-bottom" : "solid #fff 2px",
                "color" : "#BDBDBD"
                });
    });
    
    $("#k-button").hover(function(){
      $(this).css({
                "border-bottom" : "solid #FF9100 2px",
                "color" : "#FF9100"
                });
    },function(){
      $(this).css({
                "border-bottom" : "solid #fff 2px",
                "color" : "#BDBDBD"
                });
    });

});