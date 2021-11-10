import React from "react";
import "./Navigation.css";
import { useHistory } from "react-router-dom";

function Navigation({
    nav_title,
    nav_icon
}) {

    const history = useHistory();

    const handleNavigation = () => {
        history.goBack();
      };

    return (
        <div className="navigation-elements__container">
            {nav_icon && <img className="navigation__img" src={nav_icon} alt="navigation-icon" onClick={handleNavigation} />}
            <p className="navigation__title">{nav_title}</p>
        </div>
    );
}
export default Navigation;