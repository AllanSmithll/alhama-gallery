import './ImageBox.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function ImageBox(props) {
    return (
        
        <div className="Image-container">
            <img src={props.linkImage} />
            <p> {props.title} </p>
            <button className='Ampliar' data-toggle="modal" data-target=".img">Ampliar Imagem</button>

            <div className="modal fade img" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div className="modal-content">
                        <img src={props.linkImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageBox