import './Home.css';
import lupa from '../assets/icons/lupa.svg';
import xis from '../assets/icons/xis.svg';
import caneta from '../assets/icons/caneta.svg';
import check from '../assets/icons/check.svg';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Form = () => {
    const today = new Date();
    const day = today.getDate();
    const dayOfWeek = today.toLocaleDateString('pt-BR', { weekday: 'long' });
    const month = today.toLocaleDateString('pt-BR', { month: 'long' });

    const [clicked, setClicked] = useState()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleClicked = () => {
        setClicked(!clicked)
    }


    return (
        <main className="main-content">
            <div className='box'>
                <p style={{ color: 'white', fontSize: '28px' }}>
                    {dayOfWeek} , <span style={{ color: '#8758FF' }}>{day}</span> de {month}
                </p>
                <div className='pesquisa'>
                    <img src={lupa} alt="lupa" />
                    <a style={{ color: 'white' }}>Procurar tarefa</a>
                </div>
                <view className='listatarefas'>
                    <div className='Tarefa' style={{ backgroundColor: clicked ? '#6C45CE' : 'white' }}>
                        <input
                            className={`caixa-de-selecao ${clicked ? 'checked' : ''}`}
                            type='checkbox'
                            checked={clicked}
                            onChange={handleClicked}
                        >
                        </input>
                        {clicked ? <img src={check} alt="check" style={{ position: 'absolute', marginLeft: '34px' }} /> : null}
                        <a style={{ color: 'black', marginRight: '60%', fontSize: '18px', fontWeight: '400' }}>
                            Tarefa
                        </a>
                        <view className='campo-de-botao'>
                            <button className='botao-delete' style={{ borderColor: clicked ? 'white' : '#1E123B' }}>
                                <img src={xis} alt="lupa" />
                            </button>
                            <button className='botao-editar' style={{ borderColor: clicked ? 'white' : '#1E123B' }}>
                                <img src={caneta} alt="lupa" />
                            </button>
                        </view>
                    </div>

                </view>

            </div>
            <button className='botao-nova-tarefa' onClick={openModal}>
                <a style={{ color: 'white', fontSize: '17px', fontWeight: '700' }}>Nova tarefa</a>
            </button>

            <Modal isOpen={isModalOpen} >
                <h2 style={{color: '#FCFCFC', fontSize: '28px'}}>Descreva sua tarefa</h2>

                <input className='ContentModal'>
                   
                </input>
                
                <button className='buttonModal' onClick={closeModal}>
                    <a style={{color: '#FCFCFC', fontSize: '20px', fontWeight: '600'}}>Confirmar tarefa</a>
                    </button>
                
            </Modal>
        </main>
    );
};

export default Form;
