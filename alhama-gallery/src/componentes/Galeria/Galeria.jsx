import ImageBox from "../ImageBox/ImageBox"
import './Galeria.css'
import { useEffect, useState, useRef } from 'react';

function Galeria() {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://10.0.4.174:3000/images')
    //fetch('/images')
      .then((response) => response.json())
      .then((dado)=>setData(dado))
      .catch(error=>{console.error(error)})
  }, []);


  return (
    <div id='gallery-main'>
      
      {data.map((monumento, i)=> <ImageBox key={i} linkImage={monumento.imagem} />)}
    </div>
    )
};


function createImagesBox(Monumento){
  const galery=document.getElementById('gallery-main');
  galery.insertAdjacentHTML(createImageBox(Monumento.id, Monumento.nome, Monumento.cidade, Monumento.pais, Monumento.continente,Monumento.imagem))
};

function createImageBox(id,linkImage, title,city,country,continent){
  return <ImageBox linkImage={linkImage} title={title}/>
}

export default Galeria;
