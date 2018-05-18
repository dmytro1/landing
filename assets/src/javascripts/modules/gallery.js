import $ from "jquery";

export default () => {

    let App = (function () {
        let gallery = $('.gallery');
        let Gallery = {
            zoom: function (imgContainer, img, gallery) {
                let containerHeight = imgContainer.outerHeight();
                if (!gallery.hasClass('is-zoomed')) {
                    imgContainer.css("height", containerHeight);
                    gallery.addClass('is-zoomed');

                    img.draggable({
                        drag: function (event, ui) {
                            ui.position.left = Math.min(100, ui.position.left);
                            ui.position.top = Math.min(100, ui.position.top);
                        }
                    });
                } else {
                    imgContainer.css("height", "auto");
                    gallery.removeClass('is-zoomed');
                }
            },
            switch: function (trigger, imgContainer, gallery) {
                let src = trigger.attr('href'),
                    thumbs = trigger.siblings(),
                    img = trigger.parent().prev().children();

                trigger.addClass('is-active');

                thumbs.each(function () {
                    if ($(this).hasClass('is-active')) {
                        $(this).removeClass('is-active');
                    }
                });

                if (gallery.hasClass('is-zoomed')) {
                    gallery.removeClass('is-zoomed');
                    imgContainer.css("height", "auto");
                }

                // Switch image source
                img.attr('src', src);
            }
        };

        //=== Public Methods ===//
        function initHandler() {
            gallery.on('click', 'a', function (event) {
                let trigger = $(this);
                let triggerData = trigger.data("gallery");
                let galleryId = event.delegateTarget.id;
                gallery = $('#' + galleryId);

                if (triggerData === 'zoom') {
                    let imgContainer = trigger.parent(),
                        img = trigger.siblings();
                    Gallery.zoom(imgContainer, img, gallery);
                } else if (triggerData === 'thumb') {
                    let imgContainer = trigger.parent().siblings();
                    Gallery.switch(trigger, imgContainer, gallery);
                } else {
                    return;
                }
                event.preventDefault();
            });
        }

        //=== Make Methods Public ===//
        return {
            init: initHandler
        };
    })();

    App.init();
};