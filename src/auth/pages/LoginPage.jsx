import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {
  
  const { onLogin } = useContext(AuthContext)
  const navigate = useNavigate()

  const login = (e) => {
    //* PREVENT DEFAULT É USADO PARA PREVENIR O COMPORTAMENTO PADRÃO DO FORMULARIO
    e.preventDefault()
    onLogin('Gabriel')
    navigate('/', { replace: true })
  }
 

  return (
    <div className="container d-flex justify-content-center mt-5">
        <div className="col-md-5 col-lg-4">
            <div className="card shadow-sm border-0 rounded-4">
                <div className="card-body p-4">
                    <h3 className="text-center mb-4 fw-bold text-primary">Login</h3>
                    
                    <form className="d-flex flex-column gap-5" onSubmit={login}>
                        <div className="mb-3">
                          <label htmlFor="username" className="form-label fw-bold">Username:</label>
                          <input type="text" className="form-control form-control-lg rounded-3" />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="password" className="form-label fw-bold">Password:</label>
                          <input type="password" className="form-control form-control-lg rounded-3" />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary py-2 rounded-3">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}