        const btnOpenVideoPopup = $('.videos .videos__item');
        const btnCloseVideoPopup = $('#videoPopup__closeBtn');
        const videoPopup = $('.videoPopup');
        const iframeVideoPopup = $('.videoPopup__inner iframe');
        


        btnOpenVideoPopup.click(function(e){
            e.stopPropagation();
            const numberVideo = $(this).data('video');
            $(`[data-videoPopup="${numberVideo}"]`).fadeIn(); 
            // console.log("OPEN:" + numberVideo);   
            // console.log($(`[data-videoPopup="${numberVideo}"]`))
        })

        btnCloseVideoPopup.click(function(){
            videoPopup.fadeOut();
            stopVideo()
        })

        $('body').on('click', function(event){
            if($(event.target).not(iframeVideoPopup)){
                 videoPopup.fadeOut();
                 stopVideo()
            }
        });


        function stopVideo(){
            // const videoSrc = iframeVideoPopup.attr("src");
            // iframeVideoPopup.attr("src","");
            // iframeVideoPopup.attr("src", videoSrc);
            videoPopup.each(function(){
                const videoSrc = $(this).find('.videoPopup__inner iframe').attr("src");
                const thisIframeVideoPopup = $(this).find('.videoPopup__inner iframe') ;
                thisIframeVideoPopup.attr("src","");
                thisIframeVideoPopup.attr("src", videoSrc);
            })
        }