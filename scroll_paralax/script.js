"use strict";
let scroll = window.pageYOffset;

let layer1 = document.getElementById('layer1');
let layer2 = document.getElementById('layer2');
let text = document.getElementById('text');
let zoom = document.getElementById('zoom')

document.addEventListener('scroll', e => {
    let offset = window.pageYOffset;
    scroll = offset;

    layer1.style.width = (100 + scroll / 5) + "%";
    layer1.style.right = scroll / 50 + "%";

    layer2.style.width = (100 + scroll / 5) + "%";
    layer2.style.left = scroll / 50 + "%";

    text.style.top = (-scroll / 15) + "%";

    console.log(scroll/2 + "% " + "0")
    zoom.style.backgroundPosition = -scroll/2 + "px " + "0";
});