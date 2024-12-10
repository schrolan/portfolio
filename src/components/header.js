import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="app-header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <form className="d-flex">
                        <a className="btn btn-success" type="submit">
                            <Link to={"/projects"}>
                                <a className="nav-link">
                                    <h2 className="custom-font">Other Projects</h2>
                                </a>
                            </Link>
                        </a>
                    </form>

                    <form className="d-flex">
                        <a className="btn btn-success" type="submit">
                            <Link to={"/certificate"}>
                                <a className="nav-link">
                                    <h2 className="custom-font">Certificate</h2>
                                </a>
                            </Link>
                        </a>
                    </form>

                    <form className="d-flex">
                        <a className="btn btn-success" type="submit">
                            <Link to={"/"}>
                                <a className="nav-link">
                                    <h2 className="custom-font">Lance Schroeder</h2>
                                </a>
                            </Link>
                        </a>
                    </form>

                    <form className="d-flex">
                        <a className="btn btn-success" type="submit">
                            <Link to={"/resume"}>
                                <a className="nav-link">
                                    <h2 className="custom-font">Resume</h2>
                                </a>
                            </Link>
                        </a>
                    </form>

                    <form className="d-flex">
                        <a className="btn btn-success" type="submit">
                            <Link to={"/contact"}>
                                <a className="nav-link">
                                    <h2 className="custom-font">Contact Information</h2>
                                </a>
                            </Link>
                        </a>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default Header