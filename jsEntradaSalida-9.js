/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resul;
    sueldo = document.getElementById("sueldo").value;
    resul = parseInt(sueldo) + (parseInt(sueldo)*10/100);
    document.getElementById("resultado").value = resul;
    
	
}
