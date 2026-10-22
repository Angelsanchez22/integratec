"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";


function Trabajo({ imagen, video, titulo, vertical = false }) {
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

      <div className={`${styles.media} ${ vertical ? styles.mediaSilla : "" }`}>

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

        <span>Otros trabajos realizados</span>

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
          Más proyectos,
          <br />
          <strong>nuevas soluciones.</strong>
        </h1>

        <p>
          Conoce algunos de nuestros trabajos de
          instalación
        </p>

      </section>


      {/* TRABAJOS */}

      <section className={styles.grid}>

        <Trabajo
          imagen="/Valla de seguridad 1.png"
          video="/Valla de seguridad 1 Video.mp4"
          titulo="Valla de seguridad automática"
        />

        <Trabajo
          imagen="/Silla automatica 1.jpeg"
          video="/Silla automatica 1 Video.mp4"
          titulo="Silla automática"
          vertical={true}
        />

        <Trabajo
          imagen="/Pruebas de motor 1.png"
          video="/Pruebas de motor 1 Video.mp4"
          titulo="Arreglo de motor automático"
          vertical={true}
        />


        <Trabajo
          imagen="/Pruebas de GSM.png"
          video="/Pruebas de GSM Video.mp4"
          titulo="GSM para apertura de portones"
          vertical={true}
        />


        <Trabajo
          imagen="/Prueba de motor de puerta .png"
          video="/Prueba de motor de puerta.mp4"
          titulo="Mantenimiento de motor puerta"
          vertical={true}
        />


        <Trabajo
          imagen="/Prueba de motor cortina metalica.png"
          video="/Prueba de motor cortina metalica.mp4"
          titulo="Mantenimiento de motor  cortina metálica"
          vertical={true}
        />


        <Trabajo
          imagen="/Cortina deslizante.png"
          video="/Cortina deslizante.mp4"
          titulo="Cortina metálica automática"
          vertical={true}
        />

      </section>

    </main>
  );
}