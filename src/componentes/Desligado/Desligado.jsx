import "./Desligado.css";
import { SISTEMA } from "../../config/config";

export default function Desligado({ onLigar }) {
  return (
    <div className="desligado">
      <button
        type="button"
        className="desligado-botao"
        onClick={onLigar}
        aria-label={`Ligar o ${SISTEMA}`}
      >
        {SISTEMA}
      </button>
      <p className="desligado-dica">Toque para ligar</p>
    </div>
  );
}
