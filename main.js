export const inputNombre = document.querySelector('#nombre');
export const labelNombre = document.querySelector('.placeholder-nombre');

export const inputApellido = document.querySelector('#apellido');
export const labelApellido = document.querySelector('.placeholder-apellido');

export const inputEmail = document.querySelector('#email');
export const labelEmail = document.querySelector('.placeholder-email');

export const inputTel = document.querySelector('#tel');
export const labelTel = document.querySelector('.placeholder-tel');

export const inputTemario = document.querySelector('#temario');
export const labelTemario = document.querySelector('.placeholder-temario');

export const inputFecha = document.querySelector('#fecha');
export const labelFecha = document.querySelector('.placeholder-fecha');

export const inputHoras = document.querySelector('#horas');
export const labelHoras = document.querySelector('.placeholder-horas');

export const button = document.querySelector('#registro');

export const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const resetear = ({id, nombre, apellido, email, telefono, fecha, hora, materia, temario})=>{
    inputNombre.style.border = "1px solid rgb(43, 43, 43)"
    inputApellido.style.border = "1px solid rgb(43, 43, 43)"
    inputEmail.style.border = "1px solid rgb(43, 43, 43)"
    inputTel.style.border = "1px solid rgb(43, 43, 43)"
    inputTemario.style.border = "1px solid rgb(43, 43, 43)"
    inputFecha.style.border = "1px solid rgb(43, 43, 43)"
    inputHoras.style.border = "1px solid rgb(43, 43, 43)"
    inputTemario.style.backgroundColor = "white"
    inputFecha.style.backgroundColor = "white"
    inputHoras.style.backgroundColor = "white"
}
inputNombre?.addEventListener('focus', () => {
    labelNombre.classList.add('active');
    const contenedor = document.querySelector('.nombre-container');
    contenedor.style.marginTop = "24px"
});
inputNombre?.addEventListener('blur',() => {
    if(inputNombre.value.trim().length == 0){
        labelNombre.classList.remove('active')
        const contenedor = document.querySelector('.nombre-container');
        contenedor.style.marginTop = "0px"
        inputNombre.style.border = "2px solid red"
    }else if(inputNombre.value.trim().length > 0){
        inputNombre.style.border = "2px solid green"
    }
    
})

inputApellido?.addEventListener('focus', () => {
    labelApellido.classList.add('active');
    const contenedor = document.querySelector('.apellido-container');
    contenedor.style.marginTop = "24px"
});
inputApellido?.addEventListener('blur',() =>{
    if(inputApellido.value.trim().length == 0){
        labelApellido.classList.remove('active')
        const contenedor = document.querySelector('.apellido-container');
        contenedor.style.marginTop = "0px"
        inputApellido.style.border = "2px solid red"
    }else if(inputApellido.value.trim().length > 0){
        inputApellido.style.border = "2px solid green"
    }
    
})

inputEmail?.addEventListener('focus', () => {
    labelEmail.classList.add('active');
    const contenedor = document.querySelector('.email-container');
    contenedor.style.marginTop = "24px"
});
inputEmail?.addEventListener('blur',() =>{
    if(inputEmail.value.trim().length == 0){
        labelEmail.classList.remove('active')
        const contenedor = document.querySelector('.email-container');
        contenedor.style.marginTop = "0px"
        inputEmail.style.border = "2px solid red"
    }else if(regExp.test(inputEmail.value.trim()) === true){
        inputEmail.style.border = "2px solid green"
    }else if(inputEmail.value.trim().length !== 0 && regExp.test(inputEmail.value.trim()) === false ){
        inputEmail.style.border = "2px solid red"
    }
})

inputTel?.addEventListener('focus', () => {
    labelTel.classList.add('active');
    const contenedor = document.querySelector('.tel-container');
    contenedor.style.marginTop = "24px"
});
inputTel?.addEventListener('blur',() =>{
    if(inputTel.value.trim().length == 0 ){
        labelTel.classList.remove('active')
        const contenedor = document.querySelector('.tel-container');
        contenedor.style.marginTop = "0px"
        inputTel.style.border = "2px solid red"
    }else if(inputTel.value.trim().length === 9){
        inputTel.style.border = "2px solid green"
    }else if(inputTel.value.trim().length !== 0 && inputTel.value.trim().length !== 9){
        inputTel.style.border = "2px solid red"
    }
    
})

