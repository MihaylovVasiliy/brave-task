import styles from "../../styles/Home.module.scss";
import {Wrapper} from "../../components/wrapper";
import { useRouter } from 'next/router'

export default function sendRequest({props}) {
    const router = useRouter()
    if (props.result == 'success') {
        router.push('/')
    }
    else {
        router.back()}
    return (
        <Wrapper>
            <span className={styles.code}> {
                props.message
            } </span>
        </Wrapper>
    )
}


sendRequest.getInitialProps = async (ctx) => {
    const res = await fetch(`${process.env.API_URL2}/api/request`)
    const json = await res.json()
    console.log(json);
    return {
        props: json
    }
}