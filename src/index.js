function fotoEmVariacao() {
    window.addEventListener("load", function() {
        var productVariants = LS.variants;
        var sizeButtons = document.querySelectorAll(".js-color-variants-container .js-insta-variant");

        for (var i = 0; i < sizeButtons.length; i++) {
            var button = sizeButtons[i];
            var variationId = button.getAttribute("data-variation-id");
            var optionId = button.getAttribute("data-option");
            var span = button.querySelector(".btn-variant-content");

            if (!span) continue;

            var variant;

            for (var j = 0; j < productVariants.length; j++) {
                var v = productVariants[j];
                if ((v.option0 && v.option0 == optionId) || (v.option1 && v.option1 == optionId) || (v.option2 && v.option2 == optionId)) {
                    variant = v;
                    break; 
                }
            }

            span.style.position = "relative";
            span.style.background = "none"; 

            if (variant && variant.image) {
                var imageUrl = variant.image_url;

                span.innerHTML = '<img ' +
                    'src="https://acdn.mitiendanube.com/assets/themes/rio/static/images/empty-placeholder.png" ' +
                    'data-src="' + imageUrl + '" ' +
                    'data-sizes="auto" ' +
                    'class="lazyload img-absolute-centered-vertically" />';
            }
        }
    });
}

// Exportar a função para uso em Node.js e navegadores
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = fotoEmVariacao;
} else {
    window.fotoEmVariacao = fotoEmVariacao;
}