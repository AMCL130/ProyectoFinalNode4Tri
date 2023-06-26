


const formulario= document.getElementById('formCreareCliente');

formulario.addEventListener("click", function(e){
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

        if(doc=='' || nombre==''  || contrasena=='' || confirmarContrasena==''|| celular==''|| direccion==''||correo==''){
            throw 'Ingresar todos los campos'
        }if(exDoc.test(doc)){
            throw 'Número de documento invalido'
        }if(exNombre.test(nombre)){
            throw 'Solo se permiten letras'
        }if(exCelular.test(celular)){
            throw 'Solo números que comiencen en 3'
        }if(exDireccion.test(direccion)){
            throw 'Dirección invalida'
        }if(exCorreo.test(correo)){
            throw 'Correo invalido'
        // }if(contrasena !== confirmarContrasena){
        //     throw 'Contraseña invalida'
        }

        alert('Cliente creado con exito')


        
    } catch(e) {
        alert(e)
    }
    

})