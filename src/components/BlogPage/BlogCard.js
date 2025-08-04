import React from 'react'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'

import './BlogPage.scss'

function BlogCard(props) {
    return (
        <div className='BlogCard_inr'>
            <img class="blog_img" src={props.CardImg} alt="img" />
            <div class="content">
                <p class="desc heading_SB">{props.CardTitle}  <span class="desc_inr heading_S">  •  {props.CardDate} </span></p>
                <Link class="card_heading heading_h3" to='/blog_details'>
                    {props.CardHeading}
                </Link>
                <p class="desc_1 heading_S">
                    {props.CardDesc}
                </p>
                <Link class="action" to='/blog_details'>
                    <ThemeBtn
                        ButtonClass="btn_outline btn_read"
                        ButtonText="Read More"
                    />
                </Link>
            </div>
        </div>
    )
}

export default BlogCard