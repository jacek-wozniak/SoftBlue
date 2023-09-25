import './Menu.scss';
import logo from './logo.png'
import {NavLink} from "react-router-dom";
import {useState} from "react";

const Menu = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const handleCommentsClick = () => {
        console.log('Scroll to comments');
    }

    const handleHamburgerClick = () => {
        setMobileMenuActive(prevState => !prevState);
    }

    return (
        <nav className="menu">
            <NavLink className="menu__logo-link" to="/">
                <img className="menu__logo" src={logo} width="120" height="38"/>
            </NavLink>
            <button className={(mobileMenuActive ? 'menu__hamburger menu__hamburger--active' : 'menu__hamburger')} onClick={handleHamburgerClick}/>
            <ul className={(mobileMenuActive ? 'menu__links menu__links--active' : 'menu__links')}>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')} >Home</NavLink>
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')}>Services</NavLink>
                <NavLink to="/experience" className={({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')}>Experience</NavLink>
                <button className="menu__comments-link" onClick={handleCommentsClick}>Comments</button>
            </ul>
        </nav>
    )
}

export default Menu;