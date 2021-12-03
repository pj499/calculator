var gridContainer=document.getElementById('grid-container');
var resultbox=document.getElementById('result');
var operand1=0;
var operand2=0;
var flag=false;// to check operand false for 1 and true for 2
// console.log(flag);
var operator;
var opCount=0;

function handleClickListener(event){
    var target=event.target;
    // console.log(target);
    if((target.innerHTML>=1 || target.innerHTML<=9) && flag==false){
        // console.log("Operator1")
        operand1=operand1*10+parseInt(target.innerHTML);
        resultbox.innerHTML=operand1;

    }else if((target.innerHTML>=1 || target.innerHTML<=9) && flag==true){
        // console.log("Operator2")
        operand2=operand2*10+parseInt(target.innerHTML);
        resultbox.innerHTML=operand2;

    }else if(target.classList.contains('operator')&&target.innerHTML=='='){
        opCount=0;

        operand1=eval(operand1+' '+operator+' '+operand2);
        
        operand2=0;
        resultbox.innerHTML=operand1;
        // console.log("After pressing equal to",flag);

    }else if(target.classList.contains('operator')&&flag==true){
        opCount++;

        if(opCount>1)
        {
            operand1=eval(operand1+' '+operator+' '+operand2);
        }
        
        operator=target.innerHTML;
        
        operand2=0;
        resultbox.innerHTML= '';
    }

    else if(target.classList.contains('operator')){
        opCount++;

        operator=target.innerHTML;
        resultbox.innerHTML= '';
        flag=true;
        // console.log("After pressing operator",flag);
        
    }else if(target.innerHTML=='AC'){
        operand1=0;
        operand2=0;
        opCount=0;
        flag=false;
        resultbox.innerHTML='';
    }
    
}

gridContainer.addEventListener('click',handleClickListener);