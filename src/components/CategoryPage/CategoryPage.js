import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InnerHeader from '../InnerHeader/InnerHeader'
import AllCategoryCard from './AllCategoryCard';
import NineRDPCard from './99RDPCard';
import AmazingRDPCard from './AmazingRDPCard';
import EURRDPCard from './EURRDPCard';
import HomeRDPCard from './HomeRDPCard';
import GPURDPCard from './GPURDPCard';
import RDPDatabaseCard from './RDPDatabaseCard';
import PCRDPCard from './PCRDPCard';
import GoRDPCard from './GoRDPCard';
import NintyServerCard from './99ServerCard';
import OliveVPSCard from './OliveVPSCard';
import ThemeSelect from '../ThemeSelect/ThemeSelect';

import './CategoryPage.scss'
import ServerCafe from './ServerCafe';
import BuyRDPLiveCard from './BuyRDPLiveCard';

function CategoryPage(props) {
    const Categorie = () => {
        if (selected === "All Stores") {
            return (
                <AllCategoryCard />
            )
        } else if (selected === "99RDP") {
            return (
                <NineRDPCard />
            )
        } if (selected === "AmazingRDP") {
            return (
                <AmazingRDPCard />
            )
        } if (selected === "EURRDP") {
            return (
                <EURRDPCard />
            )
        } if (selected === "HomeRDP") {
            return (
                <HomeRDPCard />
            )
        } if (selected === "GPURDP") {
            return (
                <GPURDPCard />
            )
        } if (selected === "RDPDatabase") {
            return (
                <RDPDatabaseCard />
            )
        } if (selected === "PCRDP") {
            return (
                <PCRDPCard />
            )
        } if (selected === "GoRDP") {
            return (
                <GoRDPCard />
            )
        } if (selected === "99Server") {
            return (
                <NintyServerCard />
            )
        } if (selected === "OliveVPS") {
            return (
                <OliveVPSCard />
            )
        } if (selected === "ServerCafe") {
            return (
                <ServerCafe />
            )
        } if (selected === "BuyRDPLive") {
            return (
                <BuyRDPLiveCard />
            )
        } else {
            return (
                <AllCategoryCard />
            )
        };
    }
    const [selected, setselected] = useState('All Stores')
    const selectOptions = [
        'All Stores',
        '99RDP',
        'AmazingRDP',
        'EURRDP',
        'HomeRDP',
        'GPURDP',
        'RDPDatabase',
        'PCRDP',
        'GoRDP',
        '99Server',
        'OliveVPS',
        'ServerCafe',
        'BuyRDPLive'
    ]

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {loading ? (
                <div class="load-main">
                    <div class="loading">
                        <span class="loader"></span>
                        <span class="loader"></span>
                        <span class="loader"></span>
                        <span class="loader"></span>
                    </div>
                </div>
            ) : (
                <div className='CategoryPage_main'>
                    <InnerHeader
                        Heading={props.PageName}
                    />
                    <div className='CategorySection_main'>
                        <div className="container">
                            <div className="row row_category">
                                <div className="col-lg-4 col_sidebar_otr">
                                    <div className="col_sidebar_inr">
                                        <div className="categories_box">
                                            <p className="categories_headd heading_LB">Quick Links</p>
                                            <ul className="categories_ul">
                                                <li className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <Link to="https://99rdp.com/cheap-rdp/" target="_blank" className="heading_SB categories_head">
                                                        Cheap RDP
                                                    </Link>
                                                </li>
                                                <li className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <Link to="https://amazingrdp.com/streaming-rdp/" target="_blank" className="heading_SB categories_head">
                                                        Streaming RDP
                                                    </Link>
                                                </li>
                                                <li className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <Link to="https://99rdp.com/gpu-rdp/" target="_blank" className="heading_SB categories_head">
                                                        GPU RDP
                                                    </Link>
                                                </li>
                                                <li className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <Link to="https://amazingrdp.com/extreme-encoding-rdp/" target="_blank" className="heading_SB categories_head">
                                                        Encoding RDP
                                                    </Link>
                                                </li>
                                                <li className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <Link to="https://99rdp.com/rendering-rdp/" target="_blank" className="heading_SB categories_head">
                                                        Rendering RDP
                                                    </Link>
                                                </li>
                                                <li className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <Link to="https://amazingrdp.com/10gbps-usa-rdp/" target="_blank" className="heading_SB categories_head">
                                                        10 GBPS RDP
                                                    </Link>
                                                </li>
                                                <li className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <Link to="https://99rdp.com/private-rdp/" target="_blank" className="heading_SB categories_head">
                                                        Private RDP
                                                    </Link>
                                                </li>
                                                <li className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <Link to="https://99rdp.com/residential-ip-rdp/" target="_blank" className="heading_SB categories_head">
                                                        Residential RDP
                                                    </Link>
                                                </li>
                                                <li className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <Link to="https://amazingrdp.com/cheap-dedicated-server/" target="_blank" className="heading_SB categories_head">
                                                        Dedicated RDP
                                                    </Link>
                                                </li>
                                                <li className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <Link to="https://www.buyrdplive.com/" target="_blank" className="heading_SB categories_head">
                                                        buyRDPLive
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col_box_main_otr">
                                    <div className="box_main_inr">
                                        <div className='heading_select_otr'>
                                            <h3 className='cards_heading heading_h3'>
                                                Store: {selected}
                                            </h3>
                                            <div className='filter_otr'>
                                                <p className='heading_SB filter_text'>
                                                    Filter By :
                                                </p>
                                                <ThemeSelect
                                                    Selected={selected}
                                                    setSelected={setselected}
                                                    options={selectOptions}
                                                />
                                            </div>
                                        </div>
                                        <Categorie />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CategoryPage