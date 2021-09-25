window.onload =function(){
  const display =document.querySelector("#display");
  const numerico =document.querySelector(".numerico");
let valor;
let valor1;
let op;
  let botoes = Array.prototype.filter.call(numerico), function(botao){
    botao.addEventListener("click",function(){
      valor1 = display.value;
      valor1 += this.value;
      display.value = valor;
    });

    };
document.querySelector("#sub").addEventListener("click",function(){
 valor1 = display.value;
      display.value ="";
     op = "sub";
    });
document.querySelector("#muti").addEventListener("click",function(){
 valor1 = display.value;
      display.value ="";
     op = "muti";
    });

document.querySelector("#adi").addEventListener("click",function(){
 valor1 = display.value;
      display.value ="";
     op = "adi";
    });
    document.querySelector("#div").addEventListener("click",function(){
 valor1 = display.value;
      display.value ="";
     op = "div";
    });
    document.querySelector("#igu").addEventListener("click",function(){
      let valor2 = display.value;
      if(op =='sub'){
         let resultado =parseFloat (valor1) - (valor2);
       display.value = resultado.toFixed(2);
 if(op =='muti'){
         let resultado =parseFloat (valor1) * (valor2);
       display.value = resultado.toFixed(2);
        if(op =='adi'){
        let resultado =parseFloat (valor1) + (valor2);
       display.value = resultado.toFixed(2);
        if(op =='div'){
       let resultado =parseFloat (valor1) / (valor2);
       display.value = resultado.toFixed(2);
    }); 
    document.querySelector("#C").addEventListener("click",function(){
      display.value = "";
      valor1 = ""
      op = ""
      }); 
        }