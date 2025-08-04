import React from 'react'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'

import CircleCheck from '../../img/CircleCheck.png'

function HeroSlide(props) {
    return (
        <>
            <div className="col_content_inr">
                <h1 className="heading_h1 heading">
                    <span className="off"> Get {props.percentText} Off 🔥 <br /> </span>
                    {props.contentHeading}
                </h1>
                <div className="imgs_main">
                    <div className="godaddy_img">
                        <img className="godaddy_img_inr" src={props.rdpLogo} alt="godaddy-logo" />
                    </div>
                    <div className="verified_otr">
                        <img className="circle" src={CircleCheck} alt="CircleCheck" />
                        <p className="heading_M head">{props.verifyText}</p>
                    </div>
                </div>
                <Link className="action" to={props.btnLink} target="_blank" onClick={props.ModalClick}>
                    <ThemeBtn
                        ButtonClass="btn_fill"
                        ButtonText="Show Coupon Code"
                    />
                </Link>
            </div>
        </>
    )
}

export default HeroSlide