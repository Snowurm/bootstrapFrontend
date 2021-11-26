import { Link } from "react-router-dom";

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Fluid jumbotron</h1>
                <p className="lead">
                    This is a modified jumbotron that occupies the entire
                    horizontal space of its parent.
                </p>
                <Link to="/secret">
                    <button className="btn btn-outline-secondary">
                        Web Hosting
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Jumbotron;
