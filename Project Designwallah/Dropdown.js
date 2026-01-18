
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle dropdown on click
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault(); // page reload na ho
        dropdownMenu.classList.toggle('show'); // open/close dropdown
    });

    // Click outside to close dropdown
    document.addEventListener('click', function(e) {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});