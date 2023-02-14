import ImageBox from "../ImageBox/ImageBox"
import './Galeria.css'
import { useEffect, useState, useRef } from 'react';

function Galeria() {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/static/images')
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


export default Galeria;
