

const url = 'https://apiconluis2.onrender.com/api/cliente'


const listarCliente = async () => {
    let body = document.getElementById('contenido')
    if (body) {
        let mensaje = ''


        fetch(url)//Permite llamar la API
            .then(res => res.json())
            .then(function (data) {
                let listarCliente = data.msg
                listarCliente.map((cliente) => {
                    mensaje +=
                        `<tr>
                        <td>${cliente.tipo}</td>` +
                        `<td>${cliente.doc}</td>` +
                        `<td>${cliente.nombre}</td>` +
                        `<td>${cliente.celular}</td>` +
                        `<td>${cliente.direccion}</td>` +
                        `<td>${cliente.correo}</td>` +
                        `<td>${cliente.estado}</td>` +
                        `<td>${cliente.contrasena}</td>` +
                        `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(cliente)})' style="background-color: #632ca7; color: white">Editar</a>
                 <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${cliente._id}")' style="background-color: #632ca7; color: white">Eliminar</a>
                </td></tr>`
                    body.innerHTML = mensaje
                })
            })
    }
}

listarCliente()

const registrarCliente = async () => {
    document.querySelector('#formCreareCliente').addEventListener('submit', e => e.preventDefault())
    //Captura de valores de datos enviados desde el formulario
    let tipo = document.getElementById('tipo').value
    let doc = document.getElementById('doc').value
    let nombre = document.getElementById('nombre').value
    let celular = document.getElementById('celular').value
    let direccion = document.getElementById('direccion').value
    let correo = document.getElementById('correo').value
    let estado = document.getElementById('estado').value
    let contrasena = document.getElementById('contrasena').value
    let confirmarContrasena = document.getElementById('confirmarContrasena').value

    let cliente = {
        tipo: tipo,
        doc: doc,
        nombre: nombre,
        celular: celular,
        direccion: direccion,
        correo: correo,
        estado: estado,
        contrasena: contrasena,
        confirmarContrasena: confirmarContrasena
    }

    // console.log(doc)

    const exNombre = /^[a-zA-Z\s]+$/;
    const exDoc = /^\d{5,11}$/
    const exCelular = /^3\d{9}$/
    const exDireccion = /^[a-zA-Z0-9\s\-.,#áéíóúÁÉÍÓÚñÑ]+$/
    const exCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/





    if (tipo == '' || doc == '' || nombre == '' || celular == '' || direccion == '' || correo == '' || estado == '' || contrasena == '' || confirmarContrasena == '') {
        throw 'Ingresar todos los campos'
    } else if (!exDoc.test(doc)) {
        alert('Número de documento invalido')
    } else if (!exNombre.test(nombre)) {
        alert('Solo se permiten letras')
    } else if (!exCelular.test(celular)) {
        alert('Solo números que comiencen en 3')
    } else if (!exDireccion.test(direccion)) {
        alert('Dirección invalida')
    } else if (!exCorreo.test(correo)) {
        alert('Correo invalido')
    } else if (contrasena !== confirmarContrasena) {
        alert('Contraseña no coincide')
    } else {
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(cliente),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json()) //La respuesta del método POST de la API
            .then(data => {
                console.log(data)
                alert(data.cliente + ' cliente registrado con exito');
                window.location.href = "clientes.html";
            });

    }




    if ((contrasena.length > 0 && confirmarContrasena.length > 0) && (contrasena == confirmarContrasena)) {
        
    }
    else {
        alert('Ingresar todos los datos o ')
    }
}

const editar = (cliente) => {
    let _id = document.getElementById('_id').value = '';
    let tipo = document.getElementById('tipo').value = '';
    let doc = document.getElementById('doc').value = '';
    let nombre = document.getElementById('nombre').value = '';
    let celular = document.getElementById('celular').value = '';
    let direccion = document.getElementById('direccion').value = '';
    let correo = document.getElementById('correo').value = '';
    let estado = document.getElementById('estado').value = '';
    let contrasena = document.getElementById('contrasena').value = '';
    let confirmarContrasena = document.getElementById('confirmarContrasena').value = '';

    document.getElementById('_id').value = cliente._id
    document.getElementById('tipo').value = cliente.tipo
    document.getElementById('doc').value = cliente.doc
    document.getElementById('nombre').value = cliente.nombre
    document.getElementById('celular').value = cliente.celular
    document.getElementById('direccion').value = cliente.direccion
    document.getElementById('correo').value = cliente.correo
    document.getElementById('estado').value = cliente.estado
    document.getElementById('contrasena').value = cliente.contrasena
    document.getElementById('confirmarContrasena').value = cliente.confirmarContrasena


}

const actualizarCliente = async () => {
    //Captura de valores de datos enviados desde el formulario

    document.querySelector('#formEditC')?.addEventListener('click', function (e) { e.preventDefault() })


    let tipo = document.getElementById('tipo').value
    let doc = document.getElementById('doc').value
    let nombre = document.getElementById('nombre').value
    let celular = document.getElementById('celular').value
    let direccion = document.getElementById('direccion').value
    let correo = document.getElementById('correo').value
    let estado = document.getElementById('estado').value
    let contrasena = document.getElementById('contrasena').value
    let confirmarContrasena = document.getElementById('confirmarContrasena').value

    let cliente = {
        _id: document.getElementById('_id').value,
        tipo: tipo,
        doc: doc,
        nombre: nombre,
        celular: celular,
        direccion: direccion,
        correo: correo,
        estado: estado,
        contrasena: contrasena,
        confirmarContrasena: confirmarContrasena

        // tipoModificacion: 'Unitaria'
    }

    if ((contrasena.length > 0 && confirmarContrasena.length > 0) && (contrasena == confirmarContrasena)) {
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(cliente),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json()) //La respuesta del método POST de la API
            .then(json => {
                alert(json.mensaje);
                alert("Cliente editado correctamente");
                window.location.href = "clientes.html";
            })

    } else {
        alert('El contraseña y la confirmación de la contraseña no coinciden. Por favor verifique')
    }
}

const eliminar = (_id) => {
    if (confirm('¿Está seguro de realizar la eliminación?')) {
        //Captura de valores de datos enviados desde el formulario
        const cliente = {
            _id: _id
        }

        //console.log(usuario)

        fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify(cliente),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json()) //La respuesta del método POST de la API
            .then(data => {
                alert(data.mensaje);
                window.location.href = "clientes.html";
            })
    }
}




if (document.querySelector('#btnRegistrar')) {
    document.querySelector('#btnRegistrar')
        .addEventListener('click', registrarCliente)
}

if (document.querySelector('#btnActualizar')) {
    document.querySelector('#btnActualizar')
        .addEventListener('click', editar)

    console.log(_id)
}


const editarButton = document.querySelector('#btnEditar');

if (editarButton) {
    editarButton.addEventListener('click', actualizarCliente)
}

//Installar en la api(backend) los paquetes:
//cors
//body-parser