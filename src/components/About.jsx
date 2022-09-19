import React,{Component}from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/About.sass';
import grainCoffe from '../Imagem/Grãos de Café.jpg'
import Logo from '../Imagem/Logo.svg';



const About = () => {
    const navigate = useNavigate()
  return (
    <>      {/*Navbar*/}
      <ul>
        <li>
          <Link onClick={() => navigate(-1)} className="link">Home</Link>
        </li>
      </ul>
        <img src={Logo} alt="Logo" srcset="" className='logo'/><p className='nome-logo'>myCoffe</p>

          {/*Home Page da Página About*/}

    <div className='About-Page'>
      <div className='line-1' />
      <h1 id='H1'>Your Coffee<br/> 
            Is our Priority.</h1>
      <p className='p1'>Nascemos da vontade de compartilhar nossa paixão pela
        cultura milenar de cafés, com o compromisso em
        apresentar fragrância e sabores com a melhor qualidade</p>
        <p className='pbold'>unidos à arquitetura conceitual, futurista e minimalista, proporcionamos uma experiência 
          de imersão gastronômica diferenciada.</p>
          <img src={grainCoffe} alt=""/>
    </div>
    </>
  )
}

export default About;