


const formulario= document.getElementById('formCreareCliente');

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    // Definicion de expresiones regulares

    const exNombre= /^[a-zA-Z\s]+$/;
    const exDoc= /^\d{5,11}$/
    const exCelular= /^3\d{9}$/
    const exDireccion= /^[a-zA-Z0-9\s\-.,#áéíóúÁÉÍÓÚñÑ]+$/
    const exCorreo=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

    let tipo = document.getElementById('tipo').value
    let doc = document.getElementById('doc').value
    let nombre = document.getElementById('nombre').value
    let celular = document.getElementById('celular').value
    let direccion = document.getElementById('direccion').value
    let correo = document.getElementById('correo').value
    let estado = document.getElementById('estado').value
    let contrasena = document.getElementById('contrasena').value
    let confirmarContrasena = document.getElementById('confirmarContrasena').value



    try {

        if(tipo=='' || doc=='' || nombre=='' || celular=='' || direccion=='' || correo=='' || estado=='' || contrasena=='' || confirmarContrasena==''){
            throw 'Ingresar todos los campos'
        }else if(exDoc.test(doc)){
            throw 'Número de documento invalido'
        }else if(exNombre.test(nombre)){
            throw 'Solo se permiten letras'
        }else if(exCelular.test(celular)){
            throw 'Solo números que comiencen en 3'
        }else if(exDireccion.test(direccion)){
            throw 'Dirección invalida'
        }else if(exCorreo.test(correo)){
            throw 'Correo invalido'
        }else if(contrasena !== confirmarContrasena){
            throw 'Contraseña no coincide'
        }else{
            alert('Cliente creado con exito')

        }



        
    } catch(e) {
        alert(e)
    }
    

})