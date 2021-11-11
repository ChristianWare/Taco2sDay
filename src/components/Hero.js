import Link from "next/link";
import styles from "../../styles/Hero.module.css";
import Button from "./utils/Buttons";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1>LIVE MAS</h1>
        <p>
          Living Más is the hub for all things Taco Bell. We are a site built by
          fans for fellow fans. Living Más is the hub for all things Taco Bell.
          We are a site built by fans for fellow fans.
        </p>
        <div className={styles.btnContainer}>
          <Button type='tertiaryBtn' href='/' label='menu' />
          <Button type='secondaryBtn' href='/' label='Locations' />
          <Button type='primaryBtn' href='/' label='Order Now' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
