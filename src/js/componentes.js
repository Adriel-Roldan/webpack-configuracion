import '../css/componentes.css';
import webpackImg from '../assets/img/webpack-logo.png';

export const saludar = ( nombre ) => {

    const h2 = document.createElement('h2');
    h2.innerText = `Hola ${ nombre }`;
    document.body.append( h2 );

    const img = document.createElement('img');
    img.src = webpackImg;
    document.body.append( img );


} 