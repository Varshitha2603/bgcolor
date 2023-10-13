"use strict"


let div1 = document.createElement("div")
div1.className = "container";

let btn1 = document.createElement("button");
btn1.innerText = "Change the background color";
// btn1.setAttribute("id","btn1color1");
let att = document.createAttribute("id");
att.value = "btn1color1";
console.log(att);
btn1.setAttributeNode(att);

let btn2 = document.createElement("button");
btn2.innerText = "Hexadecimal Color";
btn2.setAttribute("id","btncolor2");

div1.append(btn1,btn2);
document.body.append(div1);

let coloname = ["#4c685e","#618678","#46698c","#dea2c0","#b1351f","#946aa5","#f5a9b8",
                 "#6597c9","#236bb2","#99ccff","#86abc8","#003366","#ecd8e1","#e8d6d5",
                 "#e8d5de","#abbdd1","#b4c1bc","#a9b8b3","#94a7a0","#a8c6bb","#b69fbb",
                 "#f5b784","#dd7d6d","#d6cfd6","#d5ced6","#f6c9b4","#f8dfb6","#216182",
                 "#565359","#352100","#000000","#810000","#bcd9ff","#2a3439","#94d893",
                 "#60d1d4","#f5a9b8","#5bcefa","#e29926","#d32213","#b297a4","#808080"]
  
  
btn1.addEventListener('click',chancolo)
var i = 0;
function chancolo()
{
document.body.style.backgroundColor =  coloname[i];
btn2.innerText = coloname[i];
i++;
if( i == coloname.length-1)
{
    i=0;
}
}