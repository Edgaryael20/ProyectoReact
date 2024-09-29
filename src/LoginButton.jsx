import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useState } from "react";
import iconousuario from "./imagenes/usuario.png"
import imgemail from "./imagenes/correo.png"
import iconocontraseña from "./imagenes/candado.png"
import "./LoginSignUp.css"
import "./index.css"

function Appi() {const {login}=useContext(AuthContext);
  const [formValues,setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
        ...formValues,
        [name]: value,
    });
};
const handleSubmit = (e) => {
  e.preventDefault(); 
  console.log(formValues); 
}; 
  
let cambio;
let funcion;

const handleRegistro = () => {
 alert(`Sus datos se han registrado con exito!`);
};

 const [action,setAction] = useState("Iniciar Sesion");

 if(action==="Iniciar Sesion"){
   cambio = "Iniciar Sesion";
   funcion = login
   
 }
 else{
    cambio = "Registrar"
    funcion = handleRegistro;
 }
  
  return(<form onSubmit={handleSubmit}>
    <div className='Container'>
      
    <div className='header'>
      <div className='text'>{action}</div>
      <div className='underline'></div>
  </div>
  <div className='inputs'>
    {action==="Iniciar Sesion"?<div></div>:<div className='input'>
  <img src={iconousuario} alt='' width={30} height={30}/>
  <input type='text' placeholder='Nombre' name='nombre' onChange={handleChange}/>
</div>}

<div className='input'>
  <img src={imgemail} alt=''  width={30} height={30}/>
  <input type='email' placeholder='Email' name='text' onChange={handleChange}/>
</div>
<div className='input'>
  <img src={iconocontraseña} alt=''  width={30} height={30}/>
  <input type='password' placeholder='Contraseña' name='password' onChange={handleChange}/>
</div>
<div className='inputbtn'><button className='boton' type='sumbit' onClick={funcion}>{cambio}</button></div>
  </div>
    

  <div className='submit-container'>
    <div className={action==="Iniciar Sesion"?"submit gray":"submit"} onClick={()=>{setAction("Registrarse")}
    }>Registrarse</div>
    <div className={action==="Registrarse"?"submit gray":"submit"} onClick={()=>{setAction("Iniciar Sesion")}
    }>Iniciar Sesion</div>
  </div>
  
      </div>
      </form>
      
           )

  }
  export default Appi;
