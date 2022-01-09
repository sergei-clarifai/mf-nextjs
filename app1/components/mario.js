import Image from "next/image";
import styles from "../styles/Mario.module.css";

const Mario = () => {
  return (
    <main className={styles.main}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
        alt="Mario"
        width={240}
        height={413}
      />
      <h1 className={styles.title}>I'm Mario, a microfrontend...</h1>
      <span>
        I'm hosted at
        <a target="_blank" href="https://mf-app2-blond.vercel.app/">
          https://mf-app2-blond.vercel.app
        </a>
      </span>
    </main>
  );
};

export default Mario;
