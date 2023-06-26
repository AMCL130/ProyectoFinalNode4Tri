// const expressionCorreo= //

const formulario= document.getElementById('formularioCarrito');
const fechaEmiCarrito = document.getElementById('FechaEmiCarrito');

const fechaActual = new Date().toISOString().split('T')[0];
if(fechaEmiCarrito){
    fechaEmiCarrito.value= fechaActual
}

if(formulario){
    formulario.addEventListener('submit', (e) =>{
        e.preventDefault();
            
            const expressionNombre= /^[a_zA-Z\s]+$/;
            const expressionCelular = /^3\d{9}$/;
            const expressionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
            const nombreCarrito = document.getElementById('nombreCarrito').value;
            const correoCarrito = document.getElementById('correoCarrito').value;
            const celularCarrito= document.getElementById('telCarrito').value;
            const fechaEveCarrito = document.getElementById('fechaEveCarrito').value;
            const direccionCarrito= document.getElementById('direccionCarrito').value;
            // const fechaEmiCarrito = document.getElementById('FechaEmiCarrito').value; 
    
          
    
    
            try{
                if(nombreCarrito=='' || correoCarrito=='' || fechaEveCarrito=='' || direccionCarrito=='' || fechaEmiCarrito=='' || fechaEmiCarrito==''){
                    throw 'por favor llenar todos los campos'
                }
                if(expressionNombre.test(nombreCarrito)){
                    throw 'nombre no valido'
                }
                if(!expressionCelular.test(celularCarrito)){
                        throw 'celular no valido'
                }
                if(!expressionCorreo.test(correoCarrito)){
                        throw 'correo no valido'
                }
                if(fechaEveCarrito<= (fechaEmiCarrito.value= fechaActual)){
                        throw 'Fecha seleccionada menor a la actual'
                }
                // if(!expressionfecha.test(fechaEmiCarrito)){
                //         throw 'fecha no valida'
                // }
                alert ('se confirma el envio del carrito')
                
                
    
            }catch(e){
                alert(e)
            }
    
    })
}



