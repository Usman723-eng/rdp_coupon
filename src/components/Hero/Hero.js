import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import './Hero.scss'
import "swiper/css";
import "swiper/css/pagination";

import HeroImg from '../../img/hero-img.png'
import ModalComponent from '../ModalComponent/ModalComponent'
import HeroSlide from './HeroSlide';

import Logo1 from '../../img/logo1.png'
import Logo2 from '../../img/logo2.png'
import Logo3 from '../../img/logo3.png'
import Logo4 from '../../img/logo4.png'
import Logo5 from '../../img/logo5.png'
import Logo6 from '../../img/logo6.png'
import Logo7 from '../../img/logo7.png'
import Logo8 from '../../img/logo8.png'
import Logo9 from '../../img/logo9.png'
import Logo10 from '../../img/logo10.png'
import Logo11 from '../../img/logo11.png'

function Hero() {
    const [modalopen1, setmodalopen1] = useState(false)
    const ModalClick1 = () => {
        setmodalopen1(!modalopen1)
    }
    const [modalopen2, setmodalopen2] = useState(false)
    const ModalClick2 = () => {
        setmodalopen2(!modalopen2)
    }
    const [modalopen3, setmodalopen3] = useState(false)
    const ModalClick3 = () => {
        setmodalopen3(!modalopen3)
    }
    const [modalopen4, setmodalopen4] = useState(false)
    const ModalClick4 = () => {
        setmodalopen4(!modalopen4)
    }
    const [modalopen5, setmodalopen5] = useState(false)
    const ModalClick5 = () => {
        setmodalopen5(!modalopen5)
    }
    const [modalopen6, setmodalopen6] = useState(false)
    const ModalClick6 = () => {
        setmodalopen6(!modalopen6)
    }
    const [modalopen7, setmodalopen7] = useState(false)
    const ModalClick7 = () => {
        setmodalopen7(!modalopen7)
    }
    const [modalopen8, setmodalopen8] = useState(false)
    const ModalClick8 = () => {
        setmodalopen8(!modalopen8)
    }
    const [modalopen9, setmodalopen9] = useState(false)
    const ModalClick9 = () => {
        setmodalopen9(!modalopen9)
    }
    const [modalopen10, setmodalopen10] = useState(false)
    const ModalClick10 = () => {
        setmodalopen10(!modalopen10)
    }
    const [modalopen11, setmodalopen11] = useState(false)
    const ModalClick11 = () => {
        setmodalopen11(!modalopen11)
    }
    return (
        <>
            <section className="hero_otr">
                <div className="container">
                    <div className="row row_custom">
                        <div className="col-lg-6 col_content_otr">
                            <Swiper
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <HeroSlide
                                        percentText="12%"
                                        contentHeading="On All Quarterly plans."
                                        rdpLogo={Logo10}
                                        verifyText="Verified Yesterday"
                                        btnLink="//99rdp.com/"
                                        ModalClick={ModalClick1}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <HeroSlide
                                        percentText="10%"
                                        contentHeading="On All Plans."
                                        rdpLogo={Logo1}
                                        verifyText="Verified 1 Day Ago"
                                        btnLink="https://amazingrdp.com/"
                                        ModalClick={ModalClick2}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <HeroSlide
                                        percentText="10%"
                                        contentHeading="on All Monthly plans"
                                        rdpLogo={Logo2}
                                        verifyText="Verified 4 Days Ago"
                                        btnLink="https://homerdp.com/"
                                        ModalClick={ModalClick3}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <HeroSlide
                                        percentText="5%"
                                        contentHeading="Each Time On Every Renewal."
                                        rdpLogo={Logo3}
                                        verifyText="Verified 1 Days Ago"
                                        btnLink="https://eurdp.com/"
                                        ModalClick={ModalClick4}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <HeroSlide
                                        percentText="$5"
                                        contentHeading="Affordable GPU Shared RDP"
                                        rdpLogo={Logo4}
                                        verifyText="Verified 8 Days Ago"
                                        btnLink="https://gpurdp.com/"
                                        ModalClick={ModalClick5}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <HeroSlide
                                        percentText="10%"
                                        contentHeading="on All Monthly Plans."
                                        rdpLogo={Logo5}
                                        verifyText="Verified 31 Days Ago"
                                        btnLink="https://rdpdatabase.com/"
                                        ModalClick={ModalClick6}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <HeroSlide
                                        percentText="5%"
                                        contentHeading="Off On All New purchases."
                                        rdpLogo={Logo8}
                                        verifyText="Verified 4 Days Ago"
                                        btnLink="https://pcrdp.com/"
                                        ModalClick={ModalClick7}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <HeroSlide
                                        percentText="12%"
                                        contentHeading="On All Quarterly plans."
                                        rdpLogo={Logo6}
                                        verifyText="Verified 1 Days Ago"
                                        btnLink="https://gordp.com/"
                                        ModalClick={ModalClick8}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <HeroSlide
                                        percentText="$5"
                                        contentHeading="USA Dedicated Server"
                                        rdpLogo={Logo7}
                                        verifyText="Verified 8 Days Ago"
                                        btnLink="https://99server.com/"
                                        ModalClick={ModalClick9}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <HeroSlide
                                        percentText="15%"
                                        contentHeading="on All Monthly Plans."
                                        rdpLogo={Logo9}
                                        verifyText="Verified 7 Days Ago"
                                        btnLink="https://olivevps.com/"
                                        ModalClick={ModalClick10}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <HeroSlide
                                        percentText="$5"
                                        contentHeading="USA Dedicated Server"
                                        rdpLogo={Logo11}
                                        verifyText="Verified 8 Days Ago"
                                        btnLink="https://serverscafe.com/"
                                        ModalClick={ModalClick11}
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-lg-6 col_img_otr">
                            <div className="col_img_inr">
                                <img className="hero_img" src={HeroImg} alt="hero-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalComponent
                ModalAddClass={modalopen1}
                ModalClose={ModalClick1}
                modalContent={
                    <div className='modal_content_inr'>
                        <h3 className="heading_h3 modal_head">Get 12% Off On All Quarterly plans.</h3>
                        <p className="heading_S desc">Copy & paste the following code at checkout on <Link className="rdp">99RDP</Link></p>
                        <div className="action1">
                            <p className="heading_h3 copy_text">indus12</p>
                        </div>
                    </div>
                }
            />
            <ModalComponent
                ModalAddClass={modalopen2}
                ModalClose={ModalClick2}
                modalContent={
                    <div className='modal_content_inr'>
                        <h3 className="heading_h3 modal_head">Get 10% Off On All Plans.</h3>
                        <p className="heading_S desc">Copy & paste the following code at checkout on <Link className="rdp">AmazingRDP</Link></p>
                        <div className="action1">
                            <p className="heading_h3 copy_text">indus12</p>
                        </div>
                    </div>
                }
            />
            <ModalComponent
                ModalAddClass={modalopen3}
                ModalClose={ModalClick3}
                modalContent={
                    <div className='modal_content_inr'>
                        <h3 className="heading_h3 modal_head">Get 12% Off On All Quarterly plans.</h3>
                        <p className="heading_S desc">Copy & paste the following code at checkout on <Link className="rdp">HomeRDP</Link></p>
                        <div className="action1">
                            <p className="heading_h3 copy_text">Lkado387</p>
                        </div>
                    </div>
                }
            />
            <ModalComponent
                ModalAddClass={modalopen4}
                ModalClose={ModalClick4}
                modalContent={
                    <div className='modal_content_inr'>
                        <h3 className="heading_h3 modal_head">Now Get 5% Each Time On Every Renewal.</h3>
                        <p className="heading_S desc">Copy & paste the following code at checkout on <Link className="rdp">EurRDP</Link></p>
                        <div className="action1">
                            <p className="heading_h3 copy_text">Eurbhsfgh</p>
                        </div>
                    </div>
                }
            />
            <ModalComponent
                ModalAddClass={modalopen5}
                ModalClose={ModalClick5}
                modalContent={
                    <div className='modal_content_inr'>
                        <h3 className="heading_h3 modal_head">Affordable GPU Shared RDP $5 off</h3>
                        <p className="heading_S desc">Copy & paste the following code at checkout on <Link className="rdp">GPURDP</Link></p>
                        <div className="action1">
                            <p className="heading_h3 copy_text">Phdtw754</p>
                        </div>
                    </div>
                }
            />
            <ModalComponent
                ModalAddClass={modalopen6}
                ModalClose={ModalClick6}
                modalContent={
                    <div className='modal_content_inr'>
                        <h3 className="heading_h3 modal_head">Now Get 10% Off on All Monthly Plans.</h3>
                        <p className="heading_S desc">Copy & paste the following code at checkout on <Link className="rdp">RDP DataBase</Link></p>
                        <div className="action1">
                            <p className="heading_h3 copy_text">RPdhhe</p>
                        </div>
                    </div>
                }
            />
            <ModalComponent
                ModalAddClass={modalopen7}
                ModalClose={ModalClick7}
                modalContent={
                    <div className='modal_content_inr'>
                        <h3 className="heading_h3 modal_head">Now Get 5% Off On All New purchases.</h3>
                        <p className="heading_S desc">Copy & paste the following code at checkout on <Link className="rdp">PCRDP</Link></p>
                        <div className="action1">
                            <p className="heading_h3 copy_text">PFaeav10</p>
                        </div>
                    </div>
                }
            />
            <ModalComponent
                ModalAddClass={modalopen8}
                ModalClose={ModalClick8}
                modalContent={
                    <div className='modal_content_inr'>
                        <h3 className="heading_h3 modal_head">Get 12% Off On All Quarterly plans.</h3>
                        <p className="heading_S desc">Copy & paste the following code at checkout on <Link className="rdp">GORDP</Link></p>
                        <div className="action1">
                            <p className="heading_h3 copy_text">LfeTYF</p>
                        </div>
                    </div>
                }
            />
            <ModalComponent
                ModalAddClass={modalopen9}
                ModalClose={ModalClick9}
                modalContent={
                    <div className='modal_content_inr'>
                        <h3 className="heading_h3 modal_head">USA Dedicated Server $5 off</h3>
                        <p className="heading_S desc">Copy & paste the following code at checkout on <Link className="rdp">99SERVER</Link></p>
                        <div className="action1">
                            <p className="heading_h3 copy_text">Tdafr976</p>
                        </div>
                    </div>
                }
            />
            <ModalComponent
                ModalAddClass={modalopen10}
                ModalClose={ModalClick10}
                modalContent={
                    <div className='modal_content_inr'>
                        <h3 className="heading_h3 modal_head">Now Get 15% Off on All Monthly Plans.</h3>
                        <p className="heading_S desc">Copy & paste the following code at checkout on <Link className="rdp">Olive VPS</Link></p>
                        <div className="action1">
                            <p className="heading_h3 copy_text">Olahag</p>
                        </div>
                    </div>
                }
            />
            <ModalComponent
                ModalAddClass={modalopen11}
                ModalClose={ModalClick11}
                modalContent={
                    <div className='modal_content_inr'>
                        <h3 className="heading_h3 modal_head">USA Dedicated Server $5 off</h3>
                        <p className="heading_S desc">Copy & paste the following code at checkout on <Link className="rdp">ServerCafe</Link></p>
                        <div className="action1">
                            <p className="heading_h3 copy_text">Tdafr976</p>
                        </div>
                    </div>
                }
            />
        </>
    )
}

export default Hero