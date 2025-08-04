import React from 'react'
import { Link } from 'react-router-dom'

import './BlogPage.scss'

function CommentCard(props) {
    return (
        <div className='CommentCard_otr'>
            <div class="profile_otr">
                <div class="profile_inr">
                    <img class="profile_img" src={props.CardImg} alt="img" />
                    <Link class="name heading_SB">{props.UserName} <span class="name-inr">.  {props.CardDate}</span></Link>
                </div>
                <Link class="btn_stores heading_SB">Reply</Link>
            </div>
            <p class="desc heading_S">{props.CardDesc}</p>
        </div>
    )
}

export default CommentCard