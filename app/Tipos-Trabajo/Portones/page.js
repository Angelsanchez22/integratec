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

        <span>AUTOMATIZACIÓN</span>

        <h2>{titulo}</h2>

      </div>

    </div>
  );
}



export default function Portones() {

  return (

    <main className={styles.main}>


      {/* VOLVER */}

      <Link
        href="/#trabajos"
        className={styles.volver}
      >
        ← Volver a inicio
      </Link>



      {/* HEADER */}

      <section className={styles.header}>

        <span>
          PROYECTOS / AUTOMATIZACIÓN
        </span>

        <h1>
          Puertas y portones
          <br />
          <strong>automáticos.</strong>
        </h1>

        <p>
          Conoce algunos de nuestros trabajos de
          instalación y automatización de puertas
          y portones.
        </p>

      </section>



      {/* TRABAJOS */}

      <section className={styles.grid}>


        <Trabajo
          imagen="/Porton 1.jpeg"
          video="/Porton 1 Video.mp4"
          titulo="Portón automático"
        />


        <Trabajo
          imagen="/Porton 2.jpeg"
          video="/Porton 2 Video.mp4"
          titulo="Automatización de acceso"
        />


        <Trabajo
          imagen="/Porton 3.jpeg"
          video="/Porton 3 Video.mp4"
          titulo="Puerta automática"
        />


        <Trabajo
          imagen="/Porton 4.jpeg"
          video="/Porton 4 Video.mp4"
          titulo="Puerta automática"
        />


        <Trabajo
          imagen="/Porton 5.jpeg"
          video="/Porton 5 Video.mp4"
          titulo="Puerta automática"
        />


        <Trabajo
          imagen="/Porton 6.jpeg"
          video="/Porton 6 Video.mp4"
          titulo="Puerta automática"
        />


        <Trabajo
          imagen="/Porton deslizante 1.png"
          video="/Porton deslizante 1 Video.mp4"
          titulo="Puerta deslizante automática"
          vertical={true}
        />


      </section>


    </main>

  );
}