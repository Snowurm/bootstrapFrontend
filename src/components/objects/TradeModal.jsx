import FormTemplate from "./FormTemplate";

import { Modal } from "bootstrap";
const TradeModal = ({ item, id }) => {
    console.log("tradeModal", item, id);
    const modal = (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@mdo"
            >
                Open modal for @mdo
            </button>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@fat"
            >
                Open modal for @fat
            </button>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@getbootstrap"
            >
                Open modal for @getbootstrap
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                New message
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label
                                        htmlFor="recipient-name"
                                        className="col-form-label"
                                    >
                                        Recipient:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="message-text"
                                        className="col-form-label"
                                    >
                                        Message:
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message-text"
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Send message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    const modal2 = (
        <>
            {/* <!-- Button trigger modal --> */}
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target={"#exampleModal" + id}
            >
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div
                className="modal fade"
                id={"exampleModal" + id}
                tabIndex="-1"
                role="dialog"
                aria-labelledby={"exampleModalLabel" + id}
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id={"exampleModalLabel" + id}
                            >
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Card subtitle
                                    </h6>
                                    <form action="#">
                                        <div className="row mb-1">
                                            <div className="col">
                                                <label className="form-label">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    className="form-control"
                                                    placeholder="First name"
                                                    aria-label="First name"
                                                    required
                                                />
                                            </div>
                                            <div className="col">
                                                <label className="form-label">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    className="form-control"
                                                    placeholder="Last name"
                                                    aria-label="Last name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-1">
                                            <div className="col">
                                                <label className="form-label">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    aria-label="Email"
                                                    required
                                                />
                                            </div>
                                            <div className="col">
                                                <label className="form-label">
                                                    Phone (optional)
                                                </label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    className="form-control"
                                                    placeholder="Phone"
                                                    aria-label="Phone"
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-1">
                                            <div className="col">
                                                <label className="form-label">
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    className="form-control"
                                                    placeholder="Subject"
                                                    aria-label="Subject"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-1">
                                            <div className="col">
                                                <label className="form-label">
                                                    Message
                                                </label>
                                                <textarea
                                                    type="text"
                                                    name="message"
                                                    className="form-control"
                                                    placeholder="Message"
                                                    aria-label="Message"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary mt-2"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    const modal3 = (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@mdo"
            >
                Open modal for @mdo
            </button>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@fat"
            >
                Open modal for @fat
            </button>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@getbootstrap"
            >
                Open modal for @getbootstrap
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                New message
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label
                                        htmlFor="recipient-name"
                                        className="col-form-label"
                                    >
                                        Recipient:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="message-text"
                                        className="col-form-label"
                                    >
                                        Message:
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message-text"
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Send message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    const modal4 = (
        <>
            <div className="bd-example">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@mdo"
                >
                    Open modal for @mdo
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@fat"
                >
                    Open modal for @fat
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@getbootstrap"
                >
                    Open modal for @getbootstrap
                </button>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    style={{ display: "none" }}
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    New message to @getbootstrap
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label
                                            htmlFor="recipient-name"
                                            className="col-form-label"
                                        >
                                            Recipient:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="recipient-name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="message-text"
                                            className="col-form-label"
                                        >
                                            Message:
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message-text"
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Send message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return modal4;
};

export default TradeModal;
