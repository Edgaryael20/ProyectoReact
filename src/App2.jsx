
import LoginButton from './LoginButton.jsx';
import LogoutButton from './LogoutButton.jsx';
import { useContext } from 'react';
import { AuthContext } from './AuthContext.jsx';
import Aplicacion from "./App";
let a = "";
function App() {

  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <div className='App-header'><img src='https://cdn-icons-png.freepik.com/256/15247/15247225.png?semt=ais_hybrid' width={50} height={50}></img> Venta de semillas
      <div className={a}><LogoutButton></LogoutButton></div></div>
     <div className='esconder'> {isAuthenticated ? a="":a="esconder" }</div>
      {isAuthenticated ? <Aplicacion></Aplicacion> : <LoginButton/>}
  
    </>
  );
}

export default App;