

const formulario = document.getElementById('formCrearProducto')

formulario.addEventListener("click", function(e){
    e.preventDefault


    const exNombre= /^[a-zA-Z\s]+$/;
    const exPrecio= /^\d+(\.\d+)?$/;
    const exCantidad= /^\d+$/

    let nombre = document.getElementById('nombre').value
    let precio = document.getElementById('precio').value
    let cantidad = document.getElementById('cantidad').value
    let descripcion = document.getElementById('descripcion').value
    let estado = document.getElementById('estado').value


    try {

        if (nombre=='' || precio=='' || cantidad=='' || descripcion==''){
            throw 'Ingresar todos los campos'
        }if(exNombre.test(nombre)){
            'nombre invalido, Solo letras'
        }if(exPrecio.test(precio)){
            throw 'Precio invalido'
        }if(exCantidad.test(cantidad)){
            throw 'cantidad no admite decimales'
        }


        
    } catch (e) {
        alert(e)
    }





})