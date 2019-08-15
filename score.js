var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var reset=document.querySelector("#reset");
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var values=document.querySelector("input");
var max=document.querySelector("#max");
var r1score=0;
var r2score=0;
var winning=5;
var game=false
p1.addEventListener("click",function(){
    if(!game)
        r1score++;
    if(r1score==winning)
    {p1display.classList.add("winner");
     game=true;
    }
        p1display.textContent=r1score;})
p2.addEventListener("click",function(){
    if(!game)
        r2score++;
    if(r2score==winning)
    {p2display.classList.add("winner");
     game=true;
    }
        p2display.textContent=r2score;})
reset.addEventListener("click",function(){
    r1score=0;
    r2score=0;
        p2display.textContent=r2score;
    p1display.textContent=r1score;
p1display.classList.remove("winner");
p2display.classList.remove("winner");
                      game=false;})

values.addEventListener("change", function(){
                       max.textContent=values.value;
                         winning=values.value;
     r1score=0;
    r2score=0;
        p2display.textContent=r2score;
    p1display.textContent=r1score;
p1display.classList.remove("winner");
p2display.classList.remove("winner");
                      game=false;
                       })
    