"use client";
import { usePathname } from "next/navigation";
import style from "./Breadcrumb.module.css";
import Link from "next/link";

export const Breandcrumb = ({ items }) => {
  const pathname = usePathname();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/clientes": "Área de Clientes",
  };

  const pageDescriptions = {
    "/dashboard": "Seja bem-vindo a área de Dashboard",
    "/clientes": "Seja bem-vindo a área de Clientes",
  };

  return (
    <div className={style.containerContentTitle}>
      <div className={style.containerTitle}>
        <h1 className="">{pageTitles[pathname] || "Página não encontrada"}</h1>
        <p className="">
          {pageDescriptions[pathname] ||
            "Descrição não disponível para esta página."}
        </p>
      </div>
      <div className={style.containerButtons}>
        <Link
          href={"/dashboard"}
          className={
            pathname === "/dashboard" ? style.buttonActive : style.buttonNormal
          }
        >
          Dashboard
        </Link>
        <Link
          href={"/clientes"}
          className={
            pathname === "/clientes" ? style.buttonActive : style.buttonNormal
          }
        >
          Cliente
        </Link>
      </div>
    </div>
  );
};
