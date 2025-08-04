import React, { useEffect, useState } from 'react';
import ToprdpProviderSlider from './ToprdpProviderSlider';
import DealsCard from '../DealsSection/DealsCard';
import { Link } from 'react-router-dom';
import SchemaMarkup from './SchemaMarkup';

const TopRDPProviderData = [
    {
        offText: "10% Off",
        rdpName: "GoRDP",
        cardTitle: "Get 10% Off on All GoRDP Plans",
        verifyText: "Verified 1 Day Ago",
        usesText: "65 Uses Today",
        BoxDesc: "Save more on high-performance remote access with GoRDP's 10% off offer.",
        btnLink: "https://gordp.com",
        modalDesc: "Use this code at checkout on GoRDP:",
        modalCode: "GORDP10",
    },
    {
        offText: "15% Off",
        rdpName: "GoRDP",
        cardTitle: "15% Off on Quarterly GoRDP Plans",
        verifyText: "Verified Today",
        usesText: "72 Uses Today",
        BoxDesc: "Get reliable access and extra savings on quarterly plans from GoRDP.",
        btnLink: "https://gordp.com",
        modalDesc: "Apply this GoRDP coupon at checkout:",
        modalCode: "GORDPQ15",
    },
    {
        offText: "12% Off",
        rdpName: "RDPDatabase",
        cardTitle: "12% Discount on RDPDatabase Monthly Plans",
        verifyText: "Verified Today",
        usesText: "55 Uses Today",
        BoxDesc: "Affordable RDP solutions now even cheaper with 12% off monthly plans.",
        btnLink: "https://rdpdatabase.com",
        modalDesc: "Use this coupon while checking out on RDPDatabase:",
        modalCode: "RDPDB12",
    },
    {
        offText: "18% Off",
        rdpName: "RDPDatabase",
        cardTitle: "Save 18% on Semi-Annual RDPDatabase Plans",
        verifyText: "Verified 1 Hour Ago",
        usesText: "39 Uses Today",
        BoxDesc: "Optimize your workflow and your budget with RDPDatabase’s semi-annual deal.",
        btnLink: "https://rdpdatabase.com",
        modalDesc: "Enter this code at RDPDatabase checkout:",
        modalCode: "RDPDB18",
    },
    {
        offText: "15% Off",
        rdpName: "PCRDP",
        cardTitle: "15% Off All PCRDP Subscriptions",
        verifyText: "Verified 2 Days Ago",
        usesText: "43 Uses Today",
        BoxDesc: "Grab 15% off PCRDP’s blazing fast RDP plans now.",
        btnLink: "https://pcrdp.com",
        modalDesc: "Use this code at checkout on PCRDP:",
        modalCode: "PCRDP15",
    },
    {
        offText: "20% Off",
        rdpName: "PCRDP",
        cardTitle: "Exclusive 20% Off PCRDP Annual Plans",
        verifyText: "Verified Today",
        usesText: "51 Uses Today",
        BoxDesc: "Long-term value and lightning-fast performance — now 20% off with PCRDP.",
        btnLink: "https://pcrdp.com",
        modalDesc: "Apply this coupon at PCRDP checkout:",
        modalCode: "PCRDP20",
    }
];

const ToprdpProviderPage = () => {
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
                <>
                    <SchemaMarkup />
                    <ToprdpProviderSlider />
                    <section className='DealsSection_main'>
                        <div className="container">
                            <div className="row row_custom">
                                <div className="col-lg-8 col_box_main_otr">
                                    <div className="box_main_inr">
                                        <h2 className="heading_h2 deals_head">Top RDP Providers for 2025 — Compare & Save Today ✌️</h2>
                                        {TopRDPProviderData.map((data, index) => (
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
                                    </div>
                                </div>
                                <div className="col-lg-4 col_sidebar_otr">
                                    <div className="col_sidebar_inr">
                                        <div className="percent_box">
                                            <p className="percent_headd heading_LB">Popular Coupons</p>
                                            <ul className="percent_ul">
                                                <Link to="https://gordp.com/" target='_blank' className="percent_li">
                                                    <span className="percent_icon_otr">
                                                        <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                                    </span>
                                                    <span className="heading_SB percent_head">
                                                        Get 10% Off on All GoRDP Plans
                                                    </span>
                                                </Link>
                                                <Link to="https://gordp.com/" target='_blank' className="percent_li">
                                                    <span className="percent_icon_otr">
                                                        <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                                    </span>
                                                    <span className="heading_SB percent_head">
                                                        15% Off on Quarterly GoRDP Plans
                                                    </span>
                                                </Link>
                                                <Link to="https://rdpdatabase.com/" target='_blank' className="percent_li">
                                                    <span className="percent_icon_otr">
                                                        <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                                    </span>
                                                    <span className="heading_SB percent_head">
                                                        12% Discount on RDPDatabase Monthly Plans
                                                    </span>
                                                </Link>
                                                <Link to="https://rdpdatabase.com/" target='_blank' className="percent_li">
                                                    <span className="percent_icon_otr">
                                                        <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                                    </span>
                                                    <span className="heading_SB percent_head">
                                                        Save 18% on Semi-Annual RDPDatabase Plans
                                                    </span>
                                                </Link>
                                                <Link to="https://pcrdp.com/" target='_blank' className="percent_li">
                                                    <span className="percent_icon_otr">
                                                        <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                                    </span>
                                                    <span className="heading_SB percent_head">
                                                        15% Off All PCRDP Subscriptions
                                                    </span>
                                                </Link>
                                                <Link to="https://pcrdp.com/" target='_blank' className="percent_li">
                                                    <span className="percent_icon_otr">
                                                        <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                                    </span>
                                                    <span className="heading_SB percent_head">
                                                        Exclusive 20% Off PCRDP Annual Plans
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
                                                    <Link to="https://gordp.com/" target="_blank" className="heading_SB categories_head">
                                                        GoRDP
                                                    </Link>
                                                </li>
                                                <li className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <Link to="https://rdpdatabase.com/" target="_blank" className="heading_SB categories_head">
                                                        RDPDatabase
                                                    </Link>
                                                </li>
                                                <li className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <Link to="https://pcrdp.com/" target="_blank" className="heading_SB categories_head">
                                                        PCRDP
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="stores_box">
                                            <p className="stores_headd heading_LB">Popular Stores</p>
                                            <ul className="stores_ul">
                                                <li className="stores_li">
                                                    <Link to="https://rdpdatabase.com/" target='_blank' className="btn_stores btn_stores3">RDPDatabase</Link>
                                                </li>
                                                <li className="stores_li">
                                                    <Link to="https://pcrdp.com/" target='_blank' className="btn_stores btn_stores2">PCRDP</Link>
                                                </li>
                                                <li className="stores_li">
                                                    <Link to="https://gordp.com/" target='_blank' className="btn_stores btn_stores3">GoRDP</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default ToprdpProviderPage;
