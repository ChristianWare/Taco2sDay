import styles from "../../styles/Hero.module.css";
import Button from "../components/utils/Buttons";

function Hero() {
  return (
    <div className={styles.heroContainer} id='home'>
      <div className={styles.contentContainer}>
        <h2>Ready Fast Food And Restaurant</h2>
        <h1>Enjoy our special food Great Quality Every Day</h1>
        <div className={styles.btnContainer}>
          <Button type='primaryBtn' label='Meet Our Chef' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
