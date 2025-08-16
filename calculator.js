
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



