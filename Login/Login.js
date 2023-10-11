// <<------------Apartado Creacion de cuentas------------>>

const formCrearCuenta = document.getElementById('formCrearCuenta')
formCrearCuenta.addEventListener('submit', (event) => {
    event.preventDefault()

    function validarRegistro() {
        
        const nombre = document.getElementById('inpNombre').value
        const apellido = document.getElementById('inpApellido').value
        const nombreUsuario = document.getElementById('inpUsername').value
        const email = document.getElementById('inpEmail').value
        const contrasenia = document.getElementById('inpPassword').value

        const inpNombre = document.getElementById('inpNombre')
        const errorNombre = document.getElementById('errorNombre')

        const inpApellido = document.getElementById('inpApellido')
        const errorApellido = document.getElementById('errorApellido')

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
            const Nespacios = nombre.includes(' ')
            const Aespacios = apellido.includes(' ')

            if (esNombreValido && esApellidoValido) {
                inpNombre.style.borderColor = "white"
                inpNombre.style.borderStyle = "solid"
                errorNombre.textContent = ""

                inpApellido.style.borderColor = "white"
                inpApellido.style.borderStyle = "solid"
                errorApellido.textContent = ""
                return true
            } else if (!esNombreValido || esApellidoValido) {
                inpNombre.style.borderStyle = "dashed"
                inpNombre.style.borderColor = "red"
                inpNombre.placeholder = "No se permiten numeros o simbolos"
                errorNombre.textContent = "No se permiten numeros o simbolos"

                inpApellido.style.borderColor = "white"
                inpApellido.style.borderStyle = "solid"
                errorApellido.textContent = ""

                if(Nespacios){
                    inpNombre.style.borderStyle = "dashed"
                    inpNombre.style.borderColor = "red"
                    inpNombre.placeholder = "No se permiten espacios"
                    errorNombre.textContent = "No se permiten espacios"
                } else if (Aespacios){
                    inpApellido.style.borderStyle = "dashed"
                    inpApellido.style.borderColor = "red"
                    inpApellido.placeholder = "No se permiten espacios"
                    errorApellido.textContent = "No se permiten espacios"
                }

                if(nombre === ''){
                    inpNombre.style.borderStyle = "dashed"
                    inpNombre.style.borderColor = "red"
                    inpNombre.placeholder = "El campo no puede estar vacio"
                    errorNombre.textContent = "El campo no puede estar vacio"
                }

                if(apellido === ''){
                    inpApellido.style.borderStyle = "dashed"
                    inpApellido.style.borderColor = "red"
                    inpApellido.placeholder = "El campo no puede estar vacio"
                    errorApellido.textContent = "El campo no puede estar vacio"
                }

            } else if (!esApellidoValido || esNombreValido) {
                inpApellido.style.borderStyle = "dashed"
                inpApellido.style.borderColor = "red"
                inpApellido.placeholder = "No se permiten numeros o simbolos"
                errorApellido.textContent = "No se permiten numeros o simbolos"

                inpNombre.style.borderColor = "white"
                inpNombre.style.borderStyle = "solid"
                errorNombre.textContent = ""

                if(Nespacios){
                    inpNombre.style.borderStyle = "dashed"
                    inpNombre.style.borderColor = "red"
                    inpNombre.placeholder = "No se permiten espacios"
                    errorNombre.textContent = "No se permiten espacios"
                } else if (Aespacios){
                    inpApellido.style.borderStyle = "dashed"
                    inpApellido.style.borderColor = "red"
                    inpApellido.placeholder = "No se permiten espacios"
                    errorApellido.textContent = "No se permiten espacios"
                }

                if(nombre === ''){
                    inpNombre.style.borderStyle = "dashed"
                    inpNombre.style.borderColor = "red"
                    inpNombre.placeholder = "El campo no puede estar vacio"
                    errorNombre.textContent = "El campo no puede estar vacio"
                }

                if(apellido === ''){
                    inpApellido.style.borderStyle = "dashed"
                    inpApellido.style.borderColor = "red"
                    inpApellido.placeholder = "El campo no puede estar vacio"
                    errorApellido.textContent = "El campo no puede estar vacio"
                }

            } else {
                inpNombre.style.borderStyle = "dashed"
                inpNombre.style.borderColor = "red"
                inpNombre.placeholder = "El campo no puede estar vacio"
                errorNombre.textContent = "El campo no puede estar vacio"

                inpApellido.style.borderStyle = "dashed"
                inpApellido.style.borderColor = "red"
                inpApellido.placeholder = "El campo no puede estar vacio"
                errorApellido.textContent = "El campo no puede estar vacio"
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
                inpUserName.focus();
            }
        })

        const inpUserName = document.getElementById('inpUsername')
        const errorUsername = document.getElementById('errorUsername')

        inpUserName.addEventListener('input', function() {
            isValidUserName(inpUserName.value)
        })

        function isValidUserName(username) {
            const regex = /^[a-zA-Z0-9_-]+$/
            const esNombreUserValido = regex.test(username)

            if(esNombreUserValido && username.length > 3 && username.length < 15){
                inpUserName.style.borderColor = "white"
                inpUserName.style.borderStyle = "solid"
                errorUsername.textContent = ""
                return true
            } else if (!esNombreUserValido){
                inpUserName.style.borderColor = "red"
                inpUserName.style.borderStyle = "dashed"
                inpUserName.placeholder = "El nombre de usuario no es valido"
                errorUsername.textContent = "El nombre de usuario no es valido"

                if(username === ''){
                    inpUserName.style.borderColor = "red"
                    inpUserName.style.borderStyle = "dashed"
                    inpUserName.placeholder = "El campo no puede estar vacio"
                    errorUsername.textContent = "El campo no puede estar vacio"
                }

            } else if (username.length < 3 || username.length > 15){
                inpUserName.style.borderColor = "red"
                inpUserName.style.borderStyle = "dashed"
                inpUserName.placeholder = "El nombre de usuario no es valido"
                errorUsername.textContent = "Debe haber un minimo de 3 y maximo 15 caracteres"

                if(username === ''){
                    inpUserName.style.borderColor = "red"
                    inpUserName.style.borderStyle = "dashed"
                    inpUserName.placeholder = "El campo no puede estar vacio"
                    errorUsername.textContent = "El campo no puede estar vacio"
                }
            } else {
                inpUserName.placeholder = "El campo no puede estar vacio"
                errorUsername.textContent = "El campo no puede estar vacio"
                return false
            }
        }

        inpUserName.addEventListener('change', function() {
            let username = inpUserName.value
            username = username.replace(/[^a-zA-Z0-9_-]/g, "")
            inpUserName.value = username
        })

        inpUserName.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                inpEmail.focus();
            }
        })
        
        const inpEmail = document.getElementById('inpEmail')
        const errorEmail = document.getElementById('errorEmail');
        inpEmail.addEventListener('input', function() {
            isValidEmail(inpEmail.value)
        })

        function isValidEmail(email){
            const expresion = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const esEmailValido = expresion.test(String(email).toLowerCase())

            if(esEmailValido){
                inpEmail.style.borderStyle = "solid"
                inpEmail.style.borderColor = "white"
                errorEmail.textContent = ""
                return true
            } else if(email === ''){
                inpEmail.style.borderStyle = "dashed"
                inpEmail.style.borderColor = "red"
                inpEmail.placeholder = "El campo no puede estar vacio"
                errorEmail.textContent = "El campo no puede estar vacio"
            } else {
                inpEmail.style.borderStyle = "dashed"
                inpEmail.style.borderColor = "red"
                inpEmail.placeholder = "Formato no valido"
                errorEmail.textContent = "Formato email no válido"
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
        const errorPassword = document.getElementById('errorPassword')

        inpContra.addEventListener('input', function () {
            isValidPass(inpContra.value)
        })

        function isValidPass(pass){
            const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])\S+$/
            const esContraValida = regex.test(pass)
            const contieneEspacios = pass.includes(' ')

            if (esContraValida && pass.length >= 8 && pass.length < 50){
                inpContra.style.borderStyle = "solid"
                inpContra.style.borderColor = "white"
                errorPassword.textContent = ""
                return true
            } else if(pass.length < 8 || pass.length > 50) {
                inpContra.style.borderColor = "red"
                inpContra.style.borderStyle = "dashed"
                inpContra.placeholder = "La contraseña no es valida de usuario no es valido"
                errorPassword.textContent = "Debe haber un minimo de 8 y maximo 50 caracteres"

                if(contieneEspacios){
                    inpContra.style.borderStyle = "dashed"
                    inpContra.style.borderColor = "red"
                    inpContra.placeholder = "No se permiten espacios"
                    errorPassword.textContent = "No se permiten espacios"
                }

                if(pass === ''){
                    inpContra.style.borderStyle = "dashed"
                    inpContra.style.borderColor = "red"
                    inpContra.placeholder = "El campo no puede estar vacio"
                    errorPassword.textContent = "El campo no puede estar vacio"
                }
                
            } else if(!esContraValida){
                inpContra.style.borderStyle = "dashed"
                inpContra.style.borderColor = "red"
                inpContra.placeholder = "Contraseña no valida"
                errorPassword.textContent = "Debe contener letras al menos 1 mayuscula, numeros y simbolos"

                if(contieneEspacios){
                    inpContra.style.borderStyle = "dashed"
                    inpContra.style.borderColor = "red"
                    inpContra.placeholder = "No se permiten espacios"
                    errorPassword.textContent = "No se permiten espacios"
                }

                if(pass === ''){
                    inpContra.style.borderStyle = "dashed"
                    inpContra.style.borderColor = "red"
                    inpContra.placeholder = "El campo no puede estar vacio"
                    errorPassword.textContent = "El campo no puede estar vacio"
                }
                
            } else {
                inpContra.style.borderStyle = "dashed"
                inpContra.style.borderColor = "red"
                inpContra.placeholder = "El campo no puede estar vacio"
                errorPassword.textContent = "El campo no puede estar vacio"
                return false
            }
        }

        const validacionNames = isValidNames(nombre, apellido)
        const validacionUser = isValidUserName(nombreUsuario)
        const validacionEmail = isValidEmail(email)
        const validacionContr = isValidPass(contrasenia)

        if (validacionEmail && validacionNames && validacionUser && validacionContr) {
            const persona = {
                first_name: nombre,
                last_name: apellido,
                username: nombreUsuario,
                email: email,
                password: contrasenia
            }
            swal("¡Bien hecho!", "El usuario ha sido creado con éxito.", "success")
            return persona
        } 
    }

    validarRegistro()

    // Aca esta el retorno del nuevo usuario: Esta variable representa el NewUser
    
    const newUser = validarRegistro()
    console.log(newUser)
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