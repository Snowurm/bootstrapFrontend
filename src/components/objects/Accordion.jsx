const Accordion = () => {
    return (
        <div class="container">
            <ul id="accordion" class="accordion">
                <li>
                    <div class="link">
                        <i class="fa fa-laptop"></i>Laptops
                        <i class="fa fa-chevron-down"></i>
                    </div>
                    <ul class="submenu">
                        <li>
                            <a href="#">Dell Acron</a>
                        </li>
                        <li>
                            <a href="#">HP Envy</a>
                        </li>
                        <li>
                            <a href="#">Macbook Air</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <div class="link">
                        <i class="fa fa-tv"></i>Smart TV
                        <i class="fa fa-chevron-down"></i>
                    </div>
                    <ul class="submenu">
                        <li>
                            <a href="#">Sony Bravia</a>
                        </li>
                        <li>
                            <a href="#">Samsung</a>
                        </li>
                        <li>
                            <a href="#">MI</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <div class="link">
                        <i class="fa fa-mobile"></i>Mobiles
                        <i class="fa fa-chevron-down"></i>
                    </div>
                    <ul class="submenu">
                        <li>
                            <a href="#">Samsung S9</a>
                        </li>
                        <li>
                            <a href="#">Apple X</a>
                        </li>
                        <li>
                            <a href="#">Honor Play</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <div class="link">
                        <i class="fa fa-globe"></i>Search Engines
                        <i class="fa fa-chevron-down"></i>
                    </div>
                    <ul class="submenu">
                        <li>
                            <a href="#">Google</a>
                        </li>
                        <li>
                            <a href="#">Bing</a>
                        </li>
                        <li>
                            <a href="#">Yahoo</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Accordion;
