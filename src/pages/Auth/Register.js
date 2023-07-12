import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import "../../styles/AuthStyles.css";

const Register = () => {
    const [nombre,setNombre] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [telefono,setTelefono] = useState("")
    const [direccion,setDireccion] = useState("")
    const navigate = useNavigate();

// Formulario funcion
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const res =  await axios.post("/api/v1/auth/register",{
            nombre,
            email,
            password,
            telefono,
            direccion,
        });
        if(res && res.data.success){
            toast.success(res.data.message)
            navigate("/login");
        } else{
            toast.error(res.data.message)     
        }
    } catch (error) {
        console.log(error)
        toast.error('Algo salio mal')
    }
};


  return (
    <Layout title="Registro - TecnoExpress">
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h4 className="title">Pagina de Registro</h4>
  <div className="mb-3">
    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" id="exampleInputName" placeholder="Ingresa tus nombres y apellidos" required />
    </div>
    <div className="mb-3">
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Ingresa tu Correo Electronico" required />
  </div>
  <div className="mb-3">
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Ingresa tu contraseña" required />
  </div>
  <div className="mb-3">
    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="form-control" id="exampleInputName" placeholder="Ingresa tu numero telefonico" required/>
   </div>
   <div className="mb-3">
    <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} className="form-control" id="exampleInputName" placeholder="Ingresa tu Direccion de envio" required/>
    </div>
  <button type="submit" className="btn btn-primary">Registrarse</button>
</form>

        </div>
    </Layout>
  )
}

export default Register