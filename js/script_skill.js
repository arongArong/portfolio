$(function(){

      floatDiv();
  
      function floatDiv(){
  
  
          var options = {
              'speed' :0,
              'initTop':350,
              'alwaysTop':false,
  
          }
  
          $('#floatdiv').Floater(options);
  
          var menu = $('#navi_wrap>#main_navi>li');
          var contents = $('#contents>div');
  
          menu.click(function(event){
  
  
              event.preventDefault();
  
              var tg = $(this);
              var i = tg.index();
              var section = contents.eq(i);
              var tt = section.offset().top;
  
              $('html,body').stop().animate({scrollTop:tt},0);
  
  
          });
  
          $(window).scroll(function(){
              var sct = $(window).scrollTop();
              contents.each(function(){
                  var tg=$(this);
                  var i = tg.index();
  
  
                  if(tg.offset().top<=sct){
                      switch(i){
                          case 0:
                          skillsProgressbar();
                          break;
  
                      }
                  }
              });
          });
  
  

  
  
  
  
          //skill
  
          function skillsProgressbar(){
              var htmlNum = 80;
              var cssNum = 75;
              var jQueryNum = 70;
              var photoshopNum = 75;
  
              var max = 100;
              var duration = 1500;
  
              $('.bar').css('right','100%');
  
              //html
              $('#html_bar').stop().animate({
                  'right':100-(htmlNum/max*100)+'%',
              },{
                  'duration':duration,
                  'easing': 'easeInOutQuart',
                  'progress':function(animation,progress,msRemaining){
                      $('#html_cnt').text(Math.round(htmlNum*progress));
                  }
              });
  
              //css
              $('#css_bar').stop().animate({
                  'right':100-(cssNum/max*100)+'%',
              },{
                  'duration':duration,
                  'easing': 'easeInOutQuart',
                  'progress':function(animation,progress,msRemaining){
                      $('#css_cnt').text(Math.round(cssNum*progress));
                  }
              });

              //jQuery
              $('#jquery_bar').stop().animate({
                  'right':100-(jQueryNum/max*100)+'%',
              },{
                  'duration':duration,
                  'easing': 'easeInOutQuart',
                  'progress':function(animation,progress,msRemaining){
                      $('#jquery_cnt').text(Math.round(jQueryNum*progress));
                  }
              });
  
              //photoshop
              $('#photoshop_bar').stop().animate({
                  'right':100-(photoshopNum/max*100)+'%',
              },{
                  'duration':duration,
                  'easing': 'easeInOutQuart',
                  'progress':function(animation,progress,msRemaining){
                      $('#photoshop_cnt').text(Math.round(photoshopNum*progress));
                  }
              });
  
  
              
          }
  
  
  
  
  
  
  
      }
  
  
  
  
  
  
  });