inputTemario?.addEventListener('focus', () => {
    labelTemario.classList.add('active');
    const contenedor = document.querySelector('.temario');
    contenedor.style.marginTop = "24px"
});
inputTemario?.addEventListener('blur',() => {
    if(inputTemario.value.trim().length == 0){
        labelTemario.classList.remove('active')
        const contenedor = document.querySelector('.temario');
        contenedor.style.marginTop = "0px"
        inputTemario.style.border = "2px solid red"
    }else if(inputTemario.value.trim().length >= 4){
        inputTemario.style.border = "2px solid green"
        inputTemario.style.backgroundColor = "light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4))"
    }else if(inputTemario.value.trim().length < 4 && inputTemario.value.trim().length > 0){
        inputTemario.style.border = "2px solid red"
    }
})

inputFecha?.addEventListener('focus', () => {
    labelFecha.classList.add('active');
    const contenedor = document.querySelector('.fecha-container');
    contenedor.style.marginTop = "24px"
    inputFecha.type = "date";
    
});
inputFecha?.addEventListener('blur',() => {
    if(inputFecha.value.length == 0){
        labelFecha.classList.remove('active')
        const contenedor = document.querySelector('.fecha-container');
        contenedor.style.marginTop = "0px"
        inputFecha.type = "text";
        inputFecha.style.border = "2px solid red"
    }else if(inputFecha.value.length != 0){
        inputFecha.style.border = "2px solid green"
        inputFecha.style.backgroundColor = "light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4))"
    }
    
})

inputHoras?.addEventListener('focus', () => {
    labelHoras.classList.add('active');
    const contenedor = document.querySelector('.horas-container');
    contenedor.style.marginTop = "24px"
});
inputHoras?.addEventListener('blur',() => {
    if(inputHoras.value.trim().length == 0){
        labelHoras.classList.remove('active')
        const contenedor = document.querySelector('.horas-container');
        contenedor.style.marginTop = "0px"
        inputHoras.style.border = "2px solid red"
    }else if(inputHoras){
        inputHoras.style.border = "2px solid green"
        inputHoras.style.backgroundColor = "light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4))"
    }
})

button?.addEventListener('mousedown', (e)=>{
    e.preventDefault();
    button.style.transform = "translateY(3px)"
    button.style.transition = "0.3s"
    button.style.boxShadow = "none"
})
button?.addEventListener('mouseup', (e)=>{
    e.preventDefault();
    button.style.transform = "translateY(0px)"
    button.style.transition = "0.3s"
    button.style.boxShadow = "0px 2px 2px green"
})


const sitioInyeccion = document.querySelector(".citas")
let editar = false
const infoAlumno = {
    id:"",
    nombre: "",
    apellido:"",
    email:"",
    telefono:"",
    fecha:"",
    hora:"",
    materia: "",
    temario: ""
}
class AdminAlumnos {
    
    #lista = []

    anadirLista (info) {
        this.#lista.push(info)
    }
    
