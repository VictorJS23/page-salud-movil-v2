// <<------------Apartado Inicio de sesion------------>>

const btnInicioSecion = document.getElementById('btnIniciar-sesion')
btnInicioSecion.addEventListener('click', (e) => {
    e.preventDefault()
    swal("Nice!!", "Iniciar secion", "success")
})

// <<------------Apartado Creacion de cuentas------------>>

const formCrearCuenta = document.getElementById('formCrearCuenta')
formCrearCuenta.addEventListener('submit', (event) => {
    event.preventDefault()

    const validarEmail = ((email) => {
        const expresion= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return expresion.test(String(email).toLowerCase())
    })

    const nombre = document.getElementById('inpNombre').value
    const apellido = document.getElementById('inpApellido').value
    const fNacimiento = document.getElementById('inpFechas').value
    const email = document.getElementById('inpEmail').value
    const contrasenia = document.getElementById('inpPassword').value
    const validacion = validarEmail(email)

    function contNum(cadena) {
        return /[0-9]/.test(cadena)
    }

    function contChar(cadena) {
        return /[^a-zA-Z]/.test(cadena)
    }

    function sonStrings (nombre, apellido) {
        if (typeof nombre === 'string' && typeof apellido === 'string' && !contChar(nombre) && !contChar(apellido) && !contNum(nombre) && !contNum(apellido)) {
            return true
        } else {
            return false
        }
    }

    const validacionNames = sonStrings(nombre, apellido)

    let pass = true
    const objeto = {
        nombre: nombre,
        apellido: apellido,
        fecha: fNacimiento,
        email: email,
        contrasenia: contrasenia
    }

    const array = []
    
    for (const propiedad in objeto) {
        if (objeto[propiedad] === '') {
            array.push(propiedad)
            pass = false
        }
    }

    let exist = array.join(', ')
    let count = array.length

    function read (value) {
        if(value === 1){
            return `Hay ${value} campo que no puede estar vacio: ${exist}`
        } else {
            return `Hay ${value} campos que no pueden estar vacios: ${exist}`
        }
    } 

    if(validacion === true && validacionNames === true && pass === true){
        const persona = {
            name: nombre.toLowerCase(),
            lastName: apellido.toLowerCase(),
            date: fNacimiento,
            email:email,
            password: contrasenia
        }
        console.log(persona);
        swal("Bien hecho !!!", "El usuario ha sido creado con exito !!!", "success");
    } else if(pass === false){
        swal("Opps !!!", read(count), "error")
    } else if(validacionNames === false){
        swal("Opps !!!", "No se permiten numeros o simbolos en el apartado de nombres !!!", "error")
    } else {
        swal("Email erroneo", "El usuario no fue creado", "error")
    }

})

// ----------------------------------------------------------------
//                         NO TOCAR
//-----------------------------------------------------------------

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active")
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active")
});