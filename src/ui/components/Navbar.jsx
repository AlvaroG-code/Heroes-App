import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogout = () => {
        logout(); // remove user from context
        navigate("/login", {
            replace: true,
        });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={(args) => {
                            return `nav-link ${args.isActive ? "active" : ""}`;
                        }}
                        to="marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={(args) => {
                            return `nav-link ${args.isActive ? "active" : ""}`;
                        }}
                        to="dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={(args) => {
                            return `nav-link ${args.isActive ? "active" : ""}`;
                        }}
                        to="search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        {user?.name}
                    </span>

                    <button
                        onClick={onLogout}
                        className="nav-item nav-link btn"
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};
