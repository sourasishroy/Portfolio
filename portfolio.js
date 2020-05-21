var contain = document.querySelector(".contain");
window.onmousemove = function(event){
    var x = -event.clientX/30;
    var y = -event.clientY/30;
    contain.style.backgroundPositionX = x + 'px';
    contain.style.backgroundPositionY = y + 'px';
};