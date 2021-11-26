const AccordionItemButton = ({ item, id }) => {
    const result = (
        <div className="accordion-item ">
            <button
                type="button"
                className="btn btn-outline-primary accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#firstChild" + id}
                aria-expanded="true"
                aria-controls={"firstChild" + id}
                id={"accordionExample" + id}
            >
                Trade
            </button>

            <div
                id={"firstChild" + id}
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent={"#accordionExample" + id}
            >
                <div className="accordion-body">Create trade</div>
            </div>
        </div>
    );

    return result;
};
const ItemSmall = ({ item, id }) => {};

export { AccordionItemButton };
