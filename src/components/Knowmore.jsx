import React from 'react';
import CafédeFundo from '../Imagem/Café de Fundo 1.png';
import '../styles/Knowmore.sass'
import {useNavigate} from 'react-router-dom';


const Knowmore = () => {
  const navigate = useNavigate()
      return (
                  /*Pagina Saiba-Mais com Link para Página About*/
        <>               
            <section className='saiba-mais'>
                <img src={CafédeFundo} alt=""/>
                <h1>Surpreenda-se</h1>
                <button onClick={() => navigate("/About")} className="btn">
                    Conheça
                  </button>
            </section>
        </>    
      )
} 

 export default Knowmore;
