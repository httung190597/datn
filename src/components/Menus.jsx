import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Dữ liệu',
        to: '/showdata',
        exact: false
    },
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to} className="my-link">{label}</Link>
                    </li>
                )
            }}
        />
    );
}
class Menu extends Component {

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                );
            });
        }
        return result;
    }
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    { this.showMenus(menus) }
                </ul>
            </nav>
        );
    }
}

export default Menu;