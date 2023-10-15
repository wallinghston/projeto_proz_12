let forms = document.getElementById('form');
let campos = document.querySelectorAll('.inputs');
let spans = document.querySelectorAll('.span-required');
let emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
//let dia = parseInt(document.getElementById("dia").value);
//let mes = parseInt(document.getElementById("mes").value);
//let ano = parseInt(document.getElementById("ano").value);
//resposta = document.getElementById('resposta');

function campoobrigatorio(input,label){
  input.addEventListener("focus", function() {
   label.style.display = "block"
  console.log("Nome")

  })


}

function removercampoobrigatorio(input,label){
  input.addEventListener("blur", function() {
   label.style.display = "none"



  })


}

campoobrigatorio(campos[0],spans[0])
console.log(campos)

function setError(index){
    campos[index].style.border = '2px solid #e63636';
     spans[index].style.display = 'block';
    console.log(campos[index])
}

function removeError(index){
    campos[index].style.border = '';
   // spans[index].style.display = 'none';

}
function nameValidate(){
   if (campos[0].value.length < 3)

{
    setError(0);
}
else
{
   removeError(0);
}
}



function telefoneValidate(){
  if (campos[1].value.length < 3)

{
   setError(1);
}
else
{
  removeError(1);
}
}
{
}

    function emailValidate() {
      if(campos[2].value.length <3 ) 
      
      {
        setError(2);
      }  
      else
      {
        removeError(2);
      }
}



function mainPasswordValidate() {
    if(campos[3].value.length < 3 >10)  
    
    {
      setError(3);
    }  
    else
    {
      removeError(3);
    }
}

function dateValidade(){
  

  switch(mes){
   case 1: case 3: case 5: case 7: 
   case 8: case 10: case 12:
    if(dia <= 31)
     resposta.innerHTML = "Data válida";
    else
     resposta.innerHTML = "Inválido (mes com mais de 31 dias)";
    break ;
   case 4: case 6:
   case 9: case 11:
    if(dia <= 30)
     resposta.innerHTML = "Data válida";
    else
     resposta.innerHTML = "Inválido (mes com mais de 30 dias)";
    break ;
   case 2:
    if( (ano%400 == 0) || (ano%4==0 && ano%100!=0) )
     if( dia <= 29)
      resposta.innerHTML = "Data válida";
     else
      resposta.innerHTML = "Inválido (mes com mais de 29 dias)";
    else
     if( dia <= 28)
      resposta.innerHTML = "Data válida";
     else
      resposta.innerHTML = "Inválido (mes com mais de 28 dias)";
  }
}