import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const text = "Everyone";
const img1 = "https://picsum.photos/200/300"
const link = "https://afzalhossainruman.com/"

const text1 = {
  color : '#fa9191',
  textTransform : 'capitalize',
  textAlign : 'center',
  fontWeight : 'bold',
  margin : '50px 0',
  fontFamily :'"Josefin Sans", sans-serif',
  textShadow : '0px 2px 4px #fe9cfe'

}

ReactDOM.render(
  <>
  <h1 style={text1}>Hello {text} </h1>

  <div className='div-img'>
  <img src= {img1} alt=''/>
  <img src='https://picsum.photos/id/237/200/300'></img>
  <a href={link}>  <img src= {img1} alt=''/> </a>
  </div>
  
  </>
,document.getElementById('root')
);