        const btnOpenVideoPopup = $('.videos .videos__item');
        const btnCloseVideoPopup = $('#videoPopup__closeBtn');
        const videoPopup = $('.videoPopup');
        const iframeVideoPopup = $('.videoPopup__inner iframe');
        


        btnOpenVideoPopup.click(function(e){
            e.stopPropagation();
            const numberVideo = $(this).data('video');
            $(`[data-videoPopup="${numberVideo}"]`).fadeIn();       
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
            const videoSrc = iframeVideoPopup.attr("src");
            iframeVideoPopup.attr("src","");
            iframeVideoPopup.attr("src", videoSrc);
        }