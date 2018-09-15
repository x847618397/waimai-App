window.onload=function(){
	//轮播图
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    
	    // 如果需要分页器
	    pagination: {
	      el: '.swiper-pagination',
	    },
	    
	    autoplay: {
    delay: 1000,//1秒切换一次
  },
  })



}