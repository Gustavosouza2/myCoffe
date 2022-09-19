import React, {Component} from 'react';
import '../styles/Home.sass'
import HomeCoffe from '../Imagem/HomeCoffe.jpg';
import Header from '../components/Header';

export default class Home extends Component {
  render() {
  return (
                     /*Home Page*/
    <>                        
      <Header />
        <div className='home-page'> 
          <img src={HomeCoffe} alt=""/>
          <h1 id='Home1'>Your Coffee<br/>
            Is our<br/> 
            Priority</h1>
        </div>
    </>
    );
  };
};
