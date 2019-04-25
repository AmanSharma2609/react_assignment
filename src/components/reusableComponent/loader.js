import React from 'react'
import Loader from '../../images/loader.svg'

function Loading(props){
    return(
        <div className='loader'><img src={Loader} width='50'></img></div>
    )
}
export default Loading;