$(document).ready(function () {

    // Declare variable html
    let textInputDate = $('.layout-header-date-text p'),
        logoSrc = $('#layout-header-logo'),
        textInputInfo = $('.layout-header-info-text p'),
        textInputSummaryImage = $('.layout-image-summary-text p'),
        textInputCaptionImage = $('.layout-image-caption-text p'),
        textInputMainTitle = $('.layout-main-title p'),
        textInputSubTitle1 = $('.layout-subtitle-wrap-1 p'),
        textInputSubTitle2 = $('.layout-subtitle-wrap-2 p'),
        textInputContent = $('.layout-content-text-wrap p'),
        tagHtmlP = $('p[contenteditable=true]');
    // textInputMainTitleTagP = $('.layout-main-title p');


    // Declare variable  get value localStorage
    // let getDate = localStorage.getItem('date'),
    //     getLogoSrc = localStorage.getItem('logo'),
    //     getInfo = localStorage.getItem('info'),
    //     getMainTitle = localStorage.getItem('mainTitle'),
    //     srcImage = localStorage.getItem('srcImage'),
    //     getImgSummary = localStorage.getItem('imageSummaryText'),
    //     getImgCaptionText = localStorage.getItem('imageCaptionText'),
    //     subtitle01 = localStorage.getItem('subTitle01'),
    //     subtitle02 = localStorage.getItem('subTitle02'),
    //     content = localStorage.getItem('content');

    // Set value for text input HTML
    // Header html
    // textInputDate.html(getDate);
    // logoSrc.attr("src", getLogoSrc);
    // textInputInfo.html(getInfo);

    // Title main
    // textInputMainTitle.html(getMainTitle);

    // Layout left html
    // textInputSummaryImage.html(getImgSummary);
    // textInputCaptionImage.html(getImgCaptionText);
    // textInputContent.html(content);

    // Layout right html
    // textInputSubTitle1.html(subtitle01);
    // textInputSubTitle2.html(subtitle02);

    $('#goBack').click(function () {
        parent.history.back();
        return false;
    });

    rescale($('#preview'));

    $(window).resize(function () {
        rescale($('#preview'));
    });

    //RESCALE WHEN RESISZE SCREEN
    function rescale(elem) {
        let height = parseInt(elem.css('height')),
            width = parseInt(elem.css('width')),
            ratio = ($(window).width() - 10) / 1495;

        elem.css('-webkit-transform', 'scale(' + ratio + ')');
        elem.parent().css('width', parseInt(width * ratio) + 'px');
        elem.parent().css('height', parseInt(height * ratio) + 'px');
    }

    function setFontsize(numOfInput) {
        let title = $('.layout-main-title'),
            fontSize = (title.width() / numOfInput) > 180 ? 180 : title.width() / numOfInput,
            scaleY = numOfInput > 8 ? 1.6 : 1;

        textInputMainTitle.css({
            "font-size": fontSize + 'px',
            "transform": "translate(-50%, -50%) scaleY(" + scaleY + ")"
        });
    }

    // setFontsize(textInputMainTitle.text().length);
});