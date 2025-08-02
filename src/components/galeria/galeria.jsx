import './galeria.css';
import img1 from '../../assets/30.jpg';
import img2 from '../../assets/11.jpg';
import img3 from '../../assets/43.jpg';

function Galeria() {
  return( 
    <>
        <div className='imgs'>
            <div className='img1 img_total'>
                <img src={img1} alt="" />
            </div>
            <div className='img2 img_total'>
                <img src={img2} alt="" />
            </div>
            <div className='img3 img_total'>
                <img src={img3} alt="" />
            </div>
        </div>
    </>
  );
}

export default Galeria