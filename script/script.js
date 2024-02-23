(function($){
    class Obj {
        init(){
            this.header ();
            this.main ();
            this.section1 ();
            this.section2 ();
            this.section3 ();
            this.footer ();
            this.modal();
        }
        header(){
            $('.main-btn').on({
                mouseenter(){
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(300);
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                },
                focus(){
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(300);
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                }
                
            })
            $('.col').on({
                mouseleave(){
                    $('.sub').stop().slideUp(200);
                    $('.main-btn').removeClass('on');
                }
                
            })
        }
        main(){
        
        }
        section1(){
            let cnt=0;
            //메인슬라이드함수
            function mainSlide(){
                $('.slide-wrap').stop().animate({top:`${-100*cnt}%`},600,function(){
                    if(cnt>2)cnt=0;
                    $('.slide-wrap').stop().animate({top:`${-100*cnt}%`},0)
                })
            } 
            //다음슬라이드함수
            function nextCount(){
                cnt++;
                mainSlide();
            }
            //자동타이머함수
            function autoTimer(){
                setInterval(nextCount,3000);
            }
            autoTimer();
        }
        section2(){
            //공지사항버튼 클릭이벤트
            $('.notice-btn').on({
                click(){
                    $('.notice-btn').removeClass('on');
                    $('.gallery-btn').removeClass('on');
                    $('.notice').removeClass('on');
                    $('.gallery').removeClass('on');
                }
            })
            //갤러리버튼 클릭이벤트
            $('.gallery-btn').on({
                click(){
                    $('.notice-btn').addClass('on');
                    $('.gallery-btn').addClass('on');
                    $('.notice').addClass('on');
                    $('.gallery').addClass('on');
                }
            })
        }
        section3(){

        }
        footer(){

        }
        modal(){
            // 모달열기
            $('.not-btn').on({
                click(e){
                    e.preventDefault();
                    $('.modal').removeClass('close')
                    $('.modal').addClass('open')
                }
            })
            // 모달닫기
            $('.close-btn').on({
                click(e){
                    e.preventDefault();
                    $('.modal').removeClass('open')
                    $('.modal').addClass('close')
                }
            })
        }
    }
    const obj = new Obj(); //클래스 객체를 생성하여 사용한다.
    obj.init();

})(jQuery);