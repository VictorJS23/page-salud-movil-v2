// <<------------Apartado Creacion de cuentas------------>>

const formCrearCuenta = document.getElementById('formCrearCuenta')
formCrearCuenta.addEventListener('submit', (event) => {
    event.preventDefault()

    function validarRegistro() {
        
        const nombre = document.getElementById('inpNombre').value
        const apellido = document.getElementById('inpApellido').value
        const fNacimiento = document.getElementById('inpFechas').value
        const email = document.getElementById('inpEmail').value
        const contrasenia = document.getElementById('inpPassword').value

        const inpNombre = document.getElementById('inpNombre')
        const inpApellido = document.getElementById('inpApellido')

        inpNombre.addEventListener('input', function() {
            isValidNames(inpNombre.value, inpApellido.value)
        })

        inpApellido.addEventListener('input', function() {
            isValidNames(inpNombre.value, inpApellido.value)
        })

        function isValidNames(nombre, apellido) {
            const regex = /^[A-Za-z\s]+$/
            const esNombreValido = regex.test(nombre)
            const esApellidoValido = regex.test(apellido)

            if (esNombreValido && esApellidoValido) {
                inpNombre.style.borderColor = "green"
                inpNombre.style.borderStyle = "solid"
                inpApellido.style.borderColor = "green"
                inpApellido.style.borderStyle = "solid"
                return true
            } else if (!esNombreValido && esApellidoValido) {
                inpNombre.style.borderStyle = "dashed"
                inpNombre.style.borderColor = "red"
                inpNombre.placeholder = "Nombre no válido"
                inpApellido.style.borderColor = "green"
                inpApellido.style.borderStyle = "solid"

            } else if (!esApellidoValido && esNombreValido) {
                inpApellido.style.borderStyle = "dashed"
                inpApellido.style.borderColor = "red"
                inpApellido.placeholder = "Apellido no válido"
                inpNombre.style.borderColor = "green"
                inpNombre.style.borderStyle = "solid"
            } else {
                return false
            }
        }

        inpNombre.addEventListener('change', function() {
            let nombre = inpNombre.value
            nombre = nombre.replace(/[^A-Za-z\s]/g, "")
            inpNombre.value = nombre
        })

        inpNombre.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                inpApellido.focus();
            }
        })

        inpApellido.addEventListener('change', function() {
            let apellido = inpApellido.value
            apellido = apellido.replace(/[^A-Za-z\s]/g, "")
            inpApellido.value = apellido
        })

        inpApellido.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                inpFecha.focus();
            }
        })

        const inpFecha = document.getElementById('inpFechas')
        inpFecha.addEventListener('input', function() {
            isValidDate(inpFecha.value)
        })

        function isValidDate(dateString) {
            if (typeof dateString !== "string") {
                inpFecha.style.borderStyle = "dashed"
                inpFecha.style.borderColor = "red"
                inpFecha.placeholder = "Formato no valido"
                return false;
            }
            const regex = /^\d{2}\/\d{2}\/\d{4}$/;
            if (regex.test(dateString)) {
                inpFecha.style.borderStyle = "solid"
                inpFecha.style.borderColor = "green"
                return true
            } else {
                inpFecha.style.borderStyle = "dashed"
                inpFecha.style.borderColor = "red"
                inpFecha.placeholder = "Formato no valido"
                return false;
            }
        }

        inpFecha.addEventListener('keydown', function() {
            let fecha = inpFecha.value
            fecha = fecha.replace(/-/g, "/")
            inpFecha.value = fecha
        })

        inpFecha.addEventListener('change', function() {
            let fecha = inpFecha.value
            fecha = fecha.replace(/-/g, "/")
            inpFecha.value = fecha
        })

        inpFecha.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                inpEmail.focus();
            }
        })
        
        const inpEmail = document.getElementById('inpEmail')
        inpEmail.addEventListener('input', function() {
            isValidEmail(inpEmail.value)
        })

        function isValidEmail(email){
            const expresion = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const esEmailValido = expresion.test(String(email).toLowerCase())

            if(esEmailValido){
                inpEmail.style.borderStyle = "solid"
                inpEmail.style.borderColor = "green"
                return true
            } else {
                inpEmail.style.borderStyle = "dashed"
                inpEmail.style.borderColor = "red"
                inpEmail.placeholder = "Formato no valido"
                return false
            }
        }

        inpEmail.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                inpContra.focus();
            }
        })
        
        const inpContra = document.getElementById('inpPassword')
        inpContra.addEventListener('input', function () {
            isValidPass(inpContra.value)
        })

        function isValidPass(pass){
            if (pass !== ""){
                inpContra.style.borderStyle = "solid"
                inpContra.style.borderColor = "green"
                return true
            } else {
                inpContra.style.borderStyle = "dashed"
                inpContra.style.borderColor = "red"
                inpContra.placeholder = "El campo no puede estar vacio"
                return false
            }
        }

        const validacionNames = isValidNames(nombre, apellido)
        const validacionFecha = isValidDate(fNacimiento)
        const validacionEmail = isValidEmail(email)
        const validacionContr = isValidPass(contrasenia)

        if (validacionEmail && validacionNames && validacionFecha && validacionContr) {
            const persona = {
                name: nombre.toLowerCase(),
                lastName: apellido.toLowerCase(),
                date: fNacimiento,
                email: email,
                password: contrasenia
            }
            console.log(persona)
            swal("¡Bien hecho!", "El usuario ha sido creado con éxito.", "success")
        } 
    }

    validarRegistro()

})

// <<------------Apartado Inicio de sesion------------>>

    const btnInicioSecion = document.getElementById('btnIniciar-sesion')
    btnInicioSecion.addEventListener('click', (e) => {
        e.preventDefault()
        swal("Nice!!", "Iniciar secion", "success")
    })


// ----------------------------------------------------------------
//                         NO TOCAR
//-----------------------------------------------------------------

const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')

registerBtn.addEventListener('click', () => {
    container.classList.add("active")
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active")
})