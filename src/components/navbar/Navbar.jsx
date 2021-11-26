import { Link } from "react-router-dom";
import logo from "../../img/favicon.ico";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img
                            src={logo}
                            height="48px"
                            className="d-inline-block align-center"
                            alt=""
                        />
                        <p className="h5 d-inline-block align-bottom">
                            &nbsp;Dashboard
                        </p>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarCollapse"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/data" className="nav-link">
                                    Data
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/buy" className="nav-link">
                                    Buy
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sell" className="nav-link">
                                    Sell
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/mystuff" className="nav-link">
                                    My stuff
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

        //////////////////////////////
        // <nav className="navbar navbar-expand-md navbar-dark bg-dark border-bottom">
        //     <div className="container-fluid">
        // <Link to="/" className="navbar-brand">
        //     <img
        //         src={logo}
        //         height="48px"
        //         className="d-inline-block align-top"
        //         alt=""
        //     />
        // </Link>
        //         <button
        //             className="navbar-toggler"
        //             type="button"
        //             data-bs-toggle="collapse"
        //             data-bs-target="#navbarCollapse"
        //             aria-controls="navbarCollapse"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarCollapse">
        //             <ul className="navbar-nav me-auto mb-2 mb-md-0">
        //                 <li className="nav-item">
        //                     <Link to="/" className="nav-link">
        //                         Home
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/about" className="nav-link">
        //                         About
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        // <Link to="/" className="navbar-brand">
        //     <img src={logo} className="d-inline-block align-top" alt="" />
        // </Link>
        //     <button
        //         className="navbar-toggler"
        //         type="button"
        //         data-toggle="collapse"
        //         data-target="#navbarNav"
        //         aria-controls="navbarNav"
        //         aria-expanded="false"
        //         aria-label="Toggle navigation"
        //     >
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //         <ul className="navbar-nav ml-auto">
        // <li className="nav-item active">
        //     <Link to="/">Home</Link>
        // </li>
        // <li className="nav-item">
        //     <Link to="/about">About</Link>
        // </li>
        //             <li className="nav-item"></li>
        //             <li className="nav-item"></li>
        //         </ul>
        //     </div>
        // </nav>
    );
};

export default Navbar;
