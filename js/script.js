$(function () {

      var options = {
            'speed': 500, //속도
            'initTop': 800, //초기 탭메뉴 위치 top에서 250 아래로
            'alawysTop': false, //항상따라다니도록, true는 고정
            'default_y': '#wrap' //가로축, 레이아웃이 가운데 정렬일때 레이어가 붙는 아이디 값.
      }

      $('#floatdiv').Floater(options); //플루터 레이어를 항상 화면에 떠있거나 따라다리도록 처리.


      //페이지 위치
      $('#btn01').click(function () {
            $('html,body').animate({
                  scrollLeft: $('#main').offset().left
            }, 800);
      });
      $('#btn02').click(function () {
            $('html,body').animate({
                  scrollLeft: $('#profile').offset().left
            }, 800);
      });
      $('#btn03').click(function () {
            $('html,body').animate({
                  scrollLeft: $('#css').offset().left
            }, 800);
      });

      $('#btn04').click(function () {
            $('html, body').animate({
                  scrollLeft: $('#jquery').offset().left
            }, 800);
      });
      $('#btn05').click(function () {
            $('html, body').animate({
                  scrollLeft: $('#responsive').offset().left
            }, 800);
      });
      $('#btn06').click(function () {
            $('html, body').animate({
                  scrollLeft: $('#contact').offset().left
            }, 800);
      });



      //메뉴 클릭시 페이지로 이동
      var menu = $('#menuWrap>ul>li');
      var contents = $('#contents>div');
      var btn = $('#floatdiv ul li');

      menu.click(function (event) {
            event.preventDefault();
            var tg = $(this);
            var i = tg.index();
            var section = contents.eq(i);
            var tt = section.offset().left;
            $('html,body').stop().animate({
                  scrollLeft: tt
            });
      });

      //스크롤 이동시 메뉴와 버튼 활성화
      $(window).scroll(function () {
            var sct = $(window).scrollLeft();

            contents.each(function () {
                  var tg = $(this);
                  var i = tg.index();
                  if (tg.offset().left <= sct) {
                        menu.removeClass('on');
                        menu.eq(i).addClass('on');
                        btn.removeClass('active');
                        btn.eq(i).addClass('active');
                  }
            });
      });

      var btnLi = $('#floatdiv li');
	$('#main').hover(function(){btnLi.removeClass('active');btnLi.has('#btn01').addClass('active');});
	$('#profile').hover(function(){btnLi.removeClass('active');btnLi.has('#btn02').addClass('active');});
	$('#css').hover(function(){btnLi.removeClass('active');btnLi.has('#btn03').addClass('active');});
	$('#jquery').hover(function(){btnLi.removeClass('active');btnLi.has('#btn04').addClass('active');});
	$('#responsive').hover(function(){btnLi.removeClass('active');btnLi.has('#btn05').addClass('active');});
	$('#contact').hover(function(){btnLi.removeClass('active');btnLi.has('#btn06').addClass('active');});




      //마우스 휠 이벤트: 브라우저 간 마우스 휠 속도...
      //익스, 크롬, 사파리, 오페라:mousewheel 이라는 이벤트를 사용할 수 있고,파이어폭스 의 경우:DOMMouseScroll 이라는 이벤트를 사용

      $('div.mn').each(function () {

            $(this).on('mousewheel DOMMouseScroll', function (e) {
                  //마우스휠을 이용해 스크롤(위,아래(음수))
                  e.preventDefault();
                  var delta = 0;

                  if (!event) event = window.event;

                  if (event.wheelDelta) {
                        delta = event.wheelDelta / 120; //익스,크롬,오페라

                  } else if (event, delta) delta = -evnet.delta / 3;


                  var moveTop = null; //객체가 없음. 

                  //마우스 휠을 위에서 아래로
                  if (delta < 0) {
                        if ($(this).next() != undefined) { //값을 가지고 있지 않다면
                              moveTop = $(this).next().offset().left;
                        }

                        //마우스 휠을 아래에서 위로
                  } else {
                        if ($(this).prev() != undefined) { //
                              moveTop = $(this).prev().offset().left;
                        }
                  }

                  //화면이동 0.5초
                  $('html,body').stop().animate({
                        scrollLeft: moveTop + 'px'
                  }, {
                        duration: 500
                  });

            })


      });







});