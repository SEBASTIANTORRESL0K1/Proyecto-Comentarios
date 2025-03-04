const btnSinCuenta = document.getElementById("btnSinCuenta");
const btnEnviar = document.getElementById("btnEnviar");
const btn = document.getElementById("btn");
const credenciales = document.getElementById("credenciales");
credenciales.classList.toggle("visibilidad");
let usuarioActivo;
let usuarios = [];
let comentarios = [];

function buscarUsuarios(usuarios) {
    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("password").value;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre == nombre && usuarios[i].password == password) {
            return usuarios[i].nombre;
        }
    }
    return null;
}
function buscarComentario(divid) {
    let comentario = divid.children[0].textContent;
    let fecha = divid.children[2].children[0].children[0].textContent;
    let hora = divid.children[2].children[1].children[0].textContent;
    let usuario = divid.children[2].children[2].children[0].textContent;
    let res = null;

    for (let i = 0; i < comentarios.length; i++) {
        if (comentarios[i].comentario === comentario && comentarios[i].fecha === fecha && comentarios[i].hora === hora && comentarios[i].nombre === usuario) {
            res = comentarios[i];
           
        }
    }
    return res;
}

btnSinCuenta.addEventListener("click", () => {
    const btnRegistrarse = document.getElementById("btnRegistrarse");
    btnEnviar.classList.toggle("visibilidad");
    btnSinCuenta.classList.toggle("visibilidad");
    btnRegistrarse.classList.toggle("visibilidad");
});

btnRegistrarse.addEventListener("click", () => {
    let res = buscarUsuarios(usuarios);
    if (res != null) {
        let app = document.getElementById("app");
        app.classList.toggle("visibilidad");
        const btnRegistrarse = document.getElementById("btnRegistrarse");
        btnRegistrarse.classList.toggle("visibilidad");
        let credenciales = document.getElementById("credenciales");
        credenciales.classList.toggle("visibilidad");
    } else {
        let nombre = document.getElementById("nombre").value;
        let password = document.getElementById("password").value;
        usuarios.push({ nombre: nombre, password: password });
        document.getElementById("password").value = "";
        document.getElementById("nombre").value = "";
        const btnSinCuenta = document.getElementById("btnSinCuenta");
        const btnEnviar = document.getElementById("btnEnviar");
        const btnRegistrarse = document.getElementById("btnRegistrarse");
        btnEnviar.classList.toggle("visibilidad");
        btnSinCuenta.classList.toggle("visibilidad");
        btnRegistrarse.classList.toggle("visibilidad");
    }
});

btnEnviar.addEventListener("click", () => {
    let res = buscarUsuarios(usuarios);
    if (res != null) {
        let app = document.getElementById("app");
        app.classList.toggle("visibilidad");
        const btnRegistrarse = document.getElementById("btnRegistrarse");
        btnRegistrarse.classList.toggle("visibilidad");
        let credenciales = document.getElementById("credenciales");
        credenciales.classList.toggle("visibilidad");
        usuarioActivo = res;
        if (comentarios.length > 0) {
            let cont = document.getElementById("container");
            for (let i = comentarios.length-1; i >=0 ; i--) {
                console.log(comentarios[i]);
                cont.innerHTML += 
                `<div id="div${i}" class="comment">
                    <p id='p${i}' class='parrafo'>${comentarios[i].comentario}</p>
                    <button class='btn' id="btn${i}" onclick="EliminarComentario(${i})">Eliminar</button>
                    <div class="time">
                        <p>Fecha: <span id="spnFecha${i}">${comentarios[i].fecha}</span></p>
                        <p>Hora: <span id="spnHora${i}">${comentarios[i].hora}</span></p>
                        <p>👤: <span id="spnUsuario${i}">${comentarios[i].nombre}</span></p>
                    </div>
                </div>`;
            }
            for(let i=0;i<comentarios.length;i++){
                if(usuarioActivo==comentarios[i].nombre){
                    document.getElementById(`div${i}`).style.backgroundColor="lightblue";
                }
                else{
                    let cont=document.getElementById(`div${i}`);
                    let btn=document.getElementById(`btn${i}`);
                    cont.removeChild(btn);

                }
            }
        }
    } else {
        setTimeout(() => {
            alert("Usuario o contraseña incorrectos");
        }, 1000);
    }
});

let contador = 0;
btn.addEventListener("click", () => {
    let cont = document.getElementById("container");
    let text = document.getElementById("text").value;
    let fechaActual = new Date();
    if (contador == 0 && revisarSiEstaVacio()) {
        cont.innerHTML += 
        `<div id="div${contador}" class="comment">
            <p id='p${contador}' class='parrafo'>${text}</p>
            <button class='btn' onclick="EliminarComentario(${contador})">Eliminar</button>
            <div class="time">
                <p>Fecha: <span id="spnFecha${contador}">${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}</span></p>
                <p>Hora: <span id="spnHora${contador}">${fechaActual.getHours()}:${fechaActual.getMinutes()}</span></p>
                <p>👤:<span id="spnUsuario${contador}">${usuarioActivo}</span></p>
            </div>
        </div>`;
        comentarios.push({ nombre: usuarioActivo, comentario: text, fecha: `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`, hora: `${fechaActual.getHours()}:${fechaActual.getMinutes()}` });
        contador++;
        console.log(comentarios);
    } else {
        if (revisarSiEstaVacio()) {
            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("comment");
            nuevoDiv.id = `div${contador}`;
            nuevoDiv.innerHTML = 
            `<p id='p${contador}' class='parrafo'>${text}</p>
            <button class='btn' onclick="EliminarComentario(${contador})">Eliminar</button>
            <div class="time">
                <p>Fecha: <span id="spnFecha${contador}">${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}</span></p>
                <p>Hora: <span id="spnHora${contador}">${fechaActual.getHours()}:${fechaActual.getMinutes()}</span></p>
                <p>👤: <span id="spnUsuario${contador}">${usuarioActivo}</span></p>
            </div>`;
            cont.insertBefore(nuevoDiv, cont.firstChild);
            contador++;
            comentarios.push({ nombre: usuarioActivo, comentario: text, fecha: `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`, hora: `${fechaActual.getHours()}:${fechaActual.getMinutes()}` });
            console.log(comentarios);
        } else {
            alert("No puedes enviar un comentario vacío");
        }
    }
    document.getElementById("text").value = "";
});

function revisarSiEstaVacio() {
    let text = document.getElementById("text").value;
    return text !== "";
}

function EliminarComentario(id) {
    let cont = document.getElementById("container");
    let div = document.getElementById(`div${id}`);
    let comentarioEliminado = buscarComentario(div);
    for (let i = 0; i < comentarios.length; i++) {
        if (comentarios[i] === comentarioEliminado) {
            comentarios.splice(i, 1);
            break;
        }
    }
    cont.removeChild(div);
}

const btnSalir = document.getElementById("btnSalir");
btnSalir.addEventListener("click", () => {
    let app = document.getElementById("app");
    app.classList.toggle("visibilidad");
    let credenciales = document.getElementById("credenciales");
    credenciales.classList.toggle("visibilidad");
    let btnRegistrarse = document.getElementById("btnRegistrarse");
    btnRegistrarse.classList.toggle("visibilidad");
    let cont = document.getElementById("container");
    cont.innerHTML = "";
    usuarioActivo=null;
});