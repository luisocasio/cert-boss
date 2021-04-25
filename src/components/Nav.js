import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li className={styles.home_button}>Home</li>
      </ul>
    </nav>
  );
};

export default Nav;
