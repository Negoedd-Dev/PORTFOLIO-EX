import { useState, useRef, useEffect } from "react";
import "./Desktop.css";
import { SISTEMA } from "../../config/config";
import Sobre from "../Sobre";
import Skills from "../Skills";
import Projetos from "../Projetos";

const SECOES = [
  { id: "sobre", nome: "Sobre", Componente: Sobre },
  { id: "skills", nome: "Skills", Componente: Skills },
  { id: "projetos", nome: "Projetos", Componente: Projetos },
];

const Seta = ({ para }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path
      d={para === "cima" ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Tela principal: seções em sequência, com duas setas para subir e descer.
export default function Desktop({ onDesligar }) {
  const [atual, setAtual] = useState(0);
  const areaRef = useRef(null);
  const secoesRef = useRef([]);

  function descobrirSecaoAtual() {
    const area = areaRef.current;
    if (!area) return;
    const fim = area.scrollTop + area.clientHeight >= area.scrollHeight - 2;
    if (fim) {
      setAtual(SECOES.length - 1);
      return;
    }
    const limite = area.scrollTop + area.clientHeight * 0.4;
    let indice = 0;
    secoesRef.current.forEach((el, i) => {
      if (el && el.offsetTop <= limite) indice = i;
    });
    setAtual(indice);
  }

  useEffect(descobrirSecaoAtual, []);

  function irPara(indice) {
    const el = secoesRef.current[indice];
    if (!el) return;
    const reduzir = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    areaRef.current.scrollTo({
      top: el.offsetTop,
      behavior: reduzir ? "auto" : "smooth",
    });
  }

  return (
    <div className="desktop">
      <header className="desktop-barra">
        <strong>{SISTEMA}</strong>
        <span className="desktop-secao-atual" aria-live="polite">
          {SECOES[atual].nome} · {atual + 1}/{SECOES.length}
        </span>
        <button type="button" onClick={onDesligar}>
          Desligar
        </button>
      </header>

      <div className="desktop-palco">
        <div
          className="desktop-area"
          ref={areaRef}
          onScroll={descobrirSecaoAtual}
          tabIndex={0}
          aria-label="Conteúdo do portfólio. Use as setas do teclado ou os botões para navegar."
        >
          {SECOES.map(({ id, Componente }, i) => (
            <section
              key={id}
              id={id}
              className="desktop-secao"
              ref={(el) => (secoesRef.current[i] = el)}
            >
              <Componente />
            </section>
          ))}
        </div>

        <div className="desktop-setas">
          <button
            type="button"
            onClick={() => irPara(atual - 1)}
            disabled={atual === 0}
            aria-label="Ir para a seção anterior"
          >
            <Seta para="cima" />
          </button>
          <button
            type="button"
            onClick={() => irPara(atual + 1)}
            disabled={atual === SECOES.length - 1}
            aria-label="Ir para a próxima seção"
          >
            <Seta para="baixo" />
          </button>
        </div>
      </div>
    </div>
  );
}
