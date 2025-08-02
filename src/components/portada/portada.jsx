import fotoPortada from '../../assets/44.png';
import './portada.css';


export default function Portada() {
  return( 
    <>
        <div className='zona_img'>
            <img className='img_portada' src={fotoPortada} alt="Foto portada" />
        </div>
    </>
  );
}
