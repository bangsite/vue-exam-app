$(document).ready(function () {
    var node = document.getElementById('preview-page');
    function genPDF() {
        domtoimage.toPng(document.getElementById('preview-page'))
            .then(function (dataUrl) {
                var img = new Image();
                img.src = dataUrl;
                let pdf = new jsPDF();
                let pdfWidth = pdf.internal.pageSize.getWidth();
                let pdfHeight = pdf.internal.pageSize.getHeight();
                pdf.addImage(
                    img,
                    'PNG',
                    0,
                    0,
                    pdfWidth,
                    pdfHeight
                );

                pdf.save('file.pdf');
            })
            .catch(function (e) {
                console.log(e);
            })
    }

    function genImage() {
        domtoimage.toPng(document.getElementById('preview-page'))
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            })
            .catch(function (e) {
                console.log(e);
            })
    }

    $('#btn-pdf').click(function (e) {
        e.preventDefault();
        genPDF();
    });

    $('#btn-image').click(function (e) {
        e.preventDefault();
        genImage();
    });
});


