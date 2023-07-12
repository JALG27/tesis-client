import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import { useAuth } from "../../context/auth"
import toast  from 'react-hot-toast'
import {GiShoppingCart} from 'react-icons/gi'

function Header() {
  const [auth,setAuth] = useAuth()
  const handleLogout = () => {
    setAuth({
      ...auth, user:null,token:''
    })
    localStorage.removeItem("auth")
    toast.success("Cerro sesion con exito!")
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand"><GiShoppingCart/>  TecnoExpress</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link " >Home</Link>
        </li>
        <li className="nav-item">
          <NavLink to="/categoria" className="nav-link " >Categoria</NavLink>
        </li>
        {
          !auth.user ? (<>
        <li className="nav-item">
          <NavLink to="/registro" className="nav-link" href="#">Registro</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" href="#">Iniciar sesión</NavLink>
        </li>
        </>
        ) : (
        <>
          <li className="nav-item">
          <NavLink onClick={handleLogout} to="/login" className="nav-link" href="#">Cerrar sesión</NavLink>
        </li>
        </>
        )}
        <li className="nav-item">
          <NavLink to="/carrito" className="nav-link" href="#">Carrito (0)</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="Buscar">
        <input className="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar" />
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header