
        //初始化插件
        document.documentElement.style.fontSize =
            document.documentElement.clientWidth / 38.4 + "px";
        //转化为相对单位
        var relNum = document.documentElement.clientWidth / 38.4;
        window.onresize = () => {
            document.documentElement.style.fontSize =
                document.documentElement.clientWidth / 38.4 + "px";
            relNum = document.documentElement.clientWidth / 38.4;

        };
	;


        //窗口大小变化时候，进行刷新页面操作，防止样式混乱

        var x = window.innerWidth;

        function resizeFresh() {
            document.documentElement.style.fontSize =
                document.documentElement.clientWidth / 38.4 + "px";
            relNum = document.documentElement.clientWidth / 38.4;
            // if (x != window.innerWidth)
            // location.reload();
        }
    ;


        $(function () {
            //kv判断是否加载完毕
            var t_img; // 定时器
			var isLoad = true; // 控制变量
			// 判断图片加载状况，加载完成后回调
			isImgLoad(function () {
				setTimeout(function () {
				// 加载完成
				$(".product01-box").addClass("product01-box-active");

				}, 100);
			});
			// 判断图片加载的函数
			function isImgLoad(callback) {
				// 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
				// 查找所有封面图，迭代处理
				$(".product01-box img").each(function () {
					// 找到为0就将isLoad设为false，并退出each
					if (this.height === 0) {
						isLoad = false;
						return false;
					}
				});
				// 为true，没有发现为0的。加载完毕
				if (isLoad) {
					clearTimeout(t_img); // 清除定时器
					// 回调函数
					callback();
				// 为false，因为找到了没有加载完成的图，将调用定时器递归
				} else {
					isLoad = true;
					t_img = setTimeout(function () {
						isImgLoad(callback); // 递归扫描
					}, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
				}
			}



            $(".product01-box .video-play-btn").click(function () {
                $(".video-popup").show();
                $("#bannerVideo")[0].currentTime = 0
                $("#bannerVideo")[0].play()
            })
            $(".video-popup .popup-rel .video-box .video-rel .close-btn").click(function () {
                $(".video-popup").hide();
                $("#bannerVideo")[0].pause()
            })

            addScrollMagic()
           mySwiper2 = new Swiper('.product07-swiper', {
				// autoplay: true,//可选选项，自动滑动
				slidesPerView: 1,
                centeredSlides: true,
                centeredSlidesBounds: true,
                mousewheel: false,
                allowTouchMove:false,
				// slidesOffsetBefore : 1.875*relNum,
			})
            $(".bottom-click-slide .slide-li").click(function(){
                var $this=$(this);
                $this.addClass('slide-li-active').siblings(".slide-li").removeClass("slide-li-active")
                var num=$this.index()
                console.log(num)
                
                if(num==0){
                    // $("#video0")[0].currentTime = 0;
                    // $("#video0")[0].play()
                    $("#video1")[0].currentTime = 0;
                    $("#video1")[0].pause()
                    $("#video2")[0].currentTime = 0;
                    $("#video2")[0].pause()
                    $(".product05-box .bottom-tip-txt").hide()
                    $(".product05-box .slide-txt"+num).show().siblings(".slide-txt").hide()
                }else if(num==1){
                    // $("#video0")[0].currentTime = 0;
                    // $("#video0")[0].pause()
                    $("#video1")[0].currentTime = 0;
                    $("#video1")[0].play()
                    $("#video2")[0].currentTime = 0;
                    $("#video2")[0].pause()
                    $(".bottom-tip-txt0").show()
                    $(".bottom-tip-txt1").hide()
                    $(".product05-box .slide-txt"+num).show().siblings(".slide-txt").hide()
                }else if(num==2){
                    // $("#video0")[0].currentTime = 0;
                    // $("#video0")[0].pause()
                    $("#video1")[0].currentTime = 0;
                    $("#video1")[0].pause()
                    $("#video2")[0].currentTime = 0;
                    $("#video2")[0].play()
                    $(".bottom-tip-txt1").show()
                    $(".bottom-tip-txt0").hide()
                    $(".product05-box .slide-txt"+num).show().siblings(".slide-txt").hide()
                }
                mySwiper2.slideToLoop(num, 1000, false);//切换到第一个slide，速度为1秒
            })      
            $(".top-nav-mian2 .nav-box-rel .nav-content .content-txt .p-txt").eq(0).click(function () {
				// alert(1)
                var $this=$(this);
                $this.addClass("p-txt-active").siblings(".p-txt").removeClass("p-txt-active")
				$('html,body').animate({
					scrollTop: $('.product03-box-new').offset().top
				}, 800, function () {
	
				});
				// console.log(document.body.scrollTop)
			}) 
            $(".top-nav-mian2 .nav-box-rel .nav-content .content-txt .p-txt").eq(1).click(function () {
				// alert(1)
                var $this=$(this);
                $this.addClass("p-txt-active").siblings(".p-txt").removeClass("p-txt-active")
				$('html,body').animate({
					scrollTop: $('.product06-box').offset().top
				}, 800, function () {
	
				});
				// console.log(document.body.scrollTop)
			})   
            $(".top-nav-mian2 .nav-box-rel .nav-content .content-txt .p-txt").eq(2).click(function () {
				// alert(1)
                var $this=$(this);
                $this.addClass("p-txt-active").siblings(".p-txt").removeClass("p-txt-active")
				$('html,body').animate({
					scrollTop: $('.product09-box').offset().top
				}, 800, function () {
	
				});
				// console.log(document.body.scrollTop)
			}) 
            $(".top-nav-mian2 .nav-box-rel .nav-content .content-txt .p-txt").eq(3).click(function () {
				// alert(1)
                var $this=$(this);
                $this.addClass("p-txt-active").siblings(".p-txt").removeClass("p-txt-active")
				$('html,body').animate({
					scrollTop: $('.product12-box').offset().top
				}, 800, function () {
	
				});
				// console.log(document.body.scrollTop)
			})   
        })
        function addScrollMagic() {
            //转化为相对单位
            var relNum = document.documentElement.clientWidth / 38.4;
            //获取屏幕中间的高度
            var viewCenter = document.documentElement.clientHeight / 2;
            //获取屏幕高度
            var viewHeight = window.screen.availHeight;
            console.log(viewHeight)
            //初始化插件
            var controller = new ScrollMagic.Controller();
            // get all slides
            var slides22 = $(".move-box");
            // create scene for every slide
            for (let i = 0; i < slides22.length; i++) {
                new ScrollMagic.Scene({
                    triggerElement: slides22[i],
                    triggerHook: 100,
                    duration: 5 * relNum,
                    offset: 3 * relNum,
                })
                    .on("progress", function (e) {
                        if (e.progress.toFixed(3) > 0) {
                            $(".move-box").eq(i).addClass("move-box-active")
                        } else {
                            $(".move-box").eq(i).removeClass("move-box-active")
                        }
                    })
                    // //.addIndicators() // add indicators (requires plugin)
                    .addTo(controller);

            }
            new ScrollMagic.Scene({
                triggerElement: ".product03-box-new",
                triggerHook: 0,
                duration: 0.2 * viewHeight,
                offset: -1 * relNum,
            })
            
            .on("progress", function (e) {
                    if (e.progress.toFixed(3) > 0) {
                        $(".top-nav-mian2 .nav-box-rel .nav-content .content-txt .p-txt").eq(0).addClass("p-txt-active").siblings(".p-txt").removeClass("p-txt-active")
                        $(".top-nav-mian2 .nav-box-rel .nav-content .left-prov-box .img2").show()
                        $(".top-nav-mian2 .nav-box-rel .nav-content .left-prov-box .img1").hide()
                        $(".top-nav-mian2 .nav-box-rel .nav-content .right-more-box .img1").show()
                        $(".top-nav-mian2 .nav-box-rel .nav-content .right-more-box .img2").hide()
                    } else {
                        
                    }
                })
                // .addIndicators()
                .addTo(controller); 
                
                new ScrollMagic.Scene({
                triggerElement: ".product06-box",
                triggerHook: 0,
                duration: 0.2 * viewHeight,
                offset: -1 * relNum,
            })
            
            .on("progress", function (e) {
                    if (e.progress.toFixed(3) > 0) {
                        $(".top-nav-mian2 .nav-box-rel .nav-content .content-txt .p-txt").eq(1).addClass("p-txt-active").siblings(".p-txt").removeClass("p-txt-active")
                        $(".top-nav-mian2 .nav-box-rel .nav-content .left-prov-box .img2").hide()
                        $(".top-nav-mian2 .nav-box-rel .nav-content .left-prov-box .img1").show()
                        $(".top-nav-mian2 .nav-box-rel .nav-content .right-more-box .img1").show()
                        $(".top-nav-mian2 .nav-box-rel .nav-content .right-more-box .img2").hide()
                    } else {
                        
                    }
                })
                .addTo(controller); 

                new ScrollMagic.Scene({
                triggerElement: ".product09-box",
                triggerHook: 0,
                duration: 0.2 * viewHeight,
                offset: -1 * relNum,
            })
            
            .on("progress", function (e) {
                    if (e.progress.toFixed(3) > 0) {
                        $(".top-nav-mian2 .nav-box-rel .nav-content .content-txt .p-txt").eq(2).addClass("p-txt-active").siblings(".p-txt").removeClass("p-txt-active")
                        $(".top-nav-mian2 .nav-box-rel .nav-content .left-prov-box .img2").hide()
                        $(".top-nav-mian2 .nav-box-rel .nav-content .left-prov-box .img1").show()
                        $(".top-nav-mian2 .nav-box-rel .nav-content .right-more-box .img1").show()
                        $(".top-nav-mian2 .nav-box-rel .nav-content .right-more-box .img2").hide()
                    } else {
                        
                    }
                })
                // .addIndicators()
                .addTo(controller); 
                new ScrollMagic.Scene({
                triggerElement: ".product12-box",
                triggerHook: 0,
                duration: 0.2 * viewHeight,
                offset: -1 * relNum,
            })
            
            .on("progress", function (e) {
                    if (e.progress.toFixed(3) > 0) {
                        $(".top-nav-mian2 .nav-box-rel .nav-content .content-txt .p-txt").eq(3).addClass("p-txt-active").siblings(".p-txt").removeClass("p-txt-active")
                        $(".top-nav-mian2 .nav-box-rel .nav-content .left-prov-box .img2").hide()
                        $(".top-nav-mian2 .nav-box-rel .nav-content .left-prov-box .img1").show()
                        $(".top-nav-mian2 .nav-box-rel .nav-content .right-more-box .img1").hide()
                        $(".top-nav-mian2 .nav-box-rel .nav-content .right-more-box .img2").show()
                    } else {
                        
                    }
                })
                .addTo(controller); 






            new ScrollMagic.Scene({
                triggerElement: ".product02-box",
                triggerHook: 100,
                duration: 1 * viewHeight,
                offset:3 * relNum,
            })
            .setTween(
                new TimelineMax()
                    .add([
                        TweenMax.to(".product02-box .product02-box-rel .bg-14-img img", 0.2, { "transform": "rotate(0deg)", ease: Linear.easeNone }),

                    ])
            )
            // .addIndicators()
            .addTo(controller);



            var videoPlayStatus=false
            new ScrollMagic.Scene({
                triggerElement: ".product05-box",
                triggerHook: 100,
                duration: 1 * viewHeight,
                offset:11 * relNum,
            })
            .on("progress", function (e) {
                if (e.progress.toFixed(3) > 0) {
                    if(!videoPlayStatus){
                        videoPlayStatus=true
                        $(".bottom-click-slide .slide-li").eq(0).addClass('slide-li-active').siblings(".slide-li").removeClass("slide-li-active")
                        mySwiper2.slideToLoop(0, 1000, false);//切换到第一个slide，速度为1秒
                        $(".product05-box .slide-txt"+0).show().siblings(".slide-txt").hide()
                        // $("#video0")[0].currentTime = 0;
                        // $("#video0")[0].play()
                        $("#video1")[0].currentTime = 0;
                        $("#video1")[0].pause()
                        $("#video2")[0].currentTime = 0;
                        $("#video2")[0].pause()
                        $(".product05-box .bottom-tip-txt").hide()
                    }
                } else {
                    videoPlayStatus=false
                    // $("#video0")[0].currentTime = 0;
                    // $("#video0")[0].pause()
                    $("#video1")[0].currentTime = 0;
                    $("#video1")[0].pause()
                    $("#video2")[0].currentTime = 0;
                    $("#video2")[0].pause()
                }
            })
            // .addIndicators()
            .addTo(controller);




            new ScrollMagic.Scene({
                triggerElement: ".product08-box",
                triggerHook: 100,
                duration: 1 * viewHeight,
                offset:13 * relNum,
            })
            .on("progress", function (e) {
                if (e.progress.toFixed(3) > 0) {
                    $(".product08-box .product08-content").addClass("product08-content-active")
                      
                } else {
                    $(".product08-box .product08-content").removeClass("product08-content-active")
                }
            })
            // .addIndicators()
            .addTo(controller);
            // new ScrollMagic.Scene({
            //     triggerElement: ".product04-box",
            //     triggerHook: 0,
            //     duration: 0.8 * viewHeight,
            //     offset:0,
            // })
            //     .setPin(".product04-box .height-box")
            //     // .addIndicators()
            //     .addTo(controller);


            new ScrollMagic.Scene({
                triggerElement: ".product04-box",
                triggerHook: 0,
                duration: 1 * viewHeight,
                offset:10 * relNum,
            })
            .on("progress", function (e) {
                if (e.progress.toFixed(3) > 0) {
                    $(".product04-box .product04-img1 .product04-img1-rel").addClass("product04-img1-rel-active")
                      
                } else {
                    $(".product04-box .product04-img1 .product04-img1-rel").removeClass("product04-img1-rel-active")
                }
            })
            // .addIndicators()
            .addTo(controller);



            new ScrollMagic.Scene({
                triggerElement: ".product10-box",
                triggerHook: 100,
                duration: 1 * viewHeight,
                offset:10 * relNum,
            })
            .on("progress", function (e) {
                if (e.progress.toFixed(3) > 0) {
                    $(".product10-box").addClass("product10-box-active")
                      
                } else {
                    $(".product10-box").removeClass("product10-box-active")
                }
            })
            // .addIndicators()
            .addTo(controller);


            new ScrollMagic.Scene({
                triggerElement: ".product11-box",
                triggerHook: 100,
                duration: 1 * viewHeight,
                offset:10 * relNum,
            })
            .on("progress", function (e) {
                if (e.progress.toFixed(3) > 0) {
                    $(".product11-box").addClass("product11-box-active")
                      
                } else {
                    $(".product11-box").removeClass("product11-box-active")
                }
            })
            // .addIndicators()
            .addTo(controller);


        }
    