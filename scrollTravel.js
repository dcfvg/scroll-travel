function pageScroll(speed) {
    window.scrollBy(0,speed);
    scrolldelay = setTimeout('pageScroll('+speed+')',10);
    console.log(window.pageYOffset);
}
(function(){
    var speed = prompt("SPEED : from 1 to 1000");
    pageScroll(speed);
})();