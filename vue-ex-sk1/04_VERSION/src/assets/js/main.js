'use strict';
$(document).ready(function () {

    // Declare variable html
    let textInputDate = $('.layout-header-date-text p'),
        textInputInfo = $('.layout-header-info-text p'),
        textInputSummaryImage = $('.layout-image-summary-text p'),
        textInputCaptionImage = $('.layout-image-caption-text p'),
        textInputMainTitle = $('.layout-main-title-wrap input[type="text"]'),
        textInputSubTitle1 = $('.layout-subtitle-wrap-1 p'),
        textInputSubTitle2 = $('.layout-subtitle-wrap-2 p'),
        textInputContent = $('.layout-content-text-wrap p'),
        tagHtmlP = $('p[contenteditable=true]'),
        tagHtmlInput = $('input[type="text"]'),
        logoHeaderImg = $('#layout-header-logo'),

        // button
        buttonInputImage = $('#chooseLogo'),
        buttonPreview = $('.btn-preview'),
        btnNewspaperPage = $('.btn-newspaper-page');


    // Declare variable  get value localStorage
    let getDate = localStorage.getItem('date'),
        getLogoSrc = localStorage.getItem('logo'),
        getInfo = localStorage.getItem('info'),
        getMainTitle = localStorage.getItem('mainTitle'),
        srcImage = localStorage.getItem('srcImage'),
        getImgSummary = localStorage.getItem('imageSummaryText'),
        getImgCaptionText = localStorage.getItem('imageCaptionText'),
        subtitle01 = localStorage.getItem('subTitle01'),
        subtitle02 = localStorage.getItem('subTitle02'),
        content = localStorage.getItem('content'),
        getCallFuncScale = localStorage.getItem('callFuncScale');

    // Set value for text input HTML
    // Header html
    textInputDate.html(getDate);
    textInputInfo.html(getInfo);

    // Title main
    textInputMainTitle.val(getMainTitle);

    // Layout left html
    textInputSummaryImage.html(getImgSummary);
    textInputCaptionImage.html(getImgCaptionText);
    textInputContent.html(content);

    // Layout right html
    textInputSubTitle1.html(subtitle01);
    textInputSubTitle2.html(subtitle02);

    //<!---DIRECT TO PREVIEW PAGE--->
    //Direct current page to preview base and set localStorage for some for each input field
    function navigatePreview() {
        // Header html
        localStorage.setItem('date', textInputDate.html());
        localStorage.setItem('logo', $('#layout-header-logo')[0].src);
        localStorage.setItem('info', textInputInfo.html());

        // Title main html
        localStorage.setItem('mainTitle', textInputMainTitle.val());

        // Layout left html
        localStorage.setItem('imageSummaryText', textInputSummaryImage.html());
        localStorage.setItem('imageCaptionText', textInputCaptionImage.html());
        localStorage.setItem('content', textInputContent.html());

        // Layout right html
        localStorage.setItem('subTitle01', textInputSubTitle1.html());
        localStorage.setItem('subTitle02', textInputSubTitle2.html());

        window.location.href = "index-preview.html";
    }

    //Preview page navigating
    buttonPreview.click(function (e) {
        navigatePreview();
        e.preventDefault();
    });

    textInputMainTitle.keyup(function (e) {
        if ($(this).text().length > 10) {
            if (e.which !== 8) {
                return false;
            }
        }
    });

    $(".layout-content textarea").bind("input", function () {
        let $this = $(this);
        setTimeout(function () {
            if ($this.val().length >= parseInt($this.attr("maxlength"), 10))
                $this.next("textarea").focus();
        }, 0);
    });

    //<!---PLACEHOLDER--->
    //Toggle place-holder class base on input
    function hidePlaceholder(element) {
        if (element.text() !== '') {
            element.siblings(".place-holder").addClass('hide');
        } else {
            element.siblings(".place-holder").removeClass('hide');
        }
    }

    tagHtmlP.keyup(function () {
        hidePlaceholder($(this));
    });

    // tagHtmlInput.keyup(function () {
    //     hidePlaceholder($(this));
    //
    // });

    hidePlaceholder(textInputDate);
    hidePlaceholder(textInputInfo);

    // hidePlaceholder(textInputMainTitle);

    hidePlaceholder(textInputSummaryImage);
    hidePlaceholder(textInputCaptionImage);
    hidePlaceholder(textInputContent);

    hidePlaceholder(textInputSubTitle1);
    hidePlaceholder(textInputSubTitle2);


    //<---ROTATE NUMBER--->
    //Set number which has 　　2 or more digits in to the same row by selecting them
    function selectHTML() {
        try {
            if (window.ActiveXObject) {
                let c = document.selection.createRange();
                return c.htmlText;
            }

            let nNd = document.createElement("span"),
                w = getSelection().getRangeAt(0);

            w.surroundContents(nNd);
            return nNd.innerHTML;
        } catch (e) {
            if (window.ActiveXObject) {
                return document.selection.createRange();
            } else {
                return getSelection();
            }
        }
    }

    $('#rotate').click(function (e) {
        $('span').addClass('num');
        e.preventDefault();
    });


    // Set src image tag layout-image
    $('#bg-layout-img').css('background-image', 'url("' + srcImage + '")');


    //<---READ IMAGE FROM URL--->
    //Read input img then display on screen immediately

    function readURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                $('#layout-header-logo').attr('src', e.target.result);

            };

            fetch($('#layout-header-logo')[0].src).then(res => res.blob()).then(console.log);

            // fetch($('#logo')[0].src).then(res => res.blob()).then(console.log)
            reader.readAsDataURL(input.files[0]);
        }
    }

    buttonInputImage.change(function () {
        readURL(this);
    });

    logoHeaderImg.click(function () {
        $("#layout-header-logo ~ input[type='file']").trigger('click');
    });


    //<---INPUT MAX LENGTH--->
    textInputDate.bind('keyup paste copy cut mouseup', function (e) {
        if (e.which === 13) {
            editableContentChanged(textInputDate, 15);
        }
    });
    textInputDate.bind('blur', function () {
        editableContentChanged(textInputDate, 15);
    });

    textInputInfo.bind('blur keyup paste copy cut mouseup', function (e) {
        if (e.which === 13) {
            editableContentChanged(textInputInfo, 11);
        }
    });
    textInputInfo.bind('blur', function () {
        editableContentChanged(textInputInfo, 11);
    });

    textInputSummaryImage.bind('keyup paste copy cut mouseup', function (e) {
        if (e.which === 13) {
            editableContentChanged(textInputSummaryImage, 191);
        }
    });

    textInputSummaryImage.bind('blur', function () {
        editableContentChanged(textInputSummaryImage, 191);
    });

    textInputCaptionImage.bind('keyup paste copy cut mouseup', function (e) {
        if (e.which === 13) {
            editableContentChanged(textInputCaptionImage, 41);
        }
    });
    textInputCaptionImage.bind('blur', function () {
        editableContentChanged(textInputCaptionImage, 41);
    });


    textInputSubTitle1.bind('keyup paste copy cut mouseup', function (e) {
        if (e.which === 13) {
            editableContentChanged(textInputSubTitle1, 11);
        }
    });

    textInputSubTitle1.bind('blur', function (e) {
        editableContentChanged(textInputSubTitle1, 11);
    });


    textInputSubTitle2.bind('keyup paste copy cut mouseup', function (e) {
        if (e.which === 13) {
            editableContentChanged(textInputSubTitle2, 9);
        }
    });

    textInputSubTitle2.bind('blur', function (e) {
        editableContentChanged(textInputSubTitle2, 9);
    });

    textInputContent.bind('keyup paste copy cut mouseup', function (e) {
        if (e.which === 13) {
            editableContentChanged(textInputContent, 664);
        }
    });

    textInputContent.bind('blur', function () {
        editableContentChanged(textInputContent, 664);
    });


    //Keep texts in field to not over maxlength
    function editableContentChanged(element, maxLength) {
        if (element.html().length >= maxLength) {
            element.html(element.html().substring(0, maxLength - 1));
            setCaret(element[0], maxLength - 1);
        }
    }

    function setCaret(el, max) {
        let range = document.createRange(),
            sel = window.getSelection();

        range.setStart(el.childNodes[0], max);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        el.focus();
    }

    tagHtmlP.keydown(function (e) {
        // trap the return key being pressed
        if (e.keyCode === 13) {
            // insert 2 br tags (if only one br tag is inserted the cursor won't go to the second line)
            document.execCommand('insertHTML', false, '<br><br>');
            // prevent the default behaviour of return key pressed
            return false;
        }
    });


    //<---SCALE FONT WHEN INPUT MORE THAN 8--->
    //Input content will be keep in container when number of chars is over than 8 by scaling them
    function setFontsize(numOfInput) {
        let title = $('.layout-main-title'),
            fontSize = (title.width() / numOfInput) > 180 ? 180 : title.width() / numOfInput,
            scaleY = numOfInput > 8 ? 1.5 : 1;

        textInputMainTitle.css({
            "font-size": fontSize + 'px',
            "transform": "translate(-50%, -50%) scaleY(" + scaleY + ")"
        });

        if ($(window).width() < 719) {
            textInputMainTitle.css({
                "font-size": 30 + 'px',
                "transform": "translate(-50%, -50%) scaleY(" + 1 + ")"
            });

        } else {
            textInputMainTitle.css({
                "font-size": fontSize + 'px',
                "transform": "translate(-50%, -50%) scaleY(" + scaleY + ")"
            });

        }


    }

    $(window).on('resize', function () {
        if (textInputMainTitle.length > 0) {
            setFontsize(textInputMainTitle.val().length);

        }

    });

    if (textInputMainTitle.length > 0) {
        setFontsize(textInputMainTitle.val().length);

        textInputMainTitle.bind('input', function () {
            setFontsize($(this).val().length);
        });
    }


    btnNewspaperPage.click(function () {
        localStorage.setItem('callFuncScale', 'true');
    });


    if (getCallFuncScale && $('.newspaper-app').length) {
        if ($(this).width() > 719) {
            rescale($('#layout-scale'));

        } else {
            $("#layout").removeAttr("style");
            $("#layout-scale").removeAttr("style");
        }

    }


    $(window).resize(function () {
        if ($(this).width() > 719) {
            rescale($('#layout-scale'));

        } else {
            $("#layout").removeAttr("style");
            $("#layout-scale").removeAttr("style");
        }
    });

    //RESCALE WHEN RESISZE SCREEN
    function rescale(elem) {
        let height = parseInt(elem.css('height')),
            width = parseInt(elem.css('width')),
            ratio = ($(window).width() - 60) / 1495;

        elem.css('-webkit-transform', 'scale(' + ratio + ')');
        elem.parent().css('width', parseInt(width * ratio) + 'px');
        elem.parent().css('height', parseInt(height * ratio) + 'px');

    }


    //SLICK SLIDER
    if ($('.slider').length) {

        $('#top .slider ul').slick({
            speed: 3000,
            autoplay: true,
            autoplaySpeed: 0,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            swipeToSlide: true,
            centerMode: true,
            focusOnSelect: true,
            variableWidth: true
        });

        $('#bottom .slider ul').slick({
            speed: 3000,
            autoplay: true,
            autoplaySpeed: 0,
            slidesToShow: 2,
            slidesToScroll: -1,
            cssEase: 'linear',
            infinite: true,
            swipeToSlide: true,
            centerMode: true,
            focusOnSelect: true,
            variableWidth: true,
            rtl: true
        });
    }
});