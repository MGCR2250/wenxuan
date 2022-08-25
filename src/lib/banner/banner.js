// $(document).ready(function () {
//     var mySwiper = new Swiper('.swiper-container', {
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         }
//     });
//     //此方法为模拟的，hover到分页器的小圆点后自动触发其本身的click事件
//     $(".swiper-pagination-bullet").hover(function () {
//         $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
//     }, function () {
//         mySwiper.startAutoplay() //鼠标移出之后，自动轮播开启
//     })
// })
// var mySwiper = new Swiper('.swiper-container', {
//     direction: 'horizontal',
//     loop: true,

//     // 如果需要分页器
//     pagination: '.swiper-pagination',
//     paginationClickable: true,

//     // 如果需要前进后退按钮
//     //   nextButton: '.swiper-button-next',
//     //   prevButton: '.swiper-button-prev',

//     // 如果需要滚动条
//     //   scrollbar: '.swiper-scrollbar',
//     autoplay: 3,

// })
// export { mySwiper };
{/* <script>        
var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  
  // 如果需要分页器
  pagination: '.swiper-pagination',
  paginationClickable :true,
  
  // 如果需要前进后退按钮
//   nextButton: '.swiper-button-next',
//   prevButton: '.swiper-button-prev',
  
  // 如果需要滚动条
//   scrollbar: '.swiper-scrollbar',
  autoplay: 3000,
  
})    

$(document).ready(function() {
var mySwiper = new Swiper('.swiper-container', {
pagination: {
  el: '.swiper-pagination',
  clickable: true,
}
});
//此方法为模拟的，hover到分页器的小圆点后自动触发其本身的click事件
$(".swiper-pagination-bullet").hover(function() {
  $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
},function() {
  mySwiper.autoplay.start(); //鼠标移出之后，自动轮播开启
})
})
</script> */}

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 2000,

})
$(".swiper-pagination-bullet").hover(function () {
    $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
}, function () {
    mySwiper.startAutoplay() //鼠标移出之后，自动轮播开启
})
export { mySwiper };





