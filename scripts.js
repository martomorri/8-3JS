function cambiarColor()
{
    document.getElementById("boton1").style.color = "blue";
}

var inputUsuario = document.getElementById("usuario");
inputUsuario.onkeyup = validarUsuario;

function validarUsuario(event)
{
    console.log(event.target.value);

    if (event.target.value.length < 8)
    {
        event.target.style.color = "red";
    }
    else
    {
        event.target.style.color = "green";
    }
}

var boton = document.getElementById("boton");
boton.onclick = enviado;

function enviado(event)
{
    alert("Enviado");
}