import { h } from "preact";
import { Link } from "preact-router/match";
import baseroute from "../../baseroute";
import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <h1>Preact App</h1>
    <nav>
      <Link activeClassName={style.active} href={`${basename}/`}>
        Home
      </Link>
    </nav>
  </header>
);

export default Header;
