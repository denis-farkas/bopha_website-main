/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import bopha from "./../public/images/aPropos/bopha.jpg";
import arrow from "./../public/images/icons/arrow-icon.svg";
import Card from "@/components/Card";
import carousel1 from "./../public/images/home/wedding_bunch.jpg";
import carousel2 from "./../public/images/home/art_floral.jpg";
import carousel3 from "./../public/images/home/garden.jpg";

export default function Home(props) {
  return (
    <>
      <section id="home" className="mb-5">
        <div className="container" data-aos="fade-right">
          <div
            id="carouselHome"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <Image
                  src={carousel1}
                  className="img-fluid"
                  alt="composition florale pour un mariage"
                />

                <div className="overlay"></div>
                <div className="carousel-caption d-md-block">
                  <h1>Evènements</h1>
                  <h6>Composition florale pour un mariage - Marseille.</h6>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <Image
                  src={carousel2}
                  className="img-fluid"
                  alt="Composition florale champêtre"
                />

                <div className="overlay"></div>
                <div className="carousel-caption d-md-block">
                  <h1>Art floral</h1>
                  <h6>Composition florale champêtre</h6>
                </div>
              </div>
              <div className="carousel-item">
                <Image
                  src={carousel3}
                  className="img-fluid"
                  alt="conception jardin à Phnom Penh"
                />

                <div className="overlay"></div>
                <div className="carousel-caption d-md-block">
                  <h1>Conception de jardin</h1>
                  <h6>Conception d'un jardin à Phnom Penh.</h6>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section id="aPropos" className="mt-3">
        <div className={styles.container} data-aos="fade-up">
          <div className={styles.welcomText}>
            <h1 className={styles.welcom} data-aos="zoom-in">
              Bienvenue
            </h1>
            <h2 className={styles.subtitle}>
              Rencontrez Bopha,<br/> Désigner Floral
            </h2>

            <figure className="text-center mb-5">
              <blockquote className="blockquote">
                <p>
                  “Passionnée par les fleurs et riche d'une expérience depuis
                  plus de trente ans dans l'Art Floral, j'aime créer des
                  compositions uniques et sur mesure pour chaque client. Que ce
                  soit pour un mariage, un baptême, une soirée de gala ou tout
                  autre événement, je met ma créativité et mon savoir-faire à
                  votre disposition pour rendre votre jour spécial encore plus
                  beau.”
                </p>
              </blockquote>
              <figcaption className="blockquote-footer mt-3">Bopha</figcaption>
            </figure>
          </div>
          <div className={styles.welcomImg}>
            <Image
              src={bopha}
              alt="Bopha, designer floral"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      <section id="servicesHome" className="mt-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2 data-aos="fade-left">Services</h2>
            <Link target="_blank" href="/services">
              <button
                type="button"
                className="button btn btn-dark"
                data-aos="fade-right"
              >
                Voir tout
                <Image src={arrow} alt="flèche" className="arrow" />
              </button>
            </Link>
          </div>
          <div className="services mt-5">
            {props.array.map((service, index) => (
              <Card key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`/data/services.json`);
  const array = data.services;
  return {
    props: {
      array,
    },
  };
}
