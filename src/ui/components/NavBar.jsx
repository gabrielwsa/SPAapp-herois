import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Heroes App
        </Link>
        <div className="navbar-collapse">
            <div className="navbar-nav">
                {/* NEM SEMPRE A CLASE VAI COLOCAR ACTIVE POR DEFEITO, E NESSES CASOS PODEMOS USAR O ISACTIVE PARA VER SE ESTÁ ATIVO OU NÃO */}
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/marvel">
                    Marvel
                </NavLink>
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/dc">
                    DC
                </NavLink>
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/login">
                    Login
                </NavLink>
            </div>
        </div>
      </div>
    </nav>
  )
}