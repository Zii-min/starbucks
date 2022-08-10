const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간(초단위), 옵션-css속성과 옵션들을 추가해주면 됨!)
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
    //scrollTo 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0,
    })
  } else {
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
    //scrollTo 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300));
// _.throttle(함수, 시간(ms 단위로 적어줌))

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay : (index +1) * .7, // 0.7 , 1.4, 2.1, 2.7s 뒤에 코드가 반복되면서 실행됨
    opacity : 1
  });
}); //반복처리하면서 자동화시켜줌. 요소들 하나하나 찾아서 수동으로 값을 넣어주는 행위.. 비효율적..


// new Swiper(선택자, 옵션);
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView : 3, //한 번에 보여줄 슬라이드 개수
  spaceBetween : 10, //슬라이드 사이 여백
  centeredSlides : true,
  loop : true,
  autoplay : {
    delay : 5000
  },
  pagination : {
    el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true, //사용자의 페이지 번호 요소 제어
  },
  navigation : {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container',{
  direction : 'horizontal',
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation : {
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion //!는 반대의 상태로 바꿔달라는 말
  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide')
  } else {
    //보임 처리
    promotionEl.classList.remove('hide')
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject (selector, delay, size) {
  // gsap.to(요소, 시간, 옵션))
  gsap.to(
    selector,
    random(1.5, 2.5), 
    {
      y : size,
      repeat : -1,

      yoyo : true,
      ease: Power1.easeInOut,
      delay : random(0,delay)
    }
  );
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, //감시하려는 요소가 뷰포트 0.8지점에 도달하면 트리거가 되어 실행됨
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
});


