import ImageBox from "../ImageBox/ImageBox"
import { useEffect, useState, useRef } from 'react';
import './Galeria.css'

function Galeria() {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/static/images.json')
      .then((response) => response.json())
      .then(setData)
      .catch(error=>{console.error(error)})
  }, []);

  return (
    <div id='gallery-main'>
      {createImagesBox(setData.map((Monumento)=>createImagesBox(Monumento)))}
    </div>
    )
};


function createImagesBox(Monumento){
  const galery=document.getElementById('gallery-main');
  return (galery.insertAdjacentHTML(createImageBox(Monumento.id, Monumento.nome, Monumento.cidade, Monumento.pais, Monumento.continente,Monumento.imagem)))
};

function createImageBox(id,linkImage, title,city,country,continent){
  return (<ImageBox id={id} linkImage={ linkImage } title={ title } city={ city }country={ country }continent={continent} /> )
}

export default {Galeria,createImageBox,createImagesBox};
