/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numUno;
    var numDos;
    var resul;
    numUno = document.getElementById("numeroDividendo").value;
    numDos=document.getElementById("numeroDivisor").value;
    resul = parseInt(numUno) % parseInt(numDos);
    alert("El resto es  "+resul);	
}
