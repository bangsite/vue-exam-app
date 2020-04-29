$(document).ready(function () {
    var selectedIndex = localStorage.getItem('selectedSample');
    $('.sample ul li').removeClass('active');
    $('.sample ul li:eq('+selectedIndex+')').addClass('active');
    
    console.log(selectedIndex);
    $('.sample ul li').click(function(e) {
        e.preventDefault();
        $('.sample ul li').removeClass('active');
        $(this).addClass('active');
        setPlanText($(this).index());
    });
    $('.sample ul li').dblclick(function () {
        localStorage.setItem('selectedSample', $(this).index());
        window.location.href = $(this).find('a').attr('href');
    });

    var worksheetData;

    $.getJSON("worksheet.json", function (result) {
        worksheetData = result;
    });

    //SET PLAN TEXT WHEN CLICK SAMPLES BELOW
    function setPlanText(index) {
        let selectedData = worksheetData.worksheet[index];
        let i = 0;
        $.each(selectedData, function(key, value) {
            i += 1;
            $('.plan ul li:nth-child(' + i + ') p').html(value);
        });
    }
});