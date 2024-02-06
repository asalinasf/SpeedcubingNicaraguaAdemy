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
              <a href="/blog" className={styles.a}>
                Blog
              </a>
            </li>
            <li className={styles.li}>
              <a href="/aprende" className={styles.a}>
                Aprende
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
