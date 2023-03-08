/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import wedding from "./../public/images/services/wedding_4.jpg";
import jardinage from "./../public/images/services/jardinage_mpt.jpg";
import jardin from "./../public/images/services/garden_3.jpg";

export default function Services() {
  return (
    <>
      <section id="decoration">
        <div className="container" data-aos="fade-right">
          <div className="frame">
            <div className="services-img">
              <Image
                src={wedding}
                alt="composition florale pour mariage"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="services-text">
            <h1 data-aos="zoom-in">Services</h1>
            <h2>Décoration florale</h2>
            <p className="mt-4">
              Spécialiste en décoration florale, je propose des prestations sur
              mesure pour tous vos événements, que ce soit pour une soirée de
              gala, un lancement de produit, une soirée privée ou tout autre
              occasion. Je crée des compositions uniques qui reflètent
              l'ambiance et le thème de votre événement.
            </p>
          </div>
        </div>
      </section>
      <section id="coursFloral" className="mt-5">
        <div className="container">
          <div className="cours-text" data-aos="fade-right">
            <h2>Cours d'Art Floral</h2>
            <p className="mt-4">
              Je donne des cours et anime des ateliers pour apprendre les
              techniques de base de l'art floral. Offrir des cours d'art floral
              est une excellente façon pour moi de partager ma passion pour les
              fleurs et de transmettre mes compétences à d'autres personnes.
              <br />
              <br />
              J'organise des cours de groupe dans un espace dédié. Les cours
              peuvent être de courte durée, tels que des ateliers d'une journée,
              ou des cours plus longs, tels que des cours hebdomadaires ou
              mensuels. <br />
              <br />
              Je peux également offrir des cours privés individuels, où je peux
              travailler avec des clients pour créer des compositions florales
              personnalisées pour des occasions spécifiques.
            </p>
          </div>

          <div className="cours-img mt-5" data-aos="fade-left">
            <Image
              src={jardinage}
              alt="cours de jardinage"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
      <section id="jardin" className="mt-5 mb-5">
        <div className="container mt-5">
          <div className="cours-img" data-aos="fade-right">
            <Image
              src={jardin}
              alt="jardin"
              className="img-fluid"
            />
          </div>
          <div className="jardin-text" data-aos="fade-left">
            <h2 className="mt-5">Conception de jardin</h2>
            <p className="mt-4">
              La conception de jardin est l'art de créer des jardins et des
              espaces extérieurs. <br />
              <br />
              Je prends soin de la selection des plantes, des arbustes, des
              arbres et des fleurs, ainsi que de la disposition des éléments de
              paysage tels que les rochers, les cascades, les étangs, les
              chemins et les murs.
              <br />
              <br />
              Je tiens compte des besoins des plantes, de l'exposition et des
              exigences de l'espace ainsi que les préférences des clients lors
              de la conception d'un jardin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
