import React, { useState } from 'react'
import { CaretDown } from 'phosphor-react';
import './ThemeSelect.scss';

function ThemeSelect({ Selected, setSelected, options }) {
    const [IsActive, setIsActive] = useState(false);
    const DropDownClick = () => {
        setIsActive(!IsActive);
    }
    return (
        <div className='select_main'>
            <div className="dd_header" onClick={DropDownClick}>
                <p className="dd_header_title">
                    {Selected}
                </p>
                <CaretDown size={20} />
            </div>
            <div className={IsActive ? 'dd_list_otr dd_list_active' : 'dd_list_otr'}>
                <ul className='drop_ul'>
                    {options.map((option) => (
                        <li onClick={(e) => {
                            setSelected(option)
                            setIsActive(false)
                        }} className="drop_li">
                            <p className='item_text heading_SB'>{option}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ThemeSelect
