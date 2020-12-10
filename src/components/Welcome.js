import React from 'react';  
import background from '../images/backgroundWelcome.png'; 
import './styles/Welcome.css';

function Welcome(props){
    return (
        <div className="Welcome-Card mx-auto Welcome-Info-Card"
        style={{
            backgroundImage : `url(${background})`
        }}
        >
        <div className="Welcome-Info" align="center">
            <h1 className="Welcome-Info1" align="center"> {props.title} </h1>
            <h2 className="Welcome-Info2" align="center"> {props.profession}</h2>
            <button>Curriculum</button>
        </div>
        </div>
    )
}
export default Welcome; 
