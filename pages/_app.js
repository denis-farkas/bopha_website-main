import Container from "../components/Container";
import { Montserrat } from "@next/font/google";
import "../styles/normalize.css";
import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const montserrat = Montserrat({
  weight: ["200", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out",
    });
    require("../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
  });
  return (
    <Container className={montserrat.className}>
      <Component {...pageProps} />
    </Container>
  );
}
