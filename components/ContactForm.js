/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [select, setSelect] = useState("info");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const d = new Date();
    const date = d.toLocaleDateString();
    const data = {
      name,
      email,
      phone,
      select,
      message,
      date,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setChecked(false);
        setSelect("info");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        toast.success("Message envoyé");
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>N'hésitez pas à me laisser un message</legend>
        <div className="form-group">
          <label htmlFor="name" className="form-label mt-4">
            Nom
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="form-control"
            name="name"
            required="required"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label mt-4">
            Email
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
            name="email"
            required="required"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label mt-4">
            Numéro de téléphone
          </label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="tel"
            className="form-control"
            name="phone"
            required="required"
          />
        </div>

        <div className="form-group">
          <label htmlFor="select" className="form-label mt-4">
            Objet
          </label>
          <select
            value={select}
            onChange={(e) => {
              setSelect(e.target.value);
            }}
            className="form-select"
            name="select"
            required="required"
          >
            <option value="info">Demande d'informations</option>
            <option value="devis">Demande de devis</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label mt-4">
            Votre message
          </label>
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="form-control"
            name="message"
            rows="3"
            required="required"
          ></textarea>
        </div>

        <fieldset className="form-group mt-5">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={checked}
              onChange={(e) => {
                setChecked(e.target.value);
              }}
              required="required"
            />
            <label className="form-check-label" htmlFor="rgpdCheckbox">
              J'autorise ce site à conserver mes données personnelles transmises
              via ce formulaire. <br />
              <Link href="">Voir Notre politique de gestion de données</Link>
            </label>
          </div>
        </fieldset>
        <button type="submit" className="button btn btn-dark mt-5">
          Envoyer
        </button>
      </fieldset>
    </form>
  );
}
