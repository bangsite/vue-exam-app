/**
 * Declare variable
 * @type {HTMLElement}
 */
const file_upload = document.getElementById('file-upload');
const overLay = $(".overlay");

// Button
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const zoomReset = document.getElementById('reset');
const btnCrop = document.getElementById('crop');

// Object
const event_state = {};

// Variable value
let imageTarget,
    $container,
    originWidth,
    originHeight,
    originSrc = new Image(),
    imgData;

let files, reader;
// -------------------------

const resizeableImage = imgPreview => {
    imageTarget = imgPreview;

    initImage();
};

const initImage = () => {
    // load a file width html5 file api
    file_upload.addEventListener("change", handleFiles, false);

    /**
     * Func event change of upload file
     * @param event
     */
    function handleFiles(event) {
        // get file
        files = event.target.files;

        // transform to base64
        reader = new FileReader();
        reader.onload = (event) => {
            imgData = reader.result;

            loadData();
        };

        reader.readAsDataURL(files[0]);
    }


    // Assign the container to a variable
    $container = $('.resize-container');
    $('<div class="resize-container-ontop"></div>').prependTo($container);

    // Add events
    $container.on('mousedown touchstart', '.resize-container-ontop', startMoving);

    btnCrop.addEventListener('click', crop);
};

/**
 * Func load data
 */
const loadData = () => {
    // Set the image target
    originSrc.src = imgData;

    imageTarget.attr({
        src: imgData
    });

    // Resize the canvas
    originSrc.addEventListener('load', () => {
        const imageTargetWidth = originWidth = imageTarget.width();
        const imageTargetHeight = originHeight = imageTarget.height();

        zoomImage(imageTargetWidth, imageTargetHeight);
    });
};

/**
 * Func Save event state
 * @param event
 */

function saveEventState(event) {
    event_state.container_left = $container.offset().left;
    event_state.container_top = $container.offset().top;

    event_state.mouse_x = (event.clientX || event.pageX || event.originalEvent.touches[0].clientX) + $(window).scrollLeft();
    event_state.mouse_y = (event.clientY || event.pageY || event.originalEvent.touches[0].clientY) + $(window).scrollTop();

    // This is a fix for mobile safari
    // For some reason it does not allow a direct copy of the touches property
    if ('originalEvent' in event && typeof event.originalEvent.touches !== 'undefined') {
        event_state.touches = [];

        $.each(event.originalEvent.touches, function (i, ob) {
            event_state.touches[i] = {};
            event_state.touches[i].clientX = 0 + ob.clientX;
            event_state.touches[i].clientY = 0 + ob.clientY;
        });
    }
    // event_state.event = event;
}

// const startMoving = (event) => {
async function startMoving(event) {
    event.preventDefault();
    event.stopPropagation();

    await saveEventState(event);

    $(document).on('mousemove touchmove', moving);
    $(document).on('mouseup touchend', endMoving);
}

const endMoving = (event) => {
    event.preventDefault();

    $(document).off('mouseup touchend', endMoving);
    $(document).off('mousemove touchmove', moving);
};

const moving = (event) => {
    let mouse = {}, touches;

    event.preventDefault();
    event.stopPropagation();

    touches = event.originalEvent.touches;

    mouse.x = (event.clientX || event.pageX || touches[0].clientX) + $(window).scrollLeft();
    mouse.y = (event.clientY || event.pageY || touches[0].clientY) + $(window).scrollTop();

    $container.offset({
        left: event_state.container_left + (mouse.x - event_state.mouse_x),
        top: event_state.container_top + (mouse.y - event_state.mouse_y)
    });
};

const crop = (event) => {
    // Get position div overlay
    let left = overLay.offset().left - $container.offset().left;
    let top = overLay.offset().top - $container.offset().top;
    let width = overLay.width();
    let height = overLay.height();

    let cropCanvas = document.createElement('canvas');
    cropCanvas.width = width;
    cropCanvas.height = height;

    cropCanvas.getContext('2d').drawImage(imageTarget[0], left, top, width, height, 0, 0, width, height);

    imageTarget.attr({
        src: cropCanvas.toDataURL("image/png")
    });

    cropCanvas.remove();

    $(imageTarget).on("load", function () {
        $(this).off('load').parent().css({
            top: $(".overlay").offset().top - $(".crop-wrap").offset().top,
            left: $('.overlay').offset().left - $('.crop-wrap').offset().left,
        })
    });
};


//-----------------------------
// Zoom img
const zoomImage = function (width, height) {
    const percent = 1.1;

    /**
     * action to zoom in
     */
    zoomIn.addEventListener("click", function (event) {
        let currentWidth = imageTarget.width() * percent;
        let currentHeight = imageTarget.height() * percent;

        resizeImageCanvasZoom(currentWidth, currentHeight, imageTarget[0]);
    });

    /**
     * action to zoom out
     */
    zoomOut.addEventListener("click", function (event) {
        let currentWidth = imageTarget.width() / percent;
        let currentHeight = imageTarget.height() / percent;

        resizeImageCanvasZoom(currentWidth, currentHeight, imageTarget[0])
    });

    /**
     * action to reset Photo
     */
    zoomReset.addEventListener("click", function (event) {
        resizeImageCanvasZoom(originWidth, originHeight, originSrc)
    });

    /**
     * resize Image & Canvas
     * @param width
     * @param height
     * @param selectedImage
     */
    function resizeImageCanvasZoom(width, height, selectedImage) {
        const resizeCanvas = document.createElement('canvas');
        resizeCanvas.width = width;
        resizeCanvas.height = height;

        let context = resizeCanvas.getContext("2d");
        context.drawImage(selectedImage, 0, 0, width, height);

        imageTarget.attr('src', resizeCanvas.toDataURL('image/png'));

        resizeCanvas.remove();
    }
};


export {resizeableImage};