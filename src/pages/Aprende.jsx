import CuboRubik from "../components/CuboRubik";
import NotacionCuboRubik from "../components/NotacionCuboRubik";
import CapasCubos from "../components/CapasCubos";
import PiezasCubo from "../components/PiezaCubos";
import Tutorial from "../components/Tutorial";

import styles from "./css/aprende.module.css"

const Aprende = () => {
  return (
    <main>
      <h1 className={styles.h1}>Aprende</h1>
      <CuboRubik />
      <NotacionCuboRubik />
      <PiezasCubo />
      <CapasCubos />
      <Tutorial />
    </main>
  );
};

export default Aprende;
