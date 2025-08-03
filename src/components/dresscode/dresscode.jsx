import dresscode from "../../assets/dress-code.png";
import "./dresscode.css";

export default function Dresscode() {
  return (
    <div className="dress">
      <div className="dresscode">
        <h3 className="title_primary">DRESS CODE</h3>
        <img src={dresscode} alt="" />
        <div className="code">
          <div className="column">
            <h4>Mujer</h4>
            <p>Vestido Elegante</p>
          </div>
          <div className="column">
            <h4>Hombre</h4>
            <p>Guayabera</p>
          </div>
        </div>
        <div className="color-reserv">
          <h4>Colores reservados</h4>
          <p>Blanco, Negro, Rosado y Palo de Rosa</p>
        </div>
      </div>
    </div>
  );
}
