import "../../styles/fixedbg.scss";
const FixedBackground = () => {
    return (
        <>
            <div className="bg-image">
                <div className="mask gradient-custom">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <h1 className="text-white mb-0">Page title</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FixedBackground;
