document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dropdown-toggle').forEach(function (el) {
        new bootstrap.Dropdown(el);
    });
    document.querySelectorAll('.dropdown-item').forEach(function (item) {
        item.addEventListener('click', function () {
            var href = this.getAttribute('href');
            if (href && href !== '#') window.location.href = href;
        });
    });
    var carousel = document.getElementById('carouselOrcamento');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 4000,
            ride: 'carousel',
            pause: 'hover',
            wrap: true
        });
    }
});
