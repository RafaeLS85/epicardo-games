import "./Menu.css";

interface Props {
  onClick: (event: MouseEvent) => void;
  active: boolean;
}

export function Menu({onClick, active}: Props) {
  // const [active, setActive] = useState(false);

  return ( 
    <button className={`btn ${active ? "active" : ""}`} >
      <div></div>
      <div></div>
      <div></div>
    </button>    
  );
}
