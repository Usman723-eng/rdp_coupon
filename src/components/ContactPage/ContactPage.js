import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InnerHeader from '../InnerHeader/InnerHeader'
import ContactSection from './ContactSection'

function ContactPage() {
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
                <div class="load-main" >
                    <div class="loading">
                        <span class="loader"></span>
                        <span class="loader"></span>
                        <span class="loader"></span>
                        <span class="loader"></span>
                    </div>
                </div>
            ) : (
                <div className='ContactPage_main'>
                    <InnerHeader
                        Heading="Contact"
                    />
                    <ContactSection />
                    <div class="social_main">
                        <div class="container">
                            <div class="wrapper">
                                <p class="desc heading_LB">Follow Us on Social Media</p>
                                <div class="btn_main">
                                    <ul class="btn_otr">
                                        <li class="btn_inr btn1">
                                            <Link class="heading_SB social_linkk">Facebook</Link>
                                        </li>
                                        <li class="btn_inr btn2">
                                            <Link class="heading_SB social_linkk">Twitter</Link>
                                        </li>
                                        <li class="btn_inr btn3">
                                            <Link class="heading_SB social_linkk">Instagram</Link>
                                        </li>
                                        <li class="btn_inr btn4">
                                            <Link class="heading_SB social_linkk">WhatsApp</Link>
                                        </li>
                                        <li class="btn_inr btn5">
                                            <Link class="heading_SB social_linkk">Telegram</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ContactPage