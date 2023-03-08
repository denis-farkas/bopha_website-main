import Link from "next/link";
import Image from "next/image";

export default function Card({service}) {
  return (

    <div className="services-card mb-5" data-aos="flip-right">
      <Link href={service.href}>        
          <Image
            className="card-img"
            src={service.picture.src}
            alt={service.picture.alt}
            width={service.picture.width}
            height={service.picture.height}

          />
        <div className="overlay"></div>
        <h4 className="card-title">{service.title}</h4>
      </Link>
    </div>
  );
}

