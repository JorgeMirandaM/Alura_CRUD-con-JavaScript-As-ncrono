
import { clientServices } from "../service/client-service.js";
const formulario=document.querySelector("[data-form]");

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nombre= document.querySelector("[data-nombre]").value;
    const email=document.querySelector("[data-email]").value;

    try{
        const respuesta=clientServices.crearCliente(nombre,email);
        window.location.href="/screens/registro_completado.html";
    }catch(e){
        console.log(e)
    }

    
})