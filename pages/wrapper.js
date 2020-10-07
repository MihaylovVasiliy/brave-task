import styles from "../styles/Home.module.css";
import Link from "next/link";

export function Wrapper({children}) {
    return (
        <>
            <h1 className={styles.title}>
                Оплата услуг мобильной связи
            </h1>
            <main className={styles.main}>
                <Link href="./payment"><a> Перейти на страницу оплаты </a></Link>
                <Link href="./start"><a> Вернуться на начальную страницу </a></Link>
                {children}
            </main>
        </>
    )
}