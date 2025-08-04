import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import ModalComponent from '../ModalComponent/ModalComponent'

import './DealsSection.scss'

import CheckIcon from '../../img/CircleCheck.png'

function DealsCard(props) {
    const [modalopen, setmodalopen] = useState(false)
    const ModalClick = () => {
        setmodalopen(!modalopen)
    }
    return (
        <>
            <div className="DealsCard_otr">
                <div className="box_inr row">
                    <div className="col-lg-3 box_left">
                        <h2 className="heading_h2 off_head">{props.offText}</h2>
                        <p className="heading_h3 off_name">{props.rdpName}</p>
                        <span className="dots_box"></span>
                    </div>
                    <div className="col-lg-9 box_right">
                        <h3 className="heading_h3 box_title">{props.cardTitle}</h3>
                        <div className="verified_main">
                            <div className="verified_inr">
                                <img className="check_img" src={CheckIcon} alt="checkcircle" />
                                <p className="heading_SB check_text">{props.verifyText}</p>
                            </div>
                            <span className="dot"></span>
                            <p className="heading_SB user">{props.usesText}</p>
                        </div>
                        <p className="box_desc heading_SB">
                            {props.BoxDesc}
                        </p>
                        <Link className="action" to={props.btnLink} target="_blank" onClick={ModalClick}>
                            <ThemeBtn
                                ButtonClass="btn_fill btn_coupon"
                                ButtonText="Show Coupon Code"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <ModalComponent
                ModalAddClass={modalopen}
                ModalClose={ModalClick}
                modalContent={
                    <div className='modal_content_inr'>
                        <h3 className="heading_h3 modal_head">{props.cardTitle}</h3>
                        <p className="heading_S desc">{props.modalDesc} <Link className="rdp" to={props.btnLink} target="_blank">{props.rdpName}</Link></p>
                        <div className="action1">
                            <p className="heading_h3 copy_text">{props.modalCode}</p>
                        </div>
                    </div>
                }
            />
        </>
    )
}

export default DealsCard