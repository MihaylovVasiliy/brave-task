import styles from "../../styles/Home.module.scss";
import {Wrapper} from "../../components/wrapper";
import { useRouter } from 'next/router'

export default function sendRequest({props}) {
    const router = useRouter()
    if (props.result == 'success') {
        setTimeout(() => router.push('/'), 2000)
    }
    else {
        setTimeout(() => router.back(), 2000)}
    return (
        <Wrapper>
            <span className={styles.code}> {
                props.message
            } </span>
            {
                console.log(JSON.stringify(router.query))}
        </Wrapper>
    )
}


sendRequest.getInitialProps = async (ctx) => {
    const res = await fetch(`${process.env.API_URL}/api/request`)
    const json = await res.json()
    console.log(json);
    return {
        props: json
    }
}