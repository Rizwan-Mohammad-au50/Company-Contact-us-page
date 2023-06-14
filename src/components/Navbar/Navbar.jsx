import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    // <div className={styles.navbar_div}>
      <nav className={styles.navbar}>
        <div className={styles.RMlogo_div}>
            <img className={styles.RMlogo} src="images/RMlogo.png" alt="Logo" />
        </div>

        <div>
            <ul className={styles.navItems}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>About</li>
                <li className={styles.navItem}>Contact</li>
            </ul>
        </div>
    </nav>
    // </div>
  )
}

export default Navbar