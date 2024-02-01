import styles from "./css/header.module.css";
import logoimg from "../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.containerLogo}>
          <img
            src={logoimg}
            alt="Speedcubing Nicaragua logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.containerList}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="/" className={styles.a}>
                Inicio
              </a>
            </li>
            <li className={styles.li}>
              <a href="/" className={styles.a}>
                Algoritmos
              </a>
            </li>
            <li className={styles.li}>
              <a href="/" className={styles.a}>
                Contacto
              </a>
            </li>
            <li className={styles.li}>
              <a href="/" className={styles.a}>
                Autores
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
