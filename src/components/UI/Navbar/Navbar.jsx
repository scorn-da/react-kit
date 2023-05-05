import React from 'react';
import styles from 'src/components/UI/Navbar/Navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/about">О сайте</Link>
          </li>
          <li>
            <Link to="/posts">Посты</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;