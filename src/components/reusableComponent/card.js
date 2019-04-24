import React, {useState} from 'react';
import ReactImage from '../../images/react-logo.png'

function Card(props){
  const [fadeOff, setFade] = useState(false)
  const fadeTrue = () => {
      setFade(true)
  }
  const fadeFalse = () =>{
    setFade(false)

  }
    return(
        <div className={fadeOff ? 'js_cards_containers_leave' :'js_cards_containers'} onMouseLeave={fadeTrue} onMouseEnter={fadeFalse}>
            <div className='image_container'><img src={props.image}  width='100%' height='100%'></img></div>
            <div 
               className={`${props.bg} white_font_color text-center h-50 d-flex justify-content-center align-items-center medium_font_Size`}>
               Learn {props.name}
            </div>
        </div>
    )
}
export default Card;