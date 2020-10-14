import styles from "../styles/Home.module.scss";

export function Wrapper({children}) {
    return (
        <>
            <h1 className={styles.title}>
                Оплата услуг мобильной связи
            </h1>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}