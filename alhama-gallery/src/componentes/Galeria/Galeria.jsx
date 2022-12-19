import ImageBox from "../ImageBox/ImageBox"
import { useEffect, useState, useRef } from 'react';
import './Galeria.css'

function Galeria() {
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/static/images.json')
      .then((response) => response.json())
      .then(setData);
  }, []);
    return (
    <div id='gallery-main'>
         
            <ImageBox linkImage='#'title='oi' />
            <ImageBox linkImage='#'title='oi' />
            <ImageBox linkImage='#'title='oi' />
            <ImageBox linkImage='#'title='oi' />
            <ImageBox linkImage='#'title='oi' />
            <ImageBox linkImage='#'title='oi' />

    </div>
    )
}

export default Galeria;