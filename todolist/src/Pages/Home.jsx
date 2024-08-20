import './Home.css';
import lupa from '../assets/icons/lupa.svg';
import xis from '../assets/icons/xis.svg';
import caneta from '../assets/icons/caneta.svg';

const Form = () => {
    const today = new Date();
    const day = today.getDate();
    const dayOfWeek = today.toLocaleDateString('pt-BR', { weekday: 'long' });
    const month = today.toLocaleDateString('pt-BR', { month: 'long' });


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
                    <div className='Tarefa'>
                        <input className='caixa-de-selecao' type='checkbox'>
                        </input>
                        <a style={{ color: 'black', marginRight: '60%', fontSize: '18px', fontWeight: '400' }}>
                            Tarefa
                        </a>
                        <view className='campo-de-botao'>
                            <button className='botao-delete'>
                                <img src={xis} alt="lupa" />
                            </button>
                            <button className='botao-editar'>
                                <img src={caneta} alt="lupa" />
                            </button>
                        </view>
                    </div>

                </view>
            </div>
            <button className='botao-nova-tarefa'>
                <a style={{ color: 'white', fontSize: '17px', fontWeight: '700' }}>Nova tarefa</a>
            </button>
        </main>
    );
};

export default Form;
