import React, { useState } from 'react'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import { Link } from 'react-router-dom'
import { List } from 'phosphor-react'
import Accordion from 'react-bootstrap/Accordion';

import './Header.scss'

import Logo from '../../img/brand-logo.png'

function Header() {
    const [overlay, setoverlay] = useState(false);
    const overlayClose = () => {
        setoverlay(false)
    }
    const overlayOpen = () => {
        setoverlay(true)
    }
    return (
        <>
            <header className='header_main'>
                <div className="container">
                    <div className="wrapper">
                        <Link to="/" className="logo_inr">
                            <img className="logo_img" src={Logo} alt="brand_logo" />
                        </Link>
                        <div className="nav_otr">
                            <ul className="nav_ul">
                                <li className="nav_li">
                                    <Link to="/" className="nav_a heading_S">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav_li">
                                    <Link to="/top_rdp_provider" className="nav_a heading_S">
                                        Top RDP Providers
                                    </Link>
                                </li>
                                <li className="nav_li">
                                    <Link to="/category" className="nav_a heading_S">
                                        Categories
                                    </Link>
                                </li>
                                <li className="nav_li">
                                    <Link to="/store" className="nav_a heading_S">
                                        Stores
                                    </Link>
                                </li>
                                <li className="nav_li">
                                    <Link to="/review" className="nav_a heading_S">
                                        Reviews
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link className="action" to="/submit_coupon">
                            <ThemeBtn
                                ButtonClass="btn_outline"
                                ButtonText="Submit Coupon Code"
                            />
                        </Link>
                        <div className="list_icon">
                            <button className="btn btn_primary" onClick={overlayOpen}>
                                <List className="icon" size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={overlay ? 'overlay_main overlay_open' : 'overlay_main'}>
                <div className='overlay_bg'></div>
                <div className='overlay_otr'>
                    <div class="logo_otr">
                        <Link to="/" class="logo_inr">
                            <img class="logo_img" src={Logo} alt="brand-logo" />
                        </Link>
                        <div class="close_icon" onClick={overlayClose}>
                            <svg class="icon" data-bs-dismiss="modal" aria-label="Close" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 5.25l-13.5 13.5M18.75 18.75L5.25 5.25" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        </div>
                    </div>
                    <Accordion defaultActiveKey="0">
                        <Link to="/" className='heading_h3 menu_text'>
                            Home
                        </Link>
                        <Link to="/category" className='heading_h3 menu_text'>
                            Categories
                        </Link>
                        <Link to="/store" className='heading_h3 menu_text'>
                            Stores
                        </Link>
                        <Link to="/review" className='heading_h3 menu_text'>
                            Review
                        </Link>
                    </Accordion>
                    <Link class="action" to="/submit_coupon">
                        <ThemeBtn
                            ButtonClass="btn_outline"
                            ButtonText="Submit Coupon Code"
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header