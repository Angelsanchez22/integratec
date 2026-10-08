"use client";
import {
  DoorOpen,
  Camera,
  Network,
  BatteryCharging,
  Zap,
  Settings,
  ShieldCheck,
  Wrench,
  MessagesSquare
} from "lucide-react";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";



function ProjectCard({
  image,
  video,
  category,
  title,
  description,
}) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <article
      className={styles.projectCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <div className={styles.projectMedia}>

        {/* FOTO */}
        <img
          src={image}
          alt={title}
          className={styles.projectPhoto}
        />

        {/* VIDEO */}
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          className={styles.projectVideo}
        />

        {/* INDICADOR */}
        <div className={styles.videoIndicator}>
          ▶ <span>Vista previa</span>
        </div>

        {/* TEXTO AL PASAR EL MOUSE */}
        <div className={styles.projectOverlay}>
          <span>VER PROYECTO</span>

          <div className={styles.projectArrow}>
            ↗
          </div>
        </div>

      </div>

      <div className={styles.projectInfo}>

        <div>

          <span className={styles.projectCategory}>
            {category}
          </span>

          <h3>{title}</h3>

          <p>{description}</p>

        </div>

        <div className={styles.projectLine}></div>

      </div>

    </article>
  );
}

export default function Home() {
 useEffect(() => {
    const elements = document.querySelectorAll(
      `.${styles.scrollAnimation}`
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
  
  return (
    <main>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/Integratec.png" alt="Logo" className={styles.logoImage} />
        </div>

        <div className={styles.navLinks}>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#porque-elegirnos">Por qué elegirnos</a>
          <a href="#redes-sociales">Redes Sociales</a>
          <a href="#contacto">Contáctanos</a>
          
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className={styles.hero}>
        <p className={styles.subtitle}>
          SOLUCIONES TECNOLÓGICAs
        </p>

        <h1>
          Tecnología que
          <br />
          <span>conecta y protege.</span>
        </h1>

        <p className={styles.description}>
          Soluciones profesionales en automatización, seguridad,
          energía y conectividad para hogares y empresas.
        </p>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className={`${styles.services} ${styles.scrollAnimation}`}>
        <div className={styles.servicesHeader}>
          <span>01 / SERVICIOS</span>
          <h2>Soluciones para cada necesidad</h2>
        </div>

        <div className={styles.servicesGrid}>

          <div className={styles.serviceCard}>
            <div className={styles.icon}>
              <DoorOpen size={28} />
            </div>

            <h3>Puertas automáticas</h3>

            <p>
              Automatización y control de accesos para
              mayor comodidad y seguridad.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.icon}>
              <Camera size={28} />
            </div>

            <h3>Cámaras de seguridad</h3>

            <p>
              Sistemas de videovigilancia para proteger
              tus espacios en todo momento.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.icon}>
              <Network size={28} />
            </div>

            <h3>Cableado estructurado</h3>

            <p>
              Instalación y organización de redes para
              una conexión estable y eficiente.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.icon}>
              <BatteryCharging size={28} />
            </div>

            <h3>UPS y respaldo de energía</h3>

            <p>
              Soluciones de respaldo para mantener tus
              equipos funcionando ante cortes eléctricos.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.icon}>
              <Zap size={28} />
            </div>

            <h3>Redes eléctricas</h3>

            <p>
              Instalaciones eléctricas seguras y
              adaptadas a las necesidades de cada espacio.
            </p>
          </div>

        </div>
      </section>


{/* TRABAJOS REALIZADOS */}
<section
  id="trabajos"
  className={`${styles.projectsSection} ${styles.scrollAnimation}`}
>

  <div className={styles.projectsHeader}>

    <div>

      <span className={styles.sectionNumber}>
        03 / PROYECTOS
      </span>

      <h2>
        Trabajos
        <br />
        <strong>realizados.</strong>
      </h2>

    </div>

    <div className={styles.projectsDescription}>

      <p>
        Conoce algunos de los proyectos que hemos
        realizado, combinando tecnología, diseño
        y calidad en cada instalación.
      </p>

      <span className={styles.previewHint}>
        Pasa el cursor sobre un proyecto para
        ver una vista previa.
      </span>

    </div>

  </div>

  <div className={styles.projectsGrid}>

    {/* PUERTAS Y PORTONES */}

  <Link
    href="/Tipos-Trabajo/Portones"
    className={styles.categoryCard}
  >
    <div className={styles.categoryImage}>

      <img
        src="/Porton 1.jpeg"
        alt="Puertas y portones automáticos"
      />

      <div className={styles.categoryOverlay}>
        <span>EXPLORAR</span>
        <div>↗</div>
      </div>

    </div>

    <div className={styles.categoryInfo}>

      <span>01 / AUTOMATIZACIÓN</span>

      <h3>
        Puertas y portones
        <br />
        automáticos
      </h3>

      <p>Ver proyectos →</p>

    </div>
  </Link>

  {/* PÉRGOLAS */}

  <Link
    href="/Tipos-Trabajo/Pergolas"
    className={styles.categoryCard}
  >
    <div className={styles.categoryImage}>

      <img
        src="/Pergola 1.jpeg"
        alt="Pérgolas y techos plegables"
      />

      <div className={styles.categoryOverlay}>
        <span>EXPLORAR</span>
        <div>↗</div>
      </div>

    </div>

    <div className={styles.categoryInfo}>

      <span>02 / ESTRUCTURAS</span>

      <h3>
        Pérgolas y techos
        <br />
        plegables
      </h3>

      <p>Ver proyectos →</p>

    </div>
  </Link>

  </div>

</section>

{/* POR QUÉ ELEGIRNOS */}
<section id="porque-elegirnos" className={`${styles.porqueElegirnos} ${styles.scrollAnimation}`}>

  <div className={styles.porqueHeader}>
    <span className={styles.porqueEtiqueta}>
      04 / NUESTRA DIFERENCIA
    </span>

    <h2>
      ¿Por qué elegir <span>Integratec?</span>
    </h2>

    <p>
      Ofrecemos soluciones tecnológicas pensadas
      para adaptarse a las necesidades de cada proyecto.
    </p>
  </div>

  <div className={styles.porqueGrid}>

    <div className={styles.porqueCard}>
      <div className={styles.porqueCardTop}>
        <Settings size={30} />
        <span>01</span>
      </div>

      <h3>Soluciones a medida</h3>
      <p>
        Cada proyecto requiere una solución que
        responda a sus necesidades específicas.
      </p>
    </div>

    <div className={styles.porqueCard}>
      <div className={styles.porqueCardTop}>
        <ShieldCheck size={30} />
        <span>02</span>
      </div>

      <h3>Instalación profesional</h3>
      <p>
        Cuidamos cada detalle durante la instalación
        para ofrecer soluciones funcionales.
      </p>
    </div>

    <div className={styles.porqueCard}>
      <div className={styles.porqueCardTop}>
        <Wrench size={30} />
        <span>03</span>
      </div>

      <h3>Soporte técnico</h3>
      <p>
        Acompañamiento y mantenimiento para
        conservar el funcionamiento de los sistemas.
      </p>
    </div>

    <div className={styles.porqueCard}>
      <div className={styles.porqueCardTop}>
        <MessagesSquare size={30} />
        <span>04</span>
      </div>

      <h3>Atención personalizada</h3>
      <p>
        Escuchamos tus necesidades para encontrar
        una solución adecuada a tu proyecto.
      </p>
    </div>

  </div>

</section>

      {/* REDES SOCIALES */}
<section id="redes-sociales" className={`${styles.socialSection} ${styles.scrollAnimation}`}>
  <div className={styles.socialHeader}>
    <span>05 / SÍGUENOS</span>

    <h2>
      Conecta con
      <br />
      <span>nosotros.</span>
    </h2>

    <p>
      Conoce nuestros proyectos, servicios y novedades
      a través de nuestras redes sociales.
    </p>
  </div>

  <div className={styles.socialGrid}>

    <a
      href="https://www.instagram.com/integratec_electronica_str/?hl=es-la"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialCard}
    >
      <div className={styles.socialIcon}>
        <img src="/instagram.svg" alt="Logo"/>
      </div>

      <div>
        <h3>Instagram</h3>
        <p>@integratec_electronica_str</p>
      </div>

      <span className={styles.arrow}>↗</span>
    </a>

    <a
      href="https://www.facebook.com/profile.php?id=61594799647250&locale=es_LA"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialCard}
    >
      <div className={styles.socialIcon}>
        <img src="/facebook.svg" alt="Logo"/>
      </div>

      <div>
        <h3>Facebook</h3>
        <p>IntegraTec</p>
      </div>

      <span className={styles.arrow}>↗</span>
    </a>

    <a
      href="https://www.tiktok.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialCard}
    >
      <div className={styles.socialIcon}>
        <img src="/tiktok.svg" alt="Logo"/>
      </div>

      <div>
        <h3>TikTok</h3>
        <p>@empresa</p>
      </div>

      <span className={styles.arrow}>↗</span>
    </a>

  </div>
</section>

{/* CONTACTANOS */}
<section id="contacto" className={`${styles.contactoPrueba} ${styles.scrollAnimation}`}>

  <div className={styles.contactoContenido}>

    <span className={styles.contactoEtiqueta}>
      HABLEMOS DE TU PROYECTO
    </span>

    <h2>
      ¿Tienes un proyecto
      <br />
      <span>en mente?</span>
    </h2>

    <p>
      Estamos listos para ayudarte a encontrar
      la solución tecnológica que necesitas.
      Cuéntanos tu idea y trabajemos juntos.
    </p>

    <a
      href={`https://wa.me/573001713343?text=${encodeURIComponent(
        "Hola, buen día. Estoy interesado en los servicios de Integratec y me gustaría recibir información y una cotización."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.contactoBoton}
    >
      CONTÁCTANOS POR WHATSAPP
      <span>↗</span>
    </a>

    <small>
      Atención personalizada para tu proyecto
    </small>

  </div>

</section>
    </main>
  );
}