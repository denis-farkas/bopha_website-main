import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Admin() {
  const [admin, setAdmin] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(admin);
    if (admin === process.env.PASSWORD) {
      console.log("ok");
      setTimeout(() => {
        router.push(
          {
            pathname: "/dashboard",
            query: { administred: "ok" },
          },
          "/dashboard"
        );
      }, 1000);
    }
  };

  return (
    <section id="admin" className="mt-5 mb-5">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="mb-5">Connexion Administrateur</legend>
            <div className="form-group">
              <label htmlFor="password" className="form-label mt-4">
                Mot de passe
              </label>
              <input
                onChange={(e) => {
                  setAdmin(e.target.value);
                }}
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
            <button type="submit" className="button btn btn-dark mt-5">
              Se Connecter
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
