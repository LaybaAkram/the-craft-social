/* ============================================================
   THE CRAFT SOCIAL — script.js
   Basic beginner JavaScript. No libraries. Just plain DOM code.
   ============================================================ */


/* ---------- 1. STICKY NAVIGATION ON SCROLL ---------- */
/* When the user scrolls down more than 50 pixels, add a class
   called "sticky" to the header so it gets a background. */

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


/* ---------- 2. COURSES PAGE: CHANGE THE MODE BADGE ---------- */
/* When the user clicks "Online" or "Offline", change the text
   inside every element with the class "mode-badge". */

function setMode(mode) {
    var badges = document.querySelectorAll('.mode-badge');

    for (var i = 0; i < badges.length; i++) {
        if (mode === 'online') {
            badges[i].innerText = 'Live Zoom + kit shipped';
        } else {
            badges[i].innerText = 'In-person studio practice';
        }
    }
}


/* ---------- 3. COURSES PAGE: SEARCH THE SCHEDULE TABLE ---------- */
/* As the user types in the search box, hide any table rows
   that do not match what they typed. */

var searchBox = document.getElementById('scheduleSearch');

if (searchBox) {
    searchBox.addEventListener('keyup', function () {

        var typed = searchBox.value.toLowerCase();
        var rows = document.querySelectorAll('#scheduleTable tbody tr');

        for (var i = 0; i < rows.length; i++) {
            var rowText = rows[i].innerText.toLowerCase();

            if (rowText.indexOf(typed) > -1) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    });
}


/* ---------- 4. FEES PAGE: CALCULATE THE PRICE ---------- */
/* Read the selected course and the selected mode, work out
   the price, and show it on the page. */

function calculateFees() {

    var courseSelect = document.getElementById('skillSelect');
    var priceText = document.getElementById('calculatedPrice');

    /* If we are not on the fees page, stop here. */
    if (!courseSelect || !priceText) {
        return;
    }

    var course = courseSelect.value;
    var mode = '';

    /* Find which radio button is checked. */
    var radios = document.getElementsByName('courseMode');

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            mode = radios[i].value;
        }
    }

    /* If nothing chosen yet, show zero. */
    if (course === '' || mode === '') {
        priceText.innerText = 'PKR 0';
        return;
    }

    /* Set the base price for each course. */
    var price = 0;

    if (course === 'henna') {
        price = 3500;
    } else if (course === 'stitching') {
        price = 5000;
    } else if (course === 'makeup') {
        price = 6000;
    }

    /* Online mode is 500 rupees cheaper. */
    if (mode === 'online') {
        price = price - 500;
    }

    /* Show the final price on the page. */
    priceText.innerText = 'PKR ' + price.toLocaleString();
}

/* Run calculateFees whenever the dropdown or a radio changes. */
var courseDropdown = document.getElementById('skillSelect');

if (courseDropdown) {
    courseDropdown.addEventListener('change', calculateFees);

    var modeRadios = document.getElementsByName('courseMode');

    for (var i = 0; i < modeRadios.length; i++) {
        modeRadios[i].addEventListener('change', calculateFees);
    }
}


/* ---------- 5. ENROLL PAGE: SHOW THANK YOU MESSAGE ---------- */
/* When the enrollment form is submitted, hide the form and
   show the thank-you message instead. */

var enrollForm = document.getElementById('enrollForm');

if (enrollForm) {
    enrollForm.addEventListener('submit', function (event) {

        event.preventDefault();

        var successBox = document.getElementById('enrollSuccess');

        enrollForm.style.display = 'none';
        successBox.style.display = 'block';
    });
}


/* ---------- 6. HOME SERVICES PAGE: SHOW THANK YOU MESSAGE ---------- */
/* Same idea as the enroll form, but for the home visit booking. */

var serviceForm = document.getElementById('serviceForm');

if (serviceForm) {
    serviceForm.addEventListener('submit', function (event) {

        event.preventDefault();

        var serviceSuccess = document.getElementById('serviceSuccess');

        serviceForm.style.display = 'none';
        serviceSuccess.style.display = 'block';
    });
}