import React, { useContext } from 'react';
import styles from 'src/components/UI/Navbar/Navbar.module.css';
import { Link } from "react-router-dom";
import Button from "src/components/UI/Button/Button";
import { AuthContext } from "src/context";

const Navbar = () => {
  const {isAuthed, setIsAuthed} = useContext(AuthContext);

  return (
      <nav className={styles.nav}>
        {isAuthed && <Button onClick={() => setIsAuthed(false)}>Выйти</Button>}
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