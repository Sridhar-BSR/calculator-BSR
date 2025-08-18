
let firstnumber="";
let operator="";
let secondnumber="";
let isOperatorUsed = false
function operate(operator,firstnumber,secondnumber){
    
if(operator==="+"){
    return Number(firstnumber) + Number(secondnumber);
}
else if(operator==="-"){
   return Number(firstnumber) - Number(secondnumber);
}
else if(operator==="*"){
   return Number(firstnumber) * Number(secondnumber);
}
else if(operator==="/"){
    if(Number(secondnumber)===0){
        return "Error:cannot divide by zero";
    }
    else{
    return Number(firstnumber)/Number(secondnumber);
    }   
}
else{
    return "Invalid operator"
}
    
}


let displayvalue="";

const digits=document.querySelectorAll(".digitbutton");
const operators=document.querySelectorAll(".operator");
const equal=document.getElementById("equalto");
const allclear=document.getElementById("clear");
const screens=document.getElementById("screen");

function showDisplay(butxt){
    displayvalue+=butxt;
    screens.textContent=displayvalue;
}


digits.forEach(digibutton =>{
    digibutton.addEventListener("click",()=>{
        showDisplay(digibutton.textContent);
        if(!isOperatorUsed){
 firstnumber = firstnumber + digibutton.textContent;
        } else{
            secondnumber = secondnumber +digibutton.textContent;
        }
        
    });
});
equal.addEventListener("click", () => {
    const result = operate(operator, firstnumber, secondnumber);
    screens.textContent = result;

    displayvalue = result.toString();
    firstnumber = result.toString(); 
    secondnumber = "";
    operator = "";
    isOperatorUsed = false;
});

operators.forEach(Operator => {
    Operator.addEventListener("click", () => {
        operator = Operator.textContent.trim(); 
        isOperatorUsed = true;
        showDisplay(operator);
        console.log("operator:", operator);
    });
});

allclear.addEventListener("click", () => {
    firstnumber = "";
    secondnumber = "";
    operator = "";
    isOperatorUsed = false;
    displayvalue = "";
    screens.textContent = "";
});
document.body.style.backgroundColor="firebrick";
document.body.style.fontFamily="monospace";

const main=document.querySelector(".main");
main.style.padding="20px";
main.style.borderRadius="10px";
main.style.width="280px";
main.style.margin="50px auto";
main.style.backgroundColor="black";
main.style.display="flex";
main.style.flexDirection="column";
main.style.gap="10px";
const scr=document.querySelector("#screen");
scr.style.width="260px";
scr.style.height="45px";
scr.style.fontSize="22px";
scr.style.backgroundColor="white";
scr.style.margin="auto";
scr.style.textAlign="left";
scr.style.padding="5px 10px";
scr.style.border="2px solid #2C2D2D";
scr.style.borderRadius="5px";
const but= document.querySelectorAll("button");
but.forEach(btn=>{
btn.style.height="50px";
btn.style.width="50px";
btn.style.margin="5px";
btn.style.fontSize="18px";
btn.style.border="1px solid black";
btn.style.cursor="pointer";

});
    
const db=document.querySelectorAll(".digitbutton");
db.forEach(dbtn=>{

dbtn.style.backgroundColor="white";
dbtn.style.borderRadius="5px";

dbtn.style.color="black";
dbtn.style.marginLeft="9px";
});

const opm=document.querySelectorAll(".operator");
opm.forEach(op=>{

op.style.backgroundColor="orange";
op.style.color="white";
op.style.marginLeft="8px";
});
const eq=document.querySelector("#equalto");
eq.style.backgroundColor="green";
eq.style.color="white";
eq.style.marginLeft="10px";
const clr=document.querySelector("#clear");
clr.style.backgroundColor="red";
clr.style.color="white";
clr.style.width="270px";












 



