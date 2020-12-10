import React from 'react';
import ReactDOM from 'react-dom';
import CardInfo from './components/CardInfo'; 
import Welcome from './components/Welcome'; 
import 'bootstrap/dist/css/bootstrap.css'; 

const container = document.getElementById('root');

ReactDOM.render(<div>
                    <Welcome
                    title ="Federico Nicolas Villace"
                    profession = "Desarrollador Web - Técnico Programador"
                    />                 
                    <CardInfo
                    title="BIO"
                    description="Mi nombre es Federico Villacé, tengo 25 años, soy Técnico Programador recibido en la Universidad de Lomas de Zamora. Actualmente me encuentro cursando el primer cuatrimestre de la Licenciatura en Gestion de la Información en la misma universidad."   
                    description2 ="Estoy en búsqueda de mi primer empleo formal como desarrollador, empleo que pueda desafiarme a poner en práctica mis conocimientos y también entrar en contacto con las problemáticas reales para adquirir otros nuevos."
                    //img="../images/pruebaFondo.png"
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                /> 
                </div>,container);
