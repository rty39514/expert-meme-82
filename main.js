canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";
var lpx,lpy
linewidth=2
    var mouseEvent="empty"
canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e)
{
    color = document.getElementById("colour").value;
    linewidth = document.getElementById("line").value;


    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        
        ctx.moveTo(lpx,lpy);


        ctx.lineTo(cpx,cpy);
        ctx.stroke();

    }

    lpx = cpx
    lpy = cpy
}