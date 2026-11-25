import "./Sobre.css";
import { SOBRE, CONTATO } from "../../../conteudo";

const iniciais = (nome) =>
  nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("");

const completar = (url) => {
  const u = (url || "").trim();
  if (!u) return "";
  return /^https?:\/\//i.test(u) ? u : `https://${u.replace(/^\/+/, "")}`;
};

export default function Sobre() {
  const links = [
    { rotulo: "LinkedIn", href: completar(CONTATO.linkedin) },
    { rotulo: "GitHub", href: completar(CONTATO.github) },
    { rotulo: "E-mail", href: CONTATO.email && `mailto:${CONTATO.email}` },
  ].filter((l) => l.href);

  return (
    <div className="secao-conteudo">
      <h2 className="secao-titulo">Sobre</h2>

      <article className="sobre-cartao">
        <div className="sobre-avatar" aria-hidden="true">
          {iniciais(SOBRE.nome)}
        </div>
        <div className="sobre-texto">
          <h3>{SOBRE.nome}</h3>
          <p className="sobre-cargo">{SOBRE.titulo}</p>
          {SOBRE.paragrafos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {links.length > 0 && (
            <div className="sobre-links">
              {links.map((l) => (
                <a
                  key={l.rotulo}
                  href={l.href}
                  target={l.rotulo === "E-mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  {l.rotulo}
                </a>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
