import './style.scss'
import Card from '../UI/Card'
import { data } from '../../assets/db.js'
import Modal from '../UI/Modal'
import { useState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'

const index = () => {
    const [openModal, setOpenModal] = useState({ isOpen: false, data })
    console.log(openModal);

    if (openModal.isOpen === true) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = "scroll"
    }


    return (
        <main>
            <div className="container">
                <h2 className='cards'>Cards</h2>
                <div className="wrapper">
                    {data?.map((item, index) => (
                        <Card key={index}
                            image={item.image}
                            category={item.category}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        />
                    ))}
                </div>
                {openModal.isOpen === true && <Modal data={openModal.data} setOpenModal={setOpenModal} />}

                <div className="buttons">
                    <h2 className='cards'>Buttons</h2>
                    <Button />
                </div>

                <div className='inputs'>
                    <h2 className='cards'>Inputs</h2>
                    <Input />
                </div>
            </div>
        </main>
    )
}

export default index