Canvas=document.getElementById("ArtCanvas");
ctxt=Canvas.getContext("2d");
ctxt.beginPath();
ctxt.strokeStyle="ochre";
ctxt.lineWidth=4;
ctxt.arc(310,120,23,0,Math.PI);
ctxt.stroke();


Canvas.addEventListener("mousedown",myMousedown);
function myMousedown(e)
{
  mousex=e.clientX-Canvas.offsetLeft;
  mousey=e.clientY-Canvas.offsetTop;
  curveCircle(mousex,mousey);
}


function curveCircle (mousex,mousey)
{
    ctxt.beginPath();
    ctxt.strokeStyle="ochre";
    ctxt.lineWidth=4;
    ctxt.arc(mousex,mousey,45,0,2*Math.PI);
    ctxt.stroke();
}
