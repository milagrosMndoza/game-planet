var estado=true;  
setTimeout("ver()",900);  
function ver (){  
    estado=!estado;  if(estado==true)  texto1.style.visibility="visible";
      else  texto1.style.visibility="hidden";  
      setTimeout("ver()",900);  
}

ver();