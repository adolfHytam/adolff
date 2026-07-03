document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.href || this.href === '#') {
            e.preventDefault();
        }
    });
});