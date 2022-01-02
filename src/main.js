function main() {

    const dark_mode = document.getElementById('dark-mode');
    const main = document.querySelector('.main');

    if (dark_mode.checked) {
        main.classList.add('light-theme');

    } else {
        main.classList.remove('light-theme');
    }

    dark_mode.addEventListener('click', function (e) {
        if (e.target.checked) {
            main.classList.add('light-theme');
        } else {
            main.classList.remove('light-theme');
        }
    });
}

window.addEventListener('DOMContentLoaded', main);