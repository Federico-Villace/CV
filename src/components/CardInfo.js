import React from 'react';
import fotocv from '../images/fotocv-small.png'
import './styles/CardInfo.css'; 

class CardInfo extends React.Component{
    render(){
        return (
            <div className="card mx-auto CV-Info-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={fotocv} className="float-right"/>
                        </div>
                        <div className="col-6 CV-Card-Info">
                            <h2>Bio</h2>
                            <p>Mi nombre es Federico Villacé, tengo 25 años, soy Técnico Programador recibido en la Universidad de Lomas de Zamora. Actualmente me encuentro cursando el primer cuatrimestre de la Licenciatura en Gestion de la Información en la misma universidad.<br></br><br></br>

                            Estoy en búsqueda de mi primer empleo formal como desarrollador, empleo que pueda desafiarme a poner en práctica mis conocimientos y también entrar en contacto con las problemáticas reales para adquirir otros nuevos.<br></br><br></br>

                            Tengo conocimientos en: <br></br>
                                Back-End: C#, Java, JS(NodeJS), Python.<br></br>
                                Front-End: HTML, CSS.<br></br>
                                Base de datos: SQL Server.</p>
                        </div>
                    </div>
                </div>  
            </div>    
        )
    }
}

export default CardInfo; 