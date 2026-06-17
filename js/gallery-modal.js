function openGallery(productId) {
    var data = window.galleryData || {};
    var product = data[productId];
    if (!product) return;

    document.getElementById('galleryModalLabel').textContent = product.title;
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.title;

    var materials = product.materials || [];
    var includes = product.includes || [];

    document.getElementById('modalContent').innerHTML =
        '<div class="price-tag mb-3">' + product.price + '</div>' +
        '<p class="mb-4">' + product.description + '</p>' +
        (materials.length ? '<div class="material-info"><h6 class="fw-bold mb-3"><i class="fas fa-cog me-2"></i>Materiais e Especificações</h6><ul class="material-list">' +
            materials.map(function (m) { return '<li>' + m + '</li>'; }).join('') + '</ul></div>' : '') +
        (includes.length ? '<div class="material-info"><h6 class="fw-bold mb-3"><i class="fas fa-check-circle me-2"></i>Itens Inclusos</h6><ul class="material-list">' +
            includes.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul></div>' : '') +
        '<div class="row mt-4"><div class="col-6"><div class="text-center"><i class="fas fa-shield-alt fa-2x text-success mb-2"></i>' +
        '<p class="small mb-0"><strong>' + product.warranty + '</strong></p></div></div>' +
        '<div class="col-6"><div class="text-center"><i class="fas fa-truck fa-2x text-primary mb-2"></i>' +
        '<p class="small mb-0"><strong>' + product.delivery + '</strong></p></div></div></div>';
}

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('galleryModal');
    if (modal) {
        modal.addEventListener('hidden.bs.modal', function () {
            var content = document.getElementById('modalContent');
            var img = document.getElementById('modalImage');
            if (content) content.innerHTML = '';
            if (img) img.src = '';
        });
    }
});
