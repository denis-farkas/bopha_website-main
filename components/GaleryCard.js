import React from "react";
import Image from "next/image";

export default function GaleryCard({ collection, setidImage }) {
  return (
    <>
      {/* Click on card to trigger modal */}
      <div
        onClick={(e) => {
          setidImage(collection.id - 1);
        }}
        className="services-card mb-5"
        data-aos="fade-up"
        data-bs-toggle="modal"
        data-bs-target="#modal"
      >
        <Image
          className="card-img"
          src={`/images/galery/${collection.image}`}
          alt={collection.description}
          width={collection.width}
          height={collection.height}
        />
        <div className="overlay">
          <h4 className="card-title">{collection.titre}</h4>
        </div>
      </div>
    </>
  );
}
