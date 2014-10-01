$(document).ready(function () {
	$(".nav a").on('click',
		function( e ) {


			var href =$(this).attr("href");
			var b_id = $(this).attr("id");
			var wrap = $('.content_container');

			if (b_id === "kunnatta"){
				wrap.load( href + ' .kunnatta')
            }else if  (b_id === "reynsla"){
				wrap.load( href + ' .reynsla')
            }else if  (b_id === "menntun"){
				wrap.load( href + ' .menntun')
            }else if  (b_id === "annad"){
				wrap.load( href + ' .annad', function (){
				$( document ).ajaxStop(function() {
                $(".annad_dl dd").hide();
                });
                $(".annad_dt").on('click', function(){
                if ($(this).next().css("display") === "block"){
                    $(this)
                        .next()
                            .slideUp();
                    }
                    else if ($(this).next().css("display") === "none"){
                    $(this)
                        .next()
                            .slideDown()
                    }
                });
                })
            }else if  (b_id === "syniforrit"){
				wrap.load( href + ' .syniforrit')
            }else if  (b_id === "ferilskra"){
				wrap.load( href + ' .ferilskra')
            }else if  (b_id === "medmaeli"){
				wrap.load( href + ' .medmaeli')
            }else if  (b_id === "hlekkir"){
				wrap.load( href + ' .hlekkir')
            }else if  (b_id === "onnur_reynsla"){
				wrap.load( href + ' .onnur_reynsla', function (){
				$( document ).ajaxStop(function() {
                $(".onnur_reynsla dd").hide();
                });
                $(".forr_reynsla_dt").on('click', function(){
                if ($(this).next().css("display") === "block"){
                    $(this)
                        .next()
                            .slideUp();
                    }
                    else if ($(this).next().css("display") === "none"){
                    $(this)
                        .next()
                            .slideDown()
                    }
                });
                })
            }
		e.preventDefault();
		})

});