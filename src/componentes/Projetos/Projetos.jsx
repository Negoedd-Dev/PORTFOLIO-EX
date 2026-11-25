import "./Projetos.css";
import { PROJETOS } from "../../../conteudo";

export default function Projetos() {
  return (
    <div className="secao-conteudo">
      <h2 className="secao-titulo">Projetos</h2>

      <div className="projetos-grade">
        {PROJETOS.map((p) => (
          <article key={p.nome} className="projeto-cartao">
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
            <ul className="projeto-tags" aria-label="Tecnologias">
              {p.tecnologias.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="projeto-links">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                  Abrir
                </a>
              )}
              {p.codigo && (
                <a href={p.codigo} target="_blank" rel="noopener noreferrer">
                  Código
                </a>
              )}
              {!p.demo && !p.codigo && (
                <span className="projeto-breve">Links em breve</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
