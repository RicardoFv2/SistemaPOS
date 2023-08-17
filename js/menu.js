document.querySelector('.burger-menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

document.querySelectorAll('.menu li a').forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        document.querySelector('.menu').classList.remove('active');
    });
});