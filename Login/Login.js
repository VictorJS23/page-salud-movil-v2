// <<------------Apartado Inicio de sesion------------>>

const btnInicioSecion = document.getElementById('btnIniciar-sesion')
btnInicioSecion.addEventListener('click', (e) => {
    e.preventDefault()
    alert('Iniciar secion')
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

    const array = [nombre, apellido, fNacimiento, email, contrasenia]
    let pass = true 
    
    for(i = 0; i < array.length; i++){
        if(array[i] === ''){
            pass = false
            break
        }
    }

    if(validacion === true && pass === true){
        const persona = {
            name: nombre.toLowerCase(),
            lastName: apellido.toLowerCase(),
            date: fNacimiento,
            email:email,
            password: contrasenia
        }
        console.log(persona)
        alert("Usuario Creado con exito")
    } else if(pass === false){
        console.log("No pueden haber campos vacios")
        alert("No pueden haber campos vacios")
    } else {
        console.log("El correo ingresado no es valido")
        alert("Email erroneo, El usuario no fue creado")
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