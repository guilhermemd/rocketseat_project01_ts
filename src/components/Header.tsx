import styles from "./Header.module.css";

// import igniteLogo from "../assets/ignitelogo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      {/* <img src={igniteLogo} alt="logo ignite" /> */}
      <strong>Ignite Feed</strong>
    </header>
  );
}
