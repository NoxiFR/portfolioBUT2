//class des lien de la navbar
import React from 'react';
import { NavLink } from "react-router-dom";

//interface pour accepter  les props
interface NavBarLinkProps {
    to: string;
    text: string;
}

class NavBarLink extends React.Component<NavBarLinkProps> {
    render() {
        return (
            <li>
                <NavLink to={this.props.to} className={({isActive}) => isActive ? "active" : ""}>
                    {this.props.text}
                </NavLink>
                <div className={'navLinkAnnimation down'}></div>
                <div className={'navLinkAnnimation right'}></div>
                <div className={'navLinkAnnimation up'}></div>
                <div className={'navLinkAnnimation left'}></div>
            </li>
        );
    }
}

export default NavBarLink;