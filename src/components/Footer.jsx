/* eslint-disable no-undef */
import styles from "./css/footer.module.css";
import { CiInstagram, CiFacebook, CiYoutube } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4 className={styles.h4}>Acerca de</h4>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <a href="/nosotros" className={styles.a}>
                  Nosotros
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.h4}>Go shopping</h4>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <a href="" className={styles.a}>
                  Scubeshop
                </a>
              </li>
              <li className={styles.li}>
                <a href="" className={styles.a}>
                  Cubos Nicaragua
                </a>
              </li>
              <li className={styles.li}>
                <a href="" className={styles.a}>
                  CAS_Estelí
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.h4}>Siguenos</h4>
            <ul className={styles.ul}>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.instagram.com/speedcubingnic/"
                  target="_blank"
                  className={styles.a}
                >
                  <CiInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@speedcubingnic?_t=8jj3kBNdRNm&_r=1"
                  target="_blank"
                  className={styles.a}
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61556253633782&mibextid=LQQJ4d"
                  target="_blank"
                  className={styles.a}
                >
                  <CiFacebook />
                </a>
                <a
                  href="https://www.youtube.com/@speedcubingnic"
                  target="_blank"
                  className={styles.a}
                >
                  <CiYoutube />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
