import { AccordionItemButton } from "./AccordionItemButton";
import TradeModal from "./TradeModal";

const Item = (props) => {
    const item = props.item;
    const result = (
        <div>
            {item.id} {item.name} {item.amount} {item.price}
        </div>
    );
    return result;
};
const ItemSmall = ({ item, id }) => {
    console.log("ide", item, id);
    const result2 = (
        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button
                            className="btn btn-link btn-block text-left"
                            type="button"
                            data-toggle="collapse"
                            data-target={"#collapseOne" + id}
                            aria-expanded="true"
                            aria-controls={"collapseOne" + id}
                        >
                            Collapsible Group Item #1
                        </button>
                    </h2>
                </div>

                <div
                    id={"collapseOne" + id}
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                >
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                    </div>
                </div>
            </div>
        </div>
    );

    const result3 = (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#firstChild" + id}
                    aria-expanded="true"
                    aria-controls={"firstChild" + id}
                >
                    Accordion Item #1
                </button>
            </h2>
            <div
                id={"firstChild" + id}
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                </div>
            </div>
        </div>
    );
    const result = (
        <div className="accordion-item ">
            <h5
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#firstChild" + id}
                aria-expanded="true"
                aria-controls={"firstChild" + id}
                id={"accordionExample" + id}
            >
                {item.name}
            </h5>

            <div
                id={"firstChild" + id}
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent={"#accordionExample" + id}
            >
                <div className="accordion-body">
                    <table className="table table-striped table-responsive">
                        <thead className="thead-inverse">
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>amount</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {item.id}</td>
                                <td> {item.name}</td>
                                <td> {item.amount}</td>
                                <td> {item.price}</td>
                            </tr>
                        </tbody>
                    </table>
                    <TradeModal item={item} id={id} />
                </div>
            </div>
        </div>
    );
    const result4 = (
        <div class="container">
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a
                                class="accordion-toggle"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne"
                            >
                                Collapsible Group Item #1
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in">
                        <div class="panel-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a
                                class="accordion-toggle"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseTwo"
                            >
                                Collapsible Group Item #2
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse">
                        <div class="panel-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a
                                class="accordion-toggle"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseThree"
                            >
                                Collapsible Group Item #3
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse">
                        <div class="panel-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    const result5 = (
        <>
            {item.amount} {item.name}
            <button>trade</button>
        </>
    );
    return result5;
};

//

export { ItemSmall, Item };
