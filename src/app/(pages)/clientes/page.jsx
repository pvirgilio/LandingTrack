import Image from "next/image";
import style from "./cliente.module.css";

export default function Clientes() {
  return (
    <section className={style.containerMain}>
      {/* Container principal da página */}

      <div className={style.containerContent}>
        <div className={style.containerTitleProcess}>
          <h2>Processo de Otimização</h2>
          <div className={style.containerButtonAddProcess}>
            <button className={style.btnAddProcess}>Adicionar</button>
            <Image
              src={"/svg/Chevron.svg"}
              alt="arrow-down"
              width={15}
              height={15}
            />
          </div>
        </div>

        {/* Container principal para os cards de processo */}
        <div className={style.containerProcess}>
          <div className={style.containerProcessCard}>
            <div className={style.containerProcessCardTitle}>
              <span className={style.circleSvg}></span>
              <span className={style.titleTypeProcess}>Não iniciado</span>
            </div>
            <div className={style.cardButtonAdd}>
              <Image
                src={"/svg/plus.svg"}
                alt="process"
                width={14}
                height={14}
              />
              <button>Nova tarefa</button>
            </div>
          </div>
          <div className={style.containerProcessCard}>
            <div
              style={{ backgroundColor: "rgba(17, 35, 90, 0.79)" }}
              className={style.containerProcessCardTitle}
            >
              <span
                style={{
                  backgroundColor: "#00C2FF",
                }}
                className={style.circleSvg}
              ></span>
              <span
                style={{ color: "#2D57D7" }}
                className={style.titleTypeProcess}
              >
                Em andamento
              </span>
            </div>
            <div className={style.cardButtonAdd}>
              <Image
                src={"/svg/plus.svg"}
                alt="process"
                width={14}
                height={14}
              />
              <button>Nova tarefa</button>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgba(2, 94, 51, 0.16)",
              boxShadow: "none",
            }}
            className={style.containerProcessCard}
          >
            <div
              style={{ backgroundColor: "rgba(5, 193, 104, 0.20)" }}
              className={style.containerProcessCardTitle}
            >
              <span
                style={{
                  backgroundColor: "#05C168",
                }}
                className={style.circleSvg}
              ></span>
              <span
                style={{ color: "#14CA74" }}
                className={style.titleTypeProcess}
              >
                Em andamento
              </span>
            </div>
            <div className={style.cardButtonAdd}>
              <Image
                src={"/svg/plus.svg"}
                alt="process"
                width={14}
                height={14}
              />
              <button>Nova tarefa</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
