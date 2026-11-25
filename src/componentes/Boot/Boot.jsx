import { useState } from "react";
import "./Boot.css";
import { SISTEMA, LOGIN } from "../../config/config";

export default function Boot({ onEntrar }) {
  const [formAberto, setFormAberto] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const letras = [...SISTEMA];

  function enviar(e) {
    e.preventDefault();
    if (
      usuario.trim().toLowerCase() === LOGIN.usuario &&
      senha === LOGIN.senha
    ) {
      onEntrar();
    } else {
      setErro("Usuário ou senha incorretos.");
    }
  }

  return (
    <div className="boot" style={{ "--letras": letras.length }}>
      <div className="boot-conteudo">
        <h1 className="logo" aria-label={SISTEMA}>
          {letras.map((letra, i) => (
            <span key={i} style={{ "--i": i }} aria-hidden="true">
              {letra}
            </span>
          ))}
        </h1>

        <div className="acesso">
          {!formAberto ? (
            <button
              type="button"
              className="boot-botao"
              onClick={() => setFormAberto(true)}
            >
              Login
            </button>
          ) : (
            <form className="login" onSubmit={enviar}>
              <input
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Usuário"
                aria-label="Usuário"
                autoComplete="username"
                autoFocus
              />
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha"
                aria-label="Senha"
                autoComplete="current-password"
              />
              {erro && (
                <p className="login-erro" role="alert">
                  {erro}
                </p>
              )}
              <button type="submit" className="boot-botao">
                Entrar
              </button>
              <button
                type="button"
                className="login-visitante"
                onClick={onEntrar}
              >
                Entrar como visitante
              </button>
              <p className="login-dica">
                Acesso de demonstração: {LOGIN.usuario} / {LOGIN.senha}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
