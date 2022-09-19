import React,{Component} from 'react'
import '../styles/Cardapio.sass'
import { MdMenuBook } from "react-icons/md";
import { MdCoffee } from "react-icons/md";
import  {MdIcecream} from "react-icons/md";
import Frapuccino from '../Imagem/Frappucino.png';
import Mocha from '../Imagem/Café Mocha.png';
import Machiato from '../Imagem/Caramel Macchiato.png';
import Americano from '../Imagem/Americano.png';
import IcedGelato from '../Imagem/IcedGelato.jpg';
import IcedLatte from '../Imagem/Iced Latte.jpg';
import IcedMoccha from '../Imagem/Iced Moccha.jpg';
import ColdBrew from '../Imagem/Cold Brew.jpg';
import QRCode from 'react-qr-code';

export default class Cardapio extends Component {
    render() {
  return (                /*Cardápio*/

 <section className='cardapio'>
        <h1 id="Cardapio"><MdMenuBook/>Cardápio</h1>
          <h2><MdCoffee/>Bebidas Quentes</h2>             
              <div className='cards'>
                  <div className='card-coffe'>
                    <img src={Frapuccino} alt="" />
                    <p>Frappucino</p>
                    <p>R$ 5,99</p><QRCode value="https://github.com/Gustavosouza2" size={48} className='qrcode'/>
                  </div>
                <div className='card-coffe'>
                    <img src={Mocha} alt="" />
                    <p>Café Mocha</p>
                    <p>R$ 2,50</p><QRCode value="https://github.com/Gustavosouza2" size={48} className='qrcode'/>
                </div>
                <div className='card-coffe'>
                    <img src={Machiato} alt="" />
                    <p>Caramel Macchiato</p>
                    <p>R$ 6,55</p><QRCode value="https://github.com/Gustavosouza2" size={48} className='qrcode'/>
                </div>
                <div className='card-coffe'>
                    <img src={Americano} alt="" />
                    <p>Café Americano</p>
                    <p>R$ 3,35</p><QRCode value="https://github.com/Gustavosouza2" size={48} className='qrcode'/>
                </div>
              </div>
          <h2><MdIcecream />Bebidas Geladas</h2>        
          <div className='cards-ice'>
                  <div className='card-coffe-ice'>
                    <img src={IcedGelato} alt="" />
                    <p>Iced Gelato</p>
                    <p>R$ 10,50</p><QRCode value="https://github.com/Gustavosouza2" size={48} className='qrcode'/>
                  </div>
                <div className='card-coffe-ice'>
                    <img src={ColdBrew} alt="" />
                    <p>Cold Brew</p>
                    <p>R$ 15,80</p><QRCode value="https://github.com/Gustavosouza2" size={48} className='qrcode'/>
                </div>
                <div className='card-coffe-ice'>
                    <img src={IcedLatte} alt="" />
                    <p>Iced Latte</p>
                    <p>R$ 12,15</p><QRCode value="https://github.com/Gustavosouza2" size={48} className='qrcode'/>
                </div>
                <div className='card-coffe-ice'>
                    <img src={IcedMoccha} alt="" />
                    <p>Iced Moccha</p>
                    <p>R$ 11,80</p><QRCode value="https://github.com/Gustavosouza2" size={48} className='qrcode'/>
                </div>
          </div>
    </section>
  );
};
};

