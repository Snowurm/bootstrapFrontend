const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";
    const html = (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );

    return html;
};

export default Modal;
