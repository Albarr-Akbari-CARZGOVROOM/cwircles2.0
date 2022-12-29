var canvas = document.getElementById("myCanvas");
var color = "red";
var ctx = canvas.getContext("2d");
var mouseevent = "";
var width = 2;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width_of_the_line").value;
    radius = document.getElementById("radius").value;
    mouseevent = "mousedown";

}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseevent = "mouseup";

}
canvas.addEventListener("mouseleave", leave);
function leave(e) {
    mouseevent = "mouseleave";

}
canvas.addEventListener("mousemove", move);
function move(e) {
    var mx = e.clientX - canvas.offsetLeft;
    var my = e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(mx, my, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}
function cleararea(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

}