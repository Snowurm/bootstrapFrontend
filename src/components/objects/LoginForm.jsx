import img1 from "../../assets/brand/bootstrap-logo.svg";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/secret");
    };
    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card shadow-2-strong"
                                style={{ borderRadius: "1rem" }}
                            >
                                <div className="card-body p-5 text-center">
                                    <form
                                        className="form-signin"
                                        onSubmit={handleSubmit}
                                    >
                                        <img
                                            className="mb-4"
                                            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                                            alt=""
                                            width="72"
                                            height="72"
                                        />
                                        <h1 className="h3 mb-3 font-weight-normal">
                                            Please sign in
                                        </h1>
                                        <label
                                            htmlFor="inputEmail"
                                            className="sr-only"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            id="inputEmail"
                                            className="form-control"
                                            placeholder="Email address"
                                            required
                                            autoFocus
                                        />
                                        <label
                                            htmlFor="inputPassword"
                                            className="sr-only"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="inputPassword"
                                            className="form-control"
                                            placeholder="Password"
                                            required
                                        />
                                        <div className="checkbox mb-3">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value="remember-me"
                                                />{" "}
                                                Remember me
                                            </label>
                                        </div>
                                        <button
                                            className="btn btn-lg btn-primary btn-block"
                                            type="submit"
                                        >
                                            Sign in
                                        </button>
                                        <p className="mt-5 mb-3 text-muted">
                                            &copy; 2021 onwards
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default LoginForm;
