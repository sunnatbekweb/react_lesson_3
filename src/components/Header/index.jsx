import './style.scss'

const index = () => {
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <a href="./index.html" className='nav__logo'>
                        LOGO
                    </a>

                    <ul className='nav__list'>
                        <li className='nav__list--item'><a href="#" className='nav__list--item-link'>Home</a></li>
                        <li className='nav__list--item'><a href="#" className='nav__list--item-link'>About</a></li>
                        <li className='nav__list--item'><a href="#" className='nav__list--item-link'>Service</a></li>
                        <li className='nav__list--item'><a href="#" className='nav__list--item-link'>Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default index