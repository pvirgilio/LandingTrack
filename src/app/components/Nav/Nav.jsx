import Link from "next/link";
import style from "./style.module.css";
import { IoIosSearch } from "react-icons/io";
import { Menu } from "./Menu";

export const Nav = () => {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <h1>Landing Track</h1>
      </div>
      <div className={style.search}>
        <IoIosSearch className={style.iconSearch} />
        <input type="text" placeholder="Buscar por..." />
      </div>
      <Menu />
    </nav>
  );
};
