let userChoice1 = Number(prompt("digite numero 1"));
let userChoice2 = Number(prompt("digite numero 1"));
let operator = prompt("digite o tipo de opreração '-','+'/' ou '*'");
let result;


if (!Number.isNaN(userChoice1) && !Number.isNaN(userChoice2))
    {
   switch(operator) {
    case '+':
    result = userChoice1+userChoice2;
    break;   
    
     case '-':
     result =userChoice1-userChoice2;
    break;   
    
       case '/':
     result = userChoice1/userChoice2;
    break;   
    
     case '*':
     result =userChoice1 * userChoice2;
    break; 
    default: console.log("Not an operator");
    };    
}else{
console.log("Not an operand");

}
alert(result);