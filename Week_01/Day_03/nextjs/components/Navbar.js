import Link from "next/link";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/view">List View</Link>
        <Link href="/view">Grid View</Link>
      </div>
    </div>
  );
};
export default Navbar;
