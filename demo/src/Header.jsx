import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { BsBasket3 } from "react-icons/bs";

const Header = () => {
    return (
        <div className="main-header">
            <div className="header-top">
                <div className="search"><IoIosSearch /></div>
                <img src="/Images/Caratus-logo.png" alt="Caratus Logo" />
                <div className="icon-group">
                    <div className="icon1"><AiOutlineUser /></div>
                    <div className="icon2"><AiOutlineHeart /></div>
                    <div className="icon3"><BsBasket3 /></div>
                </div>
            </div>

            <nav className="main-nav">
                <ul className="nav-menu">
                    
                    {/* --- RINGS --- */}
                    <li className="nav-item dropdown">
                        <Link to="/rings" className="nav-link"><span>Ring</span> <IoIosArrowDown /></Link>
                        <div className="dropdown-menu mega-menu">
                            <div className="mega-menu-content">
                                <div className="mega-menu-column">
                                    <h3>Shop By Shape</h3>
                                    <ul>
                                        <li><Link to="/rings/round">Round</Link></li>
                                        <li><Link to="/rings/oval">Oval</Link></li>
                                        <li><Link to="/rings/emerald">Emerald</Link></li>
                                        <li><Link to="/rings/princess">Princess</Link></li>
                                        <li><Link to="/rings/pear">Pear</Link></li>
                                        <li><Link to="/rings/radiant">Radiant</Link></li>
                                        <li><Link to="/rings/marquise">Marquise</Link></li>
                                        <li><Link to="/rings/heart">Heart</Link></li>
                                        <li><Link to="/rings/asscher">Asscher</Link></li>
                                        <li><Link to="/rings/cushion">Cushion</Link></li>
                                        <li><Link to="/rings/baguette">Baguette</Link></li>
                                    </ul>
                                </div>
                                <div className="mega-menu-column">
                                    <h3>Shop By Style</h3>
                                    <ul>
                                        <li><Link to="/rings/solitaire">Solitaire</Link></li>
                                        <li><Link to="/rings/three-stone">Three Stone</Link></li>
                                        <li><Link to="/rings/halo">Halo</Link></li>
                                        <li><Link to="/rings/hidden-halo">Hidden Halo</Link></li>
                                        <li><Link to="/rings/toi-et-moi">Toi Et Moi</Link></li>
                                        <li><Link to="/rings/side-stone">Side Stone</Link></li>
                                        <li><Link to="/rings/eternity">Eternity</Link></li>
                                    </ul>
                                </div>
                                <div className="mega-menu-column">
                                    <h3>Shop By Metal</h3>
                                    <ul>
                                        <li><Link to="/rings/rose-gold">Rose Gold</Link></li>
                                        <li><Link to="/rings/yellow-gold">Yellow Gold</Link></li>
                                        <li><Link to="/rings/white-gold">White Gold</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* --- EARRINGS --- */}
                    <li className="nav-item dropdown">
                        <Link to="/earrings" className="nav-link"><span>Earrings</span> <IoIosArrowDown /></Link>
                        <div className="dropdown-menu mega-menu">
                            <div className="mega-menu-content">
                                <div className="mega-menu-column">
                                    <h3>Shop By Shape</h3>
                                    <ul>
                                        <li><Link to="/earrings/round">Round</Link></li>
                                        <li><Link to="/earrings/oval">Oval</Link></li>
                                        <li><Link to="/earrings/emerald">Emerald</Link></li>
                                        <li><Link to="/earrings/princess">Princess</Link></li>
                                        <li><Link to="/earrings/pear">Pear</Link></li>
                                        <li><Link to="/earrings/marquise">Marquise</Link></li>
                                        <li><Link to="/earrings/heart">Heart</Link></li>
                                        <li><Link to="/earrings/baguette">Baguette</Link></li>
                                    </ul>
                                </div>
                                <div className="mega-menu-column">
                                    <h3>Shop By Style</h3>
                                    <ul>
                                        <li><Link to="/earrings/stud">Stud</Link></li>
                                        <li><Link to="/earrings/halo">Halo</Link></li>
                                        <li><Link to="/earrings/dangle">Dangle</Link></li>
                                        <li><Link to="/earrings/drop">Drop</Link></li>
                                        <li><Link to="/earrings/drop-hoop">Drop Hoop</Link></li>
                                        <li><Link to="/earrings/latch-back">Latch Back</Link></li>
                                    </ul>
                                </div>
                                <div className="mega-menu-column">
                                    <h3>Shop By Metal</h3>
                                    <ul>
                                        <li><Link to="/earrings/rose-gold">Rose Gold</Link></li>
                                        <li><Link to="/earrings/yellow-gold">Yellow Gold</Link></li>
                                        <li><Link to="/earrings/white-gold">White Gold</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* --- BRACELETS --- */}
                    <li className="nav-item dropdown">
                        <Link to="/bracelets" className="nav-link"><span>Bracelets</span> <IoIosArrowDown /></Link>
                        <div className="dropdown-menu mega-menu">
                            <div className="mega-menu-content">
                                <div className="mega-menu-column">
                                    <h3>Shop By Shape</h3>
                                    <ul>
                                        <li><Link to="/bracelets/round">Round</Link></li>
                                        <li><Link to="/bracelets/oval">Oval</Link></li>
                                        <li><Link to="/bracelets/emerald">Emerald</Link></li>
                                        <li><Link to="/bracelets/pear">Pear</Link></li>
                                        <li><Link to="/bracelets/marquise">Marquise</Link></li>
                                        <li><Link to="/bracelets/baguette">Baguette</Link></li>
                                    </ul>
                                </div>
                                <div className="mega-menu-column">
                                    <h3>Shop By Style</h3>
                                    <ul>
                                        <li><Link to="/bracelets/tennis">Tennis</Link></li>
                                        <li><Link to="/bracelets/bangle">Bangle</Link></li>
                                    </ul>
                                </div>
                                <div className="mega-menu-column">
                                    <h3>Shop By Metal</h3>
                                    <ul>
                                        <li><Link to="/bracelets/rose-gold">Rose Gold</Link></li>
                                        <li><Link to="/bracelets/yellow-gold">Yellow Gold</Link></li>
                                        <li><Link to="/bracelets/white-gold">White Gold</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* --- NECKLACES --- */}
                    <li className="nav-item dropdown">
                        <Link to="/necklaces" className="nav-link"><span>Necklaces</span> <IoIosArrowDown /></Link>
                        <div className="dropdown-menu mega-menu">
                            <div className="mega-menu-content">
                                <div className="mega-menu-column">
                                    <h3>Shop By Shape</h3>
                                    <ul>
                                        <li><Link to="/necklaces/round">Round</Link></li>
                                        <li><Link to="/necklaces/oval">Oval</Link></li>
                                        <li><Link to="/necklaces/emerald">Emerald</Link></li>
                                        <li><Link to="/necklaces/princess">Princess</Link></li>
                                        <li><Link to="/necklaces/pear">Pear</Link></li>
                                        <li><Link to="/necklaces/radiant">Radiant</Link></li>
                                        <li><Link to="/necklaces/marquise">Marquise</Link></li>
                                        <li><Link to="/necklaces/heart">Heart</Link></li>
                                        <li><Link to="/necklaces/baguette">Baguette</Link></li>
                                    </ul>
                                </div>
                                <div className="mega-menu-column">
                                    <h3>Shop By Style</h3>
                                    <ul>
                                        <li><Link to="/necklaces/solitaire">Solitaire</Link></li>
                                        <li><Link to="/necklaces/halo">Halo</Link></li>
                                        <li><Link to="/necklaces/classic">Classic</Link></li>
                                        <li><Link to="/necklaces/fashion">Fashion</Link></li>
                                        <li><Link to="/necklaces/unique">Unique</Link></li>
                                    </ul>
                                </div>
                                <div className="mega-menu-column">
                                    <h3>Shop By Metal</h3>
                                    <ul>
                                        <li><Link to="/necklaces/rose-gold">Rose Gold</Link></li>
                                        <li><Link to="/necklaces/yellow-gold">Yellow Gold</Link></li>
                                        <li><Link to="/necklaces/white-gold">White Gold</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <Link to="/about" className="nav-link"><span>About Us</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link"><span>Contact</span></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;