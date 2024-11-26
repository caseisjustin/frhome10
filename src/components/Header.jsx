import React from "react";
import Logo from "../assets/Logo.png"
import SearchIcon from "../assets/CoffeeShop/search.png"
import ShopIcon from "../assets/CoffeeShop/shopping-bag.png"
import "./Header.scss"

const Header = () => {

    return (
        <>
            <header>
                <div className="Header_container">
                    <div className="hdr_wrp">
                    <div className="site_nav">
                        <ul className="site_nav_list">
                            <li className="site_nav_item">
                                <a href="#">Home</a>
                            </li>
                            <li className="site_nav_item">
                                <a href="#">About</a>
                            </li>
                            <li className="site_nav_item">
                                <a href="#">Menu</a>
                            </li>
                            <li className="site_nav_item">
                                <a href="#">Reservation</a>
                            </li>
                        </ul>
                    </div>
                    <img src={Logo} alt="LOGO" />
                    <div className="user_nav">
                        <ul className="user_nav_list">
                            <li className="user_nav_item">
                                <a href="#">Pages</a>
                            </li>
                            <li className="user_nav_item">
                                <a href="#">Shop</a>
                            </li>
                            <li className="user_nav_item">
                                <a href="#">Contact</a>
                            </li>
                            <li className="user_nav_item">
                                <img src={SearchIcon} alt="Search" />
                            </li>
                            <li className="user_nav_item">
                                <img src={ShopIcon} alt="Shop" />
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header