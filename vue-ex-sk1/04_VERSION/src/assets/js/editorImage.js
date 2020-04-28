window.addEventListener('DOMContentLoaded', function () {
    // Variable element HTML
    let inputUpload = document.getElementById('file-upload'),
        image = document.getElementById('file-image'),
        wrapButton = document.getElementById('btn-editor'),
        previewButton = document.querySelector('.btn-preview'),
        cropButton = document.getElementById('crop'),
        resetButton = document.getElementById('reset'),
        canvas = document.getElementById('canvas');

    // Variable obj
    let position = {};

    // Variable files
    let reader,
        files,
        file,
        url;

    // Variable img
    let imageInstance = new Image(),
        cropper,
        originImage,
        canvasTmp;

    let optionsCropper = {
        viewMode: 3,
        dragMode: 'move',
        autoCropArea: 1,
        restore: false,
        modal: false,
        guides: false,
        highlight: false,
        zoomable: true,
        cropBoxMovable: false,
        cropBoxResizable: false,
        toggleDragModeOnDblclick: false,
        crop: function (event) {
            position.left = event.detail.x;
            position.top = event.detail.y;
            position.width = event.detail.width;
            position.height = event.detail.height;
        }
    };

    // Event file handler
    inputUpload.addEventListener('change', fileSelectHandler, false);

    // Event button handler
    resetButton.addEventListener('click', resetImage, false);
    previewButton.addEventListener('click', setDataImgPreview, false);

    /**
     * Func file handle
     * @param event
     */
    function fileSelectHandler(event) {
        files = event.target.files;

        let done = function (url) {

            imageInstance.src = url;
            originImage = imageInstance.src;

            if (imageInstance.complete) {
                loadDataImg.call(imageInstance);
            } else {
                imageInstance.onload = loadDataImg;
            }
        };

        if (files && files.length > 0) {
            file = files[0];

            if (URL) {
                done(URL.createObjectURL(file));
            } else if (FileReader) {
                reader = new FileReader();
                reader.onload = function (e) {
                    done(reader.result);
                };
                reader.readAsDataURL(file);
            }

            parseFile(file);
        }
    }

    /**
     * Func extension file handle
     * @param file
     */
    function parseFile(file) {

        const imgName = file.name;
        const ext = imgName.split('.').pop();
        const isRegex=files[0].name.match(/\.(jpg|jpeg|png|gif)$/);
        // const isRegex = (/\.(?=jpg|png|jpeg|gif)$/gi).test(ext);
        // If check jpg|png|jpeg|gif === true
        if (isRegex) {
            inputUpload.classList.add('hidden');

            // Thumbnail Preview
            image.classList.remove('hidden');
            wrapButton.classList.remove('hidden');

        } else {

            image.classList.add('hidden');
        }
    }

    function loadDataImg() {

        image.src = this.src;


        if (!cropper) {

            cropper = new Cropper(
                image,
                optionsCropper
            );

        } else {

            cropper.replace(this.src)

        }
    }

    function cropImage() {

        canvasTmp = cropper.getCroppedCanvas().toDataURL('image/jpeg');
        cropper.replace(canvasTmp)

    }

    function resetImage() {

        cropper.replace(originImage);

    }

    function setDataImgPreview() {
        cropImage();
        localStorage.setItem('srcImage', image.src);
    }
});