import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>

            <nav
                className="navbar navbar-expand-lg shadow"
                style={{ background: "linear-gradient(to right, #197754, #13cb88)" }}
            >
                <div className="container">
                    <a
                        className="navbar-brand text-white fw-bold fs-4"
                        href="#"
                        style={{ letterSpacing: "1px", fontFamily: "Poppins, sans-serif" }}
                    >
                        NSS VOLUNTEER MANAGEMENT SYSTEM
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link text-white fw-semibold mx-2" to="/">
                                ➕ Add Volunteer
                            </Link>

                            <Link className="nav-link text-white fw-semibold mx-2" to="/view">
                                👥 View Volunteers
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavigationBar