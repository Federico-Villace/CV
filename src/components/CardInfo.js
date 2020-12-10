import React from 'react';
import fotocv from '../images/fotocv-small.png';
import backgroundIMG from '../images/background.png';
import './styles/CardInfo.css'; 

class CardInfo extends React.Component{
    render(){
        const {title, description, description2, leftColor, rightColor} = this.props; 
        return (
            <div className="card mx-auto CV-Info-Card" 
             style={{
                backgroundImage : `url(${backgroundIMG}), linear-gradient(to bottom, ${leftColor}, ${rightColor})`
            }}     
            >
                <div>
                    <div className="row center">
                        <div className="col-2">
                            <img src={fotocv} className="float-left"/>
                        </div> 
                        <div className="col-10 CV-Card-Info" >
                            <h2 align="center">{title}</h2> <br></br> 
                            <p> {description} <br></br>  <br></br> {description2}
                            </p>
                        </div>
                    </div>
                </div>  
            </div>    
        )
    }
}

export default CardInfo; 