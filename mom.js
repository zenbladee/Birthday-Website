document.addEventListener('DOMContentLoaded', function () {
    const greetingsBtn = document.getElementById('greetingsBtn');
    const titleBtn = document.getElementById('title');

    if (greetingsBtn) {
        greetingsBtn.addEventListener('click', function() {
            window.location.href = "mom-pics.html";
        });
    }
    if (titleBtn) {
        titleBtn.addEventListener('click', function() {
            window.location.href = "mom.html";
        });
    }
});

