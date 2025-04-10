import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
    //! USENAVIGATE É UM CUSTOM HOOK QUE É USADO PARA NAVEGAR ENTRE AS PAGES
    //! CRIADO PELA GENTE DO REACT ROUTER
    const navigate = useNavigate()

    const onLogout = () => {
        //* replace: true é usado para que o usuário não possa voltar para a página anterior
        //* basicamente subistitui o history.push do react-router-dom v5
        navigate('/login', {
            replace: true
        })
    }



  return (
    <nav className="navbar navbar-expand-lg shadow-sm bg-white">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          <i className="bi bi-shield-fill me-2"></i>Heroes App
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* NEM SEMPRE A CLASE VAI COLOCAR ACTIVE POR DEFEITO, E NESSES CASOS PODEMOS USAR O ISACTIVE PARA VER SE ESTÁ ATIVO OU NÃO */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                    <NavLink className={({isActive}) => `nav-link ${isActive ? 'fw-bold text-primary border-bottom border-2 border-primary' : 'text-dark'}`} to="/marvel">
                        Marvel
                    </NavLink>
                </li>
                <li className="nav-item mx-2">
                    <NavLink className={({isActive}) => `nav-link ${isActive ? 'fw-bold text-primary border-bottom border-2 border-primary' : 'text-dark'}`} to="/dc">
                        DC
                    </NavLink>
                </li>
                <li className="nav-item mx-2">
                    <NavLink className={({isActive}) => `nav-link ${isActive ? 'fw-bold text-primary border-bottom border-2 border-primary' : 'text-dark'}`} to="/search">
                        <i className="bi bi-search me-1"></i>Search
                    </NavLink>
                </li>
            </ul>
            <div className="d-flex">
                <button onClick={onLogout} className="btn btn-outline-danger rounded-pill px-4">
                    <i className="bi bi-box-arrow-right me-1"></i>Logout
                </button>
            </div>
        </div>
      </div>
    </nav>
  )
}