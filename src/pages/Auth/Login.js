import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axiosInstance from "../../utils/api/conexion";
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import "../../styles/AuthStyles.css";
import { useAuth } from '../../context/auth'

const Login = () => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [auth,setAuth] = useAuth()
    
    const navigate = useNavigate();

// Formulario funcion
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const res =  await axiosInstance.post("/api/v1/auth/login",{
            
            email,
            password,
            
        });
        if(res && res.data.success){
            toast.success(res.data.message)
            setAuth({
                ...auth,
                user: res.data.user,
                token: res.data.token,
            });
            localStorage.setItem('auth',JSON.stringify(res.data))
            navigate("/");
        } else{
            toast.error(res.data.message)     
        }
    } catch (error) {
        console.log(error)
        toast.error('Algo salio mal')
    }
};

  return (
    <Layout title="Inicio de sesion - TecnoExpress">
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h4 className="title">Pagina de Inicio de sesion</h4>
  
    
    
    <div className="mb-3">
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Ingresa tu Correo Electronico" required />
  </div>
  <div className="mb-3">
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Ingresa tu contraseña" required />
  </div>
  <button type="submit" className="btn btn-primary">Ingresar</button>
</form>

        </div>
    </Layout>
  )
}

export default Login