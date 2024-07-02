document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector(".toggle-button");

    function toggleVisibility() {
        var isChecked = localStorage.getItem('languageToggle') === 'eng';

        if (isChecked) {
            $(".spa").hide();
            $(".eng").show();
            toggleButton.textContent = "ES";
            toggleButton.classList.add('checked');
        } else {
            $(".eng").hide();
            $(".spa").show();
            toggleButton.textContent = "EN";
            toggleButton.classList.remove('checked');
        }
    }

    toggleVisibility();

    toggleButton.addEventListener('click', function () {
        toggleButton.classList.toggle('checked');
        var isChecked = toggleButton.classList.contains('checked');

        if (isChecked) {
            localStorage.setItem('languageToggle', 'eng');
        } else {
            localStorage.setItem('languageToggle', 'spa');
        }

        toggleVisibility();
    });
});
