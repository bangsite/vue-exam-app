document.addEventListener("DOMContentLoaded", function () {
    let dateFormatHTML = document.getElementById("date-format");
    let practiceStar = localStorage.getItem('practiceStar');
    let star = document.querySelectorAll('.fa');

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName, dayNameJp, dd, mm, yy;
    let today = new Date();

    const checkPractice = () => {
        for (let i = 0; i < 5; i++) {
            star[i].classList.remove("checked");
        }
        if (practiceStar === '5') {
            console.log(star);
            for (let i = 0; i < star.length; i++) {
                console.log(star[i]);
                star[i].classList.add("checked");
            }

        }
        if (practiceStar === '4') {
            console.log(star);

            // star.classList.remove("checked");
            for (let i = 0; i < star.length; i++) {
                console.log(star[i]);
                star[i].classList.add(".checked");
                console.log(4);

            }
        }
        if (practiceStar === '3') {

            for (let i = 0; i < star.length; i++) {
                star[i].classList.add("checked");
            }
        }
        if (practiceStar === '2') {

            for (let i = 0; i < star.length; i++) {
                star[i].classList.add("checked");
            }
        }
        if (practiceStar === '1')
        {
            for (let i = 0; i < star.length; i++) {
                star[i].classList.add("checked");
            }
        }

    };


    const formatDateToString = (date) => {
        dayName = days[today.getDay()];

        switch (dayName) {
            case 'Sunday':
                dayNameJp = '日';
                break;
            case 'Monday':
                dayNameJp = '月';
                break;
            case 'Tuesday':
                dayNameJp = '火';
                break;
            case 'Wednesday':
                dayNameJp = '水';
                break;
            case 'Thursday':
                dayNameJp = '木';
                break;
            case 'Friday':
                dayNameJp = '金';
                break;
            case 'Saturday':
                dayNameJp = '土';
                break;

        }

        dd = (date.getDate() < 10 ? '0' : '')
            + date.getDate();

        mm = ((date.getMonth() + 1) < 10 ? '0' : '')
            + (date.getMonth() + 1);
        dateFormatHTML.innerHTML = "令和2年" + mm + "月" + dd + "日（" + dayNameJp + "）";

    };


    formatDateToString(today);


    window.onload = function () {
        checkPractice();
    };
});


