import './style.scss';

const index = ({ image, category, title, description, price, openModal, setOpenModal }) => {
    return (
        <div className='card'>
            <div className='card_header'>
                <img src={image} alt="Card image" className='card_iamge' />
            </div>

            <div className='card_body'>
                <p className='card_body-category'>{category}</p>
                <h5 onClick={() => setOpenModal({isOpen: true, data: {image, category, title, description, price}})} title={title} className='card_body-title'>{title.length > 20 ? title.slice(0, 20) + "..." : title}</h5>
                <p className='card_body-text'>{description.length > 50 ? description.slice(0, 50) + "..." : title}</p>
            </div>

            <div className='card_footer'>
                <p className='card_price'>{price} $</p>
                <button className='card_button'>Add to cart</button>
            </div>
        </div>
    )
}

export default index