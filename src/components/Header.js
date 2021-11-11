import styles from "../../styles/Header.module.css";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className={styles.headerSection}>
      <div className={styles.content}>
        <Navbar />
        <Hero />
      </div>
    </header>
  );
}

export default Header;
