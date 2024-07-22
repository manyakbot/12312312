window.onload = function() {
    // window.scrollTo(x, y)
    let scrolled;
    let timer;
    document.getElementById('top').onclick = function() {
        scrolled = window.pageYOffset;
        // window.scrollTo(0, 0); - РЕЗКАЯ/МГНОВЕННАЯ ПРОКРУТКА
        scrollToTop();
    }
    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 65; // 100 - скорость ПРОКРУТКИ
            timer = setTimeout(scrollToTop, 10);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}