import "./Tablet.css";

export default function Tablet({ children }) {
  return (
    <div className="tablet">
      <div className="tablet-tela">{children}</div>
    </div>
  );
}
