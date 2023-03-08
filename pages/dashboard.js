import { PrismaClient } from "@prisma/client";
import React from "react";
import { useRouter } from "next/router";

export default function Dashboard({ messages }) {
  const router = useRouter();

  async function deleteMessage(id) {
    await fetch(`/api/deleteMessage/${id}`, {
      method: "DELETE",
    });
    setTimeout(() => {
      router.push("/admin");
    }, 3000);
  }

  if (router.query.administred === "ok") {
    return (
      <section id="dashboard" className="mt-5 mb-5">
        <div className="container">
          <h2 className="mb-5">Liste des messages</h2>
          {messages.map((item, id) => (
            <ul className="list-group" key={id}>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Id: {item.id}
                <small className="text-muted">Date: {item.date}</small>
              </li>
              <li className="list-group-item">Nom: {item.name}</li>
              <li className="list-group-item">Email: {item.email}</li>
              <li className="list-group-item">Téléphone: {item.phone}</li>
              <li className="list-group-item">Objet: {item.select}</li>
              <li className="list-group-item">
                <p>Message: {item.message}</p>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => deleteMessage(item.id)}
                >
                  Effacer le messsage
                </button>
              </li>
            </ul>
          ))}
        </div>
      </section>
    );
  }
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const messages = await prisma.contact.findMany();
  return {
    props: {
      messages,
    },
  };
};
