import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="profile imagem"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/74270263?v=4" />
        <strong>Guilherme.md</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Edit your profile
        </a>
      </footer>
    </aside>
  );
}
