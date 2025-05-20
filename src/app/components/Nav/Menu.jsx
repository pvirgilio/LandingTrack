import Link from "next/link";
import style from "./style.module.css";
import { RiHomeFill } from "react-icons/ri";

export const Menu = () => {
  const menuItems = [
    { icon: <RiHomeFill color="#2954E2" />, name: "Dashboard", href: "#" },
    { name: "Clientes", href: "#" },
    { name: "Configurações", href: "#" },
    { name: "Ajuda", href: "#" },
  ];

  return (
    <ul className={style.menu}>
      {menuItems.map((item, index) => {
        return (
          <li
            key={index}
            className={item.icon ? style.menuItem : style.menuItemNoIcon}
          >
            {item.icon && <item.icon className={style.icon} />}
            <Link href={item.href} className={style.link}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
