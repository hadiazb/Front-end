import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import LogoImage from '../../assets/logo.png';
import '../../sass/components/templates/Layout.scss';

export default function Layout({ children }) {
  return (
    <>
      <header className="app-header">
        <Link className="app-header__logo">
          <img src={LogoImage} alt="Cuarto de milla logo"/>
        </Link>
        <nav className="app-header__nav">
          <NavLink to='/reports'>Crear informe</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Registrarme</NavLink>
        </nav>
      </header>
      {children}
    </>
  )
}
