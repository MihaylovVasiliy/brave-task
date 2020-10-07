import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { Wrapper } from "./wrapper";

export default function Home() {
    return (
        <Wrapper>
            <div className={styles.container}>
                <Head>
                    <title> test-task-brave { } </title>
                    <meta name="keywords" content="test, task, brave-developers" />
                    <meta name="description" content="demo mobile payment" />
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
            </div>
        </Wrapper>
    )
}
