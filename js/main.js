$(function () {
    var x = 0;
    var slideCount = $(".slideList .slideImg").length; 

    // 슬라이드 전환 함수
    function fadeSlides() {
        var next = (x + 1) % slideCount; 
        var currentSlide = $(".slideList").find(".slideImg").eq(x); 
        var nextSlide = $(".slideList").find(".slideImg").eq(next); 

        currentSlide
            .removeClass('incoming') 
            .addClass('outgoing'); 

        currentSlide.one('animationend', function () {
            $(this)
                .removeClass('active outgoing')
                .css({ display: 'none' });
        });

        nextSlide
            .css({ display: 'block' }) 
            .removeClass('outgoing') 
            .addClass('incoming active');

        x = next;
    }

    setInterval(fadeSlides, 3000);

    //스크롤
$(window).on('scroll', function () {
    $('.contentText1, .contentText2').each(function () {
        var $this = $(this); 
        var elementTop = $this.offset().top; 
        var elementBottom = elementTop + $this.outerHeight();
        var viewportTop = $(window).scrollTop(); 
        var viewportBottom = viewportTop + $(window).height(); 

        if (elementTop < viewportBottom && elementBottom > viewportTop) {
            $this.addClass('visible'); 
        } else {
            
            $this.removeClass('visible');
        }
    });
});

    //아코디언

$(function(){
    var allDt = $("dl.accordion dt");
    var allDd = $("dl.accordion dd");
    allDd.slideUp(100); 

    allDt.click(function(){
        var clickDt = $(this);
        var choiceDd = clickDt.next();
        if(choiceDd.css("display")=="none"){
            choiceDd.slideDown(100); 
        }else {
            choiceDd.slideUp(100); 
        }
    });
});

$(function () {

    var $toggleButton = $('.menuToggle'); // 'toggle-button' ID를 가진 요소를 jQuery 객체로 참조
    var $bigMenu = $('.bigMenu'); // 'side-menu' ID를 가진 요소를 jQuery 객체로 참조
    var $closeButton = $('#close-button'); // 'close-button' ID를 가진 요소를 jQuery 객체로 참조

    // 'toggle-button'이 클릭되었을 때 사이드 메뉴 표시
    $toggleButton.on('click', function () {
        // 'side-menu'에 'show' 클래스를 추가하여 메뉴를 표시함
        $bigMenu.addClass('show');
    });

    // 'close-button'이 클릭되었을 때 사이드 메뉴 숨김
    $closeButton.on('click', function () {
        // 'side-menu'에서 'show' 클래스를 제거하여 메뉴를 숨김
        $bigMenu.removeClass('show');
    });

    // 문서의 아무 곳이나 클릭되었을 때 사이드 메뉴 숨김
    $(document).on('click', function (event) {
        // 클릭된 요소(event.target)가 'side-menu' 내부나 'toggle-button' 내부가 아닐 경우
        if (!$bigMenu.is(event.target) && $bigMenu.has(event.target).length === 0 &&
            !$toggleButton.is(event.target) && $toggleButton.has(event.target).length === 0) {
            // 'side-menu'에서 'show' 클래스를 제거하여 메뉴를 숨김 
            $bigMenu.removeClass('show');
        }
    });

});

});
