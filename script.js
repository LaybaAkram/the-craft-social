// Sticky Navigation on scroll

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// online/offline mode badge

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

// schedule table

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


// calculate price

function calculateFees() {

    var courseSelect = document.getElementById('skillSelect');
    var priceText = document.getElementById('calculatedPrice');

    if (!courseSelect || !priceText) {
        return;
    }

    var course = courseSelect.value;
    var mode = '';

    var radios = document.getElementsByName('courseMode');

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            mode = radios[i].value;
        }
    }

    if (course === '' || mode === '') {
        priceText.innerText = 'PKR 0';
        return;
    }

    var price = 0;

    if (course === 'henna') {
        price = 3500;
    } else if (course === 'stitching') {
        price = 5000;
    } else if (course === 'makeup') {
        price = 6000;
    }

    if (mode === 'online') {
        price = price - 500;
    }

    priceText.innerText = 'PKR ' + price.toLocaleString();
}

// run calculatefess
var courseDropdown = document.getElementById('skillSelect');

if (courseDropdown) {
    courseDropdown.addEventListener('change', calculateFees);

    var modeRadios = document.getElementsByName('courseMode');

    for (var i = 0; i < modeRadios.length; i++) {
        modeRadios[i].addEventListener('change', calculateFees);
    }
}

// thank you msg

var enrollForm = document.getElementById('enrollForm');

if (enrollForm) {
    enrollForm.addEventListener('submit', function (event) {

        event.preventDefault();

        var successBox = document.getElementById('enrollSuccess');

        enrollForm.style.display = 'none';
        successBox.style.display = 'block';
    });
}


// same as before but for home visit booking

var serviceForm = document.getElementById('serviceForm');

if (serviceForm) {
    serviceForm.addEventListener('submit', function (event) {

        event.preventDefault();

        var serviceSuccess = document.getElementById('serviceSuccess');

        serviceForm.style.display = 'none';
        serviceSuccess.style.display = 'block';
    });
}