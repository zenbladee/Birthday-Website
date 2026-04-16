document.addEventListener('DOMContentLoaded', function () {
    const greetingsBtn = document.getElementById('greetingsBtn');

    if (greetingsBtn) {
        greetingsBtn.addEventListener('click', function() {
            window.location.href = "dad-pics.html";
        });
    }
});