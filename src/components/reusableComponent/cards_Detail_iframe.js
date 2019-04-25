import React from 'react';

function Iframe(props){
    return(
        <div>
            <iframe src={props.video} width='350' height='350'></iframe>
        </div>
    )
}
export default Iframe;