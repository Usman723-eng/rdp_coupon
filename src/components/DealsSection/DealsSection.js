import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import DealsCard from './DealsCard'
import DealsData from './DealsData'
import Pagination from './Pagination'
import ThemeSelect from '../ThemeSelect/ThemeSelect';

import './DealsSection.scss'

function DealsSection() {
    const [searchText, setSearchText] = useState("");

    const [PageSize, setPageSize] = useState(12);
    const selectOptions = [
        15,
        14,
        13,
        12,
        11,
        10,
        9,
        8,
        7
    ];

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return DealsData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, PageSize]);

    return (
        <>
            <section className='DealsSection_main'>
                <div className="container">
                    <div className="row row_custom">
                        <div className="col-lg-8 col_box_main_otr">
                            <div className="box_main_inr">
                                <h2 className="heading_h2 deals_head">We’ve Got Nice Deals for You ✌️</h2>
                                {currentTableData.filter((val) => {
                                    if (searchText === "") {
                                        return val;
                                    } else if (
                                        val.rdpName.toLowerCase().includes(searchText.toLowerCase())
                                        | val.cardTitle.toLowerCase().includes(searchText.toLowerCase())
                                        | val.verifyText.toLowerCase().includes(searchText.toLowerCase())
                                    ) {
                                        return val;
                                    } else {
                                        return "";
                                    }
                                }).map((data, index) => (
                                    <DealsCard
                                        key={index}
                                        offText={data.offText}
                                        rdpName={data.rdpName}
                                        cardTitle={data.cardTitle}
                                        verifyText={data.verifyText}
                                        usesText={data.usesText}
                                        BoxDesc={data.BoxDesc}
                                        btnLink={data.btnLink}
                                        modalDesc={data.modalDesc}
                                        modalCode={data.modalCode}
                                    />
                                ))}
                                <div className='pagination_select_otr'>
                                    <Pagination
                                        className="pagination-bar"
                                        currentPage={currentPage}
                                        totalCount={DealsData.length}
                                        pageSize={PageSize}
                                        onPageChange={page => setCurrentPage(page)}
                                    />
                                    <ThemeSelect
                                        Selected={PageSize}
                                        setSelected={setPageSize}
                                        options={selectOptions}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col_sidebar_otr">
                            <div className="col_sidebar_inr">
                                <div className="input_main">
                                    <input className='White_Input' type="text" placeholder='Search for Coupons & Stores' value={searchText}
                                        onChange={(event) => {
                                            setSearchText(event.target.value);
                                        }}
                                    />
                                    <div className="icon_otr">
                                        <svg className="icon" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 108 1a7 7 0 000 14zM12.95 12.95L17 17" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                    </div>
                                </div>
                                <div className="percent_box">
                                    <p className="percent_headd heading_LB">Popular Coupons</p>
                                    <ul className="percent_ul">
                                        <Link to="https://amazingrdp.com/" target='_blank' className="percent_li">
                                            <span className="percent_icon_otr">
                                                <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                            </span>
                                            <span className="heading_SB percent_head">
                                                Get 10% Off On All Plans AmazingRDP.
                                            </span>
                                        </Link>
                                        <Link to="https://99rdp.com/" target='_blank' className="percent_li">
                                            <span className="percent_icon_otr">
                                                <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                            </span>
                                            <span className="heading_SB percent_head">
                                                Now Get 12% Off On All Quarterly plans 99RDP.
                                            </span>
                                        </Link>
                                        <Link to="https://99rdp.com/" target='_blank' className="percent_li">
                                            <span className="percent_icon_otr">
                                                <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                            </span>
                                            <span className="heading_SB percent_head">
                                                Now Get 5% Off On All New purchases 99RDP.
                                            </span>
                                        </Link>
                                        <Link to="https://amazingrdp.com/" target='_blank' className="percent_li">
                                            <span className="percent_icon_otr">
                                                <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                            </span>
                                            <span className="heading_SB percent_head">
                                                Get 30% Off On Each Annual Plans AmazingRDP.
                                            </span>
                                        </Link>
                                        <Link to="https://amazingrdp.com/" target='_blank' className="percent_li">
                                            <span className="percent_icon_otr">
                                                <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                            </span>
                                            <span className="heading_SB percent_head">
                                                Get 10% Off On Residential Plans AmazingRDP.
                                            </span>
                                        </Link>
                                        <Link to="https://99rdp.com/" target='_blank' className="percent_li">
                                            <span className="percent_icon_otr">
                                                <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                            </span>
                                            <span className="heading_SB percent_head">
                                                Now Get 5% OfF Each Time On Every Renewal 99RDP.
                                            </span>
                                        </Link>
                                    </ul>
                                </div>
                                <div className="categories_box">
                                    <p className="categories_headd heading_LB">Popular Categories</p>
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
                                <div className="stores_box">
                                    <p className="stores_headd heading_LB">Popular Stores</p>
                                    <ul className="stores_ul">
                                        <li className="stores_li">
                                            <Link to="https://99rdp.com/" target='_blank' className="btn_stores btn_stores1">99RDP</Link>
                                        </li>
                                        <li className="stores_li">
                                            <Link to="https://amazingrdp.com/" target='_blank' className="btn_stores btn_stores2">AmazingRDP</Link>
                                        </li>
                                        <li className="stores_li">
                                            <Link to="https://eurdp.com/" target='_blank' className="btn_stores btn_stores3">EURRDP</Link>
                                        </li>
                                        <li className="stores_li">
                                            <Link to="https://homerdp.com/" target='_blank' className="btn_stores btn_stores4">HomeRDP</Link>
                                        </li>
                                        <li className="stores_li">
                                            <Link to="https://gpurdp.com/" target='_blank' className="btn_stores btn_stores4">GPURDP</Link>
                                        </li>
                                        <li className="stores_li">
                                            <Link to="https://rdpdatabase.com/" target='_blank' className="btn_stores btn_stores3">RDPDatabase</Link>
                                        </li>
                                        <li className="stores_li">
                                            <Link to="https://pcrdp.com/" target='_blank' className="btn_stores btn_stores2">PCRDP</Link>
                                        </li>
                                        <li className="stores_li">
                                            <Link to="https://99server.com/" target='_blank' className="btn_stores btn_stores1">99Server</Link>
                                        </li>
                                        <li className="stores_li">
                                            <Link to="https://gordp.com/" target='_blank' className="btn_stores btn_stores3">GoRDP</Link>
                                        </li>
                                        <li className="stores_li">
                                            <Link to="https://olivevps.com/" target='_blank' className="btn_stores btn_stores4">OliveVPS</Link>
                                        </li>
                                        <li className="stores_li">
                                            <Link to="https://serverscafe.com/" target='_blank' className="btn_stores btn_stores4">ServersCafe</Link>
                                        </li>
                                        <li className="stores_li">
                                            <Link to="https://www.buyrdplive.com/" target='_blank' className="btn_stores btn_stores4">buyRDPLive</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DealsSection