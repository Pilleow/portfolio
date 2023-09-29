window.onscroll = function() {onScroll()};
window.onload = function() {onLoad()};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
});

const BG_SCROLL_MOD = .8; // 1.0 = no scroll, 0.0 = normal scroll
var bgscroll = 0;

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function onScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";

    document.getElementById("html").style.backgroundPositionY = bgscroll + scrolled * BG_SCROLL_MOD + "%";
    document.getElementById("body").style.backgroundPositionY = bgscroll + scrolled * BG_SCROLL_MOD + "%";

}

function onLoad() {
    setRandomAnimDelay("iconHover", 4);
    setRandomAnimDelay("blinkingCursor", 1.5);

}

function setRandomAnimDelay(className, maxTime) {
    let elms = document.getElementsByClassName(className);
    for (let i = 0; i < elms.length; ++i) {
        elms[i].style.setProperty("animation-delay", -Math.random() * maxTime + "s");
    }
}
