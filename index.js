const btnSinCuenta=document.getElementById("btnSinCuenta");
const btnEnviar=document.getElementById("btnEnviar");
const btn=document.getElementById("btn");
const credenciales=document.getElementById("credenciales");
credenciales.classList.toggle("visibilidad");
let usuarios=[];
function buscarUsuarios(usuarios){
    let nombre=document.getElementById("nombre").value;
    let password=document.getElementById("password").value;
    for(let i=0;i<usuarios.length;i++){
        if(usuarios[i].nombre==nombre&&usuarios[i].password==password){
            return true;
        }
    }
    return false;
}
btnSinCuenta.addEventListener("click",()=>{
    const btnSinCuenta=document.getElementById("btnSinCuenta");
    const btnEnviar=document.getElementById("btnEnviar");
    const btnRegistrarse=document.getElementById("btnRegistrarse");
    btnEnviar.classList.toggle("visibilidad");
    btnSinCuenta.classList.toggle("visibilidad");
    btnRegistrarse.classList.toggle("visibilidad");
})
btnRegistrarse.addEventListener("click",()=>{
    let res=buscarUsuarios(usuarios);
    if(res){
       let app=document.getElementById("app");
       app.classList.toggle("visibilidad");
       const btnRegistrarse=document.getElementById("btnRegistrarse");
       btnRegistrarse.classList.toggle("visibilidad");
       let credenciales=document.getElementById("credenciales");
         credenciales.classList.toggle("visibilidad");
    } else{
        let nombre=document.getElementById("nombre").value;
        let password=document.getElementById("password").value;
        usuarios.push({nombre:nombre, password:password});
        document.getElementById("password").value="";
        document.getElementById("nombre").value="";
        const btnSinCuenta=document.getElementById("btnSinCuenta");
        const btnEnviar=document.getElementById("btnEnviar");
        const btnRegistrarse=document.getElementById("btnRegistrarse");
        btnEnviar.classList.toggle("visibilidad");
        btnSinCuenta.classList.toggle("visibilidad");
        btnRegistrarse.classList.toggle("visibilidad");
    }

})
btnEnviar.addEventListener("click",()=>{
    let res=buscarUsuarios(usuarios);
    if(res){
       let app=document.getElementById("app");
       app.classList.toggle("visibilidad");
       const btnRegistrarse=document.getElementById("btnRegistrarse");
       btnRegistrarse.classList.toggle("visibilidad");
       let credenciales=document.getElementById("credenciales");
         credenciales.classList.toggle("visibilidad");
    } else{
        setTimeout(()=>{
            alert("Usuario o contraseña incorrectos");
        },1000);
    }
});


let contador=0;
btn.addEventListener("click",()=>{
    let cont=document.getElementById("container");
    let text=document.getElementById("text").value;
    let fechaActual= new Date();
    if(contador==0&&revisarSiEstaVacio()){
        cont.innerHTML+=`<div id="div${contador}" class="comment"><p id='p${contador}' class='parrafo'>${text}</p><button class='btn' onclick="EliminarComentario(${contador})">Eliminar</button><div class="time"><span>Fecha: ${fechaActual.getDate()}/${fechaActual.getMonth()}/${fechaActual.getFullYear()}</span><span>Hora: ${fechaActual.getHours()}:${fechaActual.getSeconds()}</span></div></div>`;
        
        contador++;
    } else{
        if(revisarSiEstaVacio()){
            let nuevoDiv=document.createElement("div");
            nuevoDiv.classList.add("comment");
            nuevoDiv.id=`div${contador}`;
            let nuevoParrafo=document.createElement("p");
            nuevoDiv.innerHTML=`<p id='p${contador}' class='parrafo'>${text}</p><button class='btn' onclick="EliminarComentario(${contador})">Eliminar</button><div class="time"><span>Fecha: ${fechaActual.getDate()}/${fechaActual.getMonth()}/${fechaActual.getFullYear()}</span><span>Hora: ${fechaActual.getHours()}:${fechaActual.getSeconds()}</span></div>`;
            cont.insertBefore(nuevoDiv, cont.firstChild);
            contador++;
           
        } else{
            alert("No puedes enviar un comentario vacío");
        }
        
    }
    document.getElementById("text").value="";});
function revisarSiEstaVacio(){
    let text=document.getElementById("text").value;
    if(text==""){
       return false;
    } else{
        return true;
    }
}
function EliminarComentario(id){
    let cont=document.getElementById("container");
    let div=document.getElementById(`div${id}`);
    cont.removeChild(div);
}