    inyeccionDom(){
        vaciarHtml()

        localStorage.setItem('lista', JSON.stringify(this.#lista));

        this.#lista.forEach((elemento)=>{
            const seccion = document.createElement("section");
            seccion.classList.add("alumnado")
            const miLista = document.createElement("ul");
            const contenedorBotones = document.createElement("div");
            contenedorBotones.classList.add("cont-botones");
            miLista.innerHTML=
            `<li>Nombre <p>${elemento.nombre} ${elemento.apellido}</p></li>
            <li>Email <p>${elemento.email}</p></li>
            <li>Contacto <p>${elemento.telefono}</p></li>
            <li>Fecha <p>${elemento.fecha}</p></li>
            <li>Hora <p>${elemento.hora}</p></li>
            <li>Materia <p>${elemento.materia}</p></li>
            <li>Temario <p>${elemento.temario}</p></li>
            `
            const botonEliminar = document.createElement("button");
            botonEliminar.classList.add("eliminar")
            botonEliminar.innerHTML= `<p class="icon-close"></p> Eliminar `
            const id = elemento.id
            botonEliminar.onclick = (e)=>{
                let newLista = this.#lista.filter((e)=>e.id !== id)
                this.#lista = newLista
                localStorage.setItem('lista', JSON.stringify(this.#lista));
                eliminarCita(seccion)
            };
            
            const botonEditar = document.createElement("button");
            botonEditar.classList.add("editar")
            botonEditar.innerHTML= `<p class="icon-pencil"></p> Editar `
            botonEditar.onclick = () =>{
                editar = true
                editModOn(elemento)
            }

            contenedorBotones.appendChild(botonEditar)
            contenedorBotones.appendChild(botonEliminar)

            seccion.appendChild(miLista)
            seccion.appendChild(contenedorBotones)
            sitioInyeccion.appendChild(seccion)
        })
    }
    actualizarClase(clase){
        const listaAcutalizada = this.#lista.map((e)=>{
            if(e.id == clase.id){
                return clase
            }else{
                return e
            }
        })
        this.#lista = listaAcutalizada
        localStorage.setItem('lista', JSON.stringify(this.#lista));
        this.inyeccionDom()
    }

    listaLocal(listaNueva){
        this.#lista = listaNueva
    }
    
}

const Administrador = new AdminAlumnos();

function vaciarHtml(){
        
    while(sitioInyeccion.firstChild){
        sitioInyeccion.removeChild(sitioInyeccion.firstChild)
    }
}

button?.addEventListener("click", (e) => {
    e.preventDefault()
    
    const materia = document.getElementsByName("materia");
    let valorMateria;
    materia.forEach((materia)=>{
        if(materia.checked){
            valorMateria = materia.value
        }
    })
    if(inputNombre.value.trim().length > 0 && inputApellido.value.trim().length > 0 && regExp.test(inputEmail.value.trim()) === true && inputTel.value.trim().length === 9 && inputFecha.value.length != 0 && inputHoras && inputTemario.value.trim().length >= 4){
        infoAlumno.nombre = inputNombre.value
        infoAlumno.apellido = inputApellido.value
        infoAlumno.email = inputEmail.value
        infoAlumno.telefono = inputTel.value
        infoAlumno.fecha = inputFecha.value
        infoAlumno.hora = inputHoras.value
        infoAlumno.materia = valorMateria
        infoAlumno.temario = inputTemario.value
        if(editar !== true){
            infoAlumno.id = Math.random().toString(36).substring(2) + Date.now()
            //enviamos el objeto a la lista
            const informacion = {...infoAlumno}
            Administrador.anadirLista(informacion)
            Administrador.inyeccionDom()
            //reiniciar formulario 
            const form = document.querySelector('#formulario')
            form.reset()
            resetear(infoAlumno)
            seteaInfoAlumno()
        }else{
            const info = {...infoAlumno}
            Administrador.actualizarClase(info)
            const form = document.querySelector('#formulario')
            form.reset()
            resetear(infoAlumno)
            seteaInfoAlumno()
            editar = false 
        }
        
    }else{
        const alerta = document.createElement("p");
        alerta.textContent = "Todos los campos son obligatorios"
        alerta.classList.add("alerta")
        const contenedor = document.querySelector(".contenedor-Formulario")
        const form = document.querySelector('#formulario')
        //eliminar duplicados
        const alertaPrevia = document.querySelector('.alerta');
        if(alertaPrevia){
            alertaPrevia.remove()
        }

        contenedor.insertBefore(alerta,form);
        setTimeout(
            function eliminar(){
                alerta.remove()
            },2000
        )
    }
})
    
function seteaInfoAlumno(){
    Object.assign(infoAlumno, {
        id:"",
        nombre: "",
        apellido:"",
        email:"",
        telefono:"",
        fecha:"",
        hora:"",
        materia: "",
        temario: ""
    })
}

const eliminarCita = (elemento) => {
    //const borrar = botonEliminar.parentElement.parentElement;
    elemento.remove()
    if(!sitioInyeccion.firstChild){
        const parrafo = document.createElement("p")
        parrafo.textContent = "No tienes ninguna clase anotada"
        sitioInyeccion.appendChild(parrafo)
    }
}
function editModOn(objeto){
    infoAlumno.id = objeto.id
    inputNombre.value = objeto.nombre
    inputApellido.value = objeto.apellido
    inputEmail.value = objeto.email
    inputTel.value = objeto.telefono
    inputFecha.value = objeto.fecha
    inputTemario.value = objeto.temario
    inputHoras.value = objeto.hora
    const materia = document.getElementsByName("materia");
    materia.forEach((materia)=>{
        if(materia.value == objeto.materia){
            materia.checked = true
        }
    })
    button.textContent = "Actualizar clase"
}

document.addEventListener("DOMContentLoaded", () => {
    const listActualizada = localStorage.getItem('lista');
    if(listActualizada){
        const contenido = JSON.parse(listActualizada);
        Administrador.listaLocal(contenido)
        Administrador.inyeccionDom()
    }
})