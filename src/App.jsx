import { useState } from "react";
import "./index.css";
import "./App.css";
import Tablet from "./componentes/Tablet";
import Desligado from "./componentes/Desligado";
import Boot from "./componentes/Boot";
import Desktop from "./componentes/Desktop";

export default function App() {
  const [fase, setFase] = useState("desligado");

  return (
    <main className="pagina">
      <Tablet>
        {fase === "desligado" && <Desligado onLigar={() => setFase("boot")} />}
        {fase === "boot" && <Boot onEntrar={() => setFase("desktop")} />}
        {fase === "desktop" && (
          <Desktop onDesligar={() => setFase("desligado")} />
        )}
      </Tablet>
    </main>
  );
}
