import React from "react";
import "./Header.css";
import Navigation from "./Navigation/Navigation";
import Welcome from "./Welcome/Welcome";
import Filter from "./Filter/Filter";

function Header({
    header_title, icon, welcome_needed, filter_needed
}) {
    return (
        <div className="header__container">
            <div className="navigation__container">
                <Navigation nav_title={header_title} nav_icon={icon} />
            </div>
            <div className="welcome-and-filter__container">
                {welcome_needed && <Welcome />}
                {filter_needed && <Filter />}
            </div>

        </div>
    );
}
export default Header;