(function () {
    var placeholder = './img/placeholder.svg';
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('img').forEach(function (img) {
            img.addEventListener('error', function () {
                if (img.src.indexOf('placeholder.svg') === -1) {
                    img.src = placeholder;
                }
            });
        });
    });
})();
