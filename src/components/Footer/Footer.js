import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

import Logo from '../../img/brand-logo.png'

function Footer() {
    return (
        <>
            <footer className='Footer_main'>
                <div class="container">
                    <div class="row row_custom">
                        <div class="col-lg-3 col-md-4 col-sm-6 nav_main_otr">
                            <div class="nav_main_inr nav1">
                                <h3 class="nav_head heading_h3">Navigation</h3>
                                <ul class="nav_ul">
                                    <li class="nav_li">
                                        <Link to="/" class="nav_a heading_S">Home</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="/category" class="nav_a heading_S">Categories</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link class="nav_a heading_S">Stores</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://www.resellerratings.com/" target="_blank" class="nav_a heading_S">Reviews</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 nav_main_otr">
                            <div class="nav_main_inr nav2">
                                <h3 class="nav_head heading_h3">Quick Links</h3>
                                <ul class="nav_ul">
                                    <li class="nav_li">
                                        <Link to="https://99rdp.com/cheap-rdp/" target="_blank" class="nav_a heading_S">Cheap RDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://99rdp.com/streaming-rdp/" target="_blank" class="nav_a heading_S">Streaming RDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://amazingrdp.com/graphic-card-rdp/" target="_blank" class="nav_a heading_S">GPU RDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://99rdp.com/encoding-rdp/" target="_blank" class="nav_a heading_S">Encoding RDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://99rdp.com/rendering-rdp/" target="_blank" class="nav_a heading_S">Rendering RDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://amazingrdp.com/10gbps-usa-rdp/" target="_blank" class="nav_a heading_S">10 GBPS RDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://amazingrdp.com/private-rdp-vps/" target="_blank" class="nav_a heading_S">Private RDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://amazingrdp.com/residential-rdp/" target="_blank" class="nav_a heading_S">Residential RDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="" target='_blank' class="nav_a heading_S">Dedicated RDP</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 nav_main_otr">
                            <div class="nav_main_inr nav3">
                                <h3 class="nav_head heading_h3">Stores</h3>
                                <ul class="nav_ul">
                                    <li class="nav_li">
                                        <Link to="https://99rdp.com/" target='_blank' class="nav_a heading_S">99RDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://amazingrdp.com/" target='_blank' class="nav_a heading_S">AmazingRDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://homerdp.com/" target='_blank' class="nav_a heading_S">HomeRDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://eurdp.com/" target='_blank' class="nav_a heading_S">EURRDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://gpurdp.com/" target='_blank' class="nav_a heading_S">GPU RDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://rdpdatabase.com/" target='_blank' class="nav_a heading_S">RDPDatabase</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://pcrdp.com/" target='_blank' class="nav_a heading_S">PCRDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://gordp.com/" target='_blank' class="nav_a heading_S">GoRDP</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://99server.com/" target='_blank' class="nav_a heading_S">99Server</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://olivevps.com/" target='_blank' class="nav_a heading_S">OliveVPS</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://serverscafe.com/" target='_blank' class="nav_a heading_S">ServerCafe</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://www.buyrdplive.com/" target='_blank' class="nav_a heading_S">buyRDPLive</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 nav_main_otr">
                            <div class="nav_main_inr nav4">
                                <h3 class="nav_head heading_h3">Company</h3>
                                <ul class="nav_ul">
                                    <li class="nav_li">
                                        <Link to="/about" class="nav_a heading_S">About</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="/blog" class="nav_a heading_S">Blog</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="/contact" class="nav_a heading_S">Contact</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="/review" class="nav_a heading_S">Reviews</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="/" class="nav_a heading_S">Site Map</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="/terms" class="nav_a heading_S">Terms of Use</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="/privacy" class="nav_a heading_S">Privacy Policy</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="/cookie" class="nav_a heading_S">Cookie Policy</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="/disclosure" class="nav_a heading_S">Disclosure Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 nav_main_otr">
                            <div class="nav_main_inr nav5">
                                <h3 class="nav_head heading_h3">Follow Us</h3>
                                <ul class="nav_ul">
                                    <li class="nav_li">
                                        <Link to="https://99rdp.com/" target='_blank' class="nav_a heading_S">Facebook</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://99rdp.com/" target='_blank' class="nav_a heading_S">Twitter</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://99rdp.com/" target='_blank' class="nav_a heading_S">Instagram</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://99rdp.com/" target='_blank' class="nav_a heading_S">WhatsApp</Link>
                                    </li>
                                    <li class="nav_li">
                                        <Link to="https://99rdp.com/" target='_blank' class="nav_a heading_S">Telegram</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div class="copy_main">
                <div class="container">
                    <div class="copy_wrapper">
                        <Link to="/" class="logo_inr">
                            <img class="logo_img" src={Logo} alt="brand-logo" />
                        </Link>
                        <div class="copy_text_otr">
                            <p class="copy_text heading_S">Copyright © <Link to="https://amazeinternet.com/" class="brand heading_SB" target="_blank">AmazeInternet</Link> 2021. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer