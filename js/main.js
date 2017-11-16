
$(function() {
	function resize() {
		//获取屏幕宽度
		var windowWidth = $(window).width();
		//判断屏幕尺寸
		var isSmallScreen = windowWidth < 768;
		//设置背景图片
		$('#main_ad .carousel-inner > .item').each(function(i,ele){
			var $item = $(ele);
			if(isSmallScreen){
				$item.html('<img src="' + $item.attr('data-image-sm') + '"/>');
				$item.css('background-image','');
			}else{
				$item.empty();
				$item.css('background-image','url('+$item.attr('data-image-lg')+')');
			}
		})
	}
	$(window).on('resize',resize).trigger('resize');

	// 初始化tooltips插件
	$('[data-toggle="tooltip"]').tooltip();


	// 新闻
	$("#news_tab a").on('click',function(){
		$(".news-header h3").html($(this).data('title'));
	})

	// 轮播图左滑右滑
	// 1.判断手指滑动方向
	var startX,endX;
	$("#main_ad").on("touchstart",function(e){
		startX = e.originalEvent.touches[0].clientX;
	})
	$("#main_ad").on("touchmove",function(e){
		endX = e.originalEvent.touches[0].clientX;
	})
	$(".carousel").on("touchend",function(e){
		if(endX > startX && endX - startX > 50){
		$(this).carousel('prev')
	}
	else if(endX < startX && startX - endX > 50){
		$(this).carousel('next')
	}
	})

	// tab栏自适应
	$('.nav-tabs').each(function(index,ele){
		var $tab = $(this);
		var width = 20;
		$tab.children().each(function(index,ele){
			width += $(ele).width()
		})
		if (width > $tab.parent().width()) {
        $tab.css('width', width);
        $tab.parent().css('overflow-x', 'scroll');
      } else {
        $tab.css('width', 'auto');
        $tab.parent().css('overflow-x', 'hidden');
      }
	})
	
	
});