import "./regalos.css";
import regalo from '../../assets/caja-de-regalo.png';


export default function Regalos() {
  return (
    <>
      <div className="container-info">
        <h3 className="title_primary">REGALOS</h3>
        <div className="imagen">
          <img src={regalo} alt="" />
        </div>
        <div className="info">
          <p>Nuestro mejor regalo sera tu compañia,
            pero si un obsequio quieres hacernos, te agradecemos
            que sea por este medio:
          </p>
          <div className="cuenta">
            <h4 className="lluvia">LLUVIA DE SOBRE</h4>
            <h4>o</h4>
            <h4>CUENTA DE AHORRO DAVIVIENDA</h4>
            <h4>Numero: 0550488411787150</h4>
            <h4 className="prop">A nombre de Marianella Jimenez</h4>
          </div>
        </div>
      </div>
    </>
  );
}
