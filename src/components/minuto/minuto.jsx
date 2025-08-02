import minute from "../../assets/minute.png";
import foto from "../../assets/7.jpg";
import "./minuto.css";

export default function Minuto() {
  return (
    <>
      <div className="container-minute">
        <div className="minuto">
          <img src={minute} alt="" />
        </div>
        <div className="img">
          <img src={foto} alt="" />
        </div>
      </div>
      <div className="text-content">
        <h5>DRESS CODE: Elegante</h5>
        <h5>¡EVENTO SOLO PARA ADULTOS!</h5>
      </div>
    </>
  );
}