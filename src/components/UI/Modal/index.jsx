import React from 'react'
import './style.scss'

const index = ({ setOpenModal, data: { image, category, title, description, price } }) => {
    return (
        <div className='blur'>
            <div className='modal'>
                <i onClick={() => setOpenModal(false)} class='bx bx-x'></i>
                <div className='modal_box'>
                    <img src={image} alt="Detail image" className='modal_image' />
                </div>

                <div className='modal_text'>
                    <p className='modal_text-category'>{category}</p>
                    <h1 className='modal_text-title'>{title}</h1>
                    <p className='modal_text-description'>{description}</p>

                    <div className='buy'>
                        <p className='buy_price'>{price}$</p>
                        <button className='buy_button'>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index