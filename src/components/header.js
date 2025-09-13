import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg">
                    <a>
                        <Link to={"/"}>
                            <a>
                                <h1>Lance<span className="seo">Charles</span>Schroeder</h1>
                            </a>
                        </Link>
                    </a>
                <div>
                    <ul>
                        <li>
                            <a type="submit">
                                <Link to={"/projects"}>
                                    <a className="nav-link">
                                        <h2>Other Projects</h2>
                                    </a>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a type="submit">
                                <Link to={"/certificate"}>
                                    <a className="nav-link">
                                        <h2 className="custom-font">Certificate</h2>
                                    </a>
                                </Link>
                            </a>                           
                        </li>
                        <li>
                            <a type="submit">
                                <Link to={"/skills"}>
                                    <a className="nav-link">
                                        <h2 className="custom-font">Skills</h2>
                                    </a>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a type="submit">
                                <Link to={"/contact"}>
                                    <a className="nav-link">
                                        <h2 className="custom-font">Contact Information</h2>
                                    </a>
                                </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header