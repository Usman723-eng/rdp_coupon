import React, { useState, useEffect } from 'react'
import DealsSection from '../DealsSection/DealsSection'
import { Link } from 'react-router-dom';
import Hero from '../Hero/Hero'
import { X } from 'phosphor-react';

import './LandingPage.scss'

function LandingPage() {
    const [modalload, setmodalload] = useState(true)
    const modalClose = () => {
        setmodalload(false);
    }

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
                <div className='LandingPage_main'>
                    <Hero />
                    <DealsSection />
                    <div className='load_modal_main'>
                        {modalload && (
                            <div className='modal_main'>
                                <div className='modal_background'></div>
                                <div className='modal_wrapper'>
                                    <div className='modal_content'>
                                        <div className='close_icon_otr' onClick={modalClose}>
                                            <X size={20} />
                                        </div>
                                        <div className='content_inr'>   
                                            <h2 className='modal_heading heading_h2'>
                                                Massive Black Friday Deal – 50% Off on VPS Servers!
                                            </h2>
                                            <div className='action_otr'>
                                                <Link to='https://99rdp.com/black-friday-sale/' target='_blank' className='btn_fill'>
                                                    Get Coupons
                                                </Link>
                                            </div>        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default LandingPage