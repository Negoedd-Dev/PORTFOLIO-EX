import "./Skills.css";
import { SKILLS } from "../../../conteudo";

export default function Skills() {
  return (
    <div className="secao-conteudo">
      <h2 className="secao-titulo">Skills</h2>

      <div className="skills-grade">
        {SKILLS.map((grupo) => (
          <article key={grupo.grupo} className="skills-cartao">
            <h3>{grupo.grupo}</h3>
            <ul>
              {grupo.itens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
