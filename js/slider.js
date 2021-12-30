$(function(){

      $('.cssBox .port').hover(function(){
  
          var ah = $(this).find('a').innerHeight();
          var img = $(this).find('img');
          var imgh = $(this).find('img').innerHeight();
  
          img.stop().animate({top:ah-imgh},5000);
  
      }, function(){
          var ah = $(this).find('a').innerHeight();
          var img = $(this).find('img');
          var imgh = $(this).find('img').innerHeight();
  
          img.stop().animate({top:0},5000);
      });

      $('.jqueryBox .port').hover(function(){
  
            var ah = $(this).find('a').innerHeight();
            var img = $(this).find('img');
            var imgh = $(this).find('img').innerHeight();
    
            img.stop().animate({top:ah-imgh},5000);
    
        }, function(){
            var ah = $(this).find('a').innerHeight();
            var img = $(this).find('img');
            var imgh = $(this).find('img').innerHeight();
    
            img.stop().animate({top:0},5000);
        });

        $('.resBox .port').hover(function(){
  
            var ah = $(this).find('a').innerHeight();
            var img = $(this).find('img');
            var imgh = $(this).find('img').innerHeight();
    
            img.stop().animate({top:ah-imgh},5000);
    
        }, function(){
            var ah = $(this).find('a').innerHeight();
            var img = $(this).find('img');
            var imgh = $(this).find('img').innerHeight();
    
            img.stop().animate({top:0},5000);
        });
  
  
  });