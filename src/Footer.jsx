import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './auth'

export const Footer = () => {

    const { logged } = useContext(AuthContext)

    return (
        <footer className={`bg-dark text-light py-4 mt-5 ${!logged ? 'fixed-bottom' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="text-warning">Sobre el curso</h5>
                        <p className="mb-0">
                            Hecho en curso de Fernando Herrera - React
                        </p>
                    </div>
                    {/* <div className="col-md-6 text-end">
                        <h5 className="text-warning">Contato</h5>
                        <p className="mb-0">
                            <a href="https://github.com" className="text-light me-3">
                                <i className="bi bi-github"></i> GitHub
                            </a>
                            <a href="https://linkedin.com" className="text-light">
                                <i className="bi bi-linkedin"></i> LinkedIn
                            </a>
                        </p>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}