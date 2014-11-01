
$(window).ready(function(){

  function setViewport(){
    w_height = $(window).height();
    return w_height;
  };
  setViewport();

  // global vars 
  var currViewportTop = window.pageYOffset;
  var currViewportBot = currViewportTop + w_height;

  $(window).bind('scroll', function(){
    currViewportTop = window.pageYOffset;
    currViewportBot = currViewportTop + w_height;
    detectTop();
    detectBottom();
  });

  $('.full-screen').each(function(){
    $(this).height(w_height);
  });

  function detectTop(){
    $('.detect-top').each(function(){
      var el = $(this);
      var elTop = $(this).position().top;
      var elBot = (elTop + $(el).height());
      var slop = 50;
      if ((currViewportTop <= (elTop + slop)) && (currViewportTop >= elTop)){
        console.log('top detected');
      }
    });
  }

  function detectBottom(){
    $('.detect-bottom').each(function(){
      var el = $(this);
      var elTop = $(this).position().top;
      var elBot = (elTop + $(el).height());
      var slop = 50;
      if ((currViewportBot <= elBot) && ((currViewportBot + slop) >= elBot)){
        console.log('bottom detected');
      }
    });
  }

  $('.detect-middle').each(function(){

  });

  $('.detect-bottom').each(function(){

  });

});