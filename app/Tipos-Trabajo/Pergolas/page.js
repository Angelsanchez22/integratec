"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";


function Trabajo({ imagen, video, titulo }) {
  const videoRef = useRef(null);

  const reproducirVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const detenerVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={styles.trabajo}
      onMouseEnter={reproducirVideo}
      onMouseLeave={detenerVideo}
    >

      <div className={styles.media}>

        {/* IMAGEN */}
        <img
          src={imagen}
          alt={titulo}
          className={styles.imagen}
        />

        {/* VIDEO */}
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          className={styles.video}
        />

        {/* INDICADOR */}
        <div className={styles.indicador}>
          ▶ Vista previa
        </div>

      </div>


      <div className={styles.info}>

        <span>PÉRGOLAS Y CUBIERTAS</span>

        <h2>{titulo}</h2>

      </div>

    </div>
  );
}



export default function Pergolas() {
  return (
    <main className={styles.main}>

      {/* VOLVER */}

      <Link
        href="/#trabajos"
        className={styles.volver}
      >
        ← Volver a inicio
      </Link>


      {/* ENCABEZADO */}

      <section className={styles.header}>

        <span>
          PROYECTOS / ESTRUCTURAS
        </span>

        <h1>
          Pérgolas y techos
          <br />
          <strong>plegables.</strong>
        </h1>

        <p>
          Conoce algunos de nuestros trabajos de
          fabricación e instalación de pérgolas,
          cubiertas y techos plegables.
        </p>

      </section>


      {/* TRABAJOS */}

      <section className={styles.grid}>

        <Trabajo
          imagen="/Pergola 1.jpeg"
          video="/Pergola 1 Video.mp4"
          titulo="Pérgola plegable"
        />

        <Trabajo
          imagen="/Pergola 2.jpeg"
          video="/Pergola 2 Video.mp4"
          titulo="Techo plegable"
        />

      </section>

    </main>
  );
}