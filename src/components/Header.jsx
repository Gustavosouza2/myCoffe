import React, {Component,} from 'react'
import Logo from '../Imagem/Logo.svg';
import '../styles/Header.sass';
import  { Link , animateScroll  as  scroll }  from  'react-scroll'

export default class Header extends Component {
    render() {
    return (                     /*Navbar*/
      <>
          <ul>
            <li><Link activeClass="active" to="/" spy={true} smooth={true} duration={500} offset={-50}>Home</Link></li>
            <li><Link  to="Cardapio" spy={true} smooth={true} duration={500} offset={-50}>Cardapio</Link></li>
            <li><Link  to="btn" spy={true} smooth={true}   duration={500} offset={-50}>Conheça</Link></li>
          </ul>
          <img src={Logo} alt="Logo" srcset="" className='logo'/><p className='nome-logo'>myCoffe</p>
      </>
    )
  };  
};


