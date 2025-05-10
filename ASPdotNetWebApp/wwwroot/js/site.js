// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


let box = document.getElementById("box");
let pos = 0;
let direction = 1;

function animateBox() {
    pos += direction;
    if (pos > 300 || pos < 0) direction *= -1;
    box.style.left = pos + "px";
    requestAnimationFrame(animateBox);
}

animateBox();