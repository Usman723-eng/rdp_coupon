import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import HeroSlide from '../Hero/HeroSlide';
import ModalComponent from '../ModalComponent/ModalComponent';

import HeroImg from '../../img/hero-img.png'
import LogoImage1 from '../../img/logo5.png'
import LogoImage2 from '../../img/logo6.png'
import LogoImage3 from '../../img/logo8.png'

const offerData = [
    {
        percentText: "10%",
        contentHeading: "On All Plans.",
        rdpLogo: LogoImage2,
        verifyText: "Verified 1 Day Ago",
        url: "https://gordp.com",
        couponCode: "GORDP10"
    },
    {
        percentText: "12%",
        contentHeading: "On All Quarterly Plans.",
        rdpLogo: LogoImage1,
        verifyText: "Verified Today",
        url: "https://rdpdatabase.com",
        couponCode: "RDPDB12"
    },
    {
        percentText: "15%",
        contentHeading: "On Annual Subscriptions.",
        rdpLogo: LogoImage3,
        verifyText: "Verified 2 Days Ago",
        url: "https://pcrdp.com",
        couponCode: "PCRDP15"
    }
];

const ToprdpProviderSlider = () => {
    const [modalState, setModalState] = useState({ open: false, current: null });

    const handleModalToggle = (index) => {
        setModalState(prev => ({
            open: !prev.open,
            current: prev.open ? null : index
        }));
    };
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
                                {offerData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <HeroSlide
                                            percentText={item.percentText}
                                            contentHeading={item.contentHeading}
                                            rdpLogo={item.rdpLogo}
                                            verifyText={item.verifyText}
                                            btnLink={item.url}
                                            ModalClick={() => handleModalToggle(index)}
                                        />
                                    </SwiperSlide>
                                ))}
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
            {modalState.open && typeof modalState.current === 'number' && (
                <ModalComponent
                    ModalAddClass={modalState.open}
                    ModalClose={() => handleModalToggle(modalState.current)}
                    modalContent={
                        <div className='modal_content_inr'>
                            <h3 className="heading_h3 modal_head">
                                Get {offerData[modalState.current].percentText} Off {offerData[modalState.current].contentHeading}
                            </h3>
                            <p className="heading_S desc">
                                Copy & paste the following code at checkout on 
                                <a href={offerData[modalState.current].url} className="rdp" target="_blank" rel="noopener noreferrer"> {offerData[modalState.current].companyName}</a>
                            </p>
                            <div className="action1">
                                <p className="heading_h3 copy_text">{offerData[modalState.current].couponCode}</p>
                            </div>
                        </div>
                    }
                />
            )}
        </>
    );
}

export default ToprdpProviderSlider;
