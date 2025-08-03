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
    </>
  );
}